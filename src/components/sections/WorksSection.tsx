"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES, type Project, type ProjectCategory } from "@/data/projects";
import { SectionLabel } from "@/components/ui/Atoms";
import { AnimatedText } from "@/components/ui/AnimatedText";

function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.97 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="project"
      data-cursor-label="VIEW"
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-(--color-surface-border) ${
        large ? "col-span-2 min-h-[420px]" : "min-h-[280px]"
      }`}
      style={{
        background: hovered ? "var(--color-surface)" : "var(--color-void-soft)",
      }}
    >
      {/* background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `radial-gradient(circle at 30% 30%, ${
            project.category === "AI"
              ? "#8b7fff"
              : project.category === "ROBOTICS"
              ? "#ff5470"
              : project.category === "MOBILE"
              ? "#3cff8e"
              : "#4de8ff"
          }18, transparent 70%)`,
        }}
      />

      {/* placeholder image / scene */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div
          className="h-32 w-32 rounded-full border"
          style={{
            borderColor:
              project.category === "AI"
                ? "#8b7fff"
                : project.category === "ROBOTICS"
                ? "#ff5470"
                : "#4de8ff",
          }}
        />
      </div>

      <div className="relative flex h-full flex-col justify-between p-6 md:p-8">
        <div className="flex items-start justify-between">
          <span className="hud-label text-(--color-cyan)">{project.category}</span>
          <motion.div
            animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8, y: hovered ? 0 : -8 }}
            className="rounded-full border border-(--color-surface-border) p-2"
          >
            <ArrowUpRight size={14} className="text-(--color-cyan)" />
          </motion.div>
        </div>

        <div>
          <h3
            className={`font-display font-medium tracking-tight text-(--color-ink) ${
              large ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.title}
          </h3>

          <motion.p
            animate={{ opacity: hovered ? 1 : 0.6, y: hovered ? 0 : 4 }}
            transition={{ duration: 0.3 }}
            className="mt-3 max-w-sm text-sm text-(--color-ink-dim)"
          >
            {project.description}
          </motion.p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((t) => (
              <span
                key={t}
                className="hud-label !text-[9px] rounded-full border border-(--color-surface-border) px-2.5 py-1 text-(--color-ink-faint)"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function WorksSection() {
  const [active, setActive] = useState<ProjectCategory>("ALL");

  const filtered = PROJECTS.filter(
    (p) => active === "ALL" || p.category === active
  );

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => p !== featured);

  return (
    <section id="works" className="relative bg-(--color-void) py-32 md:py-40">
      <div className="absolute inset-0 bg-grid opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionLabel index="SYSTEM 09" label="Portfolio" />

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <AnimatedText
            as="h2"
            text="Things we've built."
            className="max-w-xl font-display text-4xl font-medium tracking-tight text-(--color-ink) md:text-6xl"
          />

          {/* category filter */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="link"
                className={`hud-label rounded-full border px-4 py-2 transition-all duration-300 ${
                  active === cat
                    ? "border-(--color-cyan) text-(--color-cyan)"
                    : "border-(--color-surface-border) text-(--color-ink-faint) hover:border-(--color-ink-dim) hover:text-(--color-ink-dim)"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* gallery */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {featured && (
                <ProjectCard key={featured.id} project={featured} large />
              )}
              {rest.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
              {filtered.length === 0 && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-full py-20 text-center"
                >
                  <p className="hud-label text-(--color-ink-faint)">
                    NO PROJECTS IN THIS CATEGORY YET
                  </p>
                  <p className="mt-2 text-sm text-(--color-ink-faint)">
                    Add entries to{" "}
                    <code className="font-mono-tight text-(--color-cyan)">
                      src/data/projects.ts
                    </code>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}
