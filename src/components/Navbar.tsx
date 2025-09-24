"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/asset/gp.png"
              alt="Logo"
              width={200}
              height={300}
              priority
              className={scrolled ? "" : "invert brightness-0 sm:w-[200px] md:w-[300px]"}
            />
          </Link>

          {/* Right-side CTA */}
          <Link
            href="#contact"
            className={[
              "inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300",
              scrolled
                ? "bg-gray-900 text-white hover:bg-black"
                : "border border-white/30 bg-white/15 text-white hover:bg-white/25",
            ].join(" ")}
          >
            Contact us
          </Link>
        </div>
      </nav>
    </header>
  );
}
