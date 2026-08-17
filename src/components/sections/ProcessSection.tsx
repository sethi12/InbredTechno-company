"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

const PROCESS = [
  {
    number: "01",
    title: "DISCOVER",
    summary: "Understand the problem.",
    detail:
      "We don't pitch solutions on the first call. We dig into the actual problem, existing systems, and what success looks like.",
    color: "#4de8ff",
  },
  {
    number: "02",
    title: "DESIGN",
    summary: "Define the experience.",
    detail:
      "Architecture, UX flows, and technical specs — written before code. Design is how we make systems predictable.",
    color: "#8b7fff",
  },
  {
    number: "03",
    title: "ENGINEER",
    summary: "Build the system.",
    detail:
      "Full-stack engineering: backend, frontend, mobile, infra — shipped incrementally and tested in production.",
    color: "#3cff8e",
  },
  {
    number: "04",
    title: "INTELLIGENCE",
    summary: "Add automation and AI.",
    detail:
      "Once the system exists, we layer in the intelligence: computer vision, NLP, or custom ML pipelines.",
    color: "#ffb84d",
  },
  {
    number: "05",
    title: "DEPLOY",
    summary: "Launch and scale.",
    detail:
      "CI/CD pipelines, monitoring, load testing — deployed on your infrastructure, managed by us.",
    color: "#ff5470",
  },
];

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);

  const activeStep = Math.min(
    PROCESS.length - 1,
    Math.floor(progress * PROCESS.length * 1.3)
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative bg-(--color-void) py-32 md:py-40"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 11" label="Process" />
        <AnimatedText
          as="h2"
          text="Idea → System → Reality"
          className="mt-6 max-w-2xl font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
        />

        {/* desktop: horizontal stepper */}
        <div className="mt-20 hidden md:block">
          {/* connector line */}
          <div className="relative mb-12">
            <div className="absolute top-3 left-0 right-0 h-px bg-(--color-surface-border)" />
            <motion.div
              className="absolute top-3 left-0 h-px"
              style={{
                backgroundColor: PROCESS[activeStep].color,
                width: `${((activeStep + 1) / PROCESS.length) * 100}%`,
                boxShadow: `0 0 12px ${PROCESS[activeStep].color}`,
                transition: "width 0.5s ease, background-color 0.5s ease, box-shadow 0.5s ease",
              }}
            />
            <div className="flex justify-between">
              {PROCESS.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: i === activeStep ? 1.3 : 1,
                      backgroundColor:
                        i <= activeStep ? step.color : "var(--color-void)",
                      borderColor:
                        i <= activeStep ? step.color : "var(--color-surface-border)",
                    }}
                    transition={{ duration: 0.4 }}
                    className="h-6 w-6 rounded-full border"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* cards */}
          <div className="grid grid-cols-5 gap-4">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.number}
                animate={{
                  opacity: i <= activeStep ? 1 : 0.25,
                  y: i <= activeStep ? 0 : 12,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 rounded-xl border border-(--color-surface-border) p-5"
                style={{
                  borderColor:
                    i === activeStep ? step.color + "80" : undefined,
                  background:
                    i === activeStep ? step.color + "08" : undefined,
                }}
              >
                <span className="font-mono-tight text-xs" style={{ color: step.color }}>
                  {step.number}
                </span>
                <div>
                  <p className="font-display text-lg font-medium text-(--color-ink)">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-(--color-ink-faint)">{step.summary}</p>
                </div>
                <p className="text-xs leading-relaxed text-(--color-ink-dim)">
                  {step.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* mobile: vertical */}
        <div className="mt-16 flex flex-col gap-0 md:hidden">
          {PROCESS.map((step, i) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <motion.div
                  animate={{
                    backgroundColor: i <= activeStep ? step.color : "transparent",
                    borderColor: i <= activeStep ? step.color : "var(--color-surface-border)",
                  }}
                  className="h-5 w-5 shrink-0 rounded-full border"
                />
                {i < PROCESS.length - 1 && (
                  <div
                    className="mt-1 w-px flex-1 transition-colors duration-500"
                    style={{
                      backgroundColor:
                        i < activeStep ? step.color + "60" : "var(--color-surface-border)",
                      minHeight: "60px",
                    }}
                  />
                )}
              </div>

              <motion.div
                animate={{ opacity: i <= activeStep ? 1 : 0.3 }}
                className="pb-8 pt-0.5"
              >
                <span className="font-mono-tight text-xs" style={{ color: step.color }}>
                  {step.number} — {step.title}
                </span>
                <p className="mt-2 text-sm text-(--color-ink-dim)">{step.detail}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
