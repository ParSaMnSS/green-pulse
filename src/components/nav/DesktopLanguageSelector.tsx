'use client';

import { useState } from 'react';
import { useChangeLocale } from '@/i18n/client';
import { locales } from '@/i18n/i18n';
import { usePathname } from 'next/navigation';

export default function LanguageSelector({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const changeLocale: (locale: typeof locales[number]) => void = useChangeLocale();
  const pathname = usePathname();
  const currentLocale = locales.find(locale => pathname.startsWith(`/${locale}`)) || 'en';

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={[
          "flex items-center gap-1 rounded-md border border-transparent px-2 py-1 text-sm font-semibold transition-colors hover:border-white/50",
          scrolled ? "text-neutral-800" : "text-white",
        ].join(" ")}
      >
        {currentLocale.toUpperCase()}
        <svg
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 rounded-md bg-white shadow-lg">
          <div className="py-1">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => {
                  changeLocale(locale);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {locale.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
