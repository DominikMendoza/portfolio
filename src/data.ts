export const personalData = {
  name: "Dominik Mendoza",
  tagline: "Software Engineer focused on building innovative digital experiences.",
  contact: {
    email: "dommr003@gmail.com",
    github: "https://github.com/DominikMendoza",
    linkedin: "https://linkedin.com/in/dominik-mendoza",
  },
  education: {
    university: "Peruvian University of Applied Sciences",
    degree: "Bachelor's in Software Engineering",
    gpa: "18.32/20",
    graduation: "July 2025",
    thesis: "DeepKer System for Cardiovascular Alerts - Backend developed in Go with Gin Framework",
    relevantCourses: ["Competitive Programming", "Data Structures", "Algorithms", "Software Engineering"],
  },
  experience: [
    {
      company: "Ensolvers",
      location: "California, United States (Remote)",
      roles: [
        {
          title: "Team Lead & Software Engineer II",
          date: "September 2025 – Present",
          description: [
            "Evaluate client feature requests and coordinate team tasks and priorities.",
            "Lead a high-performing team, providing mentorship and technical guidance.",
            "Design and propose scalable architectural solutions for new and existing features.",
            "Tech Stack: Java 21, Spring Boot, Microservices, REST API, Apache Kafka, AWS.",
          ]
        },
        {
          title: "Junior Software Engineer",
          date: "March 2024 – September 2025",
          description: [
            "Developed complex features, including full-stack integrations with external platforms (Shopify, Mailchimp).",
            "Resolved critical support tickets, improving system stability.",
            "Implemented AI features, including fine-tuning a language model for specific use cases.",
            "Proposed and implemented architectural improvements, utilizing technologies like OpenSearch.",
          ]
        },
        {
          title: "Trainee Software Engineer",
          date: "December 2023 – March 2024",
          description: [
            "Contributed to the codebase by submitting pull requests for bug fixes and minor features.",
            "Gained proficiency in the team's tech stack, including Java, Spring Boot, and Hibernate.",
            "Assisted senior developers in various development tasks and learned team workflows.",
          ]
        },
      ],
    },
    {
      company: "Peruvian University of Applied Sciences",
      location: "Lima, Peru",
      roles: [{
        title: "Teaching Methods Advisor",
        date: "March 2023 – Present",
        description: [
          "Provided individual tutoring and group sessions on structured programming, OOP, and data structures in C++.",
          "Received outstanding evaluations from professors and students for instructional excellence.",
        ],
      }],
      highlights: ["Conducted 'Introduction to Linux' workshops for IEEE for 2 consecutive years"],
    },
  ],
  projects: [
    {
      name: "DeepKer - Cardiovascular Alert System",
      role: "Backend Developer and Co-founder",
      date: "2024 – 2025",
      image: "deepker.webp",
      github: "https://github.com/DeepKer-Org/deepker-backend",
      description: [
        "Developed complete backend using Go with Gin Framework for cardiovascular medical alert system.",
        "Implemented user management system and real-time notification capabilities.",
        "Integrated Redis for high-performance caching and PostgreSQL as primary database.",
        "Collaborated in team to deliver comprehensive cardiovascular health monitoring solution",
      ],
      technologies: ["Go", "Gin", "Redis", "PostgreSQL"],
    },
  ],
  leadershipAndActivities: [
    {
      organization: "Competitive Programming Club - UPC",
      role: "Senior Member",
      date: "September 2022 – December 2024",
      description: [
        "Represented the university in international ICPC and IEEEXtreme competitions.",
        "Achieved 14th place regionally in ICPC South America Finals 2023 with team 'DigitalCodeX'",
        "Reached 38th position in South America in IEEEXtreme 16.0 Programming Competition",
      ],
    },
  ],
  skills: {
    technical: ["Java", "Spring Boot", "Go", "Gin Framework", "MySQL", "PostgreSQL", "Redis", "Docker", "AWS", "Microservices", "Git"],
    languages: ["Spanish (Native)", "English (Advanced)"],
    certifications: ["IBM Cybersecurity Analyst Professional (2023)", "Microsoft Azure AI Fundamentals (2023)"],
  },
  interests: ["Competitive Programming", "Artificial Intelligence", "Software Architecture", "Team Leadership"],
};
