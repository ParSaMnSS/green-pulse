"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./nav/MobileMenu";

import { useI18n } from "@/i18n/client";
import DesktopLanguageSelector from "./nav/DesktopLanguageSelector";

export default function Navbar() {
  const i18n = useI18n();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,box-shadow] duration-300",
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 md:py-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo — unchanged */}
          <Link href="/" className="flex items-center space-x-2 sm:ml-0 -ml-2">
            <Image
              src="/asset/gp.png"
              alt="Logo"
              width={300}
              height={300}
              priority
              className={[
                "w-[160px] sm:w-[200px] md:w-[300px] h-auto shrink-0 transition-[filter] duration-300 will-change-filter",
                scrolled ? "filter-none" : "invert brightness-0",
              ].join(" ")}
            />
          </Link>

          {/* Desktop links (as you already had them) */}
          <div className="hidden md:flex items-center gap-14 text-base mr-16 font-semibold">
            <Link href="/products" className="relative group">
              <span
                className={[
                  "transition-colors duration-300",
                  scrolled
                    ? "text-neutral-800 group-hover:text-green-600"
                    : "text-white group-hover:text-green-400",
                ].join(" ")}
              >
                {i18n("navbar.products", { count: 0 })}
              </span>
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link href="/contact" className="relative group">
              <span
                className={[
                  "transition-colors duration-300",
                  scrolled
                    ? "text-neutral-800 group-hover:text-green-600"
                    : "text-white group-hover:text-green-400",
                ].join(" ")}
              >
                {i18n("navbar.contact", { count: 0 })}
              </span>
              <span className="absolute left-0 -bottom-1 h-[3px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
            </Link>

            <DesktopLanguageSelector scrolled={scrolled} />
          </div>

          {/* Mobile hamburger (only on < md) */}
          <MobileMenu scrolled={scrolled} />
        </div>
      </nav>
    </header>
  );
}
