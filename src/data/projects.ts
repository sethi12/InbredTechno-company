export type ProjectCategory =
  | "ALL"
  | "SAAS"
  | "WEB"
  | "MOBILE"
  | "AI"
  | "ROBOTICS"
  | "AUTOMATION";

export interface Project {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, "ALL">;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  link?: string;
  featured?: boolean;
  year?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "aigymcoach",
    title: "AI Gym Coach",
    category: "AI",
    description:
      "India's first AI robotics coach. Real-time pose detection, 13 movement pattern recognizers, and live feedback — deployed on a hardware kiosk in gyms.",
    technologies: ["Python", "MediaPipe", "WebRTC", "React", "Firebase"],
    featured: true,
    year: "2025",
  },
  {
    id: "zizzle",
    title: "Zizzle",
    category: "MOBILE",
    description:
      "Flutter social media app with an Instagram-style reels feature. Custom HLS transcoding pipeline, CDN delivery, and real-time feed.",
    technologies: ["Flutter", "Firebase", "Cloud Run", "FFmpeg"],
    featured: true,
    year: "2024",
  },
  {
    id: "myfive",
    title: "MyFive Wellness",
    category: "SAAS",
    description:
      "Wellness SaaS with 3D admin dashboard, product management, and Express/MongoDB backend. Premium dark aesthetic with animated components.",
    technologies: ["Next.js", "Express.js", "MongoDB", "React Three Fiber"],
    featured: false,
    year: "2025",
  },
  {
    id: "penzone",
    title: "PenZone",
    category: "WEB",
    description:
      "3D pen e-commerce experience with a procedural Three.js pen model, custom pen-cursor, GSAP scroll animations, and brass/dark theme.",
    technologies: ["Next.js", "Three.js", "GSAP", "Framer Motion", "Lenis"],
    featured: false,
    year: "2025",
  },
  {
    id: "inbredtechno-site",
    title: "InbredTechno Website",
    category: "WEB",
    description:
      "This website. Scroll-driven cinematic 3D experience built with React Three Fiber, Theatre.js, Lenis, and Framer Motion.",
    technologies: ["Next.js", "React Three Fiber", "Framer Motion", "Lenis"],
    featured: false,
    year: "2026",
  },
];

export const CATEGORIES: ProjectCategory[] = [
  "ALL",
  "SAAS",
  "WEB",
  "MOBILE",
  "AI",
  "ROBOTICS",
  "AUTOMATION",
];
