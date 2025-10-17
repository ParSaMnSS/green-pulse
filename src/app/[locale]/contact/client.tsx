'use client';

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import ContactGrid from "../../../components/Contact-us/contactGrid";
import Section from "../../../components/VFX/Section";
import GradientBorderCard from "../../../components/bits/GradientBorderCard";
import { useI18n } from "../../../i18n/client";

export default function ClientContactPage() {
  const i18n = useI18n();
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-emerald-800">
      <Navbar />

      <Section  className="bg-transparent">
          {/* Header copy */}
          <header className="mx-auto w-full max-w-5xl px-4 pt-28 text-center sm:pt-36">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              {i18n("contact.title", { count: 0 })}
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
              {i18n("contact.description", { count: 0 })}
            </p>
          </header>
          {/* Grid */}
          <main className="mx-auto w-full max-w-4xl px-4 py-16">
            <GradientBorderCard>
              <ContactGrid />
            </GradientBorderCard>
          </main>
      </Section>

      <Footer />
    </div>
  );
}
