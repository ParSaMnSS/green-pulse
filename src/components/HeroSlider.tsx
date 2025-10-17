"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import { useI18n } from "@/i18n/client";

type Slide = {
  img: string;
  title: string;
  subtitle?: string;
};

const AUTOPLAY_MS = 7000;

export default function HeroSlider() {
  const i18n = useI18n();

  const slides: Slide[] = [
    {
      img: "/asset/compact.png",
      title: i18n("heroSlider.slides.0.title", { count: 0 }),
      subtitle: i18n("heroSlider.slides.0.subtitle", { count: 0 }),
    },
    {
      img: "/asset/portable.png",
      title: i18n("heroSlider.slides.1.title", { count: 0 }),
      subtitle: i18n("heroSlider.slides.1.subtitle", { count: 0 }),
    },
    {
      img: "/asset/large.png",
      title: i18n("heroSlider.slides.2.title", { count: 0 }),
      subtitle: i18n("heroSlider.slides.2.subtitle", { count: 0 }),
    },
  ];

  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const count = slides.length;
  const segment = 100 / count;
  const leftPct = index * segment;

  const stop = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (!AUTOPLAY_MS) return;
    stop(); // clear any existing timer
    timer.current = setTimeout(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
  }, [count, stop]);

  useEffect(() => {
    start();
    return stop; // cleanup
  }, [start, stop, index]); // restart timer when slide changes



  return (
    <section
      role="region"
      aria-roledescription="carousel"
      aria-label="Featured solutions"
      onMouseEnter={stop}
      onMouseLeave={start}
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
                alt={`${s.title} — product visual`}
                fill
                sizes="100vw"
                priority={i === index}   // ✅ use the existing state 'index'
                className="object-cover object-center -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-black/50" />
              {/* Centered content */}
              <div className="relative h-full flex items-center justify-end back">
                <div className="mx-auto w-full max-w-6xl px-4 text-left pb-28">
                  <div className="max-w-3xl backdrop-blur-sm px-10 py-6 rounded-2xl shadow-2xl"> {/* common wrapper for alignment */}
                    <h1 className="whitespace-pre-line text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                      {s.title}
                    </h1>
                    {s.subtitle && (
                      <p className="mt-4 text-base sm:text-lg md:text-xl text-white/85">
                        {s.subtitle}
                      </p>
                    )}
                  </div>
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
