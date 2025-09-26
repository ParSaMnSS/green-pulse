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
    <section className="text-center">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Image
          src={icon}
          alt=""                  // decorative
          width={24}
          height={24}
          className="opacity-70"
          aria-hidden            // passed through to underlying <img>
        />
      </div>
      <h2 className="text-base font-semibold text-gray-700">{title}</h2>
      <div className="mt-2 text-gray-600">{children}</div>
    </section>
  );
}
