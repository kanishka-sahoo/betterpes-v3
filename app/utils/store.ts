import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Material = {
  id: string;
  type: 'slides' | 'notes';
  title: string;
  url: string;
  courseId: string;
  unitId: string;
};

type Course = {
  id: string;
  name: string;
  units: {
    id: string;
    name: string;
    materials: Material[];
  }[];
};

type Semester = {
  id: string;
  name: string;
  courses: Course[];
};

interface StudyStore {
  readingList: Material[];
  semesters: Semester[];
  addToReadingList: (material: Material) => void;
  removeFromReadingList: (materialId: string) => void;
  setSemesters: (semesters: Semester[]) => void;
}

export const useStudyStore = create<StudyStore>()(
  persist(
    (set) => ({
      readingList: [],
      semesters: [],
      addToReadingList: (material) =>
        set((state) => {
          if (!state.readingList.some(m => m.id === material.id)) {
            return { readingList: [...state.readingList, material] };
          }
          return state;
        }),
      removeFromReadingList: (materialId) =>
        set((state) => ({
          readingList: state.readingList.filter((m) => m.id !== materialId),
        })),
      setSemesters: (semesters) => set({ semesters }),
    }),
    {
      name: 'study-store',
      storage: createJSONStorage(() => {
        return {
          getItem: (name) => {
            if (typeof window === 'undefined') return null;
            return JSON.parse(window.localStorage.getItem(name) || 'null');
          },
          setItem: (name, value) => {
            if (typeof window !== 'undefined') {
              window.localStorage.setItem(name, JSON.stringify(value));
            }
          },
          removeItem: (name) => {
            if (typeof window !== 'undefined') {
              window.localStorage.removeItem(name);
            }
          },
        };
      }),
    }
  )
);