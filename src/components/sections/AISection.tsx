"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ThreeScene } from "@/components/scenes/ThreeScene";
import { NeuralNetwork } from "@/components/scenes/NeuralNetwork";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { Eye, Sparkles, Brain, Activity, Bot, MessageSquareCode, Cpu, ShieldCheck } from "lucide-react";

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

        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBF7EE]">
            Intelligence Engineered for Production.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
            Not Jupyter notebooks. Not toy demos. We engineer production AI architectures that execute sub-20ms inference inside commercial hardware kiosks, mobile apps, and cloud SaaS platforms.
          </p>
        </div>

        {/* 2-Column AI Capabilities & Telemetry Showcase */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-6">
            <div>
              <div className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase mb-4">
                CORE NEURAL & VISION CAPABILITIES
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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

          {/* Visual Edge AI Silicon & Vision Telemetry */}
          <div className="relative rounded-3xl border border-[rgba(223,157,86,0.3)] bg-[rgba(27,18,13,0.9)] p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-[rgba(246,238,227,0.08)] pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Cpu size={16} className="text-(--color-caramel)" />
                <span className="font-mono text-xs font-bold text-[#FBF7EE] tracking-wider">
                  EDGE AI SILICON & INFERENCE
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(92,184,138,0.3)] bg-[rgba(24,17,12,0.8)] px-2.5 py-0.5 font-mono text-[9px] font-bold text-(--color-active)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--color-active) animate-ping" />
                &lt;18ms LATENCY
              </span>
            </div>

            {/* Neural Image Preview */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(246,238,227,0.1)] bg-[#150D09]">
              <Image
                src="/showcase/edge_ai_microchip_1791129537194.jpg"
                alt="InbredTechno Edge AI Neural Microchip"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,11,7,0.85)] via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#D4C2AD] bg-[rgba(24,17,12,0.85)] px-2 py-0.5 rounded-md border border-[rgba(246,238,227,0.15)] backdrop-blur-md">
                  PyTorch · TensorRT · ONNX
                </span>
                <span className="font-mono text-[9px] font-bold text-(--color-caramel) bg-[rgba(24,17,12,0.85)] px-2 py-0.5 rounded-md border border-[rgba(223,157,86,0.3)] backdrop-blur-md">
                  33-Point Skeletal AI
                </span>
              </div>
            </div>

            {/* Neural Quantization Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.6)] p-2.5">
                <span className="font-mono text-[8px] text-[#917C69] uppercase block">INFERENCE</span>
                <span className="font-mono text-xs font-bold text-(--color-active) mt-0.5">&lt; 18ms</span>
              </div>
              <div className="rounded-xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.6)] p-2.5">
                <span className="font-mono text-[8px] text-[#917C69] uppercase block">PRECISION</span>
                <span className="font-mono text-xs font-bold text-[#FBF7EE] mt-0.5">99.4% F1</span>
              </div>
              <div className="rounded-xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.6)] p-2.5">
                <span className="font-mono text-[8px] text-[#917C69] uppercase block">RUNTIME</span>
                <span className="font-mono text-xs font-bold text-(--color-caramel) mt-0.5">Edge + Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
