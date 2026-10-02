"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeScene } from "@/components/scenes/ThreeScene";
import { DeviceScene } from "@/components/scenes/DeviceScene";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { SectionLabel, HudLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Smartphone, Tablet, Globe, Zap, Video, Radio } from "lucide-react";

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
      <div className="absolute inset-0 bg-grid opacity-[0.14]" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.08)_0%,transparent_70%)] blur-3xl" />

      <div className="sticky top-0 mx-auto h-screen max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0">
          <ThreeScene cameraPosition={[0, 0, 5]} fov={48}>
            <DeviceScene scrollProgress={Math.min(1, progress * 1.4)} lowPower={tier === "low"} />
          </ThreeScene>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10 pointer-events-auto">
          <div>
            <SectionLabel index="SYSTEM 05" label="Applications" light />
            <motion.div
              style={{ opacity: Math.max(0, 1 - progress * 1.8) }}
              className="mt-8 max-w-2xl"
            >
              <AnimatedText
                as="h2"
                text="High-Performance Applications for Millions."
                className="font-display text-4xl font-bold tracking-tight text-(--color-ink) md:text-5xl cream-gradient-text"
              />
              <p className="mt-6 max-w-md text-base leading-relaxed text-(--color-ink-dim)">
                Native and cross-platform mobile and web applications engineered from scratch. Featuring automated video pipelines, sub-second streaming, and 60fps gesture interfaces.
              </p>
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: Math.min(1, (progress - 0.45) * 2.2) }}
            className="max-w-2xl"
          >
            <div className="font-mono text-xs font-semibold tracking-widest text-(--color-caramel) uppercase mb-4">
              SUPPORTED RUNTIMES & CLIENTS
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { name: "iOS NATIVE & FLUTTER", icon: Smartphone, color: "#df9d56", desc: "Swift, Metal & Flutter" },
                { name: "ANDROID ECOSYSTEM", icon: Tablet, color: "#fbf7ee", desc: "Kotlin & NDK Engine" },
                { name: "WEB APPS & WEBGL", icon: Globe, color: "#cca074", desc: "Next.js, Three.js & WASM" },
              ].map((p) => {
                const PlatformIcon = p.icon;
                return (
                  <div
                    key={p.name}
                    className="flex flex-col gap-2 rounded-2xl border border-[rgba(246,238,227,0.1)] bg-[rgba(27,18,13,0.85)] p-4 backdrop-blur-md transition-colors hover:border-(--color-caramel)/40"
                  >
                    <PlatformIcon size={20} style={{ color: p.color }} />
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase" style={{ color: p.color }}>
                        {p.name}
                      </p>
                      <p className="font-mono text-[9px] text-(--color-ink-faint) mt-0.5">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
