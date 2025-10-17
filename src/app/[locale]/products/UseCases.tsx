// File: app/products/UseCases.tsx
"use client";
import Container from "../../../components/bits/Container";
import Image from "next/image";
import dynamic from "next/dynamic";

const Reveal = dynamic(() => import("../../../components/motion/Reveal").then(mod => mod.Reveal));
const RevealGroup = dynamic(() => import("../../../components/motion/Reveal").then(mod => mod.RevealGroup));
import type { GPVars } from "../../../types/css";


import { useI18n } from "@/i18n/client";

type CaseItem = { title: string; desc: string; image?: string; href?: string };

const vars: GPVars = {
  '--gp-green': '#2E7D32',
  '--gp-green-light': '#66BB6A',
  '--gp-lime': '#A5D6A7',
  '--gp-gray': '#424242',
  '--gp-white': '#F5F5F5',
};

export default function UseCases() {
    const i18n = useI18n();

    const CASES: CaseItem[] = [
        { title: i18n("products.useCases.cases.0.title", { count: 0 }), desc: i18n("products.useCases.cases.0.description", { count: 0 }), image: "/products/bus.png" },
        { title: i18n("products.useCases.cases.1.title", { count: 0 }), desc: i18n("products.useCases.cases.1.description", { count: 0 }), image: "/products/station.png" },
        { title: i18n("products.useCases.cases.2.title", { count: 0 }), desc: i18n("products.useCases.cases.2.description", { count: 0 }), image: "/products/center.png" },
        { title: i18n("products.useCases.cases.3.title", { count: 0 }), desc: i18n("products.useCases.cases.3.description", { count: 0 }), image: "/products/van station.png" },
    ];

    return (
        <section
            id="use-cases"
            aria-labelledby="use-cases-title"
            style={vars}
            className="relative isolate bg-[var(--gp-white)] py-20 sm:py-24 lg:py-28 min-h-[55vh] scroll-mt-24"
        >
            <Container>
                <header className="max-w-2xl">
                    <Reveal y={-4} delay={70}>
                        <h2 id="use-cases-title" className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--gp-gray)]">
                            {i18n("products.useCases.title", { count: 0 })}
                        </h2>
                    </Reveal>
                    <Reveal y={8} delay={130}>
                        <p className="mt-3 max-w-prose text-[var(--gp-gray)]/70">
                            {i18n("products.useCases.description", { count: 0 })}
                        </p>
                    </Reveal>
                </header>
                <ul
                    role="list"
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    <RevealGroup baseDelay={50} step={55}>
                        {CASES.map((c) => (
                            <Reveal key={c.title} y={14}>
                                <li className="group flex flex-col h-80 w-full rounded-2xl border border-[var(--gp-lime)]/60 bg-white p-5 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md">
                                    <figure className="relative mb-4 h-40 w-full overflow-hidden rounded-xl bg-[var(--gp-white)]">
                                        <Image
                                            src={c.image || '/placeholder.svg'}
                                            alt={c.title}
                                            fill
                                            className="object-cover"
                                            sizes="(min-width: 1024px) 25vw, 50vw"
                                            placeholder="empty"
                                        />
                                    </figure>
                                    <div className="flex flex-col flex-1 justify-between">
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