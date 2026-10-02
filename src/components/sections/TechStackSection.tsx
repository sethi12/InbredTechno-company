"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";

const TECH_STACK = [
  { name: "PyTorch", category: "ai", color: "#df9d56" },
  { name: "MediaPipe", category: "ai", color: "#df9d56" },
  { name: "OpenCV", category: "ai", color: "#e8a867" },
  { name: "TensorFlow", category: "ai", color: "#df9d56" },
  { name: "Next.js", category: "frontend", color: "#1A100B" },
  { name: "React", category: "frontend", color: "#1A100B" },
  { name: "TypeScript", category: "frontend", color: "#1A100B" },
  { name: "Three.js", category: "frontend", color: "#cca074" },
  { name: "Flutter", category: "mobile", color: "#cca074" },
  { name: "React Native", category: "mobile", color: "#cca074" },
  { name: "Python", category: "backend", color: "#df9d56" },
  { name: "Node.js", category: "backend", color: "#e8a867" },
  { name: "Rust / C++", category: "robotics", color: "#c57e3a" },
  { name: "WebRTC", category: "robotics", color: "#5cb88a" },
  { name: "PostgreSQL", category: "infra", color: "#1A100B" },
  { name: "Docker", category: "infra", color: "#e8a867" },
];

export function TechStackSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="stack" className="relative bg-[#F5EFE6] py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-cream opacity-50" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 09
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-(--color-chocolate-dim)">
            Technical Ecosystem
          </span>
        </div>

        <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold tracking-tight text-(--color-chocolate-ink) md:text-5xl cream-title-gradient">
          The Engineering Stack Behind the Intelligence.
        </h2>

        {/* Orbit Constellation in Cream Glass */}
        <div className="mt-20 flex flex-col items-center">
          <div className="relative flex h-[520px] w-full max-w-2xl items-center justify-center md:h-[600px]">
            {/* Orbit rings */}
            {[180, 275, 375].map((r, ri) => (
              <div
                key={r}
                className="absolute rounded-full border border-[rgba(42,23,16,0.08)]"
                style={{
                  width: r,
                  height: r,
                  opacity: 0.6 - ri * 0.1,
                  boxShadow: ri === 0 ? "0 0 30px rgba(223,157,86,0.06)" : "none",
                }}
              />
            ))}

            {/* Central Core in Cream & Chocolate */}
            <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[rgba(42,23,16,0.15)] bg-[rgba(255,255,255,0.95)] shadow-xl backdrop-blur-md">
              <span className="font-display text-xs font-bold tracking-tight text-(--color-chocolate-ink) leading-tight text-center px-2">
                INBRED
                <br />
                TECHNO
              </span>
              <span className="font-mono text-[7px] text-(--color-caramel) mt-1 tracking-widest uppercase font-bold">
                ENGINEERING CORE
              </span>
            </div>

            {/* Orbit Items */}
            {TECH_STACK.map((tech, i) => {
              const total = TECH_STACK.length;
              const angle = (i / total) * 360;
              const ring = i % 3;
              const radius = ring === 0 ? 90 : ring === 1 ? 138 : 188;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isHovered = hovered === tech.name;
              const isRelated = hovered
                ? TECH_STACK.find((t) => t.name === hovered)?.category === tech.category
                : false;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={() => setHovered(tech.name)}
                  onMouseLeave={() => setHovered(null)}
                  data-cursor="link"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                      opacity: hovered ? (isHovered || isRelated ? 1 : 0.25) : 0.9,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex cursor-default items-center justify-center rounded-full border px-3.5 py-1.5 text-center backdrop-blur-md transition-all shadow-sm"
                    style={{
                      borderColor: isHovered
                        ? "var(--color-caramel)"
                        : isRelated
                        ? "rgba(223, 157, 86, 0.5)"
                        : "rgba(42, 23, 16, 0.12)",
                      backgroundColor: isHovered
                        ? "#1A100B"
                        : "#FFFFFF",
                      boxShadow: isHovered ? "0 10px 24px rgba(42, 23, 16, 0.2)" : "0 2px 8px rgba(0,0,0,0.04)",
                    }}
                  >
                    <span
                      className="font-mono text-[10px] font-bold"
                      style={{
                        color: isHovered ? "#FBF7EE" : tech.color === "#1A100B" ? "var(--color-chocolate-ink)" : tech.color,
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Category legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-[rgba(42,23,16,0.08)] bg-[rgba(255,255,255,0.7)] p-3 px-6 backdrop-blur-md shadow-sm">
            {[
              { cat: "ai", color: "#df9d56", label: "AI & Machine Learning" },
              { cat: "robotics", color: "#5cb88a", label: "Robotics & Edge" },
              { cat: "frontend", color: "#1A100B", label: "Frontend & 3D" },
              { cat: "mobile", color: "#cca074", label: "Mobile Apps" },
              { cat: "backend", color: "#e8a867", label: "Cloud Backends" },
            ].map((c) => (
              <div key={c.cat} className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="font-mono text-[10px] font-semibold text-(--color-chocolate-dim)">
                  {c.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
