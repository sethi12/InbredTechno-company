"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

const TECH_STACK = [
  { name: "React", category: "frontend", color: "#4de8ff" },
  { name: "Next.js", category: "frontend", color: "#4de8ff" },
  { name: "TypeScript", category: "frontend", color: "#4de8ff" },
  { name: "Three.js", category: "frontend", color: "#8b7fff" },
  { name: "Flutter", category: "mobile", color: "#3cff8e" },
  { name: "React Native", category: "mobile", color: "#3cff8e" },
  { name: "Node.js", category: "backend", color: "#ffb84d" },
  { name: "Python", category: "backend", color: "#ffb84d" },
  { name: "PyTorch", category: "ai", color: "#ff5470" },
  { name: "OpenCV", category: "ai", color: "#ff5470" },
  { name: "TensorFlow", category: "ai", color: "#ff5470" },
  { name: "MediaPipe", category: "ai", color: "#ff5470" },
  { name: "MongoDB", category: "infra", color: "#8b7fff" },
  { name: "PostgreSQL", category: "infra", color: "#8b7fff" },
  { name: "Firebase", category: "infra", color: "#ffb84d" },
  { name: "Docker", category: "infra", color: "#4de8ff" },
];

export function TechStackSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="stack" className="relative bg-(--color-void) py-32 md:py-40">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 10" label="Technology" />
        <AnimatedText
          as="h2"
          text="The tools are part of the craft."
          className="mt-6 max-w-2xl font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-5xl"
        />

        {/* Orbit visualization — CSS-based for perf, Three.js-free */}
        <div className="mt-20 flex flex-col items-center">
          <div className="relative flex h-[520px] w-full max-w-2xl items-center justify-center md:h-[600px]">
            {/* orbits rings */}
            {[180, 270, 360].map((r, ri) => (
              <div
                key={r}
                className="absolute rounded-full border border-(--color-surface-border)"
                style={{
                  width: r,
                  height: r,
                  opacity: 0.3 - ri * 0.05,
                }}
              />
            ))}

            {/* central core */}
            <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full border border-(--color-cyan)/40 bg-(--color-void)">
              <div className="absolute inset-0 rounded-full bg-(--color-cyan)/5" />
              <span className="font-display text-[10px] font-medium tracking-tight text-(--color-cyan) leading-tight text-center px-2">
                INBRED
                <br />
                TECHNO
              </span>
            </div>

            {/* orbit items */}
            {TECH_STACK.map((tech, i) => {
              const total = TECH_STACK.length;
              const angle = (i / total) * 360;
              const ring = i % 3;
              const radius = ring === 0 ? 90 : ring === 1 ? 135 : 180;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;
              const isHovered = hovered === tech.name;
              const isRelated = hovered
                ? TECH_STACK.find((t) => t.name === hovered)?.category ===
                  tech.category
                : false;

              return (
                <motion.div
                  key={tech.name}
                  className="absolute"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
                  onMouseEnter={() => setHovered(tech.name)}
                  onMouseLeave={() => setHovered(null)}
                  data-cursor="link"
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.2 : 1,
                      opacity: hovered
                        ? isHovered || isRelated
                          ? 1
                          : 0.2
                        : 0.8,
                    }}
                    transition={{ duration: 0.25 }}
                    className="flex cursor-default items-center justify-center rounded-full border px-3 py-1.5 text-center"
                    style={{
                      borderColor: isHovered
                        ? tech.color
                        : isRelated
                        ? tech.color + "88"
                        : "var(--color-surface-border)",
                      backgroundColor: isHovered ? tech.color + "18" : "var(--color-void)",
                      boxShadow: isHovered ? `0 0 20px ${tech.color}44` : "none",
                    }}
                  >
                    <span
                      className="hud-label !text-[9px]"
                      style={{
                        color: isHovered
                          ? tech.color
                          : "var(--color-ink-faint)",
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* category legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {[
              { cat: "frontend", color: "#4de8ff", label: "Frontend" },
              { cat: "mobile", color: "#3cff8e", label: "Mobile" },
              { cat: "backend", color: "#ffb84d", label: "Backend" },
              { cat: "ai", color: "#ff5470", label: "AI / ML" },
              { cat: "infra", color: "#8b7fff", label: "Infrastructure" },
            ].map((c) => (
              <div key={c.cat} className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: c.color }} />
                <span className="hud-label text-(--color-ink-faint)">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
