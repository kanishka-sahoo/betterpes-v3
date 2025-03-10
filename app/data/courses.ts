type MaterialType = 'slides' | 'notes';

interface Material {
  type: MaterialType;
  title: string;
  url: string;
}

interface Unit {
  name: string;
  materials: Material[];
}

interface Course {
  code: string;
  name: string;
  units: Unit[];
}

interface Semester {
  name: string;
  courses: Course[];
}

export const availableSemesters: Semester[] = [
  {
    name: "Semester 5",
    courses: [
      {
        code: "CS351A",
        name: "Database Management Systems I",
        units: [
          {
            name: "Introduction to Database Management",
            materials: [
              {
                type: "slides",
                title: "Introduction to DBMS",
                url: "https://drive.google.com/file/d/1QAQ-hr3BCGGW2Pd5GupyYJcQDhWuTzel/view"
              },
              {
                type: "notes",
                title: "Database Fundamentals",
                url: "https://drive.google.com/file/d/abcdef1234567890/view?usp=sharing"
              }
            ]
          },
          {
            name: "Relational Model and Database Design",
            materials: [
              {
                type: "slides",
                title: "Relational Model Overview",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Database Design Principles",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          }
        ]
      },
      {
        code: "CS352A",
        name: "Database Management Systems II",
        units: [
          {
            name: "Advanced Database Concepts",
            materials: [
              {
                type: "slides",
                title: "Transaction Management",
                url: "https://drive.google.com/file/d/transactions/view"
              },
              {
                type: "notes",
                title: "Concurrency Control",
                url: "https://drive.google.com/file/d/concurrency/view"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Semester 6",
    courses: [
      {
        code: "CS201",
        name: "Data Structures and Algorithms",
        units: [
          {
            name: "Advanced Data Structures",
            materials: [
              {
                type: "slides",
                title: "Trees and Graphs",
                url: "https://drive.google.com/file/d/trees123/view?usp=sharing"
              }
            ]
          }
        ]
      },
      {
        code: "PH101",
        name: "Physics I",
        units: [
          {
            name: "Mechanics",
            materials: [
              {
                type: "notes",
                title: "Newton's Laws",
                url: "https://drive.google.com/file/d/physics123/view?usp=sharing"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Semester 7",
    courses: [
      {
        code: "CS301",
        name: "Machine Learning",
        units: [
          {
            name: "Foundations of ML",
            materials: [
              {
                type: "slides",
                title: "Introduction to Machine Learning",
                url: "https://drive.google.com/file/d/ml-intro123/view?usp=sharing"
              },
              {
                type: "notes",
                title: "ML Algorithms Overview",
                url: "https://drive.google.com/file/d/ml-algo123/view?usp=sharing"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Semester 8",
    courses: [
      {
        code: "CS401",
        name: "Artificial Intelligence",
        units: [
          {
            name: "AI Basics",
            materials: [
              {
                type: "slides",
                title: "Introduction to AI",
                url: "https://drive.google.com/file/d/ai-intro123/view?usp=sharing"
              }
            ]
          }
        ]
      },
      {
        code: "CS402",
        name: "Blockchain Technology",
        units: [
          {
            name: "Blockchain Fundamentals",
            materials: [
              {
                type: "notes",
                title: "Introduction to Blockchain",
                url: "https://drive.google.com/file/d/blockchain123/view?usp=sharing"
              }
            ]
          }
        ]
      }
    ]
  }
];