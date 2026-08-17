"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CAPABILITIES } from "@/data/capabilities";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function WhatWeBuild() {
  const [active, setActive] = useState(0);
  const activeCapability = CAPABILITIES[active];

  return (
    <section id="capabilities" className="relative bg-(--color-void) py-32 md:py-40">
      <div className="absolute inset-0 bg-grid opacity-[0.15]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 02" label="Capabilities" />

        <AnimatedText
          as="h2"
          text="From code to machines."
          className="mt-6 max-w-3xl font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
        />

        <p className="mt-6 max-w-xl text-(--color-ink-dim)">
          We design and engineer technology across software, intelligence and
          physical systems.
        </p>

        <div className="mt-20 grid gap-0 md:grid-cols-[1fr_1.1fr]">
          {/* list */}
          <div className="border-t border-(--color-surface-border)">
            {CAPABILITIES.map((cap, i) => (
              <button
                key={cap.index}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                data-cursor="link"
                className="group flex w-full items-center justify-between border-b border-(--color-surface-border) py-7 text-left transition-colors duration-300"
              >
                <div className="flex items-baseline gap-6">
                  <span
                    className="font-mono-tight text-xs transition-colors duration-300"
                    style={{ color: active === i ? cap.color : "var(--color-ink-faint)" }}
                  >
                    {cap.index}
                  </span>
                  <span
                    className={`font-display text-2xl transition-colors duration-300 md:text-4xl ${
                      active === i ? "text-(--color-ink)" : "text-(--color-ink-faint)"
                    }`}
                  >
                    {cap.title}
                  </span>
                </div>
                <motion.span
                  animate={{ opacity: active === i ? 1 : 0, x: active === i ? 0 : -8 }}
                  className="hidden font-mono-tight text-xs md:block"
                  style={{ color: cap.color }}
                >
                  ACTIVE
                </motion.span>
              </button>
            ))}
          </div>

          {/* detail panel */}
          <div className="relative hidden pl-16 md:block">
            <motion.div
              key={activeCapability.index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <div
                className="mb-8 h-48 w-full rounded-2xl border border-(--color-surface-border)"
                style={{
                  background: `radial-gradient(circle at 30% 30%, ${activeCapability.color}22, transparent 70%)`,
                }}
              >
                <div className="flex h-full items-center justify-center">
                  <div
                    className="h-20 w-20 rounded-full border"
                    style={{
                      borderColor: activeCapability.color,
                      boxShadow: `0 0 60px ${activeCapability.color}55`,
                    }}
                  />
                </div>
              </div>

              <p className="max-w-md text-lg leading-relaxed text-(--color-ink-dim)">
                {activeCapability.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {activeCapability.stack.map((s) => (
                  <span
                    key={s}
                    className="hud-label rounded-full border border-(--color-surface-border) px-3 py-1.5"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
