export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "RoktoChai",
    description: "A blood donation platform connecting donors with recipients in emergency situations. Features real-time notifications, donor tracking, and appointment scheduling.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    githubLink: "https://github.com/monirulislam",
    demoLink: "https://roktochai.demo.com"
  },
  {
    id: 2,
    title: "Department Orchestrator",
    description: "A comprehensive department management system for educational institutions, handling course allocations, faculty scheduling, and resource management.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    githubLink: "https://github.com/monirulislam",
    demoLink: "https://dept-orchestrator.demo.com"
  },
  {
    id: 3,
    title: "prexress Framework",
    description: "A lightweight, modular framework built on Express.js, providing additional abstractions for rapid API development with standardized patterns.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "Express", "TypeScript", "Jest", "Docker"],
    githubLink: "https://github.com/monirulislam",
  },
  {
    id: 4,
    title: "Event Management",
    description: "A full-featured event management platform with ticketing, scheduling, attendee tracking, and analytics dashboards for event organizers.",
    image: "/placeholder.svg",
    technologies: ["React", "Redux", "Firebase", "Material-UI", "Stripe API"],
    githubLink: "https://github.com/monirulislam",
    demoLink: "https://event-mgmt.demo.com"
  }
];

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Innovators Ltd.",
    position: "Senior Frontend Developer",
    period: "Jan 2022 - Present",
    description: "Leading the frontend development team in building robust and scalable web applications.",
    achievements: [
      "Redesigned the company's flagship product UI, improving user engagement by 40%",
      "Implemented CI/CD pipelines, reducing deployment time by 60%",
      "Mentored junior developers and established frontend code standards"
    ]
  },
  {
    id: 2,
    company: "Digital Solutions Inc.",
    position: "Frontend Developer",
    period: "Mar 2019 - Dec 2021",
    description: "Developed and maintained multiple client projects using modern frontend technologies.",
    achievements: [
      "Built responsive web applications for 15+ clients using React and Next.js",
      "Optimized application performance, reducing load times by 35%",
      "Collaborated with design team to implement pixel-perfect UIs"
    ]
  },
  {
    id: 3,
    company: "Web Crafters",
    position: "Junior Developer",
    period: "Jun 2017 - Feb 2019",
    description: "Started as a junior developer working on frontend implementations and bug fixes.",
    achievements: [
      "Contributed to the development of 5 web applications",
      "Assisted senior developers in code reviews and implementation",
      "Learned and implemented best practices in frontend development"
    ]
  }
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "University of Technology",
    period: "2015 - 2017",
    description: "Specialized in Software Engineering and Web Technologies"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "National University",
    period: "2011 - 2015",
    description: "Graduated with First Class Honors"
  }
];

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialLink?: string;
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "Dec 2022",
    credentialLink: "https://aws.certification.link"
  },
  {
    id: 2,
    title: "Professional Frontend Developer",
    issuer: "Meta",
    date: "Aug 2021",
    credentialLink: "https://meta.certification.link"
  },
  {
    id: 3,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "Mar 2020",
    credentialLink: "https://freecodecamp.certification.link"
  }
];

export interface Skill {
  id: number;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "Tools" | "Programming Languages" | "Design";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
  // Frontend
  { id: 1, name: "React", category: "Frontend", level: "Expert" },
  { id: 2, name: "Next.js", category: "Frontend", level: "Advanced" },
  { id: 3, name: "TypeScript", category: "Frontend", level: "Advanced" },
  { id: 4, name: "HTML/CSS", category: "Frontend", level: "Expert" },
  { id: 5, name: "JavaScript", category: "Frontend", level: "Expert" },
  { id: 6, name: "Redux", category: "Frontend", level: "Advanced" },
  { id: 7, name: "Tailwind CSS", category: "Frontend", level: "Advanced" },
  { id: 8, name: "Material UI", category: "Frontend", level: "Intermediate" },
  
  // Backend
  { id: 9, name: "Node.js", category: "Backend", level: "Advanced" },
  { id: 10, name: "Express", category: "Backend", level: "Advanced" },
  { id: 11, name: "REST API", category: "Backend", level: "Advanced" },
  { id: 12, name: "GraphQL", category: "Backend", level: "Intermediate" },
  { id: 13, name: "Prisma", category: "Backend", level: "Intermediate" },
  
  // Database
  { id: 14, name: "MongoDB", category: "Database", level: "Advanced" },
  { id: 15, name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: 16, name: "MySQL", category: "Database", level: "Intermediate" },
  { id: 17, name: "Firebase", category: "Database", level: "Intermediate" },
  
  // Tools
  { id: 18, name: "Git", category: "Tools", level: "Advanced" },
  { id: 19, name: "Docker", category: "Tools", level: "Intermediate" },
  { id: 20, name: "CI/CD", category: "Tools", level: "Intermediate" },
  { id: 21, name: "AWS", category: "Tools", level: "Intermediate" },
  { id: 22, name: "Jest", category: "Tools", level: "Intermediate" },
  { id: 23, name: "Webpack", category: "Tools", level: "Intermediate" },
  { id: 24, name: "Figma", category: "Tools", level: "Intermediate" }
];
