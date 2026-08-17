"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeScene, SceneFallback } from "@/components/scenes/ThreeScene";
import { NeuralNetwork } from "@/components/scenes/NeuralNetwork";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { SectionLabel, HudLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

const AI_CAPABILITIES = [
  { name: "Computer Vision", desc: "Image recognition & analysis" },
  { name: "NLP", desc: "Language understanding" },
  { name: "Generative AI", desc: "Content creation" },
  { name: "Recommendation", desc: "Personalization" },
  { name: "Predictive", desc: "Forecasting" },
  { name: "AI Agents", desc: "Autonomous systems" },
];

export function AISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const tier = useDeviceTier();

  return (
    <section ref={sectionRef} id="ai" className="relative bg-(--color-void) py-32 md:py-48">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-(--color-violet)/8 blur-[120px]" />

      <div className="sticky top-0 mx-auto h-screen max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0">
          <ThreeScene cameraPosition={[0, 0, 8]} fov={45}>
            <NeuralNetwork scrollProgress={Math.min(1, progress * 1.3)} lowPower={tier === "low"} />
          </ThreeScene>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
          <div>
            <SectionLabel index="SYSTEM 05" label="Intelligence" light />
            <motion.div
              style={{ opacity: Math.max(0, 1 - progress * 1.8) }}
              className="mt-8 max-w-2xl"
            >
              <AnimatedText
                as="h2"
                text="Intelligence, engineered."
                className="font-display text-5xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
              />
              <p className="mt-6 max-w-md text-(--color-ink-dim)">
                Not notebooks. Not experiments. We build AI systems that ship
                and scale. From custom models to production inference.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: Math.min(1, (progress - 0.4) * 2) }}
            className="space-y-8"
          >
            <div>
              <HudLabel className="mb-4 text-(--color-cyan)">CORE CAPABILITIES</HudLabel>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {AI_CAPABILITIES.map((cap) => (
                  <div
                    key={cap.name}
                    className="border border-(--color-surface-border) rounded p-3"
                  >
                    <p className="hud-label text-(--color-ink)">{cap.name}</p>
                    <p className="hud-label mt-1 text-[9px] text-(--color-ink-faint)">
                      {cap.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <HudLabel className="text-(--color-cyan)">PIPELINE</HudLabel>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                {["DATA", "TRAINING", "MODEL", "INFERENCE", "PRODUCT"].map((stage, i) => (
                  <div key={stage} className="flex items-center gap-2">
                    <span className="hud-label text-(--color-ink-faint)">{stage}</span>
                    {i < 4 && <span className="text-(--color-cyan)">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
