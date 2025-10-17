// File: app/products/ContactCTA.tsx
"use client";
import Container from "../../../components/bits/Container";
import Link from "next/link";
import { Reveal } from "../../../components/motion/Reveal";
import type { GPVars } from "../../../types/css";


import { useI18n } from "@/i18n/client";

const vars: GPVars = {
    '--gp-green': '#2E7D32',
    '--gp-green-light': '#66BB6A',
    '--gp-lime': '#A5D6A7',
    '--gp-gray': '#424242',
    '--gp-white': '#F5F5F5',
};

export default function ContactCTA() {
    const i18n = useI18n();
    console.log(i18n("products.contactCTA.title", { count: 0 }));

    return (
        <section
            id="contact"
            aria-labelledby="contact-cta-title"
            style={vars}
            className="py-16 sm:py-20 lg:py-24 bg-[var(--gp-white)]"
        >
            <Container>
                <div className="rounded-3xl bg-[#457b3b] text-white shadow-2xl ring-1 ring-white/10 p-8 sm:p-10 lg:p-12">
                    <div className="grid items-center gap-8 lg:grid-cols-2">
                        <div>
                            <Reveal y={-6}>
                                <h3 id="contact-cta-title" className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
                                    {i18n("products.contactCTA.title", { count: 0 })}
                                </h3>
                            </Reveal>
                            <Reveal y={8} delay={100}>
                                <p className="mt-4 max-w-prose text-white/85">
                                    {i18n("products.contactCTA.description", { count: 0 })}
                                </p>
                            </Reveal>
                        </div>

                        <div className="flex flex-wrap gap-3 lg:justify-end">
                            <Reveal y={10} delay={160}>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-[var(--gp-green)] shadow-sm transition hover:bg-[var(--gp-green-light)] hover:text-[#0b3d0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--gp-green)]"
                                >
                                    {i18n("products.contactCTA.contactButton", { count: 0 })}
                                </Link>
                            </Reveal>

                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}