"use client";

const PROCESS = [
  {
    number: "01",
    title: "DISCOVER",
    summary: "Deconstruct the core engineering challenge.",
    detail:
      "We don't pitch generic templates. We analyze physical constraints, latency tolerances, data pipelines, and your exact business targets.",
    color: "#df9d56",
  },
  {
    number: "02",
    title: "ARCHITECT",
    summary: "System design & mathematical models.",
    detail:
      "Database schema, computer vision pipeline, API latency budgets, and hardware schematics — fully specified before writing code.",
    color: "#fbf7ee",
  },
  {
    number: "03",
    title: "ENGINEER",
    summary: "Full-stack code & physical integration.",
    detail:
      "Backend microservices, front-end WebGL interfaces, mobile apps, and edge hardware firmware developed in synchronized agile sprints.",
    color: "#cca074",
  },
  {
    number: "04",
    title: "INTELLIGENCE",
    summary: "Custom model training & neural optimization.",
    detail:
      "Synthesizing datasets, training custom pose/cloth/NLP models, and quantizing weights for sub-20ms execution on target hardware.",
    color: "#e8a867",
  },
  {
    number: "05",
    title: "DEPLOY & SCALE",
    summary: "Production rollout & fleet telemetry.",
    detail:
      "Automated CI/CD pipelines, multi-tenant cloud orchestration, automated failovers, and 24/7 hardware telemetry monitoring.",
    color: "#5cb88a",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative bg-[#120B07] py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 10
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            Engineering Lifecycle
          </span>
        </div>

        <h2 className="mt-8 max-w-2xl font-display text-4xl sm:text-5xl font-bold tracking-tight text-[#FBF7EE]">
          From Conception to Autonomous Reality.
        </h2>
        <p className="mt-4 max-w-xl text-base sm:text-lg text-[#D4C2AD]">
          A structured 5-stage engineering lifecycle designed to turn ambitious technical concepts into reliable, production-ready software and machines.
        </p>

        {/* 5 Process Cards Grid — Clean, High Contrast & Always Readable */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROCESS.map((step) => (
            <div
              key={step.number}
              className="flex flex-col justify-between gap-4 rounded-3xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.85)] p-6 backdrop-blur-xl transition-all duration-300 hover:border-(--color-caramel) hover:shadow-[0_15px_40px_rgba(10,7,5,0.9)] hover:-translate-y-1"
            >
              <div>
                <span className="font-mono text-xs font-bold" style={{ color: step.color }}>
                  STEP {step.number}
                </span>
                <p className="font-display text-xl font-bold text-[#FBF7EE] mt-2">
                  {step.title}
                </p>
                <p className="mt-1 font-mono text-[11px] font-semibold text-(--color-caramel)">
                  {step.summary}
                </p>
                <p className="text-xs leading-relaxed text-[#D4C2AD] mt-3">
                  {step.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-[rgba(246,238,227,0.06)] flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: step.color }} />
                <span className="font-mono text-[9px] text-[#917C69] uppercase font-semibold">
                  Phase 0{step.number} Completed
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
