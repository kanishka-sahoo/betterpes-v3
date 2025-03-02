type MaterialType = 'slides' | 'notes';

interface Material {
  id: string;
  type: MaterialType;
  title: string;
  url: string;
  courseId: string;
  unitId: string;
}

interface Unit {
  id: string;
  name: string;
  materials: Material[];
}

interface Course {
  id: string;
  name: string;
  units: Unit[];
}

interface Semester {
  id: string;
  name: string;
  courses: Course[];
}

export const availableSemesters: Semester[] = [
  {
    id: "sem5",
    name: "Semester 5",
    courses: [
      {
        id: "cs101",
        name: "Introduction to Computer Science",
        units: [
          {
            id: "u1",
            name: "Programming Basics",
            materials: [
              {
                id: "m1",
                type: "slides",
                title: "Introduction to Programming",
                url: "https://drive.google.com/file/d/1QAQ-hr3BCGGW2Pd5GupyYJcQDhWuTzel/view",
                courseId: "cs101",
                unitId: "u1"
              },
              {
                id: "m2",
                type: "notes",
                title: "Programming Fundamentals",
                url: "https://drive.google.com/file/d/abcdef1234567890/view?usp=sharing",
                courseId: "cs101",
                unitId: "u1"
              }
            ]
          }
        ]
      },
      {
        id: "math201",
        name: "Linear Algebra",
        units: [
          {
            id: "u1",
            name: "Matrices",
            materials: [
              {
                id: "m5",
                type: "slides",
                title: "Introduction to Matrices",
                url: "https://drive.google.com/file/d/matrix123/view?usp=sharing",
                courseId: "math201",
                unitId: "u1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sem6",
    name: "Semester 6",
    courses: [
      {
        id: "cs201",
        name: "Data Structures",
        units: [
          {
            id: "u1",
            name: "Advanced Data Structures",
            materials: [
              {
                id: "m6",
                type: "slides",
                title: "Trees and Graphs",
                url: "https://drive.google.com/file/d/trees123/view?usp=sharing",
                courseId: "cs201",
                unitId: "u1"
              }
            ]
          }
        ]
      },
      {
        id: "phys101",
        name: "Physics I",
        units: [
          {
            id: "u1",
            name: "Mechanics",
            materials: [
              {
                id: "m7",
                type: "notes",
                title: "Newton's Laws",
                url: "https://drive.google.com/file/d/physics123/view?usp=sharing",
                courseId: "phys101",
                unitId: "u1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sem7",
    name: "Semester 7",
    courses: [
      {
        id: "cs301",
        name: "Machine Learning",
        units: [
          {
            id: "u1",
            name: "Foundations of ML",
            materials: [
              {
                id: "m8",
                type: "slides",
                title: "Introduction to Machine Learning",
                url: "https://drive.google.com/file/d/ml-intro123/view?usp=sharing",
                courseId: "cs301",
                unitId: "u1"
              },
              {
                id: "m9",
                type: "notes",
                title: "ML Algorithms Overview",
                url: "https://drive.google.com/file/d/ml-algo123/view?usp=sharing",
                courseId: "cs301",
                unitId: "u1"
              }
            ]
          }
        ]
      },
      {
        id: "cs302",
        name: "Cloud Computing",
        units: [
          {
            id: "u1",
            name: "Cloud Fundamentals",
            materials: [
              {
                id: "m10",
                type: "slides",
                title: "Introduction to Cloud Services",
                url: "https://drive.google.com/file/d/cloud-intro123/view?usp=sharing",
                courseId: "cs302",
                unitId: "u1"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "sem8",
    name: "Semester 8",
    courses: [
      {
        id: "cs401",
        name: "Artificial Intelligence",
        units: [
          {
            id: "u1",
            name: "AI Basics",
            materials: [
              {
                id: "m11",
                type: "slides",
                title: "Introduction to AI",
                url: "https://drive.google.com/file/d/ai-intro123/view?usp=sharing",
                courseId: "cs401",
                unitId: "u1"
              }
            ]
          }
        ]
      },
      {
        id: "cs402",
        name: "Blockchain Technology",
        units: [
          {
            id: "u1",
            name: "Blockchain Fundamentals",
            materials: [
              {
                id: "m12",
                type: "notes",
                title: "Introduction to Blockchain",
                url: "https://drive.google.com/file/d/blockchain123/view?usp=sharing",
                courseId: "cs402",
                unitId: "u1"
              }
            ]
          }
        ]
      }
    ]
  }
];