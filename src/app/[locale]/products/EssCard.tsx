// File: app/products/EssCard.tsx
"use client";
import Container from "../../../components/bits/Container";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "../../../components/motion/Reveal";

type Feature = { label: string; value: string };
import { useI18n } from "@/i18n/client";

const FEATURES: Feature[] = [
  { label: "Rated Capacity", value: "High-density energy storage" },
  { label: "System Efficiency", value: "Maximum energy utilization" },
  { label: "Cycle Life", value: "Long-term reliability" },
];

export default function EssCard() {
  const i18n = useI18n();

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
                {i18n("products.essCard.title", { count: 0 })}
              </h1>
            </Reveal>

            <Reveal y={8} delay={70}>
              <p className="mt-4 text-black/80">
                {i18n("products.essCard.description", { count: 0 })}
              </p>
            </Reveal>

            <dl className="mt-8 grid gap-6 sm:grid-cols-3">
              <RevealGroup baseDelay={50} step={55}>
                {FEATURES.map((f) => (
                  <Reveal key={f.label} y={10}>
                    <div>
                      <dt className="text-sm text-black/80">{i18n(f.label, { count: 0 })}</dt>
                      <dd className="text-base font-medium text-black/60">{i18n(f.value, { count: 0 })}</dd>
                    </div>
                  </Reveal>
                ))}
              </RevealGroup>
            </dl>

            <div className="mt-8 flex gap-3">
              <Reveal y={12} delay={160}>
                <Link
                  href="/contact"
                  className="rounded-2xl px-5 py-2.5 bg-[var(--gp-green,#2E7D32)] duration-300 text-white text-sm font-medium hover:bg-[var(--gp-green-light,#66BB6A)]"
                >
                  {i18n("products.essCard.contactButton", { count: 0 })}
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}