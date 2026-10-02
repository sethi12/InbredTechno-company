"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { ArrowUpRight, Play, Pause, Volume2, VolumeX, Maximize2, X, Sparkles, Film, CheckCircle2 } from "lucide-react";
import { PROJECTS, CATEGORIES, type Project, type ProjectCategory } from "@/data/projects";

function ProjectMediaCard({
  project,
  onOpenModal,
}: {
  project: Project;
  onOpenModal: (project: Project, initialVideoIndex?: number) => void;
}) {
  const [selectedVideoIdx, setSelectedVideoIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const videoList = project.videos || (project.video ? [project.video] : []);
  const currentVideo = videoList[selectedVideoIdx] || project.video;

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [selectedVideoIdx, currentVideo]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-[rgba(42,23,16,0.1)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl transition-all duration-300 hover:border-(--color-caramel) hover:shadow-[0_24px_60px_rgba(42,23,16,0.12),0_0_24px_rgba(223,157,86,0.15)]"
    >
      {/* Media Header / Player Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-[#150D09] border-b border-[rgba(42,23,16,0.08)]">
        {currentVideo ? (
          <div className="relative h-full w-full">
            <video
              ref={videoRef}
              src={currentVideo}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,11,7,0.7)] via-transparent to-black/20 pointer-events-none" />

            {/* Video Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={togglePlay}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(24,17,12,0.8)] border border-[rgba(246,238,227,0.25)] text-[#FBF7EE] backdrop-blur-md transition-transform hover:scale-110 shadow-sm"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(24,17,12,0.8)] border border-[rgba(246,238,227,0.25)] text-[#FBF7EE] backdrop-blur-md transition-transform hover:scale-110 shadow-sm"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
                </button>
              </div>

              <button
                onClick={() => onOpenModal(project, selectedVideoIdx)}
                className="flex items-center gap-1.5 rounded-full bg-[rgba(24,17,12,0.85)] border border-[rgba(223,157,86,0.4)] px-3 py-1 text-[10px] font-mono font-bold text-(--color-caramel) backdrop-blur-md transition-all hover:bg-(--color-caramel) hover:text-(--color-void) shadow-sm"
              >
                <Maximize2 size={10} />
                <span>EXPAND CASE STUDY</span>
              </button>
            </div>
          </div>
        ) : project.image ? (
          <div 
            onClick={() => onOpenModal(project, 0)}
            className="relative h-full w-full cursor-pointer"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,11,7,0.7)] via-transparent to-black/20 pointer-events-none" />

            <div className="absolute bottom-3 right-3 flex items-center z-10">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(project, 0);
                }}
                className="flex items-center gap-1.5 rounded-full bg-[rgba(24,17,12,0.85)] border border-[rgba(223,157,86,0.4)] px-3 py-1 text-[10px] font-mono font-bold text-(--color-caramel) backdrop-blur-md transition-all hover:bg-(--color-caramel) hover:text-(--color-void) shadow-sm"
              >
                <Maximize2 size={10} />
                <span>EXPAND CASE STUDY</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,rgba(223,157,86,0.15)_0%,transparent_70%)]">
            <div className="h-16 w-16 rounded-full border border-(--color-caramel)/40 flex items-center justify-center text-(--color-caramel)">
              <Sparkles size={24} />
            </div>
          </div>
        )}

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(223,157,86,0.35)] bg-[rgba(24,17,12,0.9)] px-3 py-1 font-mono text-[10px] font-bold text-(--color-caramel) backdrop-blur-md shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-(--color-caramel)" />
            {project.category}
          </span>
        </div>

        {/* Multi-Clip Selector */}
        {videoList.length > 1 && (
          <div className="absolute top-3 right-3 z-10 flex flex-wrap gap-1 max-w-[65%] justify-end">
            {videoList.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideoIdx(idx);
                }}
                className={`rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold backdrop-blur-md transition-all shadow-sm ${
                  selectedVideoIdx === idx
                    ? "bg-(--color-caramel) text-(--color-void) font-bold shadow-[0_0_8px_rgba(223,157,86,0.8)]"
                    : "bg-[rgba(24,17,12,0.85)] text-[#FBF7EE] border border-[rgba(246,238,227,0.2)] hover:border-(--color-caramel)"
                }`}
              >
                Clip {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-mono text-[9px] font-bold tracking-wider text-(--color-caramel) uppercase block mb-1">
                {project.typeBadge}
              </span>
              <h3 className="font-display text-2xl font-bold tracking-tight text-(--color-chocolate-ink) transition-colors group-hover:text-(--color-caramel)">
                {project.title}
              </h3>
              <p className="mt-1 font-mono text-[11px] font-medium text-(--color-chocolate-dim)">
                {project.tagline}
              </p>
            </div>
            <button
              onClick={() => onOpenModal(project, selectedVideoIdx)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.9)] text-(--color-chocolate-ink) transition-all hover:border-(--color-caramel) hover:text-(--color-caramel) hover:scale-105 shadow-sm"
              aria-label="View details"
            >
              <ArrowUpRight size={16} />
            </button>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-(--color-chocolate-dim)">
            {project.description}
          </p>

          {/* Metrics Spotlight */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-2 rounded-2xl border border-[rgba(42,23,16,0.06)] bg-[rgba(255,255,255,0.7)] p-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-mono text-[9px] text-(--color-chocolate-faint) uppercase">
                    {m.label}
                  </span>
                  <span className="font-display text-xs font-bold text-(--color-chocolate-ink) mt-0.5">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6 flex flex-wrap gap-1.5 border-t border-[rgba(42,23,16,0.08)] pt-4">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="rounded-full border border-[rgba(42,23,16,0.08)] bg-[rgba(255,255,255,0.8)] px-2.5 py-1 font-mono text-[10px] font-semibold text-(--color-chocolate-dim)"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export function WorksSection() {
  const [active, setActive] = useState<ProjectCategory>("ALL");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalVideoIdx, setModalVideoIdx] = useState(0);

  const filtered = PROJECTS.filter(
    (p) => active === "ALL" || p.category === active
  );

  const handleOpenModal = (project: Project, videoIndex = 0) => {
    setModalProject(project);
    setModalVideoIdx(videoIndex);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModal = () => {
    setModalProject(null);
    document.body.style.overflow = "";
  };

  return (
    <section id="works" className="relative bg-[#F5EFE6] py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid-cream opacity-50" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 07
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-(--color-chocolate-dim)">
            Production Fleet & Case Studies
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tight text-(--color-chocolate-ink) md:text-6xl cream-title-gradient">
              Things We&rsquo;ve Engineered.
            </h2>
            <p className="mt-4 max-w-xl text-base text-(--color-chocolate-dim)">
              Explore live commercial deployments, interactive video demonstrations, and digital commerce case studies.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                data-cursor="link"
                className={`rounded-full px-4 py-2 font-mono text-[11px] font-semibold tracking-wider transition-all duration-300 ${
                  active === cat
                    ? "bg-(--color-chocolate-ink) text-[#FBF7EE] shadow-md"
                    : "border border-[rgba(42,23,16,0.12)] bg-[rgba(255,255,255,0.7)] text-(--color-chocolate-dim) hover:border-(--color-caramel) hover:text-(--color-chocolate-ink)"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <LayoutGroup>
          <motion.div
            layout
            className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectMediaCard
                  key={p.id}
                  project={p}
                  onOpenModal={handleOpenModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>

      {/* Expanded Project Lightbox / Case Study Modal */}
      <AnimatePresence>
        {modalProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(10,7,5,0.92)] p-4 md:p-8 backdrop-blur-2xl"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl border border-[rgba(223,157,86,0.35)] bg-[rgba(24,17,12,0.96)] p-6 md:p-10 shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-6 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(246,238,227,0.2)] bg-[rgba(34,24,18,0.8)] text-[#FBF7EE] transition-transform hover:scale-110"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-(--color-caramel)/30 bg-(--color-caramel)/10 px-3.5 py-1 text-xs font-mono font-bold text-(--color-caramel)">
                    <span>{modalProject.typeBadge}</span>
                    <span>·</span>
                    <span>{modalProject.year || "2025"}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#FBF7EE]">
                    {modalProject.title}
                  </h3>
                  <p className="font-mono text-sm text-(--color-caramel) mt-1">
                    {modalProject.tagline}
                  </p>
                </div>

                {/* Primary Video / Image in Modal */}
                {modalProject.videos && modalProject.videos.length > 0 ? (
                  <div className="overflow-hidden rounded-2xl border border-[rgba(246,238,227,0.15)] bg-black shadow-2xl">
                    <video
                      key={modalProject.videos[modalVideoIdx]}
                      src={modalProject.videos[modalVideoIdx]}
                      controls
                      autoPlay
                      className="w-full max-h-[500px] object-contain"
                    />
                  </div>
                ) : modalProject.image ? (
                  <div className="relative overflow-hidden rounded-2xl border border-[rgba(246,238,227,0.15)] bg-[#150D09] shadow-2xl aspect-video w-full">
                    <Image
                      src={modalProject.image}
                      alt={modalProject.title}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                ) : null}

                {/* Multi Video Selector Bar */}
                {modalProject.videos && modalProject.videos.length > 1 && (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs text-[#D4C2AD] mr-2 flex items-center gap-1.5">
                      <Film size={14} className="text-(--color-caramel)" />
                      AVAILABLE CLIPS & PERSPECTIVES:
                    </span>
                    {modalProject.videos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setModalVideoIdx(idx)}
                        className={`rounded-full px-4 py-1.5 font-mono text-xs font-bold transition-all ${
                          modalVideoIdx === idx
                            ? "bg-(--color-caramel) text-(--color-void) shadow-[0_0_12px_rgba(223,157,86,0.6)]"
                            : "border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.7)] text-[#D4C2AD] hover:border-(--color-caramel)"
                        }`}
                      >
                        Demo / Perspective 0{idx + 1}
                      </button>
                    ))}
                  </div>
                )}

                {/* Engineering Case Study Spec */}
                <div className="grid gap-6 md:grid-cols-2 border-t border-[rgba(246,238,227,0.08)] pt-6">
                  <div>
                    <h4 className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase">
                      ENGINEERING CHALLENGE & SOLUTION
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-[#D4C2AD]">
                      {modalProject.challenge || modalProject.description}
                    </p>
                    {modalProject.solution && (
                      <p className="mt-3 text-sm leading-relaxed text-[#FBF7EE]">
                        <strong className="text-(--color-caramel)">Solution: </strong>
                        {modalProject.solution}
                      </p>
                    )}
                  </div>

                  <div>
                    <h4 className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase">
                      TECH STACK & ARCHITECTURE
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {modalProject.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[rgba(246,238,227,0.12)] bg-[rgba(34,24,18,0.7)] px-3 py-1 font-mono text-xs text-[#D4C2AD]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                {modalProject.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 rounded-2xl border border-[rgba(223,157,86,0.25)] bg-[rgba(34,24,18,0.6)] p-4">
                    {modalProject.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-[10px] text-[#917C69] uppercase">
                          {m.label}
                        </p>
                        <p className="font-display text-lg font-bold text-(--color-caramel) mt-0.5">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Modal CTA */}
                <div className="flex justify-end pt-4">
                  <a
                    href="#contact"
                    onClick={handleCloseModal}
                    className="inline-flex items-center gap-2 rounded-full bg-(--color-caramel) px-7 py-3 font-mono text-xs font-bold text-(--color-void) shadow-[0_0_20px_rgba(223,157,86,0.4)] transition-all hover:brightness-110"
                  >
                    <span>Request Engineering Spec</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
