"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { SectionLabel } from "@/components/ui/Atoms";
import { MagneticButton } from "@/components/ui/MagneticButton";

const FIELDS = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "company", label: "Company", type: "text" },
  { name: "budget", label: "Budget", type: "text" },
] as const;

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="relative overflow-hidden bg-(--color-void) py-32 md:py-40">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-(--color-cyan)/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 09" label="Contact" />

        <AnimatedText
          as="h2"
          text="Have an idea?"
          className="mt-6 font-display text-5xl font-medium tracking-tight text-(--color-ink) md:text-7xl"
        />
        <p className="mt-4 max-w-md text-(--color-ink-dim)">
          Let&rsquo;s turn it into something real.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          {FIELDS.map((f) => (
            <div key={f.name} className="relative">
              <label htmlFor={f.name} className="hud-label mb-2 block">
                {f.label}
              </label>
              <input
                id={f.name}
                type={f.type}
                onFocus={() => setFocused(f.name)}
                onBlur={() => setFocused(null)}
                className="w-full border-b border-(--color-surface-border) bg-transparent py-2 text-lg text-(--color-ink) outline-none transition-colors duration-300 focus:border-(--color-cyan)"
              />
              <motion.span
                className="absolute bottom-0 left-0 h-px bg-(--color-cyan)"
                animate={{ width: focused === f.name ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          ))}

          <div className="relative md:col-span-2">
            <label htmlFor="message" className="hud-label mb-2 block">
              Project
            </label>
            <textarea
              id="message"
              rows={3}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              className="w-full resize-none border-b border-(--color-surface-border) bg-transparent py-2 text-lg text-(--color-ink) outline-none transition-colors duration-300 focus:border-(--color-cyan)"
            />
            <motion.span
              className="absolute bottom-0 left-0 h-px bg-(--color-cyan)"
              animate={{ width: focused === "message" ? "100%" : "0%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="flex flex-wrap gap-4 md:col-span-2">
            <MagneticButton variant="solid" onClick={() => {}}>
              Start a Project
            </MagneticButton>
            <MagneticButton variant="ghost" href="mailto:hello@inbredtechno.com">
              Talk to Us
            </MagneticButton>
          </div>
        </form>
      </div>
    </section>
  );
}
