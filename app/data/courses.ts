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
        name: "Database Management Systems",
        units: [
          {
            name: "Unit 1: Introduction to Database Management",
            materials: [
              {
                type: "slides",
                title: "Unit 1 Slides",
                url: "https://drive.google.com/file/d/1QAQ-hr3BCGGW2Pd5GupyYJcQDhWuTzel/view"
              },
              {
                type: "notes",
                title: "Unit 1 Notes",
                url: "https://drive.google.com/file/d/abcdef1234567890/view?usp=sharing"
              }
            ]
          },
          {
            name: "Unit 2: Relational Model and Database Design",
            materials: [
              {
                type: "slides",
                title: "Unit 2 Slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 2 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          },
          {
            name: "Unit 3: Advanced Design Concepts and Implementation",
            materials: [
              {
                type: "slides",
                title: "Unit 3 Slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 3 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          },
          {
            name: "Unit 4: Advanced Databases",
            materials: [
              {
                type: "slides",
                title: "Unit 4 slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 4 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          }
        ]
      },
      {
        code: "CS352A",
        name: "Machine Learning",
        units: [
          {
            name: "Unit 1: Introduction to Database Management",
            materials: [
              {
                type: "slides",
                title: "Unit 1 Slides",
                url: "https://drive.google.com/file/d/1QAQ-hr3BCGGW2Pd5GupyYJcQDhWuTzel/view"
              },
              {
                type: "notes",
                title: "Unit 1 Notes",
                url: "https://drive.google.com/file/d/abcdef1234567890/view?usp=sharing"
              }
            ]
          },
          {
            name: "Unit 2: Relational Model and Database Design",
            materials: [
              {
                type: "slides",
                title: "Unit 2 Slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 2 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          },
          {
            name: "Unit 3: Advanced Design Concepts and Implementation",
            materials: [
              {
                type: "slides",
                title: "Unit 3 Slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 3 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          },
          {
            name: "Unit 4: Advanced Databases",
            materials: [
              {
                type: "slides",
                title: "Unit 4 slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 4 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          }
        ]
      },
      {
        code: "CS341A",
        name: "Software Engineering",
        units: [
          {
            name: "Unit 1: Introduction to Database Management",
            materials: [
              {
                type: "slides",
                title: "Unit 1 Slides",
                url: "https://drive.google.com/file/d/1QAQ-hr3BCGGW2Pd5GupyYJcQDhWuTzel/view"
              },
              {
                type: "notes",
                title: "Unit 1 Notes",
                url: "https://drive.google.com/file/d/abcdef1234567890/view?usp=sharing"
              }
            ]
          },
          {
            name: "Unit 2: Relational Model and Database Design",
            materials: [
              {
                type: "slides",
                title: "Unit 2 Slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 2 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          },
          {
            name: "Unit 3: Advanced Design Concepts and Implementation",
            materials: [
              {
                type: "slides",
                title: "Unit 3 Slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 3 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          },
          {
            name: "Unit 4: Advanced Databases",
            materials: [
              {
                type: "slides",
                title: "Unit 4 slides",
                url: "https://drive.google.com/file/d/relational-model/view"
              },
              {
                type: "notes",
                title: "Unit 4 Notes",
                url: "https://drive.google.com/file/d/db-design/view"
              }
            ]
          }
        ]
      },
    ]
  },
  {
    name: "Semester 6",
    courses: [
      {
        code: "CS351B",
        name: "Cloud Computing",
        units: [
          {
            name: "Unit 1: Cloud Programming Models",
            materials: [
              {
                type: "slides",
                title: "Unit 1 Slides",
                url: "https://drive.google.com/file/d/1wt7LjWL05fH54gUGZXk3z1W_bcLXCr2D/view?usp=sharing"
              }
            ]
          },
          {
            name: "Unit 2: Virtualization",
            materials: [
              {
                type: "slides",
                title: "Unit 2 Slides",
                url: "https://drive.google.com/file/d/103SGEy4HNm3ZoJGiadzuKZIyrKhGLZ-k/view?usp=sharing"
              },
            ]
          },
          {
            name: "Unit 3: Distributed Storage",
            materials: [
              {
                type: "slides",
                title: "Unit 3 Slides",
                url: "https://drive.google.com/file/d/1ZZ6pF9v69YktpxWwIuk0m-op94HT4iLX/view?usp=sharing"
              },
            ]
          },
          {
            name: "Unit 4: Cloud Controller, Performance, Scalability and Security",
            materials: [
              {
                type: "slides",
                title: "Unit 4 Slides",
                url: "https://drive.google.com/file/d/180K0ad_x5uT47McQ7GOIhxk9Fj0H2X5i/view?usp=sharing"
              },
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