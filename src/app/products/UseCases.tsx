// File: app/products/UseCases.tsx
"use client";
import Container from "../../components/bits/Container";
import Image from "next/image";
import { Reveal, RevealGroup } from "../../components/motion/Reveal";
import type { GPVars } from "../../types/css";


type CaseItem = { title: string; desc: string; image?: string; href?: string };
const CASES: CaseItem[] = [
    { title: "Public Transit", desc: "Urban charging for buses and municipal fleets to ensure reliable, rapid turnarounds and increased uptime.", image: "products/bus.png" },
    { title: "Commercial Facilities", desc: "Parking lots, malls, and business locations providing convenient customer charging.", image: "/products/station.png" },
    { title: "Highway Corridors", desc: "Inter-city charging stations enabling long-distance EV travel with minimal downtime.", image: "products/center.png" },
    { title: "Fleet Operations", desc: "Logistics and delivery vehicle infrastructure supporting commercial fleet electrification.", image: "products/van station.png" },
];

const vars: GPVars = {
  '--gp-green': '#2E7D32',
  '--gp-green-light': '#66BB6A',
  '--gp-lime': '#A5D6A7',
  '--gp-gray': '#424242',
  '--gp-white': '#F5F5F5',
};

export default function UseCases() {
    return (
        <section
            id="use-cases"
            aria-labelledby="use-cases-title"
            style={vars}
            className="relative isolate bg-[var(--gp-white)] py-10 sm:py-24 lg:py-7 min-h-[55vh] scroll-mt-24"
        >
            <Container>
                <header className="max-w-2xl">
                    <Reveal y={-4} delay={70}>
                        <h2 id="use-cases-title" className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--gp-gray)]">
                            Use Cases
                        </h2>
                    </Reveal>
                    <Reveal y={8} delay={130}>
                        <p className="mt-3 max-w-prose text-[var(--gp-gray)]/70">
                            Scalable systems for public charging, commercial properties, highways, and fleets.
                        </p>
                    </Reveal>
                </header>
                <ul
                    role="list"
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch"
                >
                    <RevealGroup baseDelay={160} step={90}>
                        {CASES.map((c) => (
                            <Reveal key={c.title} y={14}>
                                <li className="group flex flex-col h-full rounded-2xl border border-[var(--gp-lime)]/60 bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
                                    <figure className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-[var(--gp-white)]">
                                        <Image
                                            src={c.image || '/placeholder.svg'}
                                            alt={c.title}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 25vw, 50vw"
                                            placeholder="empty"
                                        />
                                    </figure>
                                    <div className="min-w-0 flex flex-col justify-between flex-1">
                                        <div>
                                            <p className="font-medium text-[var(--gp-gray)]">{c.title}</p>
                                            <p className="mt-1 text-sm text-[var(--gp-gray)]/65">{c.desc}</p>
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