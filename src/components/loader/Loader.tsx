"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = ["AI", "SOFTWARE", "ROBOTICS", "SYSTEMS"];

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"boot" | "modules" | "done">("boot");
  const [moduleIndex, setModuleIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      onComplete();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      return;
    }

    const progressInterval = setInterval(() => {
      setProgress((p) => Math.min(100, p + Math.random() * 22));
    }, 90);

    const bootTimer = setTimeout(() => setPhase("modules"), 600);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(bootTimer);
    };
  }, [onComplete]);

  useEffect(() => {
    if (phase !== "modules") return;
    if (moduleIndex >= MODULES.length) {
      const t = setTimeout(() => {
        setPhase("done");
        onComplete();
      }, 320);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setModuleIndex((i) => i + 1), 220);
    return () => clearTimeout(t);
  }, [phase, moduleIndex, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-(--color-void)"
          exit={{
            opacity: 0,
            filter: "blur(8px)",
            transition: { duration: 0.65, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          <div className="absolute inset-0 bg-grid opacity-40" />

          <div className="relative flex flex-col items-center gap-5">
            {/* Logo mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <Image
                src="/companylogo.jpg"
                alt="InbredTechno"
                width={88}
                height={107}
                className="object-contain"
                priority
              />
              {/* subtle cyan ring around logo */}
              <div className="absolute inset-0 rounded-full ring-1 ring-(--color-cyan)/20 blur-sm" />
            </motion.div>

            <motion.p
              className="font-display text-xl font-semibold tracking-tight text-(--color-ink) md:text-2xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              INBREDTECHNO
            </motion.p>

            <motion.p
              className="hud-label text-(--color-ink-faint)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              WHERE WORLD CONNECTS TECHNICALLY
            </motion.p>

            <div className="hud-label mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-active)" />
              SYSTEM INITIALIZING
            </div>

            <div className="mt-2 h-px w-52 overflow-hidden bg-(--color-surface-border) md:w-72">
              <motion.div
                className="h-full bg-(--color-cyan)"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            <div className="flex h-6 gap-5 font-mono-tight text-xs text-(--color-ink-faint)">
              {MODULES.map((m, i) => (
                <span
                  key={m}
                  className="transition-colors duration-300"
                  style={{
                    color: i < moduleIndex ? "var(--color-cyan)" : undefined,
                  }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="hud-label absolute bottom-8 left-8 hidden md:block">
            BUILD 2026.08
          </div>
          <div className="hud-label absolute bottom-8 right-8 hidden md:block">
            NODE_014
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
