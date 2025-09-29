"use client";

import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;                 // required for <a>
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined;             // forbid href on <button>
  className?: string;
  children: React.ReactNode;
};

type Props = AnchorProps | ButtonProps;

const base =
  "relative inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold " +
  "text-white transition-transform duration-300 will-change-transform hover:-translate-y-0.5 " +
  "before:absolute before:inset-0 before:rounded-xl before:bg-[linear-gradient(120deg,rgba(255,255,255,.18)_0%,rgba(255,255,255,.02)_35%,rgba(255,255,255,.12)_60%,rgba(255,255,255,0)_100%)] " +
  "before:[mask-image:radial-gradient(120px_60px_at_var(--x,50%)_-40%,black,transparent_80%)] " +
  "after:absolute after:inset-0 after:rounded-xl after:ring-1 after:ring-white/15 " +
  "bg-[linear-gradient(180deg,#26324a_0%,#1a2538_100%)] hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,.35)]";

export default function ShimmerButton(props: Props) {
  const { className = "", children, ...rest } = props;

  const handleMouseMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
  };

  if ("href" in props) {
    // Anchor version
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        {...anchorProps}
        href={props.href}
        className={`${base} ${className}`}
        onMouseMove={handleMouseMove as React.MouseEventHandler<HTMLAnchorElement>}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  // Button version
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      {...buttonProps}
      className={`${base} ${className}`}
      onMouseMove={handleMouseMove as React.MouseEventHandler<HTMLButtonElement>}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
