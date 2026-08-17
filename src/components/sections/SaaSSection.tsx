"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeScene, SceneFallback } from "@/components/scenes/ThreeScene";
import { SaaSArchitecture } from "@/components/scenes/SaaSArchitecture";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function SaaSSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const tier = useDeviceTier();

  return (
    <section ref={sectionRef} id="saas" className="relative bg-(--color-void) py-32 md:py-48">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="absolute inset-0 bg-noise opacity-[0.02]" />

      <div className="sticky top-0 mx-auto h-screen max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0 flex flex-col">
          <ThreeScene cameraPosition={[0, 0, 6]} fov={50}>
            <SaaSArchitecture scrollProgress={Math.min(1, progress * 1.4)} lowPower={tier === "low"} />
          </ThreeScene>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
          <div>
            <SectionLabel index="SYSTEM 03" label="Products" light />
            <motion.div
              style={{ opacity: Math.max(0, 1 - progress * 1.8) }}
              className="mt-8 max-w-2xl"
            >
              <AnimatedText
                as="h2"
                text="Software that scales."
                className="font-display text-5xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
              />
              <p className="mt-6 max-w-md text-(--color-ink-dim)">
                Multi-tenant platforms built to power real businesses. From
                authentication and billing to the dashboards your users live in
                every day.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: Math.min(1, (progress - 0.5) * 2) }}
            className="max-w-2xl"
          >
            <div className="hud-label mb-4 text-(--color-cyan)">KEY COMPONENTS</div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {["API", "AUTH", "PAYMENTS", "DATABASE", "ANALYTICS", "NOTIFICATIONS"].map(
                (c) => (
                  <div
                    key={c}
                    className="border border-(--color-surface-border) px-3 py-2 rounded"
                  >
                    <span className="hud-label text-(--color-ink-faint)">{c}</span>
                  </div>
                )
              )}
            </div>

            <div className="mt-8 flex gap-4">
              <MagneticButton href="#contact" variant="solid" className="!text-xs">
                Build with Us
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
