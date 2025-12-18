"use client";

import React from "react";

// Polymorphic anchor/button
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  className?: string;
  children: React.ReactNode;
  mode?: "onTransparent" | "onWhite";
};
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;
  className?: string;
  children: React.ReactNode;
  mode?: "onTransparent" | "onWhite";
};
type Props = AnchorProps | ButtonProps;

/**
 * MorphButton
 * - onTransparent: dark glass + neon rim + moving gloss
 * - onWhite: solid white pill + dark text + clean shadow
 */
export default function MorphButton(props: Props) {
  const { className = "", children, mode = "onTransparent", ...rest } = props;

  // Outer wrapper (for neon rim / glow in dark mode)
  const wrapperBase = "relative inline-block rounded-2xl transition-[filter,opacity] duration-300";
  const wrapperDark =
    "p-[1px] before:absolute before:inset-0 before:rounded-2xl " +
    "before:bg-[conic-gradient(from_180deg_at_50%_50%,#34d39966,transparent_25%,#22d3ee66_50%,transparent_75%,#34d39966_100%)] " +
    "before:opacity-80 hover:before:opacity-100 " +
    "after:absolute after:inset-[-8px] after:rounded-[20px] after:bg-emerald-400/0 hover:after:bg-emerald-400/10 after:blur-xl";
  const wrapperLight = ""; // no neon rim on white navbar

  // Inner clickable styles
  const innerBase =
    "relative z-10 inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold " +
    "transition-all duration-300 will-change-transform select-none focus:outline-none focus-visible:ring-2 " +
    "before:pointer-events-none before:absolute before:inset-0 before:rounded-xl";

  const innerDark =
    "text-white ring-1 ring-white/15 backdrop-blur " +
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.10),rgba(255,255,255,0.04))] " +
    "hover:-translate-y-0.5 " +
    // moving gloss (mouse-tracked)
    "before:bg-[radial-gradient(140px_70px_at_var(--x,50%)_-40%,rgba(255,255,255,0.28),transparent_72%)]";

  const innerLight =
    "text-slate-900 ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md " +
    "hover:-translate-y-0.5 " +
    // tone down gloss on white
    "before:bg-[radial-gradient(140px_70px_at_var(--x,50%)_-40%,rgba(0,0,0,0.06),transparent_72%)]";

  const wrapper = [
    wrapperBase,
    mode === "onTransparent" ? wrapperDark : wrapperLight,
    className,
  ].join(" ");

  const inner = [innerBase, mode === "onTransparent" ? innerDark : innerLight].join(" ");

  // Mouse-tracked gloss (sets --x)
  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
  };

  if ("href" in props) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <span className={wrapper}>
        <a
          {...anchorProps}
          href={props.href}
          className={inner}
          onMouseMove={handleMouseMove as React.MouseEventHandler<HTMLAnchorElement>}
        >
          <span className="relative z-10">{children}</span>
        </a>
      </span>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <span className={wrapper}>
      <button
        {...buttonProps}
        className={inner}
        onMouseMove={handleMouseMove as React.MouseEventHandler<HTMLButtonElement>}
      >
        <span className="relative z-10">{children}</span>
      </button>
    </span>
  );
}
