"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = { scrolled: boolean };

const container: Variants = {
    hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
    show: { transition: { staggerChildren: 0.08 } },
};

const listItem: Variants = {
    hidden: { opacity: 0, y: 14, scale: 0.95, filter: "blur(2px)" },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: { type: "spring", stiffness: 420, damping: 24 },
    },
};

export default function MobileMenu({ scrolled }: Props) {
    const [open, setOpen] = useState(false);

    // lock body scroll when open
    useEffect(() => {
        document.body.classList.toggle("overflow-hidden", open);
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);

    const linkBase =
        "block rounded-full px-5 py-3 text-lg font-semibold transition-colors duration-300";
    const linkColors = scrolled
        ? "text-neutral-900 hover:text-white hover:bg-green-600"
        : "text-white hover:text-neutral-900 hover:bg-white";

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <div className="md:hidden flex items-center">
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
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[2px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />

                        {/* Panel */}
                        <motion.aside
                            key="panel"
                            className={[
                                "fixed right-3 top-3 z-[70] h-[calc(100dvh-1.5rem)] w-[86vw] max-w-[420px]",
                                "rounded-3xl p-4 shadow-2xl border",
                                scrolled
                                    ? "bg-white/95 border-black/10"
                                    : "bg-neutral-900/95 border-white/10",
                            ].join(" ")}
                            initial={{ x: "110%", rotate: 2, opacity: 0 }}
                            animate={{ x: 0, rotate: 0, opacity: 1 }}
                            exit={{ x: "110%", rotate: 2, opacity: 0 }}
                            transition={{ type: "tween", duration: 0.3 }}
                        >
                            {/* Close */}
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

                            {/* Animated list */}
                            <motion.nav
                                className="mt-2 flex flex-col gap-3"
                                variants={container}
                                initial="hidden"
                                animate="show"
                                exit="hidden"
                            >
                                {navItems.map((navItem) => (
                                    <motion.div key={navItem.href} variants={listItem}>
                                        <Link
                                            href={navItem.href}
                                            className={`${linkBase} ${linkColors} group`}
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="relative inline-block">
                                                {navItem.label}
                                                <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
                                            </span>
                                        </Link>
                                    </motion.div>
                                ))}
                            </motion.nav>

                            {/* subtle blobs */}
                            {open && (
                                <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden transform-gpu will-change-transform">
                                    <motion.div
                                        className="absolute -right-10 top-24 h-28 w-28 rounded-full bg-green-500/20 blur-2xl"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{
                                            duration: 2.2,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            ease: "easeInOut",
                                        }}
                                    />
                                    <motion.div
                                        className="absolute right-8 bottom-16 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{
                                            duration: 2.5,
                                            repeat: Infinity,
                                            repeatType: "mirror",
                                            ease: "easeInOut",
                                        }}
                                    />
                                </div>
                            )}
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
