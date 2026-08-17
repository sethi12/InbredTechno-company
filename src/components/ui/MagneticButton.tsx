"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost";
  icon?: boolean;
  className?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = "solid",
  icon = true,
  className = "",
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.4 });

  function onMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.5);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group relative inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono-tight text-xs uppercase transition-colors duration-300";
  const styles =
    variant === "solid"
      ? "bg-(--color-ink) text-(--color-void) hover:bg-(--color-cyan)"
      : "border border-(--color-surface-border) text-(--color-ink) hover:border-(--color-cyan) hover:text-(--color-cyan)";

  const content = (
    <motion.span
      style={{ x: sx, y: sy }}
      className="inline-flex items-center gap-2"
    >
      {children}
      {icon && (
        <ArrowUpRight
          size={14}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </motion.span>
  );

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        data-cursor="link"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className={`${base} ${styles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      data-cursor="link"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`${base} ${styles} ${className}`}
    >
      {content}
    </button>
  );
}
