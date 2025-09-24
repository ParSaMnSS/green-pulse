// src/components/HeroSlider.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  img: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
};

const slides: Slide[] = [
  {
    img: "/asset/road.png",
    title: "High charging power\nwithout grid limits",
    subtitle: "Contact our sales team to learn which solution fits you best.",
    cta: { label: "Get in touch", href: "#contact" },
  },
  {
    img: "/asset/road.png",
    title: "Powering the Grid\nProfiting Your Business",
    subtitle: "Ship a static Next.js site anywhere with one command.",
    cta: { label: "Docs", href: "#docs" },
  },
  {
    img: "/asset/road.png",
    title: "Independent Power\nOff-grid Charging",
    subtitle: "A clean component system ready for growth.",
    cta: { label: "Sign up", href: "#signup" },
  },
];

const AUTOPLAY_MS = 7000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = slides.length;
  const segment = 100 / count;               // 33.3333%
  const leftPct = index * segment;           // 0, 33.33, 66.66

  // autoplay (pause on hover/focus)
  useEffect(() => {
    if (!AUTOPLAY_MS) return;
    start();
    return () => stop(); // cleanup must return void
  }, [index]);

  const start = () => {
    stop(); // clear any existing timer
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
  };

  const stop = () => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null; // reset ref
    }
  };


  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden text-white"
      onMouseEnter={stop}
      onMouseLeave={start}
      onFocus={stop}
      onBlur={start}
    >
      {/* Slides (tall + bottom padding so selector/fade don’t overlap buttons) */}
      <div className="relative min-h-[105svh]">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={i}
              className={[
                "absolute inset-0 transition-opacity duration-700",
                active ? "opacity-100" : "opacity-0 pointer-events-none",
              ].join(" ")}
              aria-hidden={!active}
            >
              <Image
                src={s.img}
                alt=""
                fill
                priority={i === 0}
                className="object-cover object-center -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-black/50" />
              {/* Centered content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="mx-auto w-full max-w-6xl px-4 text-center pb-28">
                  <h1 className="whitespace-pre-line text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                    {s.title}
                  </h1>
                  {s.subtitle && (
                    <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85 max-w-3xl mx-auto">
                      {s.subtitle}
                    </p>
                  )}
                  {s.cta && (
                    <Link
                      href={s.cta.href}
                      className="mt-8 inline-block rounded-lg bg-purple-600 px-6 py-3 font-semibold shadow-lg transition-colors hover:bg-purple-700"
                    >
                      {s.cta.label}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Segmented selector: titles centered + bar lights only the active third */}
      <nav
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 w-full px-6"
        aria-label="Hero slides"
      >
        <div className="mx-auto max-w-6xl pb-28">
          {/* titles row (evenly spaced thirds, centered) */}
          <ul className="mb-2 grid grid-cols-3 items-center text-center text-xs sm:text-sm font-semibold">
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <li key={i} className="px-1">
                  <button
                    onClick={() => setIndex(i)}
                    className={[
                      "w-full truncate transition-colors",
                      active ? "text-white" : "text-white/70 hover:text-white",
                    ].join(" ")}
                    aria-current={active ? "true" : undefined}
                    title={s.title.replace(/\n/g, " ")}
                  >
                    {s.title.split("\n")[0]}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* base line */}
          <div className="relative h-[2px] w-full rounded-full bg-white/30 overflow-hidden">
            {/* active segment only */}
            <div
              className="absolute top-0 h-full rounded-full bg-gradient-to-r from-teal-400 to-indigo-500 transition-[left] duration-500"
              style={{
                left: `${leftPct}%`,
                width: `${segment}%`,
              }}
            />
          </div>
        </div>
      </nav>
    </section>
  );
}
