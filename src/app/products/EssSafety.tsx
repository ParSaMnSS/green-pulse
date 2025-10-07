// File: app/products/EssSafety.tsx
"use client";
import Container from "../../components/bits/Container";
import { Reveal, RevealGroup } from "../../components/motion/Reveal";
import type { GPVars } from "../../types/css";


type SafetyItem = { title: string; desc: string };
const DEFAULT_ITEMS: SafetyItem[] = [
    { title: "Cell-level protection", desc: "Per-cell monitoring & thermal control." },
    { title: "Pack-level safety", desc: "Electrical isolation & fault detection." },
    { title: "System monitoring", desc: "Real-time diagnostics & early warning." },
    { title: "Fire suppression", desc: "Aerosol system, explosion-relief design." },
];

const vars: GPVars = {
    '--gp-green': '#2E7D32',
    '--gp-green-light': '#66BB6A',
    '--gp-lime': '#A5D6A7',
    '--gp-gray': '#424242',
    '--gp-white': '#F5F5F5',
    '--gp-blue': '#1565C0',
};

export default function EssSafety() {
    return (
        <section
            id="ess-safety"
            aria-labelledby="ess-safety-title"
            style={vars}
            className="relative bg-[#2fb84a] py-20 sm:py-28 lg:py-32 min-h-[35vh] scroll-mt-24"
        >
            <Container>
                <header className="max-w-2xl">
                    <Reveal y={-4} delay={70}>
                        <h2
                            id="ess-safety-title"
                            className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white"
                        >
                            Robust Safety Architecture
                        </h2>
                    </Reveal>

                    <Reveal y={8} delay={130}>
                        <p className="mt-3 max-w-prose text-white/70">
                            Multi-layer protection from cell to system for safer operation in the field.
                        </p>
                    </Reveal>
                </header>

                <ul
                    role="list"
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
                >
                    <RevealGroup baseDelay={160} step={90}>
                        {DEFAULT_ITEMS.map((it) => (
                            <Reveal key={it.title} y={12}>
                                <li className="group flex flex-col justify-between h-full rounded-2xl border border-[var(--gp-lime)]/50 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
                                    <div className="flex items-start gap-3">
                                        <span
                                            className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[var(--gp-lime)]/30 ring-1 ring-[var(--gp-lime)]/70"
                                            aria-hidden
                                        >
                                            <svg
                                                viewBox="0 0 24 24"
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.25"
                                                style={{ color: "var(--gp-green)" }}
                                            >
                                                <path
                                                    d="M20 6L9 17l-5-5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </span>

                                        <div>
                                            <p className="font-medium text-[var(--gp-gray)]">{it.title}</p>
                                            <p className="mt-1 text-sm text-[var(--gp-gray)]/65">{it.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            </Reveal>
                        ))}
                    </RevealGroup>
                </ul>
            </Container>
        </section>
    );
}
