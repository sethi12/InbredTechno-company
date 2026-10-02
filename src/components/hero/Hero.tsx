"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ThreeScene, SceneFallback } from "@/components/scenes/ThreeScene";
import { TechnologyCore } from "@/components/scenes/TechnologyCore";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { ScrollIndicator } from "@/components/ui/Atoms";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { Sparkles, Cpu, Layers, ShieldCheck, ArrowUpRight } from "lucide-react";

function useWebGLSupport() {
  const [supported, setSupported] = useState(true);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSupported(!!gl);
    } catch {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSupported(false);
    }
  }, []);
  return supported;
}

export function Hero() {
  const webglSupported = useWebGLSupport();
  const tier = useDeviceTier();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-[#F5EFE6] pt-28 pb-16 md:py-32 overflow-hidden"
    >
      {/* Ambient Cream Grid & Warm Caramel Lighting */}
      <div className="absolute inset-0 bg-grid-cream opacity-70" />
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.15)_0%,transparent_70%)] blur-3xl" />

      {/* 3D Scene Background */}
      <div className="absolute inset-0 pointer-events-none opacity-85">
        {webglSupported ? (
          <ThreeScene cameraPosition={[0, 0, 5]} fov={42}>
            <TechnologyCore splitProgress={0.15} lowPower={tier === "low"} />
          </ThreeScene>
        ) : (
          <SceneFallback label="INBREDTECHNO CORE ARCHITECTURE" />
        )}
      </div>

      {/* Top Status Badges */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 mb-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.75)] px-3.5 py-1 backdrop-blur-md shadow-sm">
          <span className="h-2 w-2 rounded-full bg-(--color-caramel) animate-pulse" />
          <span className="font-mono text-[10px] font-semibold tracking-wider text-(--color-chocolate-dim) uppercase">
            SYSTEM 01 — CORE RUNTIME
          </span>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(92,184,138,0.3)] bg-[rgba(255,255,255,0.75)] px-3.5 py-1 backdrop-blur-md shadow-sm">
          <span className="h-2 w-2 rounded-full bg-(--color-active) shadow-[0_0_8px_#5cb88a]" />
          <span className="font-mono text-[10px] font-bold tracking-wider text-(--color-active) uppercase">
            FLEET ONLINE · 99.98%
          </span>
        </div>
      </div>

      {/* Hero Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex items-center gap-2.5 max-w-fit rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.9)] px-4 py-1.5 backdrop-blur-md shadow-sm"
        >
          <Sparkles size={13} className="text-(--color-caramel)" />
          <span className="font-mono text-[10px] font-bold tracking-widest text-(--color-chocolate-ink) uppercase">
            INBREDTECHNO · ADVANCED TECHNOLOGY COMPANY
          </span>
        </motion.div>

        <AnimatedText
          as="h1"
          text="WE BUILD THE TECHNOLOGY OF WHAT'S NEXT."
          className="max-w-4xl font-display text-[10.5vw] leading-[0.95] font-bold tracking-tight text-(--color-chocolate-ink) md:text-[5.4vw] cream-title-gradient"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 max-w-xl text-balance text-base leading-relaxed text-(--color-chocolate-dim) md:text-lg font-medium"
        >
          InbredTechno designs, engineers, and scales intelligent AI systems, autonomous hardware robotics, high-throughput mobile platforms, and enterprise SaaS products.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#works" variant="solid">
            Explore Our Products
          </MagneticButton>
          <MagneticButton href="#contact" variant="ghost">
            Let&rsquo;s Build
          </MagneticButton>
        </motion.div>

        {/* Metric Highlights Pill Bar in Light Glass */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-4 rounded-3xl border border-[rgba(42,23,16,0.08)] bg-[rgba(255,255,255,0.8)] p-4 backdrop-blur-xl shadow-lg"
        >
          <div className="flex items-center gap-3 sm:border-r border-[rgba(42,23,16,0.08)] sm:pr-4 pb-2 sm:pb-0 border-b sm:border-b-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--color-caramel)/15 text-(--color-caramel)">
              <Cpu size={18} />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-(--color-chocolate-ink) leading-tight">&lt;18ms</p>
              <p className="font-mono text-[9px] tracking-wider text-(--color-chocolate-faint) uppercase font-semibold">Pose & Vision AI</p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:border-r border-[rgba(42,23,16,0.08)] sm:pr-4 pb-2 sm:pb-0 border-b sm:border-b-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--color-caramel)/15 text-(--color-caramel)">
              <Layers size={18} />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-(--color-chocolate-ink) leading-tight">Multi-Tenant</p>
              <p className="font-mono text-[9px] tracking-wider text-(--color-chocolate-faint) uppercase font-semibold">Scalable SaaS Cloud</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-(--color-caramel)/15 text-(--color-caramel)">
              <ShieldCheck size={18} />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-(--color-chocolate-ink) leading-tight">Hardware</p>
              <p className="font-mono text-[9px] tracking-wider text-(--color-chocolate-faint) uppercase font-semibold">Autonomous Robotics</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
