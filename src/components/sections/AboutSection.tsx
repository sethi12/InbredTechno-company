"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSectionProgress } from "@/hooks/useScrollProgress";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

const PILLARS = [
  {
    id: "software",
    title: "SOFTWARE",
    desc: "Interfaces, APIs, platforms and systems that actually work.",
    color: "#4de8ff",
    angle: -120,
  },
  {
    id: "intelligence",
    title: "INTELLIGENCE",
    desc: "Vision, language, prediction. AI that ships.",
    color: "#8b7fff",
    angle: 0,
  },
  {
    id: "machines",
    title: "MACHINES",
    desc: "Robots, edge devices, and systems in the physical world.",
    color: "#3cff8e",
    angle: 120,
  },
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useSectionProgress(sectionRef);

  // convergence: pillars spread at 0, merge toward center at 1
  const spread = Math.max(0, 1 - progress * 1.6);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-(--color-void) py-32 md:py-48"
    >
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 12" label="About" />

        <div className="mt-16 grid items-center gap-16 md:grid-cols-2 md:gap-24">
          {/* Three merging circles — CSS animation */}
          <div className="relative flex h-80 items-center justify-center md:h-[480px]">
            {PILLARS.map((p) => {
              const rad = ((p.angle - 90) * Math.PI) / 180;
              const distance = 100 * spread;
              const tx = Math.cos(rad) * distance;
              const ty = Math.sin(rad) * distance;

              return (
                <motion.div
                  key={p.id}
                  className="absolute flex h-48 w-48 flex-col items-center justify-center rounded-full border text-center md:h-56 md:w-56"
                  style={{
                    borderColor: p.color,
                    background: `radial-gradient(circle, ${p.color}14, transparent 70%)`,
                    x: tx,
                    y: ty,
                    mixBlendMode: "screen",
                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow: `0 0 80px ${p.color}22, inset 0 0 40px ${p.color}11`,
                  }}
                >
                  <span
                    className="font-display text-sm font-medium"
                    style={{ color: p.color }}
                  >
                    {p.title}
                  </span>
                </motion.div>
              );
            })}

            {/* center: logo appears as three pillars converge */}
            <motion.div
              animate={{
                opacity: Math.min(1, (1 - spread) * 1.6),
                scale: 0.6 + Math.min(0.4, (1 - spread) * 0.6),
              }}
              className="absolute z-10 flex flex-col items-center"
            >
              <Image
                src="/logo-transparent.png"
                alt="InbredTechno"
                width={72}
                height={87}
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* copy */}
          <div>
            <AnimatedText
              as="h2"
              text="We are builders."
              className="font-display text-5xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
            />

            <div className="mt-8 space-y-6 text-(--color-ink-dim)">
              <p>
                InbredTechno is a technology company, not an agency. We don&rsquo;t
                manage campaigns, write content, or rebrand logos. We build the
                systems that power businesses.
              </p>
              <p>
                Software. Intelligence. Machines. Three things that used to
                belong to three separate industries — we build all three, and
                we build them to work together.
              </p>
              <p className="text-(--color-ink)">
                Founded in New Delhi. Operating globally. Building what comes
                next.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { label: "PROJECTS", value: "25+" },
                { label: "COUNTRIES", value: "4" },
                { label: "AI SYSTEMS", value: "8+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-medium text-(--color-ink)">
                    {stat.value}
                  </p>
                  <p className="hud-label mt-1 text-(--color-ink-faint)">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* pillar descriptions */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-(--color-surface-border) p-6"
            >
              <div
                className="mb-4 h-0.5 w-10"
                style={{ backgroundColor: p.color }}
              />
              <p
                className="font-mono-tight text-xs"
                style={{ color: p.color }}
              >
                {p.title}
              </p>
              <p className="mt-3 text-sm text-(--color-ink-dim)">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
