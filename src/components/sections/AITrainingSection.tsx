"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeScene } from "@/components/scenes/ThreeScene";
import { AITrainingVisualization } from "@/components/scenes/AITrainingVisualization";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

const STAGES = [
  { label: "DATASET", color: "#4de8ff", desc: "Raw data ingested" },
  { label: "TRAINING", color: "#8b7fff", desc: "Gradient descent" },
  { label: "EVALUATION", color: "#3cff8e", desc: "Loss measured" },
  { label: "OPTIMIZATION", color: "#ffb84d", desc: "Weights refined" },
  { label: "MODEL", color: "#4de8ff", desc: "Architecture frozen" },
  { label: "DEPLOYMENT", color: "#3cff8e", desc: "Serving at scale" },
];

export function AITrainingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const tier = useDeviceTier();

  const activeStage = Math.min(STAGES.length - 1, Math.floor(progress * STAGES.length * 1.2));

  return (
    <section
      ref={sectionRef}
      id="ai-training"
      className="relative bg-(--color-void) py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.1]" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-(--color-active)/5 blur-[160px]" />

      <div className="sticky top-0 mx-auto h-screen max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0">
          <ThreeScene cameraPosition={[0, 0, 7]} fov={48}>
            <AITrainingVisualization
              scrollProgress={Math.min(1, progress * 1.4)}
              lowPower={tier === "low"}
            />
          </ThreeScene>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
          <div>
            <SectionLabel index="SYSTEM 06" label="Model Training" light />
            <motion.div
              style={{ opacity: Math.max(0, 1 - progress * 2) }}
              className="mt-8 max-w-2xl"
            >
              <AnimatedText
                as="h2"
                text="From data to intelligence."
                className="font-display text-5xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
              />
              <p className="mt-6 max-w-md text-(--color-ink-dim)">
                We don&rsquo;t fine-tune pre-built models and call it AI. We
                build, train and deploy custom intelligence from scratch — for
                your domain, your data, your problem.
              </p>
            </motion.div>
          </div>

          {/* pipeline stages */}
          <div className="max-w-2xl">
            <div className="hud-label mb-6 text-(--color-cyan)">TRAINING PIPELINE</div>
            <div className="flex flex-col gap-2">
              {STAGES.map((s, i) => (
                <motion.div
                  key={s.label}
                  animate={{
                    opacity: i <= activeStage ? 1 : 0.2,
                  }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div
                    className="h-1.5 w-1.5 rounded-full transition-colors duration-500"
                    style={{
                      backgroundColor: i <= activeStage ? s.color : "var(--color-ink-faint)",
                      boxShadow: i === activeStage ? `0 0 12px ${s.color}` : "none",
                    }}
                  />
                  <span
                    className="hud-label transition-colors duration-500"
                    style={{ color: i <= activeStage ? s.color : "var(--color-ink-faint)" }}
                  >
                    {s.label}
                  </span>
                  {i === activeStage && (
                    <motion.span
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="hud-label !text-[10px] text-(--color-ink-faint)"
                    >
                      — {s.desc}
                    </motion.span>
                  )}
                  {i < STAGES.length - 1 && (
                    <span
                      className="ml-auto hud-label text-(--color-ink-faint)"
                      style={{ opacity: i < activeStage ? 0.6 : 0.15 }}
                    >
                      ↓
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
