"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const LINKS = [
  { label: "Products", href: "/#works" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "AI & ML", href: "/#ai" },
  { label: "Robotics", href: "/#robotics" },
  { label: "SaaS Cloud", href: "/#saas" },
  { label: "About", href: "/#about" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/#contact" },
];

function CompanyLogo({ size = 32 }: { size?: number }) {
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <Image
        src="/logo.png"
        alt="InbredTechno — Autonomous AI, Robotics & SaaS Engineering"
        width={size}
        height={size}
        className="object-contain drop-shadow-sm"
        priority
      />
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-4 flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 md:mx-auto md:max-w-6xl ${
            scrolled
              ? "border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.85)] shadow-[0_12px_36px_rgba(42,23,16,0.12)] backdrop-blur-2xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo + Brand Wordmark */}
          <a
            href="#hero"
            data-cursor="link"
            className="group flex items-center gap-3"
            aria-label="InbredTechno home"
          >
            <CompanyLogo size={32} />
            <div className="flex flex-col">
              <span className="font-display text-sm font-bold tracking-tight text-(--color-chocolate-ink) transition-colors group-hover:text-(--color-caramel)">
                INBREDTECHNO
              </span>
              <span className="hidden sm:block font-mono text-[8px] tracking-[0.2em] text-(--color-chocolate-faint) uppercase">
                AI · Robotics · SaaS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="link"
                className="font-mono text-[11px] font-semibold tracking-wider uppercase text-(--color-chocolate-dim) transition-all duration-200 hover:text-(--color-caramel) hover:drop-shadow-sm"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <MagneticButton
              href="#contact"
              variant="solid"
              className="!py-2 !px-5 !text-[10px]"
            >
              Let&rsquo;s Build
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.8)] text-(--color-chocolate-ink) lg:hidden shadow-sm"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 90% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-[#F5EFE6] p-8 md:p-12 overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-cream opacity-60" />
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-(--color-caramel)/15 blur-3xl" />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CompanyLogo size={36} />
                <span className="font-display text-base font-bold text-(--color-chocolate-ink)">
                  INBREDTECHNO
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.9)] text-(--color-chocolate-ink) shadow-sm"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="relative z-10 flex flex-col gap-2 my-auto">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  className="group flex items-center justify-between border-b border-[rgba(42,23,16,0.08)] py-4 font-display text-3xl font-bold text-(--color-chocolate-ink) transition-colors hover:text-(--color-caramel)"
                >
                  <span>{l.label}</span>
                  <Sparkles size={16} className="opacity-0 group-hover:opacity-100 text-(--color-caramel) transition-opacity" />
                </motion.a>
              ))}
            </nav>

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[rgba(42,23,16,0.08)] pt-6">
              <div className="font-mono text-[10px] tracking-widest text-(--color-chocolate-faint) uppercase">
                WHERE WORLD CONNECTS TECHNICALLY
              </div>
              <MagneticButton
                href="#contact"
                variant="solid"
                onClick={() => setMenuOpen(false)}
                className="!py-2.5 !px-6 !text-xs w-full sm:w-auto"
              >
                Start a Project
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
