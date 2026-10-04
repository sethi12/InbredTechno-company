"use client";

import Image from "next/image";
import { ThreeScene } from "@/components/scenes/ThreeScene";
import { RobotAssembly } from "@/components/scenes/RobotAssembly";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { Bot, Gauge, Cpu, CheckCircle2 } from "lucide-react";

const LABELS = [
  { name: "VISION SENSORS", desc: "Depth cameras + stereo optical tracking", color: "#df9d56" },
  { name: "KINEMATICS", desc: "Precision servo & brushless motor control", color: "#fbf7ee" },
  { name: "CONTROL LOOPS", desc: "Sub-15ms deterministic edge loops", color: "#5cb88a" },
  { name: "SENSOR FUSION", desc: "IMU, LiDAR & ultrasonic telemetry", color: "#e8a867" },
  { name: "ON-DEVICE AI", desc: "Embedded inference on local accelerators", color: "#cca074" },
  { name: "HARDWARE KIOSK", desc: "Industrial ruggedized gym & retail units", color: "#c57e3a" },
];

export function RoboticsSection() {
  const tier = useDeviceTier();

  return (
    <section
      id="robotics"
      className="relative bg-[#120B07] py-28 md:py-36 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(92,184,138,0.12)_0%,transparent_70%)]" />

      {/* 3D Robot Assembly Background */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <ThreeScene cameraPosition={[0, 0.2, 5.5]} fov={46}>
          <RobotAssembly scrollProgress={1.0} lowPower={tier === "low"} />
        </ThreeScene>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 05
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            Robotics & Physical Computing
          </span>
        </div>

        <div className="mt-8 max-w-3xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBF7EE]">
            Software That Moves Into the Real World.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
            We engineer physical machines that perceive, reason, and act in the physical world — including India&rsquo;s first AI gym robotics kiosk.
          </p>
        </div>

        {/* 2-Column Robotics & Kinematics Showcase */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-4">
            <div className="font-mono text-xs font-bold tracking-widest uppercase text-(--color-active) flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#5cb88a] shadow-[0_0_8px_#5cb88a]" />
              ROBOTICS SYSTEM ONLINE — ALL SENSORS CALIBRATED
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {LABELS.map((l) => (
                <div
                  key={l.name}
                  className="rounded-2xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.85)] p-4 backdrop-blur-xl transition-all hover:border-(--color-caramel)/40 hover:shadow-lg"
                >
                  <div
                    className="h-2 w-2 rounded-full mb-2"
                    style={{ backgroundColor: l.color, boxShadow: `0 0 8px ${l.color}` }}
                  />
                  <p className="font-mono text-[11px] font-bold tracking-wider" style={{ color: l.color }}>
                    {l.name}
                  </p>
                  <p className="font-mono text-[10px] text-[#917C69] mt-1 leading-relaxed">
                    {l.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Robotics Assembly Card */}
          <div className="relative rounded-3xl border border-[rgba(92,184,138,0.3)] bg-[rgba(27,18,13,0.9)] p-6 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-[rgba(246,238,227,0.08)] pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Bot size={16} className="text-(--color-caramel)" />
                <span className="font-mono text-xs font-bold text-[#FBF7EE] tracking-wider">
                  PHYSICAL ACTUATION & SENSOR FUSION
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(92,184,138,0.3)] bg-[rgba(24,17,12,0.8)] px-2.5 py-0.5 font-mono text-[9px] font-bold text-(--color-active)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--color-active) animate-ping" />
                DETERMINISTIC
              </span>
            </div>

            {/* Robotics Image Preview */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[rgba(246,238,227,0.1)] bg-[#150D09]">
              <Image
                src="/showcase/automation_engineering_1791151072650.jpg"
                alt="InbredTechno Robotics Engineering & Assembly"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(18,11,7,0.85)] via-transparent to-black/20 pointer-events-none" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="font-mono text-[9px] text-[#D4C2AD] bg-[rgba(24,17,12,0.85)] px-2 py-0.5 rounded-md border border-[rgba(246,238,227,0.15)] backdrop-blur-md">
                  ROS / Micro-ROS · Kiosk OS
                </span>
                <span className="font-mono text-[9px] font-bold text-(--color-active) bg-[rgba(24,17,12,0.85)] px-2 py-0.5 rounded-md border border-[rgba(92,184,138,0.3)] backdrop-blur-md">
                  Sub-15ms Control
                </span>
              </div>
            </div>

            {/* Robotics Hardware Telemetry Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.6)] p-2.5">
                <span className="font-mono text-[8px] text-[#917C69] uppercase block">KINEMATICS</span>
                <span className="font-mono text-xs font-bold text-[#FBF7EE] mt-0.5">6-Axis Sync</span>
              </div>
              <div className="rounded-xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.6)] p-2.5">
                <span className="font-mono text-[8px] text-[#917C69] uppercase block">LATENCY</span>
                <span className="font-mono text-xs font-bold text-(--color-active) mt-0.5">&lt; 15ms Loop</span>
              </div>
              <div className="rounded-xl border border-[rgba(246,238,227,0.06)] bg-[rgba(34,24,18,0.6)] p-2.5">
                <span className="font-mono text-[8px] text-[#917C69] uppercase block">DEPLOYMENT</span>
                <span className="font-mono text-xs font-bold text-(--color-caramel) mt-0.5">Commercial Kiosk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
