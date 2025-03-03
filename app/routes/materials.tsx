import { useEffect, useState } from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { useStudyStore } from '~/utils/store';
import type { Material } from '~/utils/store';
import { availableSemesters } from '~/data/courses';
import type { MetaFunction } from "@remix-run/node";

export async function loader() {
  return json({ semesters: availableSemesters });
}

export const meta: MetaFunction = () => {
  return [
    { title: "BetterPes | Material" },
    { name: "description", content: "Organize your course materials and create custom reading lists" },
    { name: "color-scheme", content: "light dark" },
  ];
};

export default function Materials() {
  const { semesters: initialSemesters } = useLoaderData<typeof loader>();
  const { readingList, semesters, setSemesters, addToReadingList, removeFromReadingList } = useStudyStore();
  const [isClient, setIsClient] = useState(false);
  const [selectedSemesterId, setSelectedSemesterId] = useState<string | null>(null);
  const [selectedCourseId, setSelectedCourseId] = useState<string | null>(null);
  const [isReadingListOpen, setIsReadingListOpen] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    if (!semesters || semesters.length === 0) {
      setSemesters(initialSemesters);
    }
  }, [setSemesters, semesters, initialSemesters]);

  const displaySemesters = isClient ? semesters : initialSemesters;
  const selectedSemester = displaySemesters.find(sem => sem.id === selectedSemesterId);
  const selectedCourse = selectedSemester?.courses.find(course => course.id === selectedCourseId);

  // Reset course selection when semester changes
  useEffect(() => {
    setSelectedCourseId(null);
  }, [selectedSemesterId]);

  // Add this helper function inside the component
  const isInReadingList = (materialId: string) => {
    return readingList.some(item => item.id === materialId);
  };

  const handleMaterialToggle = (material: Material, e: React.MouseEvent) => {
    e.preventDefault();
    if (isInReadingList(material.id)) {
      removeFromReadingList(material.id);
    } else {
      addToReadingList(material);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
        {/* Reading List Box */}
        <div className="mb-6 sm:mb-8 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow">
          <div 
            onClick={() => setIsReadingListOpen(!isReadingListOpen)}
            className="flex items-center justify-between cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                Reading List
              </h2>
              <span className="px-2 py-0.5 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">
                {readingList.length}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsReadingListOpen(!isReadingListOpen);
              }}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label={isReadingListOpen ? "Collapse reading list" : "Expand reading list"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 transform transition-transform duration-150 ease-in-out ${isReadingListOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          
          <div className={`grid transition-[grid-template-rows] duration-150 ease-in-out ${isReadingListOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
            <div className="overflow-hidden">
              <div className={`mt-4 space-y-2 ${isReadingListOpen ? 'opacity-100' : 'opacity-0'} transition-opacity duration-150`}>
                {readingList.map((material) => (
                  <div key={material.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-gray-50 dark:bg-gray-700 p-2 sm:p-3 rounded">
                    <span className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{material.title}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeFromReadingList(material.id);
                      }}
                      className="text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 text-sm sm:text-base"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                {readingList.length > 0 && (
                  <Link
                    to="/read"
                    className="mt-4 inline-flex items-center justify-center w-full sm:w-auto px-3 py-1.5 text-sm font-medium rounded bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-colors"
                  >
                    Start Reading
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Semester Grid */}
        <div className="mb-6 sm:mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Select a Semester</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {displaySemesters.map((semester) => (
              <button
                key={semester.id}
                onClick={() => setSelectedSemesterId(semester.id === selectedSemesterId ? null : semester.id)}
                className={`p-3 rounded-lg text-left transition-all duration-150 ${
                  semester.id === selectedSemesterId
                    ? 'bg-indigo-100 dark:bg-indigo-900 ring-2 ring-indigo-500 dark:ring-indigo-400'
                    : 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {semester.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  {semester.courses.length} {semester.courses.length === 1 ? 'course' : 'courses'} available
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Course Selection */}
        <div className={`grid transition-[grid-template-rows] duration-150 ease-in-out ${selectedSemester ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            {selectedSemester && (
              <div className="mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-2">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    Courses for {selectedSemester.name}
                  </h2>
                  <button
                    onClick={() => setSelectedSemesterId(null)}
                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    Change Semester
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-0.5">
                  {selectedSemester.courses.map((course, index) => (
                    <button
                      key={course.id}
                      onClick={() => setSelectedCourseId(
                        course.id === selectedCourseId ? null : course.id
                      )}
                      className={`p-3 rounded-lg text-left transition-all duration-150 overflow-hidden
                        ${course.id === selectedCourseId
                          ? 'bg-white dark:bg-gray-800 shadow-md hover:shadow-lg ring-2 ring-indigo-500 dark:ring-indigo-400'
                          : 'bg-white dark:bg-gray-800 shadow-sm hover:shadow hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                    >
                      <h3 className="text-base font-medium text-gray-900 dark:text-white">
                        {course.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        {course.units.length} units
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Selected Course Content */}
        <div className={`grid transition-[grid-template-rows] duration-150 ease-in-out ${selectedCourse ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
          <div className="overflow-hidden">
            {selectedCourse && (
              <div className="bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">
                  {selectedCourse.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {selectedSemester?.name}
                </p>
                
                <div className="space-y-4">
                  {selectedCourse.units.map((unit) => (
                    <div key={unit.id} className="border-t border-gray-200 dark:border-gray-700 pt-3">
                      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                        {unit.name}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {unit.materials.map((material) => (
                          <div key={material.id} 
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 
                              bg-gray-50 dark:bg-gray-700 p-2 sm:p-3 rounded"
                          >
                            <div className="flex-1">
                              <span className="block sm:inline font-medium text-gray-800 dark:text-gray-200">
                                {material.title}
                              </span>
                              <span className="block sm:inline sm:ml-2 text-sm text-gray-500 dark:text-gray-400">
                                ({material.type})
                              </span>
                            </div>
                            <button
                              onClick={(e) => handleMaterialToggle(material, e)}
                              className={`w-full sm:w-auto px-2 py-1 text-sm font-medium rounded transition-colors duration-150
                                ${isInReadingList(material.id)
                                  ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800'
                                  : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-800'
                                }`}
                            >
                              {isInReadingList(material.id) ? 'Remove from List' : 'Add to List'}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}