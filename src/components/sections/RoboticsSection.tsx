"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThreeScene } from "@/components/scenes/ThreeScene";
import { RobotAssembly } from "@/components/scenes/RobotAssembly";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

const LABELS = [
  { name: "VISION", desc: "Computer vision + depth sensing", color: "#4de8ff" },
  { name: "MOTION", desc: "Servo + motor control", color: "#8b7fff" },
  { name: "CONTROL", desc: "Real-time control loops", color: "#3cff8e" },
  { name: "SENSORS", desc: "IMU, LIDAR, ultrasonic", color: "#ffb84d" },
  { name: "AI", desc: "Edge inference on-device", color: "#ff5470" },
  { name: "EDGE", desc: "Latency-optimized compute", color: "#4de8ff" },
];

export function RoboticsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);
  const tier = useDeviceTier();

  const assembled = progress >= 0.72;
  const activated = progress >= 0.88;

  return (
    <section
      ref={sectionRef}
      id="robotics"
      className="relative bg-(--color-void) py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-1000"
        style={{ opacity: activated ? 0.06 : 0 }}
      >
        <div className="h-full w-full bg-gradient-radial from-(--color-active) to-transparent" />
      </div>

      <div className="sticky top-0 mx-auto h-screen max-w-7xl px-6 md:px-10">
        <div className="absolute inset-0">
          <ThreeScene cameraPosition={[0, 0.2, 5.5]} fov={46}>
            <RobotAssembly
              scrollProgress={Math.min(1, progress * 1.15)}
              lowPower={tier === "low"}
            />
          </ThreeScene>
        </div>

        <div className="relative z-10 flex h-full flex-col justify-between p-6 md:p-10">
          <div>
            <SectionLabel index="SYSTEM 07" label="Robotics" light />
            <motion.div
              style={{ opacity: Math.max(0, 1 - progress * 2) }}
              className="mt-8 max-w-xl"
            >
              <AnimatedText
                as="h2"
                text="We don't stop at software."
                className="font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
              />
              <p className="mt-6 max-w-md text-(--color-ink-dim)">
                We build systems that can move, see, understand and interact
                with the physical world. Software that becomes hardware.
              </p>
            </motion.div>
          </div>

          {/* system labels — appear after assembly */}
          <motion.div
            animate={{ opacity: assembled ? 1 : 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div
              className="hud-label transition-colors duration-700"
              style={{ color: activated ? "var(--color-active)" : "var(--color-cyan)" }}
            >
              {activated ? "SYSTEM ONLINE — ALL MODULES ACTIVE" : "ASSEMBLY COMPLETE — INITIALIZING"}
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {LABELS.map((l) => (
                <motion.div
                  key={l.name}
                  animate={{ opacity: assembled ? 1 : 0, y: assembled ? 0 : 10 }}
                  transition={{ duration: 0.4 }}
                  className="border border-(--color-surface-border) rounded p-3"
                >
                  <div
                    className={`h-1.5 w-1.5 rounded-full mb-2 transition-colors duration-700`}
                    style={{ backgroundColor: activated ? l.color : "var(--color-ink-faint)" }}
                  />
                  <p className="hud-label" style={{ color: l.color }}>
                    {l.name}
                  </p>
                  <p className="hud-label mt-1 !text-[9px] text-(--color-ink-faint)">
                    {l.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
