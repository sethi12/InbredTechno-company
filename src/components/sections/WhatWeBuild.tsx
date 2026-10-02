"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Bot, Layers, Smartphone, ShoppingBag, Eye } from "lucide-react";

export interface CapabilityItem {
  index: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Cpu;
  stack: string[];
}

export const CAPABILITIES_LIST: CapabilityItem[] = [
  {
    index: "01",
    title: "AI & Machine Learning",
    tagline: "Computer Vision · Neural Architectures · Edge Inference",
    description:
      "We design, train, and deploy production-grade neural networks, 33-point pose estimation models, computer vision pipelines, and autonomous agent loops that perform in sub-20 milliseconds on both cloud and edge hardware.",
    icon: Cpu,
    stack: ["PyTorch", "MediaPipe", "TensorFlow", "Groq", "CUDA", "ONNX"],
  },
  {
    index: "02",
    title: "Autonomous Robotics",
    tagline: "Sensor Fusion · Hardware Kiosks · Real-Time Control",
    description:
      "Physical machines powered by deterministic software. We engineer commercial hardware kiosks, kinematic control systems, LiDAR/stereo vision fusion, and low-latency motor actuation pipelines.",
    icon: Bot,
    stack: ["Edge AI", "WebRTC", "C++ Engine", "ROS / Micro-ROS", "MQTT", "Kiosk OS"],
  },
  {
    index: "03",
    title: "Software & Scalable Platforms",
    tagline: "Web Platforms · Mobile Apps · High-Concurrency Backends",
    description:
      "High-throughput systems engineered for millions of concurrent interactions. From Flutter video reels pipelines with custom HLS transcoding to real-time event-driven backends.",
    icon: Smartphone,
    stack: ["Next.js", "Flutter", "Node.js", "PostgreSQL", "Redis", "Cloud Run"],
  },
  {
    index: "04",
    title: "SaaS Products & Cloud",
    tagline: "Multi-Tenant Infrastructure · Automated Billing · 3D Dashboards",
    description:
      "Enterprise-scale multi-tenant architectures engineered for fault-tolerant operation, automated Stripe recurring billing, 3D interactive visualizations, and high-throughput data processing.",
    icon: Layers,
    stack: ["Next.js", "Docker", "Stripe API", "MongoDB", "Three.js", "GraphQL"],
  },
  {
    index: "05",
    title: "Computer Vision & AR",
    tagline: "Pose Detection · Neural Garment Warping · Body Tracking",
    description:
      "Real-time visual intelligence and augmented reality mirrors. Deep-learning body segmentation and 3D cloth deformation shaders for retail kiosks and web viewports.",
    icon: Eye,
    stack: ["OpenCV", "PyTorch", "WebGL", "TensorRT", "WebSockets"],
  },
  {
    index: "06",
    title: "E-Commerce Technology",
    tagline: "3D Product Storefronts · Headless Commerce · Payment Systems",
    description:
      "Modern digital commerce experiences with 3D product viewports, seamless cart orchestration, Level 1 PCI Stripe security, and automated inventory sync (as engineered for FiveWellness).",
    icon: ShoppingBag,
    stack: ["Headless Next.js", "Three.js", "Stripe Elements", "Tailwind CSS", "MongoDB"],
  },
];

export function WhatWeBuild() {
  const [active, setActive] = useState(0);
  const activeCapability = CAPABILITIES_LIST[active];
  const IconComponent = activeCapability.icon;

  return (
    <section id="capabilities" className="relative bg-[#F5EFE6] py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-cream opacity-50" />
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 04
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-(--color-chocolate-dim)">
            Core Capabilities Matrix
          </span>
        </div>

        <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold tracking-tight text-(--color-chocolate-ink) md:text-6xl cream-title-gradient">
          From Intelligent Code to Physical Machines.
        </h2>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-(--color-chocolate-dim) md:text-lg">
          We engineer full-stack technology solutions across artificial intelligence, autonomous robotics, cloud SaaS infrastructure, computer vision, and modern commerce platforms.
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Capabilities Selector List */}
          <div className="divide-y divide-[rgba(42,23,16,0.08)] border-y border-[rgba(42,23,16,0.08)]">
            {CAPABILITIES_LIST.map((cap, i) => {
              const ItemIcon = cap.icon;
              const isActive = active === i;

              return (
                <button
                  key={cap.index}
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  data-cursor="link"
                  className={`group flex w-full items-center justify-between py-6 text-left transition-all duration-300 px-4 rounded-2xl ${
                    isActive
                      ? "bg-[rgba(255,255,255,0.85)] border-l-4 border-(--color-caramel) pl-5 shadow-sm"
                      : "hover:bg-[rgba(255,255,255,0.4)] hover:pl-5"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "border-(--color-caramel) bg-(--color-caramel)/15 text-(--color-chocolate-ink) shadow-sm"
                          : "border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.6)] text-(--color-chocolate-faint) group-hover:text-(--color-chocolate-ink)"
                      }`}
                    >
                      <ItemIcon size={18} />
                    </div>

                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="font-mono text-xs font-bold text-(--color-caramel)">
                          {cap.index}
                        </span>
                        <h3
                          className={`font-display text-xl md:text-2xl font-bold transition-colors duration-200 ${
                            isActive ? "text-(--color-chocolate-ink)" : "text-(--color-chocolate-dim) group-hover:text-(--color-chocolate-ink)"
                          }`}
                        >
                          {cap.title}
                        </h3>
                      </div>
                      <p className="mt-1 font-mono text-[10px] tracking-wider text-(--color-chocolate-faint)">
                        {cap.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "text-(--color-caramel) translate-x-0 opacity-100"
                        : "text-(--color-chocolate-faint) -translate-x-2 opacity-0 group-hover:opacity-60"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Interactive Feature Panel in Light Glass */}
          <div className="relative sticky top-32">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCapability.index}
                initial={{ opacity: 0, y: 14, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.85)] p-8 backdrop-blur-2xl shadow-xl"
              >
                {/* Header with Aura Pill */}
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(223,157,86,0.3)] bg-(--color-caramel)/15 px-3.5 py-1 text-xs font-mono font-bold text-(--color-chocolate-ink)">
                    <span>MODULE {activeCapability.index}</span>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.95)] text-(--color-caramel) shadow-sm">
                    <IconComponent size={22} />
                  </div>
                </div>

                <h4 className="mt-6 font-display text-2xl md:text-3xl font-bold text-(--color-chocolate-ink)">
                  {activeCapability.title}
                </h4>

                <p className="mt-4 text-base leading-relaxed text-(--color-chocolate-dim)">
                  {activeCapability.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-8 border-t border-[rgba(42,23,16,0.08)] pt-6">
                  <p className="font-mono text-[10px] tracking-widest text-(--color-chocolate-faint) uppercase mb-3">
                    CORE TECH STACK & INTEGRATION
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeCapability.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.9)] px-3 py-1.5 font-mono text-[11px] font-semibold text-(--color-chocolate-ink) shadow-sm"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[rgba(42,23,16,0.08)] pt-6">
                  <span className="font-mono text-[10px] tracking-wider text-(--color-active) flex items-center gap-2 font-semibold">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-active) animate-ping" />
                    PRODUCTION READY
                  </span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-(--color-caramel) hover:underline"
                  >
                    <span>Request Engineering Spec</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
