"use client";

import { ThreeScene } from "@/components/scenes/ThreeScene";
import { AITrainingVisualization } from "@/components/scenes/AITrainingVisualization";
import { useDeviceTier } from "@/hooks/useDeviceTier";

const STAGES = [
  { label: "RAW DATA INGESTION", color: "#df9d56", desc: "Multi-modal video, LiDAR & telemetry streams" },
  { label: "LOSS OPTIMIZATION", color: "#fbf7ee", desc: "Gradient descent & convergence validation" },
  { label: "ACCURACY BENCHMARK", color: "#cca074", desc: "99.4% precision validation on test sets" },
  { label: "WEIGHT QUANTIZATION", color: "#e8a867", desc: "INT8 & FP16 hardware edge acceleration" },
  { label: "FROZEN WEIGHT DEPLOY", color: "#5cb88a", desc: "Sub-20ms edge runtime execution" },
];

export function AITrainingSection() {
  const tier = useDeviceTier();

  return (
    <section
      id="ai-training"
      className="relative bg-[#18100B] py-28 md:py-36 overflow-hidden border-t border-[rgba(246,238,227,0.06)]"
    >
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      {/* 3D Training Particles Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <ThreeScene cameraPosition={[0, 0, 7]} fov={48}>
          <AITrainingVisualization scrollProgress={0.85} lowPower={tier === "low"} />
        </ThreeScene>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 03.5
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            Neural Training Pipeline
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBF7EE]">
            From Raw Sensor Data to Autonomous Precision.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
            We build and train custom models for domain-specific problems — turning raw vision and telemetry streams into instant, high-confidence physical and digital actions.
          </p>
        </div>

        {/* Training Stages List */}
        <div className="mt-12 max-w-2xl">
          <div className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase mb-4">
            TRAINING & VALIDATION PIPELINE
          </div>
          <div className="flex flex-col gap-3 rounded-2xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.9)] p-6 backdrop-blur-xl shadow-xl">
            {STAGES.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 py-2 border-b border-[rgba(246,238,227,0.06)] last:border-0"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-2 w-2 rounded-full shrink-0"
                    style={{
                      backgroundColor: s.color,
                      boxShadow: `0 0 10px ${s.color}`,
                    }}
                  />
                  <span
                    className="font-mono text-xs font-bold"
                    style={{ color: s.color }}
                  >
                    {s.label}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[#D4C2AD] pl-5 sm:pl-0">
                  {s.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
