"use client";

import ShimmerButton from "./bits/NeoGloss";

type Btn = { label: string; href: string };
type Props = {
  title: string;
  subtitle?: string;
  primary?: Btn;
};

export default function HeroCTA({
  title = "Provide High-Quality Services To Global Users",
  subtitle = "Contact our sales team to learn more about which charging solution best fits your needs.",
  primary = { label: "Get In Touch", href: "/contact" },
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#123e23] text-white">
      {/* height & center */}
      <div className="min-h-[100svh] flex items-center">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
            {title}
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">
            {primary && (
              <div className="mt-6 flex flex-wrap gap-3">
                <ShimmerButton href={primary.href}>{primary.label}</ShimmerButton>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* decorative background shapes */}
      <svg
        className="pointer-events-none absolute -top-16 right-[-10%] h-[60vh] w-[120vw] opacity-[0.15]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,224L120,213.3C240,203,480,181,720,165.3C960,149,1200,139,1320,133.3L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
          fill="#fff"
        />
      </svg>
      <svg
        className="pointer-events-none absolute bottom-[-10vh] left-[-20%] h-[55vh] w-[140vw] opacity-[0.07]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64L120,80C240,96,480,128,720,122.7C960,117,1200,75,1320,53.3L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          fill="#fff"
        />
      </svg>
    </section>
  );
}

