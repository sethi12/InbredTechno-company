"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowUpRight,
  ArrowLeft,
  Cpu,
  Bot,
  Layers,
  Sparkles,
  ShieldCheck,
  Code2,
  Terminal,
} from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

function LinkedinIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const CORE_PILLARS = [
  {
    icon: Cpu,
    title: "AI & Neural Systems",
    desc: "Designing and deploying production deep-learning models, 33-point real-time skeletal tracking, and sub-20ms edge vision inference engines.",
    tag: "COMPUTER VISION · PYTORCH · ONNX",
  },
  {
    icon: Bot,
    title: "Autonomous Robotics",
    desc: "Architecting physical hardware kiosks, sensor fusion architectures (stereo depth + LiDAR), and deterministic kinematic control loops.",
    tag: "HARDWARE KIOSKS · SENSOR FUSION · EMBEDDED",
  },
  {
    icon: Layers,
    title: "SaaS Cloud & High Concurrency",
    desc: "Building multi-tenant enterprise cloud platforms, serverless video transcoding clusters, and automated global billing architectures.",
    tag: "DISTRIBUTED SYSTEMS · NEXT.JS · FLUTTER",
  },
];

const MILESTONES = [
  { label: "ENGINEERED PRODUCTS", value: "6+ Production Systems" },
  { label: "CORE FOCUS", value: "AI · Robotics · SaaS" },
  { label: "VISION LATENCY", value: "<18ms Native Inference" },
  { label: "HEADQUARTERS", value: "New Delhi, India" },
];

export default function FounderPage() {
  return (
    <div className="min-h-screen bg-[#120B07] text-[#FBF7EE] selection:bg-(--color-caramel) selection:text-(--color-void) overflow-hidden relative">
      {/* Ambient Background Lighting & Grid */}
      <div className="absolute inset-0 bg-grid-chocolate opacity-40 pointer-events-none" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[750px] w-[750px] rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.14)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(204,160,116,0.08)_0%,transparent_70%)] blur-3xl" />

      {/* Top Header / Navigation Bar */}
      <header className="fixed inset-x-0 top-0 z-50 py-4 backdrop-blur-xl bg-[rgba(18,11,7,0.8)] border-b border-[rgba(246,238,227,0.08)]">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.7)] px-4 py-2 font-mono text-xs font-semibold text-[#D4C2AD] transition-all hover:border-(--color-caramel) hover:text-[#FBF7EE] hover:bg-[rgba(34,24,18,0.9)]"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1 text-(--color-caramel)" />
            <span>Return to InbredTechno</span>
          </Link>

          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image
                src="/logo.png"
                alt="InbredTechno — Autonomous AI, Robotics & SaaS Engineering"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="hidden sm:block font-display text-sm font-bold tracking-tight text-[#FBF7EE]">
              INBREDTECHNO
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <MagneticButton
              href="https://www.linkedin.com/in/chaitanya-sethi-420974229/"
              target="_blank"
              rel="noopener noreferrer"
              variant="solid"
              className="!py-2 !px-4 !text-[11px]"
            >
              <span>Connect on LinkedIn</span>
              <ArrowUpRight size={12} className="ml-1" />
            </MagneticButton>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative pt-32 pb-24 md:pt-40 md:pb-36">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          
          {/* Executive Hero Banner */}
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Founder Tag Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(223,157,86,0.35)] bg-[rgba(34,24,18,0.85)] px-4 py-1.5 backdrop-blur-md shadow-sm mb-6">
                <Sparkles size={13} className="text-(--color-caramel)" />
                <span className="font-mono text-[10px] font-bold tracking-widest text-(--color-caramel) uppercase">
                  LEADERSHIP & SYSTEMS ARCHITECTURE
                </span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FBF7EE] cream-gradient-text leading-[1.05]">
                Chaitanya Sethi
              </h1>

              <p className="mt-3 font-mono text-sm sm:text-base font-semibold tracking-wider text-(--color-caramel) uppercase">
                Founder & Chief Architect · InbredTechno
              </p>

              <blockquote className="mt-6 border-l-2 border-(--color-caramel) pl-5 italic text-base sm:text-lg text-[#D4C2AD] leading-relaxed">
                &ldquo;Technology shouldn&rsquo;t just live behind screens. True innovation happens when intelligent software perceives, reasons, and acts in the physical world.&rdquo;
              </blockquote>

              <p className="mt-6 text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
                Chaitanya Sethi is a systems engineer, software architect, and technology founder. Leading <strong className="text-[#FBF7EE]">InbredTechno</strong> from New Delhi, he drives the design and development of next-generation artificial intelligence platforms, autonomous hardware robotics, high-throughput mobile products, and multi-tenant SaaS clouds.
              </p>

              {/* Social & Contact Badges */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/chaitanya-sethi-420974229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.18)] bg-[rgba(34,24,18,0.85)] px-4 py-2.5 font-mono text-xs font-semibold text-[#FBF7EE] backdrop-blur-md transition-all hover:border-(--color-caramel) hover:bg-(--color-caramel) hover:text-(--color-void) shadow-sm"
                >
                  <LinkedinIcon size={15} />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href="https://www.instagram.com/inbredtechno?stkn=MXRzZWk1bHliajFiMA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.18)] bg-[rgba(34,24,18,0.85)] px-4 py-2.5 font-mono text-xs font-semibold text-[#FBF7EE] backdrop-blur-md transition-all hover:border-(--color-caramel) hover:bg-(--color-caramel) hover:text-(--color-void) shadow-sm"
                >
                  <InstagramIcon size={15} />
                  <span>Instagram @inbredtechno</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href="mailto:inbredtechno@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.18)] bg-[rgba(34,24,18,0.85)] px-4 py-2.5 font-mono text-xs font-semibold text-[#FBF7EE] backdrop-blur-md transition-all hover:border-(--color-caramel) hover:bg-(--color-caramel) hover:text-(--color-void) shadow-sm"
                >
                  <Mail size={15} />
                  <span>inbredtechno@gmail.com</span>
                </a>
              </div>
            </motion.div>

            {/* Founder Visual Card / Aura Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[rgba(223,157,86,0.3)] bg-[rgba(27,18,13,0.85)] p-8 md:p-10 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center justify-between border-b border-[rgba(246,238,227,0.1)] pb-6">
                <div className="flex items-center gap-3.5">
                  <div className="relative h-12 w-12 rounded-2xl bg-[rgba(34,24,18,0.9)] border border-[rgba(223,157,86,0.4)] flex items-center justify-center p-2 shadow-inner">
                    <Image
                      src="/logo.png"
                      alt="InbredTechno"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#FBF7EE]">
                      INBREDTECHNO
                    </h3>
                    <p className="font-mono text-[9px] tracking-widest text-(--color-caramel) uppercase">
                      WHERE WORLD CONNECTS TECHNICALLY
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(92,184,138,0.3)] bg-[rgba(24,17,12,0.8)] px-3 py-1 font-mono text-[10px] font-bold text-(--color-active)">
                  <span className="h-1.5 w-1.5 rounded-full bg-(--color-active) shadow-[0_0_6px_#5cb88a]" />
                  ACTIVE LEADERSHIP
                </span>
              </div>

              {/* Founder Engineering Overview */}
              <div className="my-8 space-y-4">
                <p className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase">
                  ENGINEERING PHILOSOPHY & CAPABILITIES
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 rounded-2xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.5)] p-3.5">
                    <Code2 size={18} className="text-(--color-caramel) shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-sm font-bold text-[#FBF7EE]">
                        First-Principles Engineering
                      </p>
                      <p className="text-xs text-[#D4C2AD] mt-0.5 leading-relaxed">
                        Architecting ground-up software platforms and hardware integrations without unscalable shortcuts or generic boilerplate.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.5)] p-3.5">
                    <Terminal size={18} className="text-(--color-caramel) shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-sm font-bold text-[#FBF7EE]">
                        Sub-20ms Deterministic Execution
                      </p>
                      <p className="text-xs text-[#D4C2AD] mt-0.5 leading-relaxed">
                        Optimizing neural network inference, WebRTC streams, and sensor pipelines for instant real-time physical feedback.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.5)] p-3.5">
                    <ShieldCheck size={18} className="text-(--color-caramel) shrink-0 mt-0.5" />
                    <div>
                      <p className="font-display text-sm font-bold text-[#FBF7EE]">
                        End-to-End Enterprise Rigor
                      </p>
                      <p className="text-xs text-[#D4C2AD] mt-0.5 leading-relaxed">
                        From custom kiosk operating systems to multi-tenant cloud security and Level 1 PCI financial orchestration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Milestones Matrix */}
              <div className="grid grid-cols-2 gap-3 border-t border-[rgba(246,238,227,0.1)] pt-6">
                {MILESTONES.map((m) => (
                  <div key={m.label} className="flex flex-col">
                    <span className="font-mono text-[9px] text-[#917C69] uppercase font-semibold">
                      {m.label}
                    </span>
                    <span className="font-display text-sm font-bold text-(--color-caramel) mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Deep Architectural Pillars */}
          <div className="mt-24 md:mt-32">
            <div className="text-center max-w-2xl mx-auto">
              <span className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase">
                CORE TECHNICAL DISCIPLINES
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-bold tracking-tight text-[#FBF7EE]">
                Architecting the Convergence.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#D4C2AD]">
                InbredTechno was founded on the conviction that the next decade of technology belongs to companies that seamlessly fuse software intelligence with physical reality.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {CORE_PILLARS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex flex-col justify-between rounded-3xl border border-[rgba(246,238,227,0.1)] bg-[rgba(27,18,13,0.7)] p-8 backdrop-blur-xl transition-all duration-300 hover:border-(--color-caramel)/50 hover:shadow-[0_16px_40px_rgba(223,157,86,0.15)]"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-caramel)/15 text-(--color-caramel) mb-6">
                        <Icon size={22} />
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#FBF7EE]">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#D4C2AD]">
                        {p.desc}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-[rgba(246,238,227,0.08)] pt-4">
                      <span className="font-mono text-[10px] font-bold text-(--color-caramel) tracking-wider">
                        {p.tag}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Direct Engagement Callout */}
          <div className="mt-24 md:mt-32 rounded-3xl border border-[rgba(223,157,86,0.3)] bg-gradient-to-br from-[rgba(34,24,18,0.95)] via-[rgba(24,17,12,0.9)] to-[#120B07] p-8 md:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-grid-cream opacity-10 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              <span className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase">
                DIRECT FOUNDER INQUIRY
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-5xl font-bold text-[#FBF7EE]">
                Have a Complex System to Engineer?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#D4C2AD] leading-relaxed">
                Whether you need high-speed AI computer vision, autonomous hardware robotics, high-throughput mobile platforms, or custom SaaS architecture, let&rsquo;s discuss technical feasibility and execution.
              </p>

              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <MagneticButton
                  href="mailto:inbredtechno@gmail.com"
                  variant="solid"
                  className="!py-3 !px-8 !text-xs font-bold"
                >
                  Email Chaitanya Directly
                </MagneticButton>

                <MagneticButton
                  href="https://www.linkedin.com/in/chaitanya-sethi-420974229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  className="!py-3 !px-8 !text-xs font-bold text-[#FBF7EE]"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight size={14} className="ml-1" />
                </MagneticButton>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[rgba(246,238,227,0.08)] bg-[rgba(16,11,8,0.95)] py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative h-8 w-8">
              <Image
                src="/logo.png"
                alt="InbredTechno"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-display text-sm font-bold text-[#FBF7EE]">
                INBREDTECHNO
              </p>
              <p className="font-mono text-[9px] tracking-widest text-(--color-caramel) uppercase">
                WHERE WORLD CONNECTS TECHNICALLY
              </p>
            </div>
          </div>

          <p className="font-mono text-[10px] tracking-wider text-(--color-ink-faint)">
            © {new Date().getFullYear()} INBREDTECHNO PRIVATE LIMITED · FOUNDER & LEADERSHIP
          </p>
        </div>
      </footer>
    </div>
  );
}
