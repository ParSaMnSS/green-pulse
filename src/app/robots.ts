import type { MetadataRoute } from "next";

// Mark this route as static for export
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://www.green-pulse.es/sitemap.xml",
    host: "https://www.green-pulse.es",
  };
}
