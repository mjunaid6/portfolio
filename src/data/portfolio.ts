// Portfolio data configuration
// Update this file with your actual resume information

export const portfolioData = {
  personal: {
    name: "Sai Deepak Vutkuri",
    role: "Software Engineer",
    tagline: "Building elegant solutions to complex problems",
    email: "contact@example.com",
    location: "United States",
    bio: "I'm a passionate software engineer with expertise in building scalable web applications and creating exceptional user experiences. I thrive on turning complex problems into simple, beautiful solutions.",
    socialLinks: {
      github: "https://github.com/",
      linkedin: "https://linkedin.com/in/",
      twitter: "https://twitter.com/",
    },
  },

  experience: [
    {
      id: 1,
      company: "Tech Company",
      role: "Senior Software Engineer",
      period: "2022 - Present",
      description: "Leading development of customer-facing applications, implementing modern architectures, and mentoring junior developers.",
      highlights: [
        "Architected and built scalable microservices handling millions of requests",
        "Led a team of 5 engineers to deliver critical features ahead of schedule",
        "Reduced application load time by 40% through performance optimization",
      ],
    },
    {
      id: 2,
      company: "Startup Inc",
      role: "Software Engineer",
      period: "2020 - 2022",
      description: "Full-stack development with focus on React and Node.js, building products from concept to launch.",
      highlights: [
        "Built and launched 3 major product features used by 100k+ users",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with design team to create intuitive user interfaces",
      ],
    },
    {
      id: 3,
      company: "Tech Corp",
      role: "Junior Developer",
      period: "2018 - 2020",
      description: "Started my professional journey building web applications and learning best practices in software development.",
      highlights: [
        "Developed and maintained client-facing web applications",
        "Participated in code reviews and adopted agile methodologies",
        "Contributed to open-source projects and internal tooling",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redis"],
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, kanban boards, and team collaboration features.",
      technologies: ["Next.js", "TypeScript", "Prisma", "WebSocket"],
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Data visualization platform for business intelligence with interactive charts and automated reporting.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      link: "#",
      featured: true,
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Cross-platform fitness tracking application with workout plans, progress tracking, and social features.",
      technologies: ["React Native", "Firebase", "Node.js"],
      link: "#",
      featured: false,
    },
  ],

  skills: {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    frontend: ["React", "Next.js", "Vue.js", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Express", "FastAPI", "GraphQL", "REST APIs"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    tools: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
    other: ["Agile/Scrum", "System Design", "Testing", "Performance Optimization"],
  },

  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University Name",
      period: "2018 - 2020",
      details: "Focus on Software Engineering and Distributed Systems",
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      institution: "University Name",
      period: "2014 - 2018",
      details: "Graduated with honors",
    },
  ],
};

export type PortfolioData = typeof portfolioData;
