import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // local /public images don't need remotePatterns — this is just for future external sources
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
