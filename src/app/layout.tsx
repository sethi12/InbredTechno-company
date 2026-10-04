import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://inbredtechno.com";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#120B07" },
    { media: "(prefers-color-scheme: light)", color: "#F5EFE6" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "InbredTechno — Software, AI, Robotics & SaaS Products",
    template: "%s | InbredTechno",
  },
  description:
    "InbredTechno is an advanced technology company engineering artificial intelligence, autonomous robotics, high-throughput SaaS cloud products, computer vision, and modern commerce platforms.",
  keywords: [
    "InbredTechno",
    "Inbred Techno",
    "Artificial Intelligence Company",
    "AI Software Development",
    "Machine Learning Engineering",
    "Autonomous Robotics",
    "Gym Robotics Kiosk",
    "RoboCoach AI",
    "Computer Vision Solutions",
    "33-point Skeletal Pose Tracking",
    "Virtual Trial Room AR",
    "Garment Warping AR",
    "Zizzle Media Platform",
    "Flutter Mobile App Development",
    "Multi-Tenant SaaS Cloud",
    "FiveWellness",
    "PenZone 3D Configurator",
    "Beauty by Krimse",
    "Three.js WebGL Development",
    "Headless E-Commerce Next.js",
    "Edge AI Inference",
    "Sub-20ms Neural Network",
    "PyTorch MediaPipe Edge Compute",
  ],
  authors: [{ name: "InbredTechno Engineering Team", url: siteUrl }],
  creator: "InbredTechno",
  publisher: "InbredTechno",
  category: "technology",
  applicationName: "InbredTechno",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InbredTechno — Software, AI, Robotics & SaaS Products",
    description:
      "Engineering next-generation intelligent software, autonomous robotics, AI & machine learning platforms, and high-performance SaaS products.",
    url: siteUrl,
    siteName: "InbredTechno",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "InbredTechno — Where World Connects Technically",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InbredTechno — Software, AI, Robotics & SaaS Products",
    description:
      "Engineering next-generation intelligent software, autonomous robotics, and machine learning platforms.",
    images: ["/logo.png"],
    creator: "@inbredtechno",
    site: "@inbredtechno",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any", type: "image/png" },
      { url: "/logo-48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo-120.png", sizes: "120x120", type: "image/png" },
      { url: "/logo-200.png", sizes: "200x200", type: "image/png" },
    ],
    shortcut: ["/logo.png"],
    apple: [
      { url: "/logo-200.png", sizes: "200x200", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full bg-(--color-void) text-(--color-ink) antialiased selection:bg-(--color-caramel) selection:text-(--color-void)">
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
