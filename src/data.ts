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
        { title: "Support Team Lead", date: "December 2023 – Present" },
        { title: "Software Engineer II", date: "December 2023 – Present" },
        { title: "Junior Software Engineer", date: "Unknown Start Date – December 2023" }, // Based on user's prompt
        { title: "Trainee Software Engineer", date: "Unknown Start Date – Junior Role" }, // Based on user's prompt
      ],
      description: [
        "Led direct customer support team, coordinating incident resolution and improving customer satisfaction metrics",
        "Developed AI features for Hyros project, implementing fine-tuning and integration with external platforms (Shopify GraphQL, Mailchimp, SendGrid)",
        "Designed and maintained microservices using Java 21, Spring Boot, REST API, Hibernate, JPA, and Apache Kafka",
        "Managed MySQL, Redis, and Memcache databases for performance optimization",
        "Implemented cloud solutions with AWS (S3, CloudWatch, OpenSearch) and monitoring with New Relic",
      ],
    },
    {
      company: "Peruvian University of Applied Sciences",
      location: "Lima, Peru",
      roles: [{ title: "Teaching Methods Advisor", date: "March 2023 – Present" }],
      description: [
        "Provided individual tutoring and group sessions on structured programming, OOP, and data structures in C++",
        "Conducted 'Introduction to Linux' workshops for IEEE for 2 consecutive years",
        "Received outstanding evaluations from professors and students for instructional excellence",
      ],
      highlights: ["Conducted 'Introduction to Linux' workshops for IEEE (2023, 2024)"],
    },
  ],
  projects: [
    {
      name: "DeepKer - Cardiovascular Alert System",
      role: "Backend Developer and Co-founder",
      date: "2024 – 2025",
      github: "https://github.com/DeepKer-Org/deepker-backend",
      description: [
        "Developed complete backend using Go with Gin Framework for cardiovascular medical alert system",
        "Implemented user management system and real-time notification capabilities",
        "Integrated Redis for high-performance caching and PostgreSQL as primary database",
        "Collaborated in team to deliver comprehensive cardiovascular health monitoring solution",
      ],
    },
  ],
  leadershipAndActivities: [
    {
      organization: "Competitive Programming Club - UPC",
      role: "Senior Member",
      date: "September 2022 – December 2024",
      description: [
        "Represented the university in international ICPC and IEEEXtreme competitions",
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
