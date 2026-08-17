"use client";

import { useRef } from "react";
import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { SectionLabel } from "@/components/ui/Atoms";

const PIPELINE = [
  { id: "user", label: "USER", sublabel: "Mobile App", icon: "👤", color: "#4de8ff" },
  { id: "app", label: "APP", sublabel: "Command Input", icon: "📱", color: "#8b7fff" },
  { id: "api", label: "API", sublabel: "REST / WebSocket", icon: "⚡", color: "#4de8ff" },
  { id: "ai", label: "AI SYSTEM", sublabel: "Decision Layer", icon: "🧠", color: "#3cff8e" },
  { id: "robot", label: "ROBOT", sublabel: "Control Unit", icon: "🤖", color: "#ffb84d" },
  { id: "action", label: "PHYSICAL ACTION", sublabel: "Real-world output", icon: "⚙️", color: "#ff5470" },
];

export function RobotControlSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);

  // how many pipeline stages are "active" based on scroll
  const activeCount = Math.floor(progress * PIPELINE.length * 1.4);

  return (
    <section
      ref={sectionRef}
      id="robot-control"
      className="relative bg-(--color-void) py-32 md:py-40"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.1]" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 08" label="Control Architecture" />

        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-5xl">
          Software controls
          <br />
          <span className="text-(--color-cyan)">physical machines.</span>
        </h2>

        <p className="mt-6 max-w-md text-(--color-ink-dim)">
          From a tap on a phone to a motor turning in the physical world — the
          full stack, designed by us.
        </p>

        {/* Pipeline visualization */}
        <div className="mt-20 flex flex-col items-center gap-0">
          {PIPELINE.map((step, i) => (
            <div key={step.id} className="flex w-full flex-col items-center">
              {/* node */}
              <motion.div
                animate={{
                  opacity: i < activeCount ? 1 : 0.2,
                  scale: i === activeCount - 1 ? 1.04 : 1,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex w-full max-w-xl items-center gap-5 rounded-xl border border-(--color-surface-border) p-4 md:p-5"
                style={{
                  background:
                    i < activeCount ? `${step.color}08` : "transparent",
                  borderColor:
                    i === activeCount - 1 ? step.color : "var(--color-surface-border)",
                }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                  style={{
                    borderColor: i < activeCount ? step.color : "var(--color-ink-faint)",
                    boxShadow: i === activeCount - 1 ? `0 0 24px ${step.color}55` : "none",
                  }}
                >
                  <span className="text-lg">{step.icon}</span>
                </div>

                <div>
                  <p
                    className="font-mono-tight text-sm font-medium transition-colors duration-500"
                    style={{ color: i < activeCount ? step.color : "var(--color-ink-faint)" }}
                  >
                    {step.label}
                  </p>
                  <p className="hud-label text-(--color-ink-faint)">{step.sublabel}</p>
                </div>

                {/* pulse dot */}
                {i === activeCount - 1 && (
                  <motion.div
                    className="absolute right-4 h-2 w-2 rounded-full"
                    style={{ backgroundColor: step.color }}
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  />
                )}
              </motion.div>

              {/* connector */}
              {i < PIPELINE.length - 1 && (
                <div className="relative flex w-10 flex-col items-center py-1">
                  <motion.div
                    animate={{ opacity: i < activeCount - 1 ? 1 : 0.15 }}
                    className="h-8 w-px"
                    style={{
                      background:
                        i < activeCount - 1
                          ? `linear-gradient(to bottom, ${step.color}, ${PIPELINE[i + 1].color})`
                          : "var(--color-surface-border)",
                    }}
                  />
                  {i < activeCount - 1 && (
                    <motion.div
                      className="absolute h-1.5 w-1.5 rounded-full"
                      style={{ backgroundColor: step.color }}
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.18 }}
                    />
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <motion.div
          animate={{ opacity: activeCount >= PIPELINE.length ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 border border-(--color-active)/30 rounded-xl p-5 text-center"
        >
          <span className="hud-label text-(--color-active)">
            ✓ FULL STACK CONNECTED — SOFTWARE + AI + HARDWARE
          </span>
        </motion.div>
      </div>
    </section>
  );
}
