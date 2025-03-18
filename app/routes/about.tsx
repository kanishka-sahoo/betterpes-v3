import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BetterPes | About" },
    { name: "description", content: "Organize your course materials and create custom reading lists" },
    { name: "color-scheme", content: "light dark" },
  ];
};

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Slopfest</h1>
        <div className="prose dark:prose-invert">
          <p className="text-gray-600 dark:text-gray-300">
            BetterPes is a study material management application designed to help students organize and access their learning resources effectively.
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Creator</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Made with ❤️ by Kanishka Sahoo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}