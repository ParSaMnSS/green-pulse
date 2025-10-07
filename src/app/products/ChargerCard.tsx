// File: app/products/ChargerCard.tsx
"use client";
import Container from "../../components/bits/Container";
import Image from "next/image";
import Link from "next/link";
import { Reveal, RevealGroup } from "../../components/motion/Reveal";
import type { GPVars } from "../../types/css";

type Feature = { icon: "bolt" | "plug" | "efficiency" | "ui"; label: string; value: string };
const FEATURES: Feature[] = [
    { icon: "bolt", label: "Power Options", value: "60–240 kW" },
    { icon: "plug", label: "Connectors", value: "CCS1 / CCS2 / CHAdeMO / GB/T" },
    { icon: "efficiency", label: "Output", value: "200–1000 V DC" },
    { icon: "ui", label: "Efficiency", value: "High efficiency" },
];

function Icon({ name }: { name: Feature["icon"] }) {
    const common = "h-5 w-5";
    switch (name) {
        case "bolt":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "plug":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 7v4m6-4v4M7 11h10v3a5 5 0 11-10 0v-3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "efficiency":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h4l3-8 4 16 3-8h4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            );
        case "ui":
            return (
                <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 9h18M7 13h6" />
                </svg>
            );
    }
}
const vars: GPVars = {
    '--gp-green': '#2E7D32',
    '--gp-green-light': '#66BB6A',
    '--gp-lime': '#A5D6A7',
    '--gp-gray': '#424242',
    '--gp-white': '#F5F5F5',
};

export default function ChargerCard() {
    return (
        <section
            id="gpd-240"
            aria-labelledby="gpd-240-title"
            aria-describedby="gpd-240-desc"
            style={vars}
            className="relative isolate bg-[var(--gp-white)] py-20 sm:py-24 lg:py-28 min-h-[62vh] scroll-mt-24"
        >
            <Container>
                <div className="grid items-stretch gap-8 lg:grid-cols-2">
                    <Reveal x={-28}>
                        <figure className="order-2 lg:order-1 relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-black/10">
                            <div className="relative mx-auto aspect-[2/3] max-h-[790px] w-full">
                                <Image
                                    src="products/pump.png"
                                    alt="GPD 240 DC fast charger unit"
                                    fill
                                    className="object-contain"
                                    sizes="(min-width: 1024px) 50vw, 100vw"
                                    priority
                                    placeholder="empty"
                                />
                            </div>
                        </figure>
                    </Reveal>

                    <Reveal x={28}>
                        <article className="order-1 lg:order-2 flex flex-col rounded-2xl bg-[var(--gp-green)] p-8 sm:p-10 lg:p-12 text-white shadow-xl ring-1 ring-white/10">
                            <header className="max-w-xl">
                                <h2 id="gpd-240-title" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                                    GPD 240 DC Dispenser Charger
                                </h2>
                                <p id="gpd-240-desc" className="mt-3 text-white/85">
                                    The GPD 240 integrated DC charging station delivers fast, reliable charging for urban
                                    stations, highways, and commercial facilities. Supports CCS1, CCS2, CHAdeMO, and GB/T standards.
                                </p>
                            </header>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-2xl bg-[var(--gp-green-light)] px-5 py-2.5 text-sm font-medium text-[#0b3d0e] shadow-sm transition hover:bg-white hover:text-[var(--gp-green)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--gp-green)]"
                                >
                                    Contact us
                                </Link>
                            </div>

                            <ul role="list" className="mt-8 grid gap-4">
                                <RevealGroup baseDelay={120} step={100}>
                                    {FEATURES.map((f) => (
                                        <Reveal key={f.label} y={12}>
                                            <li className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/5 p-5 ring-1 ring-white/5 backdrop-blur-[1px]">
                                                <span
                                                    className="mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20"
                                                    aria-hidden
                                                    style={{ color: "var(--gp-lime)" }}
                                                >
                                                    <Icon name={f.icon} />
                                                </span>
                                                <div className="min-w-0">
                                                    <p className="font-semibold leading-6 text-white">{f.label}</p>
                                                    <p className="text-sm leading-6 text-white/85">{f.value}</p>
                                                </div>
                                            </li>
                                        </Reveal>
                                    ))}
                                </RevealGroup>
                            </ul>
                        </article>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}