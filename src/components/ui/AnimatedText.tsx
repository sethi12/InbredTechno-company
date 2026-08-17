"use client";

import { motion, type Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

const container = (stagger: number, delay: number): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
});

const word: Variants = {
  hidden: { opacity: 0, y: "0.6em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: EASE },
  },
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  as = "p",
  stagger = 0.06,
}: AnimatedTextProps) {
  const words = text.split(" ");
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      variants={container(stagger, delay)}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.08em] pr-[0.28em] align-top">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </Comp>
  );
}
