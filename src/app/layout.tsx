import type { Metadata, Viewport } from "next";
import "./globals.css";
import MotionProvider from "./providers/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.green-pulse.es"),
  title: {
    default: "Green Pulse — Innovative & Reliable EV Charging",
    template: "%s | Green Pulse",
  },
  description:
    "Modular ESS-powered DC fast charging solutions—compact, portable, and high-scale hubs—for grid-independent, efficient EV charging.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.green-pulse.es",
    title: "Green Pulse — Innovative & Reliable EV Charging",
    description:
      "ESS-powered DC fast charging solutions with grid independence, peak shaving, and scalable deployment.",
    siteName: "Green Pulse",
    images: [
      { url: "/og.jpg", width: 1200, height: 630, alt: "Green Pulse" }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Green Pulse — Innovative & Reliable EV Charging",
    description:
      "Modular ESS-powered DC fast charging solutions for urban, fleet, and highway needs.",
    images: ["/og.jpg"]
  },
  icons: { icon: "/favicon.ico" }
};

export const viewport: Viewport = {
  themeColor: "#111827",
};



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body><MotionProvider>{children}</MotionProvider></body>
        </html>
    );
}



