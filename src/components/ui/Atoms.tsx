"use client";

import { motion } from "framer-motion";

export function SectionLabel({
  index,
  label,
  light = false,
}: {
  index?: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {index && <span className="hud-label text-(--color-cyan)">{index}</span>}
      <span
        className={`hud-label ${light ? "text-(--color-ink)" : "text-(--color-ink-dim)"}`}
      >
        {label}
      </span>
    </div>
  );
}

export function HudLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`hud-label ${className}`}>{children}</div>;
}

export function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="hud-label [writing-mode:vertical-rl]">SCROLL</span>
      <span className="h-10 w-px bg-gradient-to-b from-(--color-ink-dim) to-transparent" />
    </motion.div>
  );
}
