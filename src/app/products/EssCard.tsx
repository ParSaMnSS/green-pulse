// File: app/products/EssCard.tsx
"use client";
import Container from "../../components/bits/Container";
import Image from "next/image";
import { Reveal, RevealGroup } from "../../components/motion/Reveal";

type Feature = { label: string; value: string };
const FEATURES: Feature[] = [
  { label: "Rated Capacity", value: "High-density energy storage" },
  { label: "System Efficiency", value: "Maximum energy utilization" },
  { label: "Cycle Life", value: "Long-term reliability" },
];

export default function EssCard() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#eaf5ea] ">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <Reveal x={-24}>
            <div className="relative aspect-[4/6] w-full max-h-[600px] overflow-hidden rounded-2xl shadow bg-[var(--gp-surface,white)]">
              <Image
                src="/products/289.png"
                alt="289 kWh cabinet energy storage system"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, 100vw"
                placeholder="empty"
              />
            </div>
          </Reveal>

          <div>
            <Reveal y={-6}>
              <h1 className="mt-1 text-2xl md:text-5xl font-semibold tracking-tight text-[var(--gp-ink,black)]">
                289kWh Cabinet ESS:
              </h1>
            </Reveal>
            <Reveal y={-4} delay={80}>
              <h2 className="mt-1 text-2xl md:text-5xl font-semibold tracking-tight text-[var(--gp-ink,black)]">
                Power Meets Precision
              </h2>
            </Reveal>

            <Reveal y={8} delay={140}>
              <p className="mt-4 text-black/80">
                The GPE 289 Cabinet ESS features high-density 314 Ah LFP cells in an all-in-one
                design. Engineered for maximum energy integration across commercial, industrial,
                renewable, and EV charging applications.
              </p>
            </Reveal>

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <RevealGroup baseDelay={160} step={90}>
                {FEATURES.map((f) => (
                  <Reveal key={f.label} y={10}>
                    <div>
                      <dt className="text-sm text-black/80">{f.label}</dt>
                      <dd className="text-base font-medium text-black/60">{f.value}</dd>
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>
            </dl>

            <div className="mt-8 flex gap-3">
              <Reveal y={12} delay={160}>
                <a
                  href="/contact"
                  className="rounded-2xl px-5 py-2.5 bg-[var(--gp-green,#2E7D32)] duration-300 text-white text-sm font-medium hover:bg-[var(--gp-green-light,#66BB6A)]"
                >
                  Contact Us
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}