"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeScene, SceneFallback } from "@/components/scenes/ThreeScene";
import { DeviceScene } from "@/components/scenes/DeviceScene";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function ApplicationsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const tier = useDeviceTier();

  return (
    <section
      ref={sectionRef}
      id="applications"
      className="relative bg-(--color-void) py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />

      <div className="sticky top-0 mx-auto h-screen max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0">
          <ThreeScene cameraPosition={[0, 0, 5]} fov={48}>
            <DeviceScene scrollProgress={Math.min(1, progress * 1.4)} lowPower={tier === "low"} />
          </ThreeScene>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
          <div>
            <SectionLabel index="SYSTEM 04" label="Applications" light />
            <motion.div
              style={{ opacity: Math.max(0, 1 - progress * 1.8) }}
              className="mt-8 max-w-2xl"
            >
              <AnimatedText
                as="h2"
                text="Applications, built for real people."
                className="font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-5xl"
              />
              <p className="mt-6 max-w-md text-(--color-ink-dim)">
                iOS, Android and web applications engineered from the ground up.
                Not templates. Not frameworks. Built for your problem.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: Math.min(1, (progress - 0.5) * 2) }}
            className="max-w-2xl"
          >
            <div className="hud-label mb-4 text-(--color-cyan)">PLATFORMS</div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "iOS", icon: "📱", color: "#4de8ff" },
                { name: "Android", icon: "🔧", color: "#8b7fff" },
                { name: "Web", icon: "🌐", color: "#3cff8e" },
              ].map((p) => (
                <div key={p.name} className="border border-(--color-surface-border) p-4 rounded">
                  <span className="text-2xl">{p.icon}</span>
                  <p className="hud-label mt-2" style={{ color: p.color }}>
                    {p.name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
