export type ProjectCategory =
  | "ALL"
  | "AI"
  | "ROBOTICS"
  | "E-COMMERCE"
  | "MOBILE"
  | "SAAS"
  | "AUTOMATION"
  | "WEB";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: Exclude<ProjectCategory, "ALL">;
  typeBadge: string;
  description: string;
  challenge?: string;
  solution?: string;
  technologies: string[];
  image?: string;
  video?: string;
  videos?: string[];
  images?: string[];
  link?: string;
  featured?: boolean;
  year?: string;
  metrics?: ProjectMetric[];
}

export const PROJECTS: Project[] = [
  {
    id: "robocoach",
    title: "RoboCoach AI",
    tagline: "Autonomous AI Hardware Gym Robotics & Vision Kiosk",
    category: "ROBOTICS",
    typeBadge: "HARDWARE ROBOTICS · COMPUTER VISION",
    description:
      "India's premier autonomous AI fitness kiosk. Built on custom edge compute hardware, it executes real-time 33-point skeletal tracking, classifies 13 complex biomechanical exercise patterns, calculates joint load angles, and delivers sub-20ms audio-visual posture corrections.",
    challenge:
      "Commercial gyms needed an autonomous trainer kiosk that works without wearable sensors and performs real-time pose estimation under varying lighting and gym environments.",
    solution:
      "Engineered an integrated hardware kiosk with dual stereo depth cameras, custom PyTorch + MediaPipe inference engine, and a low-latency WebRTC feedback loop.",
    technologies: ["PyTorch", "MediaPipe", "WebRTC", "Edge AI", "React", "Kiosk OS", "C++ Engine"],
    video: "/robocoach/robocoach1.MOV",
    videos: [
      "/robocoach/robocoach1.MOV",
      "/robocoach/robocoach2.MOV",
      "/robocoah3.MOV",
      "/robocoach/robocoach4.MOV",
      "/robocoach/robocoach5.MOV",
    ],
    featured: true,
    year: "2025",
    metrics: [
      { label: "Pose Latency", value: "<18ms" },
      { label: "Movement Classifiers", value: "13 Biomechanical Patterns" },
      { label: "Deployment", value: "Commercial Hardware Kiosk" },
    ],
  },
  {
    id: "virtual-trial-room",
    title: "Virtual Trial Room AR",
    tagline: "Real-Time 3D Neural Garment Warping & Virtual Mirror",
    category: "AI",
    typeBadge: "AI · COMPUTER VISION · AR",
    description:
      "Next-generation computer vision virtual fitting platform. Utilizing deep-learning semantic human body segmentation, 33-point 3D keypoint depth estimation, and dynamic cloth deformation shaders for instant e-commerce web integration and in-store interactive mirror kiosks.",
    challenge:
      "Eliminating retail return friction by providing realistic cloth drape simulation that adapts to body contours in real-time on consumer webcams and retail displays.",
    solution:
      "Built a custom deep-learning garment warping pipeline with WebGL hardware acceleration, achieving 60 FPS body tracking without specialized hardware.",
    technologies: ["OpenCV", "PyTorch", "WebGL", "TensorFlow", "Next.js", "WebSockets"],
    video: "/virtual-trial-room/virtual-trialroom-screen.MP4",
    videos: [
      "/virtual-trial-room/virtual-trialroom-screen.MP4",
      "/virtual-trial-room/virtual-trial-room-web.mov",
    ],
    featured: true,
    year: "2025",
    metrics: [
      { label: "Tracking Framerate", value: "60 FPS Smooth" },
      { label: "Body Mesh Points", value: "33 Keypoints" },
      { label: "Execution", value: "Retail Screen Mirror & Web" },
    ],
  },
  {
    id: "zizzle",
    title: "Zizzle Media Platform",
    tagline: "High-Throughput Mobile Social Video & Reels App",
    category: "MOBILE",
    typeBadge: "MOBILE PLATFORM · VIDEO PIPELINE",
    description:
      "Full-scale social media mobile platform engineered with Flutter. Features an algorithmic reels feed, custom multi-bitrate automated HLS video transcoding pipeline, global low-latency CDN delivery, and a real-time creator ecosystem.",
    challenge:
      "Handling thousands of simultaneous user video uploads with instant multi-resolution transcoding and zero-buffering reel playback on variable cellular networks.",
    solution:
      "Engineered an automated serverless FFmpeg transcoding cluster on Cloud Run connected to a globally distributed edge CDN with client-side frame pre-fetching.",
    technologies: ["Flutter", "Firebase", "Cloud Run", "FFmpeg", "HLS Transcoding", "PostgreSQL", "Redis"],
    image: "/zizzle/zizzleimg.PNG",
    video: "/zizzle/zizzle4.mov",
    videos: [
      "/zizzle/zizzle4.mov",
      "/zizzle/zizzle1.mov",
      "/zizzle/zizzle2.mov",
      "/zizzle/zizzle3.mov",
    ],
    images: ["/zizzle/zizzleimg.PNG"],
    featured: true,
    year: "2024",
    metrics: [
      { label: "Transcode Pipeline", value: "Sub-Second HLS" },
      { label: "Playback Latency", value: "<150ms Instant Start" },
      { label: "App Architecture", value: "Flutter Cross-Platform" },
    ],
  },
  {
    id: "fivewellness",
    title: "FiveWellness Platform",
    tagline: "High-End E-Commerce & 3D Digital Product Platform",
    category: "E-COMMERCE",
    typeBadge: "E-COMMERCE · DIGITAL COMMERCE CASE STUDY",
    description:
      "An immersive digital commerce platform built for the health and wellness industry. Features custom 3D product visualizers, dynamic checkout architecture, automated inventory synchronization, and a bespoke editorial shopping journey.",
    challenge:
      "Creating an extraordinary digital commerce storefront that elevates wellness products through 3D storytelling while ensuring instant page loads and seamless global checkout.",
    solution:
      "Architected a Next.js headless commerce system with WebGL 3D product viewports, Stripe Elements payment orchestration, and instant CDN caching.",
    technologies: ["Next.js", "Three.js", "Stripe API", "MongoDB", "Tailwind CSS", "Framer Motion"],
    image: "/fivewellness.png",
    images: ["/fivewellness.png"],
    featured: true,
    year: "2025",
    metrics: [
      { label: "Storefront Tech", value: "Headless 3D Commerce" },
      { label: "Payment Security", value: "Stripe Level 1 PCI" },
      { label: "Lighthouse Performance", value: "98/100 Mobile" },
    ],
  },
  {
    id: "penzone",
    title: "PenZone 3D E-Commerce",
    tagline: "Procedural 3D WebGL Luxury Configurator & Storefront",
    category: "E-COMMERCE",
    typeBadge: "E-COMMERCE · 3D PRODUCT CONFIGURATOR",
    description:
      "Bespoke 3D luxury product e-commerce store featuring procedural Three.js geometry, dynamic PBR material shader switching (brass, titanium, carbon fiber), custom cursor physics, real-time cart orchestration, and seamless checkout flow.",
    challenge:
      "Delivering photorealistic luxury materials in real-time in the browser with dynamic cart configurations without slowing down mobile performance.",
    solution:
      "Custom physically based rendering shaders, optimized geometry LODs, real-time product variation pricing, and smooth Lenis + GSAP timeline choreography.",
    technologies: ["Three.js", "GSAP", "React Three Fiber", "Next.js", "Stripe API", "Lenis"],
    image: "/penzone.png",
    images: ["/penzone.png"],
    featured: true,
    year: "2025",
    metrics: [
      { label: "Commerce Engine", value: "3D Procedural WebGL" },
      { label: "Framerate", value: "60 FPS Locked" },
      { label: "Shader Pipeline", value: "Custom PBR Luxury" },
    ],
  },
  {
    id: "beautybykrimse",
    title: "Beauty by Krimse",
    tagline: "Luxury Bridal Artistry & Editorial Portfolio Platform",
    category: "WEB",
    typeBadge: "WEB PLATFORM · LUXURY PORTFOLIO",
    description:
      "High-end bridal makeup and luxury beauty artistry portfolio platform. Designed with bespoke editorial typography, responsive image performance pipelines, client inquiry orchestration, and fluid micro-interactions.",
    challenge:
      "Creating an ultra-luxury editorial aesthetic with fluid kinetic transitions while preserving sub-second page loads across high-resolution bridal photography portfolios.",
    solution:
      "Engineered an ultra-fast Next.js architecture with NextGen WebP image pipelines, custom Framer Motion page reveals, and a seamless client inquiry scheduler.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel Edge", "SEO Architecture"],
    image: "/beautybykrimsde.png",
    images: ["/beautybykrimsde.png"],
    featured: true,
    year: "2025",
    metrics: [
      { label: "Lighthouse Performance", value: "99/100 Mobile" },
      { label: "Image Pipeline", value: "Adaptive NextGen WebP" },
      { label: "Design Direction", value: "Luxury Editorial UI" },
    ],
  },
];

export const CATEGORIES: ProjectCategory[] = [
  "ALL",
  "ROBOTICS",
  "AI",
  "E-COMMERCE",
  "MOBILE",
  "WEB",
  "SAAS",
  "AUTOMATION",
];
