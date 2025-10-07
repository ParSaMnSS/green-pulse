import React from "react";
import Image from "next/image";

export default function ContactItem({
  icon,
  title,
  children,
}: {
  icon: string;           // path under /public, e.g. /icons/contact-us/mail.svg
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className="group relative h-full rounded-xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm transition
                 hover:bg-white/[0.06] hover:border-white/15"
    >
      {/* Icon with soft gradient ring */}
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-white/15 bg-white">
        <Image
          src={icon}
          alt=""              // decorative
          width={24}
          height={24}
          className="opacity-90"
          aria-hidden
        />
      </div>

      <h3 className="text-base font-semibold text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-white/75 [text-wrap:balance]">
        {children}
      </div>

      {/* subtle inset outline on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5 transition
                      group-hover:ring-white/10" />
    </article>
  );
}
