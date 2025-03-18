import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type Material = {
  type: 'slides' | 'notes';
  title: string;
  url: string;
};

type Course = {
  code: string;
  name: string;
  units: {
    name: string;
    materials: Material[];
  }[];
};

type Semester = {
  name: string;
  courses: Course[];
};

interface StudyStore {
  readingList: Material[];
  semesters: Semester[];
  addToReadingList: (material: Material) => void;
  removeFromReadingList: (materialUrl: string) => void;
  setSemesters: (semesters: Semester[]) => void;
}

export const useStudyStore = create<StudyStore>()(
  persist(
    (set) => ({
      readingList: [],
      semesters: [],
      addToReadingList: (material) =>
        set((state) => {
          if (!state.readingList.some(m => m.url === material.url)) {
            return { readingList: [...state.readingList, material] };
          }
          return state;
        }),
      removeFromReadingList: (materialUrl) =>
        set((state) => ({
          readingList: state.readingList.filter((m) => m.url !== materialUrl),
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