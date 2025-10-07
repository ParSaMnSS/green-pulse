// File: app/products/ProductsHero.tsx
"use client";
import Container from "../../components/bits/Container";
import Link from "next/link";
import { Reveal } from "../../components/motion/Reveal";

export default function ProductsHero() {
    return (
        <section
            id="products-hero"
            aria-labelledby="products-hero-title"
            className="relative overflow-hidden bg-[#123A2F] " // deep green like the image
        >
            <Container className="min-h-[70vh] flex items-center py-14 sm:py-16 lg:py-20">
                <div className="grid items-center">
                    <header className="max-w-3xl mt-20 items-center">
                        <Reveal y={-8}>
                            <h1
                                id="products-hero-title"
                                className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white" 
                            >
                                Green Pulse Energy Storage Solutions
                            </h1>
                        </Reveal>

                        <Reveal y={8} delay={100}>
                            <p className="mt-4 max-w-3xl text-base sm:text-lg text-neutral-200">
                                Advanced battery systems and charging infrastructure for commercial, industrial,
                                and renewable energy applications.
                            </p>
                        </Reveal>

                        <Reveal y={12} delay={180}>
                            <Link
                                href="/contact"
                                aria-describedby="products-hero-title"
                                className="mt-8 inline-flex items-center rounded-xl bg-[#66BB6A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition
                           hover:bg-[#5AAC60] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70
                           focus-visible:ring-offset-2 focus-visible:ring-offset-[#123A2F]"
                            >
                                Contact Us
                            </Link>
                        </Reveal>
                    </header>
                </div>
            </Container>
        </section>
    );
}
