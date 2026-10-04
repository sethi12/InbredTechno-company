import type { Metadata } from "next";

const siteUrl = "https://www.inbredtechno.com";

export const metadata: Metadata = {
  title: "Chaitanya Sethi — Founder & Chief Architect | InbredTechno",
  description:
    "Chaitanya Sethi is the Founder and Chief Systems Architect at InbredTechno, pioneering autonomous robotics, computer vision, AI & machine learning platforms, and high-performance SaaS cloud infrastructure.",
  alternates: {
    canonical: "/founder",
  },
  openGraph: {
    title: "Chaitanya Sethi — Founder & Chief Architect | InbredTechno",
    description:
      "Founder and Chief Systems Architect at InbredTechno. Leading artificial intelligence, autonomous robotics, SaaS cloud, and computer vision engineering.",
    url: `${siteUrl}/founder`,
    siteName: "InbredTechno",
    type: "profile",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Chaitanya Sethi — Founder & Chief Architect | InbredTechno",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Sethi — Founder & Chief Architect | InbredTechno",
    description:
      "Founder and Chief Systems Architect at InbredTechno. Leading AI, robotics, and SaaS engineering.",
    images: ["/logo.png"],
    creator: "@inbredtechno",
  },
};

export default function FounderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.inbredtechno.com/founder/#chaitanya-sethi",
    name: "Chaitanya Sethi",
    jobTitle: "Founder & Chief Architect",
    worksFor: {
      "@type": "Organization",
      name: "InbredTechno",
      url: "https://www.inbredtechno.com",
    },
    url: "https://www.inbredtechno.com/founder",
    sameAs: [
      "https://www.linkedin.com/in/chaitanya-sethi-420974229/",
      "https://www.instagram.com/inbredtechno",
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Autonomous Robotics",
      "Computer Vision",
      "Multi-Tenant SaaS Architecture",
      "Hardware Kiosks",
      "Edge AI Inference",
      "Full Stack Software Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {children}
    </>
  );
}
