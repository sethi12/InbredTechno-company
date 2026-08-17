"use client";

import { useState } from "react";
import { Loader } from "@/components/loader/Loader";
import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { SaaSSection } from "@/components/sections/SaaSSection";
import { ApplicationsSection } from "@/components/sections/ApplicationsSection";
import { AISection } from "@/components/sections/AISection";
import { AITrainingSection } from "@/components/sections/AITrainingSection";
import { RoboticsSection } from "@/components/sections/RoboticsSection";
import { RobotControlSection } from "@/components/sections/RobotControlSection";
import { WorksSection } from "@/components/sections/WorksSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
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
        <Hero />
        <WhatWeBuild />
        <SaaSSection />
        <ApplicationsSection />
        <AISection />
        <AITrainingSection />
        <RoboticsSection />
        <RobotControlSection />
        <WorksSection />
        <TechStackSection />
        <ProcessSection />
        <AboutSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
