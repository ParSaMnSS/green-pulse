'use client';

import { useState } from 'react';
import { useChangeLocale } from '@/i18n/client';
import { locales } from '@/i18n/i18n';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function LanguageSelector({ scrolled }: { scrolled: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const changeLocale: (locale: typeof locales[number]) => void = useChangeLocale();
  const pathname = usePathname();
  const currentLocale = locales.find(locale => pathname.startsWith(`/${locale}`)) || 'en';

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`w-full rounded-lg border ${
          scrolled
            ? 'border-neutral-200 bg-neutral-100 text-neutral-800'
            : 'border-white/20 bg-white/10 text-white'
        } p-3 text-left text-lg font-semibold transition-colors hover:bg-white/20`}
      >
        <span className="flex items-center justify-between">
          <span>{currentLocale.toUpperCase()}</span>
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[100] bg-black/60"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute bottom-0 left-0 w-full rounded-t-2xl border-t border-neutral-700 bg-neutral-800 p-4"
            >
              <div className="mb-4 text-center text-lg font-semibold text-white">
                Select Language
              </div>
              <div className="flex flex-col gap-2">
                {locales.map(locale => (
                  <button
                    key={locale}
                    onClick={() => {
                      changeLocale(locale);
                      setIsOpen(false);
                    }}
                    className={`rounded-lg p-3 text-center font-medium ${
                      currentLocale === locale
                        ? 'bg-emerald-500 text-white'
                        : 'bg-neutral-700 text-neutral-200'
                    }`}
                  >
                    {locale.toUpperCase()}
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
