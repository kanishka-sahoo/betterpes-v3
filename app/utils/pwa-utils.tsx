import { useEffect, useState } from 'react';
import { registerSW } from 'virtual:pwa-register';

export function PWARegister() {
  const [needRefresh, setNeedRefresh] = useState(false);

  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        setNeedRefresh(true);
      },
      onOfflineReady() {
        console.log('App ready to work offline');
      },
    });

    // We still listen to the event to prevent default behavior
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', () => {});
    };
  }, []);

  return (
    <>
      {needRefresh && (
        <div className="fixed bottom-4 right-4 z-50 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 mb-2">New content available!</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            Reload
          </button>
        </div>
      )}
    </>
  );
}