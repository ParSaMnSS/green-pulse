import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // ← enable static export
  images: { unoptimized: true }, // ← needed for <Image> when exporting
};

export default nextConfig;
