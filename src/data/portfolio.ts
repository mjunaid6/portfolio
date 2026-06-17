export const portfolioData = {
  personal: {
    name: "Mohammad Junaid",
    role: "Software Engineer",
    tagline:
      "Building scalable full-stack applications with modern technologies",
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
      description:
        "Contributed to frontend development using React.js, collaborating with cross-functional teams to deliver high-quality user interfaces.",
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
      description:
        "Leading the tech community at Jamia Millia Islamia, organizing events and mentoring students in web development and cloud technologies.",
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
      description:
        "Developed a full-stack real-time messaging platform that enables users to communicate through one-to-one conversations with instant message delivery. Implemented JWT-based authentication with refresh token support, secure REST APIs using Spring Security, and WebSocket communication using STOMP for real-time updates. Designed relational database schemas with JPA/Hibernate and deployed the application on Google Cloud Platform.",
      features: [
        "Real-time messaging using WebSockets and STOMP",
        "JWT authentication with refresh token mechanism",
        "Friend request management system",
        "Online conversation updates and notifications",
        "Responsive React-based user interface",
        "Cloud deployment on GCP",
      ],
      technologies: ["React.js", "Spring Boot", "MySQL", "JPA/Hibernate"],
      link: "https://github.com/mjunaid6/Baatein",
      featured: true,
      liveUrl: "#",
      images: [
        "/projects_images/baatein/1.png",
        "/projects_images/baatein/2.png",
        "/projects_images/baatein/3.png",
        "/projects_images/baatein/4.png",
      ],
    },

    {
      id: 2,
      title: "Spring Boot Product Management System",
      description:
        "Designed and developed a cloud-ready product management system following microservices principles. Implemented RESTful APIs for product operations and integrated Apache Kafka for asynchronous event-driven communication. Containerized services using Docker and configured monitoring using Prometheus and Grafana.",
      features: [
        "CRUD operations for product management",
        "Event-driven architecture using Kafka",
        "Docker-based deployment",
        "Application monitoring and observability",
        "MySQL persistence layer using JPA/Hibernate",
        "AWS deployment support",
      ],
      technologies: [
        "Spring Boot",
        "MySQL",
        "Kafka",
        "Docker",
        "AWS",
        "Prometheus",
        "Grafana",
      ],
      link: "https://github.com/mjunaid6/hisaabKitaab",
      featured: true,
      liveUrl: "#",
    },

    {
      id: 3,
      title: "LostIt – AI-based Lost & Found Platform",
      description:
        "Built an AI-powered lost and found platform that helps users report, search, and recover lost items efficiently. Developed a responsive frontend using React and integrated Firestore for real-time data storage and retrieval. Leveraged AI capabilities to categorize and match reported items, improving discoverability and recovery rates.",
      features: [
        "Report and browse lost/found items",
        "AI-assisted item categorization and matching",
        "Real-time Firestore database integration",
        "Responsive and intuitive user interface",
        "Firebase authentication",
        "Cloud hosting with Firebase",
      ],
      technologies: [
        "React.js",
        "JavaScript",
        "GCP",
        "Firestore",
        "Firebase Hosting",
      ],
      link: "https://github.com/mjunaid6/LostIt",
      featured: true,
      liveUrl: "#",
      images: [
        "/projects_images/lostit/1.png",
        "/projects_images/lostit/2.png",
        "/projects_images/lostit/3.png",
        "/projects_images/lostit/4.png",
        "/projects_images/lostit/5.png",
        "/projects_images/lostit/6.png",
      ],
    },

    {
      id: 4,
      title: "Serverless CRUD Application",
      description:
        "Developed a serverless web application leveraging AWS services to eliminate server management overhead. Built a React frontend integrated with API Gateway endpoints backed by AWS Lambda functions and DynamoDB for scalable data storage.",
      features: [
        "Fully serverless architecture",
        "REST APIs using API Gateway and Lambda",
        "NoSQL data storage with DynamoDB",
        "Secure access control using IAM",
        "Cost-efficient deployment",
        "Highly scalable cloud-native design",
      ],
      technologies: ["React.js", "AWS Lambda", "API Gateway", "DynamoDB"],
      link: "https://github.com/mjunaid6/Serverless-App",
      featured: false,
      liveUrl: "#",
    },

    {
      id: 5,
      title: "Obys Agency Website Clone",
      description:
        "Built a highly interactive frontend clone of the Obys Creative Agency website, focusing on advanced animations, smooth scrolling experiences, and modern web design practices. Leveraged GSAP to recreate sophisticated motion effects and engaging user interactions while maintaining responsive layouts across devices.",
      features: [
        "Smooth scrolling and page transitions",
        "GSAP-powered animations and motion effects",
        "Interactive cursor and hover interactions",
        "Responsive and mobile-friendly design",
        "Component-based architecture",
        "Performance-optimized rendering",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
      link: "https://github.com/mjunaid6/obys-agency-clone",
      featured: true,
      liveUrl: "https://mjunaid6.github.io/obys-agency-clone/",
      images: [
        "/projects_images/obys/1.png",
        "/projects_images/obys/2.png",
        "/projects_images/obys/3.png",
        "/projects_images/obys/4.png",
        "/projects_images/obys/5.png",
        "/projects_images/obys/6.png",
      ],
    },

    {
      id: 6,
      title: "IRCTC Backend Mini Project",
      description:
        "Developed a backend system inspired by IRCTC to manage train reservations, ticket bookings, user authentication, and seat allocation. Designed RESTful APIs for handling train searches, booking workflows, ticket management, and user operations while ensuring secure access through JWT-based authentication.",
      features: [
        "User registration and authentication using JWT",
        "Train search and availability management",
        "Ticket booking and cancellation workflows",
        "Automatic seat allocation logic",
        "Transaction management for concurrent bookings",
        "RESTful API architecture using Spring Boot",
      ],
      technologies: [
        "Spring Boot",
        "MySQL",
        "Spring Security",
        "JWT",
        "JPA/Hibernate",
      ],
      link: "https://github.com/mjunaid6/IRCTC-Clone",
      featured: false,
      liveUrl: "#",
    },

    {
      id: 7,
      title: "IMDb Clone",
      description:
        "Built a movie discovery platform inspired by IMDb, allowing users to browse trending, popular, and upcoming movies using data fetched from external APIs. Implemented dynamic routing, search functionality, and responsive design principles.",
      features: [
        "Movie search and filtering",
        "Dynamic movie detail pages",
        "API integration with movie databases",
        "Responsive user interface",
        "React Router-based navigation",
        "Category-wise movie browsing",
      ],
      technologies: ["React.js", "JavaScript", "TMDB API", "CSS"],
      link: "https://github.com/mjunaid6/IMDB-clone",
      featured: false,
      liveUrl: "#",
      images: [
        "/projects_images/imdb/1.png",
      ]
    },
  ],

  skills: {
    languages: [
      { name: "Java", proficiency: 92 },
      { name: "JavaScript (ES6+)", proficiency: 80 },
      { name: "Python", proficiency: 70 },
      { name: "HTML5", proficiency: 90 },
      { name: "CSS3", proficiency: 90 },
    ],

    frontend: [
      { name: "React.js", proficiency: 86 },
      { name: "React Router", proficiency: 82 },
      { name: "Tailwind CSS", proficiency: 90 },
    ],

    backend: [
      { name: "Spring Boot", proficiency: 90 },
      { name: "REST APIs", proficiency: 88 },
      { name: "JPA / Hibernate", proficiency: 89 },
      { name: "Apache Kafka", proficiency: 60 },
    ],

    databases: [
      { name: "MySQL", proficiency: 82 },
      { name: "MongoDB", proficiency: 65 },
      { name: "DynamoDB", proficiency: 60 },
    ],

    cloud: [
      { name: "AWS (EC2, S3, IAM)", proficiency: 75 },
      { name: "Docker", proficiency: 70 },
      { name: "GCP", proficiency: 65 },
      { name: "Firebase", proficiency: 80 },
    ],

    monitoring: [
      { name: "Prometheus", proficiency: 62 },
      { name: "Grafana", proficiency: 64 },
    ],

    tools: [
      { name: "Git", proficiency: 80 },
      { name: "GitHub", proficiency: 82 },
      { name: "Postman", proficiency: 85 },
      { name: "Figma", proficiency: 65 },
    ],

    fundamentals: [
      { name: "Data Structures & Algorithms", proficiency: 93 },
      { name: "Object-Oriented Programming", proficiency: 97 },
      { name: "Operating Systems", proficiency: 97 },
      { name: "DBMS", proficiency: 97 },
      { name: "Computer Networks", proficiency: 97 },
    ],
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
      title: "Algorithmic Problem Solving",
      description:
        "Successfully engineered optimized solutions for 500+ Data Structures & Algorithms challenges on LeetCode",
    },
    {
      id: 2,
      title: " Reliance Foundation Scholar",
      description:
        "Awared the merit-cum means scholarship, selected among 5000 students nationwide for exceptional performance in academics.",
    },
    {
      id: 3,
      title: "Hackathons",
      description:
        "1st Runner-up at the Mappls Appathon 2025; recognized for innovative technical implementation.",
    },
    {
      id: 4,
      title: "Competitions",
      description:
        "Ranked in the Top 25 (National Level) for Samsung Solve for Tomorrow 2025",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
