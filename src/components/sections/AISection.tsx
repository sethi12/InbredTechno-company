"use client";

import { motion } from "framer-motion";
import { ThreeScene } from "@/components/scenes/ThreeScene";
import { NeuralNetwork } from "@/components/scenes/NeuralNetwork";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { Eye, Sparkles, Brain, Activity, Bot, MessageSquareCode } from "lucide-react";

const AI_CAPABILITIES = [
  { name: "Computer Vision & Pose AI", desc: "Sub-20ms 33-point body kinematics & tracking", icon: Eye },
  { name: "Neural Cloth Simulation", desc: "Real-time 3D garment deformation & AR mirror", icon: Sparkles },
  { name: "Edge Model Quantization", desc: "Low-power TensorRT & ONNX execution on device", icon: Brain },
  { name: "Biomechanical Recognition", desc: "13+ real-time movement pattern classifiers", icon: Activity },
  { name: "Autonomous Decision Loops", desc: "State machines & multi-modal agent frameworks", icon: Bot },
  { name: "Custom Model Training", desc: "Full dataset synthesis to production inference", icon: MessageSquareCode },
];

export function AISection() {
  const tier = useDeviceTier();

  return (
    <section id="ai" className="relative bg-[#120B07] py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.12)_0%,transparent_70%)] blur-3xl" />

      {/* Ambient 3D Neural Scene Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <ThreeScene cameraPosition={[0, 0, 8]} fov={45}>
          <NeuralNetwork scrollProgress={0.8} lowPower={tier === "low"} />
        </ThreeScene>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 03
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            Artificial Intelligence
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBF7EE]">
            Intelligence Engineered for Production.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
            Not Jupyter notebooks. Not toy demos. We engineer production AI architectures that execute sub-20ms inference inside commercial hardware kiosks, mobile apps, and cloud SaaS platforms.
          </p>
        </div>

        {/* Core Neural & Vision Capabilities Grid */}
        <div className="mt-14 space-y-6 max-w-4xl">
          <div>
            <div className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase mb-4">
              CORE NEURAL & VISION CAPABILITIES
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {AI_CAPABILITIES.map((cap) => {
                const CapIcon = cap.icon;
                return (
                  <div
                    key={cap.name}
                    className="flex flex-col gap-2 rounded-2xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.85)] p-4 backdrop-blur-xl transition-all hover:border-(--color-caramel)/50 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2">
                      <CapIcon size={16} className="text-(--color-caramel)" />
                      <p className="font-mono text-[11px] font-bold tracking-wider text-[#FBF7EE]">
                        {cap.name}
                      </p>
                    </div>
                    <p className="font-mono text-[10px] text-[#917C69] leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-[rgba(246,238,227,0.12)] bg-[rgba(24,17,12,0.85)] p-5 backdrop-blur-xl">
            <div className="font-mono text-[10px] font-bold tracking-widest text-(--color-caramel) uppercase">
              END-TO-END INFERENCE PIPELINE
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs">
              {["DATA INGESTION", "CUSTOM TRAINING", "WEIGHT QUANTIZATION", "EDGE INFERENCE", "CLIENT INTEGRATION"].map((stage, i) => (
                <div key={stage} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-[#D4C2AD]">
                    {stage}
                  </span>
                  {i < 4 && <span className="text-(--color-caramel) font-bold">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
