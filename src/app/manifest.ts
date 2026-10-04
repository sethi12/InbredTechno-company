import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "InbredTechno — Software, AI, Robotics & SaaS Products",
    short_name: "InbredTechno",
    description:
      "InbredTechno engineers next-generation intelligent SaaS products, autonomous robotics, AI & machine learning platforms, and high-performance applications.",
    start_url: "/",
    display: "standalone",
    background_color: "#120B07",
    theme_color: "#F5EFE6",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/logo-120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        src: "/logo-200.png",
        sizes: "200x200",
        type: "image/png",
      },
    ],
  };
}
