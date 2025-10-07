// src/components/nav/MobileMenu.tsx
"use client";

import { useState, useEffect, useMemo } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
    exit: { opacity: 0 },
};

const panelVariants: Variants = {
    hidden: { x: "100%" },
    show: { x: 0 },
    exit: { x: "100%" },
};

export default function MobileMenu({ scrolled }: { scrolled: boolean }) {
    const [open, setOpen] = useState(false);

    // disable body scroll while open
    useEffect(() => {
        if (!open) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    const links = useMemo(
        () => [
            { href: "/", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/contact", label: "Contact" },
        ],
        []
    );

    return (
        <div className="md:hidden flex items-center">
            {/* Hamburger icon */}
            <Hamburger
                toggled={open}
                toggle={setOpen}
                size={24}
                rounded
                color={scrolled ? "#0A0A0A" : "#FFFFFF"}
                label="Toggle navigation"
            />

            <AnimatePresence>
                {open && (
                    <>
                        {/* fast overlay — no backdrop blur */}
                        <motion.div
                            className="fixed inset-0 z-[60] bg-black/40"
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={overlayVariants}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Slide panel */}
                        <motion.aside
                            className={`fixed right-3 top-3 z-[70] h-[calc(100dvh-1.5rem)] w-[86vw] max-w-[420px]
                         rounded-3xl p-4 border shadow-lg transform-gpu will-change-transform
                         ${scrolled ? "bg-white/95 border-black/10 text-black" : "bg-neutral-900/95 border-white/10 text-white"}`}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={panelVariants}
                            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {/* Close button */}
                            <div className="flex items-center justify-end h-12">
                                <Hamburger
                                    toggled={open}
                                    toggle={setOpen}
                                    size={22}
                                    rounded
                                    color={scrolled ? "#0A0A0A" : "#FFFFFF"}
                                    label="Close navigation"
                                />
                            </div>

                            {/* nav links with light stagger */}
                            <motion.nav
                                className="mt-2 flex flex-col gap-3"
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: { transition: { staggerChildren: 0 } },
                                    show: { transition: { staggerChildren: 0.045 } },
                                }}
                            >
                                {links.map((navItem) => (
                                    <motion.div
                                        key={navItem.href}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.22, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={navItem.href}
                                            onClick={() => setOpen(false)}
                                            className="block rounded-full px-5 py-3 text-lg font-semibold
                                 transition-colors duration-200 hover:bg-white/10"
                                        >
                                            {navItem.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>

                            {/* decorative blobs (lighter + short loop) */}
                            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                                <motion.div
                                    className="absolute -right-10 top-24 h-28 w-28 rounded-full bg-green-500/15"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                />
                                <motion.div
                                    className="absolute right-8 bottom-16 h-24 w-24 rounded-full bg-emerald-400/15"
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                                />
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
