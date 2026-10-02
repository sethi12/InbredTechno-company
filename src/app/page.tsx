"use client";

import { useState } from "react";
import { Loader } from "@/components/loader/Loader";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { CompanyIntro } from "@/components/sections/CompanyIntro";
import { AISection } from "@/components/sections/AISection";
import { AITrainingSection } from "@/components/sections/AITrainingSection";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { RoboticsSection } from "@/components/sections/RoboticsSection";
import { RobotControlSection } from "@/components/sections/RobotControlSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { SaaSSection } from "@/components/sections/SaaSSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { WhyInbredTechno } from "@/components/sections/WhyInbredTechno";
import { AboutSection } from "@/components/sections/AboutSection";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      <Navbar />
      <main
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* 1. HERO — CREAM */}
        <Hero />

        {/* 2. INTRODUCTION — CREAM */}
        <CompanyIntro />

        {/* 3. AI & NEURAL ARCHITECTURE — CHOCOLATE */}
        <AISection />
        <AITrainingSection />

        {/* 4. CAPABILITIES MATRIX — CREAM */}
        <WhatWeBuild />

        {/* 5. ROBOTICS & DETERMINISTIC CONTROL — CHOCOLATE */}
        <RoboticsSection />
        <RobotControlSection />

        {/* 6. PRODUCTS & CASE STUDIES (ROBOCOACH, VIRTUAL TRY-ON, ZIZZLE, FIVEWELLNESS) — CREAM */}
        <WorksSection />

        {/* 7. SAAS INFRASTRUCTURE — CHOCOLATE */}
        <SaaSSection />

        {/* 8. TECHNICAL ECOSYSTEM CONSTELLATION — CREAM */}
        <TechStackSection />

        {/* 9. ENGINEERING PROCESS — CHOCOLATE */}
        <ProcessSection />

        {/* 10. WHY INBREDTECHNO DIFFERENTIATION — CREAM */}
        <WhyInbredTechno />

        {/* 11. ABOUT COMPANY & THREE PILLARS — CHOCOLATE */}
        <AboutSection />

        {/* 12. CALL TO ACTION & INITIATE PROJECT — CREAM */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
