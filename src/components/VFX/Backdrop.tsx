// src/components/VFX/Backdrop.tsx
import React from "react";

export default function Backdrop({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`relative isolate ${className}`}>
      {/* Base dark gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,#0b1a33,transparent_60%),linear-gradient(180deg,#0a1426,30%,#070f1f,70%,#050a17)]" />

      {/* Soft green glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-18rem] h-[44rem] w-[44rem] -translate-x-1/2 rounded-full opacity-25 blur-3xl bg-[radial-gradient(closest-side,rgba(16,185,129,.55),transparent)]" />

      {/* Subtle dot texture with radial mask */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1.5px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      {/* Decorative top wave */}
      <svg
        className="pointer-events-none absolute left-0 top-0 h-[26vh] w-full opacity-[0.25]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="contact-wave-top" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#a5e5b5" />
            <stop offset="1" stopColor="#5cc58a" />
          </linearGradient>
        </defs>
        <path
          d="M0,224L120,213.3C240,203,480,181,720,165.3C960,149,1200,139,1320,133.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          fill="url(#contact-wave-top)"
        />
      </svg>

      {/* Bottom fade so footer sits cleanly */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050a17]" />

      {/* Content */}
      <div className="relative">{children}</div>
    </section>
  );
}
