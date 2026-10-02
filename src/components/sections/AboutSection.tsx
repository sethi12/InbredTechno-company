"use client";

import Image from "next/image";
import { ShieldCheck, Award, Globe2, Sparkles } from "lucide-react";

const PILLARS = [
  {
    id: "software",
    title: "INTELLIGENT SOFTWARE",
    desc: "Robust cloud APIs, multi-tenant SaaS platforms, and bespoke WebGL interfaces built for heavy scale.",
    color: "#fbf7ee",
    angle: -120,
  },
  {
    id: "intelligence",
    title: "PRODUCTION AI & ML",
    desc: "Computer vision, 33-point pose kinematics, cloth deformation, and neural edge inference running sub-20ms.",
    color: "#df9d56",
    angle: 0,
  },
  {
    id: "machines",
    title: "AUTONOMOUS ROBOTICS",
    desc: "Hardware kiosks, sensor fusion, LiDAR integration, and deterministic physical control loops.",
    color: "#cca074",
    angle: 120,
  },
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#120B07] py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 12
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            About InbredTechno
          </span>
        </div>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Three Converging Pillars Visualizer with central logo.png */}
          <div className="relative flex h-80 items-center justify-center md:h-[440px]">
            {PILLARS.map((p) => {
              const rad = ((p.angle - 90) * Math.PI) / 180;
              const distance = 85;
              const tx = Math.cos(rad) * distance;
              const ty = Math.sin(rad) * distance;

              return (
                <div
                  key={p.id}
                  className="absolute flex h-44 w-44 flex-col items-center justify-center rounded-full border text-center md:h-56 md:w-56 backdrop-blur-md"
                  style={{
                    borderColor: p.color,
                    background: `radial-gradient(circle, ${p.color}15, rgba(24,17,12,0.6) 70%)`,
                    transform: `translate3d(${tx}px, ${ty}px, 0)`,
                    boxShadow: `0 0 40px ${p.color}20, inset 0 0 20px ${p.color}10`,
                  }}
                >
                  <span
                    className="font-mono text-xs font-bold tracking-wider px-4 uppercase"
                    style={{ color: p.color }}
                  >
                    {p.title}
                  </span>
                </div>
              );
            })}

            {/* Central convergence logo.png */}
            <div className="relative z-20 flex flex-col items-center justify-center h-24 w-24 rounded-full bg-[rgba(24,17,12,0.95)] border border-[rgba(223,157,86,0.4)] shadow-[0_0_40px_rgba(223,157,86,0.4)]">
              <div className="relative h-14 w-14">
                <Image
                  src="/logo.png"
                  alt="InbredTechno"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* About Copy */}
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FBF7EE]">
              We Are Architects of Intelligent Technology.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#D4C2AD]">
              <p>
                InbredTechno is a technology and product engineering company. We don&rsquo;t build surface-level templates or unscalable experiments — we engineer full-stack systems that power real-world businesses.
              </p>
              <p>
                <strong className="text-[#FBF7EE] font-semibold">Software. Artificial Intelligence. Physical Robotics.</strong> Three historically separate disciplines that we merge into cohesive, high-performance technology ecosystems.
              </p>
              <p className="text-(--color-caramel) font-mono text-xs font-bold tracking-wider uppercase">
                WHERE WORLD CONNECTS TECHNICALLY · SERVING CLIENTS GLOBALLY
              </p>
            </div>

            {/* Key Milestones Bar */}
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[rgba(246,238,227,0.1)] pt-6">
              {[
                { label: "AI & ROBOTICS PRODUCTS", value: "10+" },
                { label: "GLOBAL REACH", value: "4+ COUNTRIES" },
                { label: "SUB-20MS INFERENCE", value: "100% NATIVE" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl md:text-3xl font-bold text-[#FBF7EE]">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[9px] tracking-wider text-[#917C69] uppercase mt-1 font-semibold">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pillar Feature Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.85)] p-6 backdrop-blur-xl transition-all hover:border-(--color-caramel)/40 hover:shadow-lg"
            >
              <div
                className="mb-4 h-1 w-12 rounded-full"
                style={{ backgroundColor: p.color }}
              />
              <p
                className="font-mono text-xs font-bold tracking-wider uppercase"
                style={{ color: p.color }}
              >
                {p.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#D4C2AD]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
