"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Layers, Sparkles, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: Cpu,
    title: "Product-First Engineering",
    desc: "We don't build fragmented prototypes or throwaway code. Every architecture is engineered from day one as a commercial-grade product built to scale.",
  },
  {
    icon: BrainIcon,
    title: "Native Intelligence Integration",
    desc: "AI is not an afterthought or a generic wrapper. We design custom neural networks, computer vision loops, and edge inference into the core runtime.",
  },
  {
    icon: Layers,
    title: "Hardware-to-Cloud Cohesion",
    desc: "From physical sensor calibration and kinematics to distributed WebSocket clouds and Stripe billing, our team builds the entire vertical stack.",
  },
  {
    icon: Zap,
    title: "Sub-20ms Deterministic Latency",
    desc: "Whether executing real-time pose tracking in commercial gym kiosks or streaming high-throughput video reels, speed is treated as a core feature.",
  },
];

const LAB_SHOWCASE = [
  {
    title: "Robotics & Hardware R&D Lab",
    tagline: "Physical computing, kinematic servos & edge micro-controllers",
    badge: "LAB 01 · HARDWARE",
    image: "/showcase/inbred_robotics_lab_1791129579963.jpg",
  },
  {
    title: "Autonomous Sensor & Edge Kiosk",
    tagline: "Industrial sensor fusion, stereo depth & computer vision",
    badge: "LAB 02 · SENSORS",
    image: "/showcase/automation_sensor_kiosk_1791151133484.jpg",
  },
  {
    title: "Mobile & Platform Engineering Hub",
    tagline: "High-throughput apps, reactive UX & real-time telemetry",
    badge: "LAB 03 · PLATFORMS",
    image: "/showcase/mobile_app_development_desk_1791151114109.jpg",
  },
];

function BrainIcon(props: React.ComponentProps<typeof Cpu>) {
  return <Sparkles {...props} />;
}

export function WhyInbredTechno() {
  return (
    <section className="relative bg-[#F5EFE6] py-28 md:py-36 border-y border-[rgba(42,23,16,0.06)] overflow-hidden">
      <div className="absolute inset-0 bg-grid-cream opacity-50" />
      <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 11
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-(--color-chocolate-dim)">
            Why InbredTechno
          </span>
        </div>

        <div className="mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-(--color-chocolate-ink) leading-[1.08]">
              ENGINEERING RIGOR. <br />
              <span className="cream-title-gradient">MEASURABLE IMPACT.</span>
            </h2>
            <p className="mt-4 max-w-xl text-base sm:text-lg text-(--color-chocolate-dim)">
              Why ambitious enterprises and high-growth technology ventures partner with InbredTechno to architect their critical systems.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-(--color-chocolate-ink) px-7 py-3 font-mono text-xs font-semibold text-(--color-ink) shadow-md transition-all hover:bg-(--color-caramel) hover:text-(--color-void) hover:shadow-lg w-fit"
          >
            <span>Discuss Engineering Roadmap</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 4 Differentiator Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DIFFERENTIATORS.map((diff, i) => {
            const DiffIcon = diff.icon;
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
                className="glass-card-light rounded-3xl p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.9)] text-(--color-caramel) shadow-sm">
                    <DiffIcon size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-(--color-chocolate-ink)">
                    {diff.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-(--color-chocolate-dim)">
                    {diff.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[rgba(42,23,16,0.06)] flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-(--color-active)" />
                  <span className="font-mono text-[9px] font-semibold text-(--color-chocolate-faint) uppercase">
                    Core Competency 0{i + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Lab & Hardware Deployment Gallery */}
        <div className="mt-16 border-t border-[rgba(42,23,16,0.08)] pt-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <span className="font-mono text-[10px] font-bold tracking-widest text-(--color-caramel) uppercase">
                INBREDTECHNO ENGINEERING FACILITY
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-(--color-chocolate-ink) mt-1">
                Where Physical Hardware Meets Intelligent Code.
              </h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.8)] px-3.5 py-1.5 font-mono text-[10px] font-bold text-(--color-chocolate-ink)">
              <CheckCircle2 size={13} className="text-(--color-active)" />
              PROPRIETARY R&D PIPELINES
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {LAB_SHOWCASE.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.85)] p-4 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-(--color-caramel) hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(42,23,16,0.08)] bg-[#150D09]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,11,7,0.7)] via-transparent to-black/10 pointer-events-none" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="font-mono text-[9px] font-bold text-[#FBF7EE] bg-[rgba(24,17,12,0.85)] px-2.5 py-0.5 rounded-full border border-[rgba(246,238,227,0.2)] backdrop-blur-md">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <div className="mt-4 px-1 pb-1">
                  <h4 className="font-display text-lg font-bold text-(--color-chocolate-ink) group-hover:text-(--color-caramel) transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs text-(--color-chocolate-dim) leading-relaxed">
                    {item.tagline}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
