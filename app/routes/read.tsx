import { useState, useEffect } from 'react';
import { useStudyStore } from '~/utils/store';
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "BetterPes | Read" },
    { name: "description", content: "Organize your course materials and create custom reading lists" },
    { name: "color-scheme", content: "light dark" },
  ];
};

export default function Read() {
  const { readingList, removeFromReadingList } = useStudyStore();
  const [selectedUrl, setSelectedUrl] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setIsClient(true);
    if (readingList.length > 0) {
      setSelectedUrl(readingList[0].url);
    }
  }, [readingList]);

  if (!isClient) {
    return (
      <div className="h-[calc(100vh-4rem)] flex items-center justify-center text-gray-600 dark:text-gray-300">
        Loading...
      </div>
    );
  }

  function getGoogleDriveViewerUrl(url: string) {
    const fileIdMatch = url.match(/\/d\/(.*?)(\/|$)/);
    if (!fileIdMatch) return url;
    
    const fileId = fileIdMatch[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  }

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col sm:flex-row">
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed bottom-4 right-4 z-50 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
        aria-label="Toggle sidebar"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed sm:fixed z-40
          w-64 h-[calc(100vh-4rem)] transition-transform duration-300 ease-in-out
          bg-gray-100 dark:bg-gray-900 
          border-r border-gray-200 dark:border-gray-700
        `}
      >
        <div className="p-4 h-full overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Reading List ({readingList.length})
            </h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="space-y-1">
            {readingList.map((material) => (
              <div
                key={material.url}
                className={`px-3 py-2 rounded cursor-pointer transition-colors flex items-center justify-between ${
                  material.url === selectedUrl 
                    ? 'bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100' 
                    : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'
                }`}
                onClick={() => {
                  setSelectedUrl(material.url);
                }}
              >
                <div 
                  className="font-medium text-sm truncate max-w-[85%]" 
                  title={material.title}
                >
                  {material.title}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromReadingList(material.url);
                    if (readingList.length === 1) {
                      setSelectedUrl('');
                    } else if (material.url === selectedUrl) {
                      const nextMaterial = readingList.find(m => m.url !== material.url);
                      if (nextMaterial) {
                        setSelectedUrl(nextMaterial.url);
                      }
                    }
                  }}
                  className="text-gray-400 hover:text-red-500 dark:text-gray-500 dark:hover:text-red-400 transition-colors"
                  title="Remove from reading list"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content area with PDF viewer */}
      <div className={`flex-1 bg-gray-50 dark:bg-gray-900 overflow-hidden ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-[margin] duration-300`}>
        {selectedUrl ? (
          <iframe
            src={getGoogleDriveViewerUrl(selectedUrl)}
            className="w-full h-full border-none overflow-auto"
            title="PDF Viewer"
            allowFullScreen
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400 p-4 text-center">
            Select a document from your reading list to begin
          </div>
        )}
      </div>
    </div>
  );
}