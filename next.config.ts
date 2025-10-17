import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { unoptimized: true }, // ← needed for <Image> when exporting
};

export default nextConfig;

