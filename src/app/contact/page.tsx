// src/app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactGrid from "../../components/Contact-us/contactGrid";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    // no global bg here; let the content-section paint its own background
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Navbar />

      {/* CONTENT SECTION: background is scoped to this flex-1 wrapper, not the footer */}
      <section className="relative flex-1 isolate">
        {/* Background (inside content only) */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {/* base + gradient */}
          <div className="absolute inset-0 bg-[#f6f9de]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#c4e9b7]/85 via-[#8ed197]/50 to-[#5fb477]/35" />

          {/* blobs (kept in frame) */}
          <div className="absolute top-6 left-4 h-[300px] w-[300px] rounded-full bg-[#c4e9b7]/65 blur-3xl" />
          <div className="absolute top-[18vh] right-4 h-[360px] w-[360px] rounded-full bg-[#8ed197]/45 blur-3xl" />
          <div className="absolute bottom-[14vh] left-[22vw] h-[300px] w-[300px] rounded-full bg-[#1f6442]/22 blur-3xl" />

          {/* top wave (full width, no overflow) */}
          <svg
            className="absolute top-0 left-1/2 h-[32vh] w-full -translate-x-1/2 opacity-[0.28] select-none"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="contact-wave-top" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#c4e9b7" />
                <stop offset="1" stopColor="#8ed197" />
              </linearGradient>
            </defs>
            <path
              d="M0,224L120,213.3C240,203,480,181,720,165.3C960,149,1200,139,1320,133.3L1440,128L1440,0L0,0Z"
              fill="url(#contact-wave-top)"
            />
          </svg>

          {/* bottom wave (pulled up so it’s visible above the footer) */}
          <svg
            className="absolute bottom-[12vh] left-1/2 h-[28vh] w-full -translate-x-1/2 opacity-[0.2] select-none"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64L120,80C240,96,480,128,720,122.7C960,117,1200,75,1320,53.3L1440,32L1440,320L0,320Z"
              fill="#5fb477"
            />
          </svg>
        </div>

        {/* Page content */}
        <main className="flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-3xl">
            <ContactGrid />
          </div>
        </main>
      </section>

      {/* FOOTER (separate; won’t cover the content background now) */}
      <Footer />
    </div>
  );
}
