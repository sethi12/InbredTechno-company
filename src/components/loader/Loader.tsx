"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const MODULES = ["AI & MACHINE LEARNING", "ROBOTICS KINEMATICS", "SAAS ARCHITECTURE", "EDGE SYSTEMS"];

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
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(100, p + Math.random() * 20 + 8);
      });
    }, 80);

    const bootTimer = setTimeout(() => setPhase("modules"), 500);

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
      }, 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setModuleIndex((i) => i + 1), 200);
    return () => clearTimeout(t);
  }, [phase, moduleIndex, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-(--color-void) overflow-hidden"
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: "blur(10px)",
            transition: { duration: 0.65, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {/* Ambient Warm Chocolate & Caramel Glow */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.12)_0%,transparent_70%)] blur-3xl" />

          <div className="relative flex flex-col items-center gap-6 text-center px-6">
            {/* Logo mark - strictly using logo.png */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-2"
            >
              <div className="relative h-20 w-20 md:h-24 md:w-24">
                <Image
                  src="/logo.png"
                  alt="InbredTechno"
                  fill
                  className="object-contain drop-shadow-[0_0_25px_rgba(223,157,86,0.4)]"
                  priority
                />
              </div>
              <div className="absolute inset-0 -m-2 rounded-full border border-(--color-caramel)/25 animate-ping opacity-25" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h1 className="font-display text-2xl font-bold tracking-tight text-(--color-ink) md:text-3xl cream-gradient-text">
                INBREDTECHNO
              </h1>
              <p className="font-mono text-[10px] tracking-[0.25em] text-(--color-caramel) uppercase mt-1">
                SOFTWARE · ROBOTICS · AI & ML
              </p>
            </motion.div>

            {/* System Status */}
            <div className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-(--color-ink-dim)">
              <span className="h-1.5 w-1.5 rounded-full bg-(--color-active) shadow-[0_0_8px_#5cb88a]" />
              <span>CORE ARCHITECTURE INITIALIZING</span>
            </div>

            {/* Caramel Progress Bar */}
            <div className="relative mt-2 h-1 w-56 overflow-hidden rounded-full bg-[rgba(246,238,227,0.08)] border border-[rgba(246,238,227,0.06)] md:w-72">
              <motion.div
                className="h-full bg-gradient-to-r from-(--color-caramel) via-(--color-amber) to-(--color-ink) rounded-full shadow-[0_0_12px_rgba(223,157,86,0.8)]"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.1 }}
              />
            </div>

            {/* Subsystem Ticker */}
            <div className="flex flex-wrap justify-center gap-3 font-mono text-[10px] tracking-wider text-(--color-ink-faint) max-w-sm">
              {MODULES.map((m, i) => (
                <span
                  key={m}
                  className="transition-colors duration-300 flex items-center gap-1.5"
                  style={{
                    color: i < moduleIndex ? "var(--color-caramel)" : undefined,
                    fontWeight: i < moduleIndex ? 600 : 400,
                  }}
                >
                  <span className={`h-1 w-1 rounded-full ${i < moduleIndex ? "bg-(--color-caramel)" : "bg-[rgba(246,238,227,0.2)]"}`} />
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="font-mono text-[9px] tracking-widest text-(--color-ink-faint) absolute bottom-8 left-8 hidden md:block">
            INBREDTECHNO SYS / V2.6
          </div>
          <div className="font-mono text-[9px] tracking-widest text-(--color-ink-faint) absolute bottom-8 right-8 hidden md:block">
            SECURE CLOUD · EDGE MESH
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
