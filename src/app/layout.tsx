import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/cursor/CustomCursor";

const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["400","500","600","700"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["400","500","600"] });
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], weight: ["400","500"] });

export const metadata: Metadata = {
title: "InbredTechno — Software, AI & Robotics",
  icons: {
    icon: [
      { url: '/companylogo.jpg', type: 'image/jpeg' }
    ],
    shortcut: ['/companylogo.jpg'],
    apple: ['/companylogo.jpg'],
  },
  description: "InbredTechno builds SaaS products, applications, AI systems and robotics for the next generation of technology.",
  openGraph: { title: "InbredTechno — Software, AI & Robotics", description: "InbredTechno builds SaaS products, applications, AI systems and robotics.", type: "website" },
  twitter: { card: "summary_large_image", title: "InbredTechno — Software, AI & Robotics", description: "InbredTechno builds SaaS products, applications, AI systems and robotics." },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="min-h-full bg-(--color-void)">
        <SmoothScrollProvider><CustomCursor />{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
