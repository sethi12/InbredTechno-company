"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ThreeScene, SceneFallback } from "@/components/scenes/ThreeScene";
import { TechnologyCore } from "@/components/scenes/TechnologyCore";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HudLabel, ScrollIndicator } from "@/components/ui/Atoms";
import { useDeviceTier } from "@/hooks/useDeviceTier";

function useWebGLSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time capability gate on mount
      setSupported(!!gl);
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time capability gate on mount
      setSupported(false);
    }
  }, []);
  return supported;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [splitProgress, setSplitProgress] = useState(0);
  const webglSupported = useWebGLSupport();
  const tier = useDeviceTier();

  useEffect(() => {
    function onScroll() {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // el height is 250vh; the "scene" stays pinned for the scroll range
      // 0 -> 1 as the section scrolls from top=0 to top=-150vh
      const scrollable = rect.height - window.innerHeight;
      const passed = -rect.top;
      const p = scrollable > 0 ? passed / scrollable : 0;
      setSplitProgress(Math.min(1, Math.max(0, p)));
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const textOpacity = 1 - Math.min(1, splitProgress * 2.2);

  return (
    <section ref={sectionRef} id="hero" className="relative h-[250vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-(--color-void)">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-noise opacity-[0.03]" />

        {/* 3D scene */}
        <div className="absolute inset-0">
          {webglSupported ? (
            <ThreeScene cameraPosition={[0, 0, 5]} fov={42}>
              <TechnologyCore splitProgress={splitProgress} lowPower={tier === "low"} />
            </ThreeScene>
          ) : (
            <SceneFallback label="TECHNOLOGY CORE" />
          )}
        </div>

        {/* HUD chrome */}
        <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-10">
          <div className="flex items-start justify-between">
            <HudLabel>SYSTEM 01 — CORE</HudLabel>
            <HudLabel className="text-right">
              STATUS: <span className="text-(--color-active)">ONLINE</span>
            </HudLabel>
          </div>
        </div>

        {/* content */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 md:px-10"
        >
          <HudLabel className="mb-6 text-(--color-cyan)">
            INBREDTECHNO / SOFTWARE · INTELLIGENCE · MACHINES
          </HudLabel>

          <AnimatedText
            as="h1"
            text="WE BUILD WHAT COMES NEXT."
            className="max-w-4xl font-display text-[13vw] leading-[0.95] font-medium tracking-tight text-(--color-ink) md:text-[6.2vw]"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-md text-balance text-base text-(--color-ink-dim) md:text-lg"
          >
            InbredTechno builds intelligent software, AI systems, applications
            and machines that turn ambitious ideas into real-world technology.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#works" variant="solid">
              Explore Our Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Build With Us
            </MagneticButton>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-8 right-6 z-10 md:right-10">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}
