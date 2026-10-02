"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { Brain, Bot, Layers, ArrowUpRight, Cpu, Sparkles } from "lucide-react";

const STATEMENTS = [
  {
    icon: Brain,
    title: "Artificial Intelligence",
    desc: "Computer vision, 33-point pose kinematics, cloth deformation, and sub-20ms edge inference running in production.",
    tag: "NEURAL RUNTIMES",
  },
  {
    icon: Bot,
    title: "Autonomous Robotics",
    desc: "Physical machines, commercial gym kiosks, sensor fusion, and deterministic real-time kinematic control loops.",
    tag: "PHYSICAL COMPUTING",
  },
  {
    icon: Layers,
    title: "Intelligent SaaS & Cloud",
    desc: "Scalable multi-tenant platforms, automated Stripe billing, and bespoke WebGL 3D client interfaces.",
    tag: "ENTERPRISE SCALE",
  },
];

export function CompanyIntro() {
  return (
    <section className="relative bg-[#F5EFE6] py-28 md:py-36 border-y border-[rgba(42,23,16,0.06)] overflow-hidden">
      <div className="absolute inset-0 bg-grid-cream opacity-60" />
      <div className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.12)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] px-3.5 py-1 backdrop-blur-md">
            <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
              SYSTEM 02
            </span>
            <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
            <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-(--color-chocolate-dim)">
              Editorial Philosophy
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-end">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-(--color-chocolate-ink) leading-[1.05]">
              IDEAS INTO <br className="hidden sm:block" />
              <span className="cream-title-gradient">INTELLIGENT PRODUCTS.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-(--color-chocolate-dim)">
              InbredTechno is a technology company engineered to bridge the gap between abstract computer science and scalable production machines. We do not build static templates — we architect intelligent software, autonomous robotics, and high-concurrency SaaS products that operate flawlessly in the real world.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-[rgba(42,23,16,0.08)] bg-[rgba(255,255,255,0.75)] p-6 backdrop-blur-xl shadow-lg">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] font-bold tracking-widest text-(--color-caramel) uppercase">
                  ENGINEERING PRINCIPLE
                </span>
                <Sparkles size={16} className="text-(--color-caramel)" />
              </div>
              <p className="mt-3 font-display text-xl font-bold text-(--color-chocolate-ink)">
                &ldquo;Where World Connects Technically&rdquo;
              </p>
              <p className="mt-2 text-sm text-(--color-chocolate-dim) leading-relaxed">
                Seamlessly fusing digital intelligence, distributed cloud infrastructure, and physical edge actuation into unified commercial products.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Floating Glass Philosophy Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {STATEMENTS.map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="glass-card-light rounded-3xl p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.9)] text-(--color-caramel) shadow-sm group-hover:bg-(--color-caramel) group-hover:text-(--color-void) transition-colors">
                      <ItemIcon size={22} />
                    </div>
                    <span className="font-mono text-[9px] font-bold tracking-wider text-(--color-chocolate-faint) border border-[rgba(42,23,16,0.08)] px-2.5 py-1 rounded-full bg-[rgba(255,255,255,0.5)]">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-2xl font-bold text-(--color-chocolate-ink)">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-(--color-chocolate-dim)">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[rgba(42,23,16,0.06)] flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-(--color-caramel)">
                    PRODUCTION STACK
                  </span>
                  <ArrowUpRight size={14} className="text-(--color-chocolate-faint) group-hover:text-(--color-caramel) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
