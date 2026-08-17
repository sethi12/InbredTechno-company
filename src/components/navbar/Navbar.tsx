"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "@/components/ui/MagneticButton";

const LINKS = [
  { label: "Work", href: "#works" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "AI", href: "#ai" },
  { label: "Robotics", href: "#robotics" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/companylogo.jpg"
      alt="InbredTechno"
      width={size}
      height={Math.round(size * 1.21)}
      className="object-contain"
      priority
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
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
          className={`mx-4 flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 md:mx-auto md:max-w-6xl ${
            scrolled
              ? "border border-(--color-surface-border) bg-(--color-void)/75 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          {/* Logo + wordmark */}
          <a
            href="#hero"
            data-cursor="link"
            className="flex items-center gap-2.5"
            aria-label="InbredTechno home"
          >
            <Logo size={32} />
            <span className="font-display text-sm font-semibold tracking-tight text-(--color-ink)">
              INBREDTECHNO
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-cursor="link"
                className="hud-label relative text-(--color-ink-dim) transition-colors duration-300 hover:text-(--color-ink)"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <MagneticButton href="#contact" variant="ghost" className="!py-2 !text-[10px]">
              Let&rsquo;s Build
            </MagneticButton>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="text-(--color-ink) md:hidden"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 90% 5%)" }}
            animate={{ clipPath: "circle(150% at 90% 5%)" }}
            exit={{ clipPath: "circle(0% at 90% 5%)" }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-[60] flex flex-col justify-between bg-(--color-void) p-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Logo size={36} />
                <span className="font-display text-sm font-semibold text-(--color-ink)">
                  INBREDTECHNO
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-(--color-ink)"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5 }}
                  className="border-b border-(--color-surface-border) py-4 font-display text-4xl text-(--color-ink)"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>

            <div className="hud-label text-(--color-ink-faint)">
              WHERE WORLD CONNECTS TECHNICALLY
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
