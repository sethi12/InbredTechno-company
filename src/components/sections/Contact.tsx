"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Mail, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

const PROJECT_TYPES = [
  "AI & Computer Vision",
  "Autonomous Robotics",
  "SaaS Cloud Platform",
  "Mobile App Development",
  "3D WebGL Configurator",
  "E-Commerce Architecture",
];

export function Contact() {
  const [focused, setFocused] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>("AI & Computer Vision");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F5EFE6] py-32 md:py-40">
      <div className="absolute inset-0 bg-grid-cream opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.12)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 13
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-(--color-chocolate-dim)">
            Initiate Project
          </span>
        </div>

        <h2 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-(--color-chocolate-ink) leading-[1.05]">
          HAVE AN IDEA? <br />
          <span className="cream-title-gradient">LET&rsquo;S BUILD IT.</span>
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-(--color-chocolate-dim)">
          Tell us what you&rsquo;re building and let&rsquo;s turn the idea into a real, production-ready product.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-16 rounded-3xl border border-[rgba(92,184,138,0.3)] bg-[rgba(255,255,255,0.9)] p-10 text-center backdrop-blur-xl shadow-xl"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-(--color-active)/15 text-(--color-active) mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-(--color-chocolate-ink)">
              Inquiry Received
            </h3>
            <p className="mt-3 text-base text-(--color-chocolate-dim) max-w-md mx-auto">
              Our engineering leadership will review your specification and reach out within 24 hours.
            </p>
            <div className="mt-8">
              <button
                onClick={() => setSubmitted(false)}
                className="rounded-full border border-[rgba(42,23,16,0.15)] bg-[rgba(255,255,255,0.9)] px-6 py-2.5 font-mono text-xs font-semibold text-(--color-chocolate-ink) hover:border-(--color-caramel)"
              >
                Send Another Specification
              </button>
            </div>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-16 rounded-3xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.85)] p-8 md:p-12 backdrop-blur-2xl shadow-xl"
          >
            {/* Project Category Picker */}
            <div className="mb-10">
              <label className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase block mb-3">
                SELECT PROJECT DISCIPLINE
              </label>
              <div className="flex flex-wrap gap-2">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedType(type)}
                    className={`rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all shadow-sm ${
                      selectedType === type
                        ? "bg-[#1A100B] text-[#FBF7EE] shadow-md"
                        : "border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] text-(--color-chocolate-dim) hover:border-(--color-caramel) hover:text-(--color-chocolate-ink)"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Grid */}
            <div className="grid gap-8 md:grid-cols-2">
              <div className="relative">
                <label htmlFor="name" className="font-mono text-[11px] font-bold uppercase text-(--color-chocolate-dim) block mb-2">
                  YOUR NAME *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Satya Nadella"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-2xl border border-[rgba(42,23,16,0.12)] bg-[#FFFFFF] px-4 py-3 text-base text-(--color-chocolate-ink) placeholder:text-(--color-chocolate-faint)/50 outline-none transition-all duration-300 focus:border-(--color-caramel) focus:shadow-md"
                />
              </div>

              <div className="relative">
                <label htmlFor="email" className="font-mono text-[11px] font-bold uppercase text-(--color-chocolate-dim) block mb-2">
                  WORK EMAIL *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="satya@microsoft.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-2xl border border-[rgba(42,23,16,0.12)] bg-[#FFFFFF] px-4 py-3 text-base text-(--color-chocolate-ink) placeholder:text-(--color-chocolate-faint)/50 outline-none transition-all duration-300 focus:border-(--color-caramel) focus:shadow-md"
                />
              </div>

              <div className="relative">
                <label htmlFor="company" className="font-mono text-[11px] font-bold uppercase text-(--color-chocolate-dim) block mb-2">
                  COMPANY / ORGANIZATION
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Enterprise Inc."
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-2xl border border-[rgba(42,23,16,0.12)] bg-[#FFFFFF] px-4 py-3 text-base text-(--color-chocolate-ink) placeholder:text-(--color-chocolate-faint)/50 outline-none transition-all duration-300 focus:border-(--color-caramel) focus:shadow-md"
                />
              </div>

              <div className="relative">
                <label htmlFor="budget" className="font-mono text-[11px] font-bold uppercase text-(--color-chocolate-dim) block mb-2">
                  ESTIMATED BUDGET / TIMELINE
                </label>
                <input
                  id="budget"
                  type="text"
                  placeholder="$25k - $100k+ / Q3 Launch"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  onFocus={() => setFocused("budget")}
                  onBlur={() => setFocused(null)}
                  className="w-full rounded-2xl border border-[rgba(42,23,16,0.12)] bg-[#FFFFFF] px-4 py-3 text-base text-(--color-chocolate-ink) placeholder:text-(--color-chocolate-faint)/50 outline-none transition-all duration-300 focus:border-(--color-caramel) focus:shadow-md"
                />
              </div>

              <div className="relative md:col-span-2">
                <label htmlFor="message" className="font-mono text-[11px] font-bold uppercase text-(--color-chocolate-dim) block mb-2">
                  PROJECT SPECIFICATION & GOALS *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Describe your vision, target platform, latency requirements, hardware integration, or e-commerce scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  className="w-full resize-none rounded-2xl border border-[rgba(42,23,16,0.12)] bg-[#FFFFFF] px-4 py-3 text-base text-(--color-chocolate-ink) placeholder:text-(--color-chocolate-faint)/50 outline-none transition-all duration-300 focus:border-(--color-caramel) focus:shadow-md"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-2 pt-4">
                <MagneticButton variant="solid" className="!py-3 !px-8">
                  Start a Project
                </MagneticButton>

                <a
                  href="mailto:inbredtechno@gmail.com"
                  className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-(--color-chocolate-dim) transition-colors hover:text-(--color-caramel)"
                >
                  <Mail size={14} className="text-(--color-caramel)" />
                  <span>Direct: inbredtechno@gmail.com</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
