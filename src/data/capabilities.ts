export interface Capability {
  index: string;
  title: string;
  description: string;
  stack: string[];
  color: string;
}

export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "SaaS Products",
    description:
      "Multi-tenant platforms built to scale — from auth and billing to the dashboards teams live in every day.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    color: "#4de8ff",
  },
  {
    index: "02",
    title: "Applications",
    description:
      "iOS, Android and web applications engineered for real people, not app-store screenshots.",
    stack: ["Flutter", "React Native", "Firebase", "Swift"],
    color: "#8b7fff",
  },
  {
    index: "03",
    title: "AI & Machine Learning",
    description:
      "Computer vision, NLP and custom model training pipelines, deployed as products — not notebooks.",
    stack: ["PyTorch", "OpenCV", "Groq", "TensorFlow"],
    color: "#3cff8e",
  },
  {
    index: "04",
    title: "Automation",
    description:
      "Systems that remove the repetitive work between your data, your tools and your team.",
    stack: ["Python", "APIs", "Workflows", "Cloud Functions"],
    color: "#ffb84d",
  },
  {
    index: "05",
    title: "Robotics",
    description:
      "Vision, motion and control systems for machines that operate in the physical world.",
    stack: ["MediaPipe", "WebRTC", "Edge Compute", "Sensors"],
    color: "#ff5470",
  },
];
