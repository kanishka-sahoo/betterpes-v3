import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  Link
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import { ThemeProvider, useTheme } from "~/utils/theme";
import { PWARegister } from "~/utils/pwa-utils";
import "./tailwind.css";
import { useEffect, useRef, useState } from "react";

export const links: LinksFunction = () => [
  {
    rel: "manifest",
    href: "/manifest.webmanifest",
  },
];

function ThemeButton() {
  const { theme, preference, setThemePreference } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
        aria-label="Toggle theme"
      >
        {preference === 'system' ? '🖥️' : preference === 'dark' ? '🌙' : '🌞'}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              setThemePreference('light');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              preference === 'light' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🌞 Light
          </button>
          <button
            onClick={() => {
              setThemePreference('dark');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              preference === 'dark' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🌙 Dark
          </button>
          <button
            onClick={() => {
              setThemePreference('system');
              setIsOpen(false);
            }}
            className={`w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 ${
              preference === 'system' ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            🖥️ System
          </button>
        </div>
      )}
    </div>
  );
}

function AppContent() {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Update theme-color meta tag when theme changes
    const themeColor = theme === 'dark' ? '#1f2937' : '#4f46e5';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between items-center">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
                  BetterPes
                </Link>
              </div>
              <div className="ml-6 flex items-center space-x-4">
                <Link
                  to="/materials"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md"
                >
                  Materials
                </Link>
                <Link
                  to="/read"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md"
                >
                  Read
                </Link>
                <Link
                  to="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md"
                >
                  About
                </Link>
              </div>
            </div>
            <ThemeButton />
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
        <meta name="color-scheme" content="light dark" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="description" content="A study material management application" />
        {/* Blocking script to prevent flash and handle initial theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  let preference;
                  try {
                    preference = localStorage.getItem('theme-preference');
                    if (preference === 'dark' || preference === 'light') {
                      return preference;
                    }
                    if (preference === 'system' || !preference) {
                      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                    }
                  } catch (e) {
                    return 'light';
                  }
                  return 'light';
                }

                const theme = getThemePreference();
                const root = document.documentElement;
                
                if (theme === 'dark') {
                  root.classList.add('dark');
                }
                
                root.style.setProperty('color-scheme', theme);
              })();
            `,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        {children}
        <ScrollRestoration />
        <Scripts />
        <PWARegister />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
