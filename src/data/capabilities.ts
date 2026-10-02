export interface Capability {
  index: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  color: string;
}

export const CAPABILITIES: Capability[] = [
  {
    index: "01",
    title: "AI & Machine Learning",
    tagline: "Computer Vision · Neural Architectures · Edge Inference",
    description:
      "We design, train, and deploy production-grade neural networks, real-time pose estimation, computer vision, and autonomous agent loops that perform in milliseconds on both cloud and edge hardware.",
    stack: ["PyTorch", "MediaPipe", "OpenCV", "TensorFlow", "Groq", "CUDA"],
    color: "#df9d56", // Caramel Gold
  },
  {
    index: "02",
    title: "Autonomous Robotics",
    tagline: "Sensor Fusion · Hardware Integration · Real-Time Control",
    description:
      "Physical machines powered by intelligent software. We engineer hardware kiosks, kinematic control systems, LIDAR/camera fusion, and low-latency motor actuation pipelines.",
    stack: ["Edge AI", "WebRTC", "C++ Engine", "ROS/Micro-ROS", "MQTT", "Embedded Linux"],
    color: "#e8a867", // Warm Amber
  },
  {
    index: "03",
    title: "Intelligent SaaS Platforms",
    tagline: "Multi-Tenant Cloud · Microservices · High Concurrency",
    description:
      "Enterprise-scale multi-tenant architectures engineered for fault-tolerant operation, automated billing, 3D interactive visualizations, and high-throughput data processing.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Stripe", "Redis"],
    color: "#f5eedf", // Silky Cream
  },
  {
    index: "04",
    title: "High-Performance Applications",
    tagline: "iOS · Android · Interactive Web Experiences",
    description:
      "Native and cross-platform mobile and web applications built with 60fps animations, custom video transcoding engines, real-time sync, and bespoke user experiences.",
    stack: ["Flutter", "React Native", "Three.js", "Swift", "WebSockets", "Firebase"],
    color: "#cca074", // Golden Mocha
  },
  {
    index: "05",
    title: "Intelligent Automation & IoT",
    tagline: "Workflow Orchestration · Data Pipelines · Fleet Telemetry",
    description:
      "Eliminating manual friction between distributed hardware devices, enterprise databases, cloud services, and operational command centers.",
    stack: ["Python", "Rust", "TimescaleDB", "Cloud Functions", "GraphQL", "Kafka"],
    color: "#c57e3a", // Luxury Bronze
  },
];
