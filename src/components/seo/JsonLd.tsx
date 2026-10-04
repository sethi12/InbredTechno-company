export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://inbredtechno.com/#organization",
        name: "InbredTechno",
        alternateName: ["Inbred Techno", "InbredTechno Technologies"],
        url: "https://inbredtechno.com",
        logo: {
          "@type": "ImageObject",
          url: "https://inbredtechno.com/logo.png",
          caption: "InbredTechno Logo",
          width: "512",
          height: "512",
        },
        image: "https://inbredtechno.com/logo.png",
        description:
          "InbredTechno is an advanced technology engineering company specializing in Artificial Intelligence, Autonomous Robotics, High-Throughput SaaS Products, Computer Vision, and Digital Commerce Platforms.",
        slogan: "Where World Connects Technically",
        email: "contact@inbredtechno.com",
        sameAs: [
          "https://twitter.com/inbredtechno",
          "https://linkedin.com/company/inbredtechno",
          "https://github.com/sethi12",
        ],
        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Autonomous Robotics",
          "Computer Vision",
          "Edge AI Inference",
          "33-point Skeletal Pose Tracking",
          "Multi-Tenant SaaS Architecture",
          "Flutter Mobile Development",
          "WebGL & Three.js 3D Configurator",
          "Digital Commerce & Headless Checkout",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: "contact@inbredtechno.com",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://inbredtechno.com/#website",
        url: "https://inbredtechno.com",
        name: "InbredTechno — Software, AI, Robotics & SaaS Products",
        description:
          "Official website of InbredTechno — Engineering next-generation intelligent software, robotics, and machine learning products.",
        publisher: {
          "@id": "https://inbredtechno.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        "@id": "https://inbredtechno.com/#products",
        name: "InbredTechno Engineered Products & Fleet",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@type": "SoftwareApplication",
              name: "RoboCoach AI",
              applicationCategory: "HealthApplication",
              operatingSystem: "Edge Hardware Kiosk / Linux",
              description:
                "Autonomous AI hardware gym kiosk executing real-time 33-point skeletal tracking and sub-20ms biomechanical posture correction.",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@type": "SoftwareApplication",
              name: "Virtual Trial Room AR",
              applicationCategory: "MultimediaApplication",
              operatingSystem: "Web / Retail Mirror Kiosk",
              description:
                "Real-time 3D neural garment warping and virtual mirror platform with 60 FPS body tracking.",
            },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@type": "SoftwareApplication",
              name: "Zizzle Media Platform",
              applicationCategory: "SocialNetworkingApplication",
              operatingSystem: "iOS / Android (Flutter)",
              description:
                "High-throughput mobile video reels platform with automated serverless HLS transcoding and edge CDN delivery.",
            },
          },
          {
            "@type": "ListItem",
            position: 4,
            item: {
              "@type": "SoftwareApplication",
              name: "FiveWellness Platform",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Headless digital commerce platform with 3D product visualizers and Stripe Elements payment orchestration.",
            },
          },
          {
            "@type": "ListItem",
            position: 5,
            item: {
              "@type": "SoftwareApplication",
              name: "PenZone 3D E-Commerce",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "Procedural 3D WebGL luxury product configurator with real-time PBR material shaders.",
            },
          },
          {
            "@type": "ListItem",
            position: 6,
            item: {
              "@type": "SoftwareApplication",
              name: "Beauty by Krimse",
              applicationCategory: "WebApplication",
              operatingSystem: "Web",
              description:
                "High-end luxury bridal artistry and beauty portfolio platform with NextGen WebP image pipelines.",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://inbredtechno.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What technologies does InbredTechno specialize in?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "InbredTechno specializes in Artificial Intelligence, Machine Learning, Edge AI, Autonomous Robotics, High-Throughput Mobile Apps, Multi-Tenant SaaS Cloud Platforms, Computer Vision, and 3D E-Commerce Systems.",
            },
          },
          {
            "@type": "Question",
            name: "How does InbredTechno deploy AI on hardware and robotics?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We engineer custom edge compute hardware kiosks, sensor fusion architectures (depth cameras, LiDAR), and optimize PyTorch, ONNX, and TensorRT neural networks for deterministic sub-20 millisecond inference.",
            },
          },
          {
            "@type": "Question",
            name: "Can InbredTechno build custom SaaS platforms and mobile apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. InbredTechno architects enterprise-grade multi-tenant SaaS clouds with automated billing, Flutter cross-platform mobile apps, and distributed media transcoding clusters.",
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
