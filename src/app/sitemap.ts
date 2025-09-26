import type { MetadataRoute } from "next";

// Mark this route as static for export
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.green-pulse.es";
  const lastModified = new Date(); // evaluated at build time
  return [
    { url: `${base}/`, lastModified },
    { url: `${base}/contact`, lastModified },
  ];
}
