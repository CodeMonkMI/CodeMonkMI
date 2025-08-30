import { v4 } from "uuid";
export interface Project {
  id: number | string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: v4(),
    title: "prexress",
    description:
      "A lightweight, modular framework built on Express.js, providing additional abstractions for rapid API development with standardized patterns.",
    image: "/placeholder.svg",
    technologies: ["Node.js", "Express", "TypeScript", "Prisma", "OPP"],
    githubLink: "https://github.com/CodeMonkMI/prexress",
  },
  {
    id: v4(),
    title: "Todo Enterprise",
    description:
      "An enterprise level typeScript application built with Turborepo, featuring a clean architecture pattern and domain-driven design.",
    image: "/placeholder.svg",
    technologies: ["React", "ExpressJs", "Drizzle", "Domain Driven Design"],
    githubLink: "https://github.com/CodeMonkMI/todo-app-enterprise",
  },
  {
    id: v4(),
    title: "Real AI",
    description:
      "A functional web application built with Server-Side Rendering (SSR) and Static Site Generation (SSG). I developed this site from a Figma design as the company’s landing page, showcasing their database and services.",
    image: "/placeholder.svg",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Strapi",
      "Firebase",
    ],
    githubLink: "https://www.realai.eu/",
  },
  {
    id: v4(),
    title: "EarthScan",
    description:
      "Built an interactive landing page from Figma to production using Next.js. Implemented animations and SSR/SSG for enhanced UX and SEO optimization",
    image: "/placeholder.svg",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Strapi", "Axios"],
    githubLink: "https://earthscan.io/",
  },
  {
    id: v4(),
    title: "Hominis",
    description:
      "Developed a feature-rich AI playground supporting model selection, extended context handling, presets, and customizable interfaces to enhance user experience",
    image: "/placeholder.svg",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Zustand",
      "API Proxy",
    ],
    githubLink: "https://hominis.io/",
  },
  {
    id: v4(),
    title: "RoktoChai",
    description:
      "A blood donation platform connecting donors with recipients in emergency situations. Features real-time notifications, donor tracking, and appointment scheduling.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "Express", "Prisma", "MongoDB"],
    githubLink: "https://github.com/CodeMonkMI/roktochai",
  },
  {
    id: v4(),
    title: "Department Orchestrator",
    description:
      "A comprehensive department management system for educational institutions, handling course allocations, faculty scheduling, and resource management.",
    image: "/placeholder.svg",
    technologies: [
      "Next.js",
      "ExpressJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Docker",
      "prexress framework",
    ],
    githubLink: "https://github.com/CodeMonkMI/department-orchestrator",
  },
];

export interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  achievements: string[];
}

const DKAchievements = [
  "Created applications using Next.js for server-side rendering and static site generation which reduced 80% page loading time.",
  "Designed pixel perfect UI from figma design with 100% precision",
  "Executed web performance optimization techniques to enhance loading speed. Reduce page speed from 5s to 2s.",
  "Resolved critical bugs, improved functionality, reduced 20% of reported glitches and improved user experience.",
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "DK AI Labs",
    position: "Software Developer",
    period: "Feb 2025 - Aug 2025",
    description:
      "Develop and Integrated robust and scalable applications with modern technologies like React NodeJs etc",
    achievements: [...DKAchievements],
  },
  {
    id: 2,
    company: "All Generation Tech - AGT",
    position: "Software Engineer - ReactJs",
    period: "Dec 2024 - March 2025",
    description:
      "Developed and maintained multiple client projects using react and related technologies.",
    achievements: [
      "Developed single page applications for a seamless user experience.",
      "Organized application files using component-based architecture for reusability and increased code readability",
      "Implemented responsive design to ensure optimal user experience across devices",
    ],
  },
  {
    id: 3,
    company: "DK AI Labs",
    position: "Fullstack Web Developer",
    period: "Apr 2023 - Dec 2024",
    description:
      "Develop and Integrated robust and scalable web applications with modern technologies like React NodeJs etc",
    achievements: [...DKAchievements],
  },
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
    degree: "Diploma In Engr. in Computer Science",
    institution: "Jashore Polytechnic Institute",
    period: "2022 - 2026",
    description: "Specialized in Software Engineering and Web Technologies",
  },
  {
    id: 2,
    degree: "Higher Secondary School",
    institution: "Under Jashore Board",
    period: "2019-2022",
    description: "Completed with a grade with A",
  },
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
    id: 2,
    title: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "March, 2025",
    credentialLink: "https://www.hackerrank.com/certificates/617e2b1f74fb",
  },
  {
    id: 3,
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "March, 2025",
    credentialLink: "https://www.hackerrank.com/certificates/d2e571b01a02",
  },
  {
    id: 4,
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "March, 2025",
    credentialLink: "https://www.hackerrank.com/certificates/9ea89219dff1",
  },
  {
    id: 1,
    title: "Think in a Redux way",
    issuer: "Learn With Sumit",
    date: "Sep 2022",
    credentialLink:
      "https://drive.google.com/file/d/1bNRD2GVFJfhDTSPgf9ieBFUijgrEHdWy/view",
  },
];

export interface Skill {
  id: number | string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "Tools"
    | "Programming Languages"
    | "Design";
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export const skills: Skill[] = [
  // Frontend
  { id: v4(), name: "JavaScript", category: "Frontend", level: "Expert" },
  { id: v4(), name: "TypeScript", category: "Frontend", level: "Expert" },
  { id: v4(), name: "React", category: "Frontend", level: "Expert" },
  { id: v4(), name: "Next.js", category: "Frontend", level: "Advanced" },
  { id: v4(), name: "Tailwind CSS", category: "Frontend", level: "Expert" },
  {
    id: v4(),
    name: "React Hook Form",
    category: "Frontend",
    level: "Advanced",
  },
  { id: v4(), name: "Zod", category: "Frontend", level: "Advanced" },
  { id: v4(), name: "Redux", category: "Frontend", level: "Expert" },
  { id: v4(), name: "Zustand", category: "Frontend", level: "Advanced" },
  { id: v4(), name: "React Query", category: "Frontend", level: "Advanced" },

  // Backend
  { id: v4(), name: "Node.js", category: "Backend", level: "Advanced" },
  { id: v4(), name: "ExpressJs", category: "Backend", level: "Advanced" },
  { id: v4(), name: "NestJs", category: "Backend", level: "Advanced" },
  { id: v4(), name: "REST API", category: "Backend", level: "Advanced" },
  { id: v4(), name: "Prisma", category: "Backend", level: "Intermediate" },
  { id: v4(), name: "Mongoose", category: "Backend", level: "Intermediate" },
  { id: v4(), name: "Drizzle", category: "Backend", level: "Intermediate" },
  {
    id: v4(),
    name: "Authentication",
    category: "Backend",
    level: "Intermediate",
  },
  {
    id: v4(),
    name: "Authorization",
    category: "Backend",
    level: "Intermediate",
  },
  { id: v4(), name: "JWT", category: "Backend", level: "Intermediate" },
  { id: v4(), name: "Zod", category: "Backend", level: "Intermediate" },
  {
    id: v4(),
    name: "Express Validator",
    category: "Backend",
    level: "Intermediate",
  },

  // Datv4()ase
  {
    id: v4(),
    name: "Database Design",
    category: "Database",
    level: "Intermediate",
  },
  {
    id: v4(),
    name: "Database Management",
    category: "Database",
    level: "Intermediate",
  },
  { id: v4(), name: "SQL", category: "Database", level: "Advanced" },
  { id: v4(), name: "NoSQL", category: "Database", level: "Advanced" },
  { id: v4(), name: "MongoDB", category: "Database", level: "Advanced" },
  { id: v4(), name: "PostgreSQL", category: "Database", level: "Intermediate" },
  { id: v4(), name: "MySQL", category: "Database", level: "Intermediate" },
  { id: v4(), name: "Firebase", category: "Database", level: "Intermediate" },

  // Toov4()
  { id: v4(), name: "Git", category: "Tools", level: "Advanced" },
  { id: v4(), name: "Docker", category: "Tools", level: "Intermediate" },
  { id: v4(), name: "CI/CD", category: "Tools", level: "Intermediate" },
  { id: v4(), name: "VPS", category: "Tools", level: "Intermediate" },

  { id: v4(), name: "Figma", category: "Tools", level: "Intermediate" },
  { id: v4(), name: "Microservices", category: "Tools", level: "Intermediate" },
  {
    id: v4(),
    name: "Event Driven Architecture",
    category: "Tools",
    level: "Intermediate",
  },
];

// Sample achievements - in a real app, this would come from data/projects
export const achievements = [
  {
    id: 1,
    title: "Founded JPI Coder Club",
    description:
      "Founded JPI Coders Club and crated programming community. Purpose to help each others. Also organize Programming Contest",
    icon: "trophy",
    year: "2023",
  },
  {
    id: 2,
    title: "JPI Computer Club",
    description:
      "Founding JPI Computer Club. Purpose of this is to help each others.",
    icon: "trophy",
    year: "2025",
  },
];
