"use client";

import { ThreeScene } from "@/components/scenes/ThreeScene";
import { SaaSArchitecture } from "@/components/scenes/SaaSArchitecture";
import { useDeviceTier } from "@/hooks/useDeviceTier";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Cloud, Lock, CreditCard, Database, Activity, Box } from "lucide-react";

const SAAS_FEATURES = [
  { name: "REST & GRAPHQL APIS", desc: "Sub-10ms response latency", icon: Cloud },
  { name: "ENTERPRISE AUTH & RBAC", desc: "Multi-tenant role boundaries", icon: Lock },
  { name: "GLOBAL STRIPE BILLING", desc: "Automated subscriptions & usage tiers", icon: CreditCard },
  { name: "POSTGRESQL & REDIS", desc: "Distributed caching & high concurrency", icon: Database },
  { name: "3D LIVE DASHBOARDS", desc: "Interactive WebGL client visualizers", icon: Box },
  { name: "EDGE EVENT TELEMETRY", desc: "Real-time WebSocket event streams", icon: Activity },
];

export function SaaSSection() {
  const tier = useDeviceTier();

  return (
    <section id="saas" className="relative bg-[#120B07] py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-grid-chocolate opacity-40" />
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(223,157,86,0.1)_0%,transparent_70%)] blur-3xl" />

      {/* 3D SaaS Architecture Background */}
      <div className="absolute inset-0 pointer-events-none opacity-45">
        <ThreeScene cameraPosition={[0, 0, 6]} fov={50}>
          <SaaSArchitecture scrollProgress={0.9} lowPower={tier === "low"} />
        </ThreeScene>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(246,238,227,0.15)] bg-[rgba(34,24,18,0.75)] px-3.5 py-1 backdrop-blur-md">
          <span className="font-mono text-[10px] font-semibold text-(--color-caramel)">
            SYSTEM 08
          </span>
          <span className="h-1 w-1 rounded-full bg-(--color-caramel)" />
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-[#D4C2AD]">
            SaaS Cloud Engineering
          </span>
        </div>

        <div className="mt-8 max-w-2xl">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FBF7EE]">
            Multi-Tenant Platforms Built to Scale.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#D4C2AD]">
            We engineer scalable multi-tenant SaaS architectures from the ground up — from authentication matrices and automated billing engines to bespoke 3D operational control dashboards.
          </p>
        </div>

        <div className="mt-14 max-w-3xl">
          <div className="font-mono text-xs font-bold tracking-widest text-(--color-caramel) uppercase mb-4">
            ENTERPRISE PLATFORM FOUNDATION
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {SAAS_FEATURES.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.name}
                  className="flex flex-col gap-1.5 rounded-2xl border border-[rgba(246,238,227,0.12)] bg-[rgba(27,18,13,0.85)] p-4 backdrop-blur-xl transition-all hover:border-(--color-caramel)/40 hover:shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <ItemIcon size={16} className="text-(--color-caramel)" />
                    <span className="font-mono text-[10px] font-bold tracking-wider text-[#FBF7EE]">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-[#917C69] leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex gap-4">
            <MagneticButton href="#contact" variant="caramel" className="!text-xs">
              Launch SaaS Architecture
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
