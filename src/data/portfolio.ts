// Portfolio data configuration
// Update this file with your actual resume information

export const portfolioData = {
  personal: {
    name: "Mohammad Junaid",
    role: "Software Engineer",
    tagline: "Building scalable full-stack applications with modern technologies",
    email: "mjunaid4work@gmail.com",
    phone: "+91 9690984981",
    location: "New Delhi, India",
    bio: "I'm a passionate software engineer specializing in full-stack development with React.js and Spring Boot. I love building scalable, performant applications and exploring cloud technologies. As an active tech community leader at GDGoc JMI, I enjoy mentoring students and organizing technical events.",
    socialLinks: {
      github: "https://github.com/mjunaid6",
      linkedin: "https://linkedin.com/in/mohammad-junaid-b0729628a",
      leetcode: "https://leetcode.com/u/HxSS6c4EoK",
    },
  },

  experience: [
    {
      id: 1,
      company: "Seekh Foundation",
      role: "Frontend Developer Intern",
      period: "Jul 2025 – Aug 2025",
      description: "Contributed to frontend development using React.js, collaborating with cross-functional teams to deliver high-quality user interfaces.",
      highlights: [
        "Improved and refactored frontend components using React.js",
        "Collaborated with backend developers to integrate REST APIs",
        "Enhanced cross-browser compatibility and responsiveness",
      ],
    },
    {
      id: 2,
      company: "Google Developer Groups (GDG), Jamia Millia Islamia",
      role: "Organizer (President) & Cloud Team Lead",
      period: "2023 – Present",
      description: "Leading the tech community at Jamia Millia Islamia, organizing events and mentoring students in web development and cloud technologies.",
      highlights: [
        "Led hackathons, workshops, and technical sessions as President",
        "Mentored students on web development, cloud, and AI projects as Cloud Team Lead",
        "Coordinated teams, speakers, and volunteers for large-scale events",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Baatein – Real-time Chat Application",
      description: "A full-stack real-time chat application with RESTful APIs for user authentication, conversations, and message exchange following clean layered architecture.",
      technologies: ["React.js", "Spring Boot", "MySQL", "JPA/Hibernate"],
      link: "https://github.com/mjunaid6/Baatein",
      featured: true,
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Spring Boot CRUD Application",
      description: "RESTful backend services with event-driven architecture using Apache Kafka, containerized with Docker, and monitored with Prometheus & Grafana.",
      technologies: ["Spring Boot", "MySQL", "Kafka", "Docker", "AWS", "Prometheus", "Grafana"],
      link: "https://github.com/mjunaid6/hisaabKitaab",
      featured: true,
      liveUrl: "#",
    },
    {
      id: 3,
      title: "LostIt – AI-based Lost & Found Platform",
      description: "A responsive, component-driven frontend for an AI-powered lost & found platform with real-time UI updates and optimized performance.",
      technologies: ["React.js", "JavaScript", "GCP", "Firestore", "Firebase Hosting"],
      link: "https://github.com/mjunaid6/LostIt",
      featured: true,
      liveUrl: "https://studio--lostit-6xmwx.us-central1.hosted.app/",
    },
    {
      id: 4,
      title: "Serverless CRUD Application",
      description: "Frontend application consuming serverless cloud-based REST APIs with asynchronous data handling, form validation, and robust error handling.",
      technologies: ["React.js", "AWS Lambda", "API Gateway", "DynamoDB"],
      link: "https://github.com/mjunaid6/Serverless-App",
      featured: false,
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Obys Agency Website Clone",
      description: "A responsive frontend clone of the Obys Agency website focused on replicating modern UI design, smooth animations, and interactive scrolling using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "Javascript"],
      link: "https://github.com/mjunaid6/obys-agency-clone",
      featured: true,
      liveUrl: "https://mjunaid6.github.io/obys-agency-clone/",
    },
    {
      id: 6,
      title: "IRCTC Backend Mini Project",
      description: "This project is a pure Java Backend Application designed to simulate the server-side architecture of a massive railway reservation system. It focuses on solving complex engineering challenges like concurrency control for seat allocation, data integrity for PNR generation, and efficient search algorithms for train routing.",
      technologies: ["Spring Boot", "MySQL", "JPA/Hibernate"],
      link: "https://github.com/mjunaid6/IRCTC-Clone",
      featured: false,
      liveUrl: "#",
    },
    {
      id: 7,
      title: "IMDb Clone",
      description: "A responsive movie database UI built as an IMDB-style clone that lets users search and browse movies using a public movie API (e.g., TMDB/OMDB). It demonstrates modern frontend development with dynamic content, routing, and interactive UI features.",
      technologies: ["React.js", "Material UI", "Tailwind CSS", "OMDB API"],
      link: "https://github.com/mjunaid6/IMDB-clone",
      featured: false,
      liveUrl: "#",
    },
    
  ],

  skills: {
    languages: ["Java", "JavaScript (ES6+)", "Python", "HTML5", "CSS3"],
    frontend: ["React.js", "Redux", "React Router", "Tailwind CSS"],
    backend: ["Spring Boot", "REST APIs", "JPA/Hibernate", "Apache Kafka"],
    databases: ["MySQL", "MongoDB", "DynamoDB"],
    cloud: ["AWS (EC2, S3, IAM)", "Docker", "GCP", "Firebase"],
    monitoring: ["Prometheus", "Grafana"],
    tools: ["Git", "GitHub", "Postman", "Figma"],
    fundamentals: ["Data Structures & Algorithms", "OOP", "OS", "DBMS", "Computer Networks"],
  },

  education: [
    {
      id: 1,
      degree: "B.Tech – Computer Engineering",
      institution: "Jamia Millia Islamia, New Delhi",
      period: "Expected May 2027",
      details: "SPI: 9.0 / 10.0",
    },
  ],

  certifications: [
    {
      id: 1,
      title: "Decode DSA with JAVA",
      issuer: "PW Skills",
      link: "#",
    },
    {
      id: 2,
      title: "AWS APAC Solutions Architecture",
      issuer: "Forage",
      period: "Jan 2026",
      link: "#",
    },
  ],

  achievements: [
    {
      id: 1,
      title: "300+ DSA Problems Solved",
      description: "Solved 300+ Data Structures & Algorithms problems on LeetCode",
    },
    {
      id: 2,
      title: "1st Runner-up, Mappls Appathon 2025",
      description: "Secured 1st Runner-up position in Mappls Appathon 2025",
    },
    {
      id: 3,
      title: "Top 25 (National), Samsung Solve for Tomorrow 2025",
      description: "Achieved Top 25 at National level in Samsung Solve for Tomorrow 2025",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
