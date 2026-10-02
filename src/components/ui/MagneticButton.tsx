"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "ghost" | "caramel" | "cream";
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
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.35 });

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
    "group relative inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 font-mono text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer select-none";

  let styles = "";
  if (variant === "solid") {
    styles =
      "bg-[#1A100B] text-[#FBF7EE] hover:bg-(--color-caramel) hover:text-(--color-void) hover:shadow-[0_0_24px_rgba(223,157,86,0.4)]";
  } else if (variant === "caramel") {
    styles =
      "bg-gradient-to-r from-(--color-caramel) to-(--color-bronze) text-[#1A100B] font-bold hover:shadow-[0_0_28px_rgba(223,157,86,0.5)] hover:brightness-110";
  } else if (variant === "cream") {
    styles =
      "bg-[#FFFFFF] text-[#1A100B] border border-[rgba(42,23,16,0.1)] hover:bg-(--color-caramel) hover:text-(--color-void) hover:shadow-md";
  } else {
    styles =
      "border border-[rgba(42,23,16,0.15)] bg-[rgba(255,255,255,0.7)] text-[#1A100B] backdrop-blur-md hover:border-(--color-caramel) hover:text-(--color-caramel) hover:bg-[#FFFFFF]";
  }

  const content = (
    <motion.span
      style={{ x: sx, y: sy }}
      className="inline-flex items-center gap-2"
    >
      <span>{children}</span>
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
