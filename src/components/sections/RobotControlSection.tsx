"use client";

import { Smartphone, Radio, Cpu, Brain, Bot, Cog, CheckCircle2 } from "lucide-react";

const PIPELINE = [
  { id: "user", label: "USER INTENT", sublabel: "Mobile App / Voice UI", icon: Smartphone, color: "#df9d56" },
  { id: "app", label: "SIGNAL INGEST", sublabel: "WebRTC / BLE Telemetry", icon: Radio, color: "#fbf7ee" },
  { id: "api", label: "CLOUD / EDGE ROUTER", sublabel: "Sub-10ms Mesh Gateway", icon: Cpu, color: "#cca074" },
  { id: "ai", label: "NEURAL DECISION", sublabel: "Real-Time Kinematic AI", icon: Brain, color: "#e8a867" },
  { id: "robot", label: "ACTUATOR CONTROLLER", sublabel: "Deterministic Micro-ROS", icon: Bot, color: "#5cb88a" },
  { id: "action", label: "PHYSICAL DYNAMICS", sublabel: "Hardware Kiosk / Motor Actuation", icon: Cog, color: "#c57e3a" },
];

export function RobotControlSection() {
  return (
    <section
      id="robot-control"
      className="relative bg-[#18100B] py-28 md:py-36 border-t border-[rgba(246,238,227,0.06)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.08)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 05.5
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            Autonomous Control Stack
          </span>
        </div>

        <h2 className="mt-8 max-w-2xl font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FBF7EE]">
          From Cloud Algorithms to Physical Actuation.
        </h2>

        <p className="mt-4 max-w-lg text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
          A unified deterministic control pipeline connecting mobile interactions, edge computer vision, cloud telemetry, and physical motor actuation.
        </p>

        {/* Pipeline Visualization — Clean & Fully Visible */}
        <div className="mt-14 flex flex-col items-center">
          {PIPELINE.map((step, i) => {
            const StepIcon = step.icon;

            return (
              <div key={step.id} className="flex w-full flex-col items-center">
                <div
                  className="relative flex w-full max-w-xl items-center gap-5 rounded-2xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.85)] p-4 md:p-5 backdrop-blur-xl transition-all hover:border-(--color-caramel)/40 hover:shadow-lg"
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: step.color,
                      backgroundColor: `${step.color}18`,
                      color: step.color,
                    }}
                  >
                    <StepIcon size={20} />
                  </div>

                  <div>
                    <p
                      className="font-mono text-xs font-bold tracking-wider uppercase"
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </p>
                    <p className="font-mono text-[10px] text-[#D4C2AD] mt-0.5">
                      {step.sublabel}
                    </p>
                  </div>

                  <span className="ml-auto font-mono text-[10px] font-bold text-[#917C69]">
                    NODE 0{i + 1}
                  </span>
                </div>

                {i < PIPELINE.length - 1 && (
                  <div className="relative flex w-10 flex-col items-center py-1">
                    <div
                      className="h-7 w-0.5"
                      style={{
                        background: `linear-gradient(to bottom, ${step.color}, ${PIPELINE[i + 1].color})`,
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-[rgba(92,184,138,0.3)] bg-[rgba(24,17,12,0.9)] p-5 text-center backdrop-blur-md shadow-lg">
          <span className="font-mono text-xs font-bold tracking-widest text-(--color-active) flex items-center justify-center gap-2">
            <CheckCircle2 size={16} />
            FULL-STACK AUTONOMOUS MESH CONNECTED · HARDWARE + AI + CLOUD
          </span>
        </div>
      </div>
    </section>
  );
}
