// src/app/contact/page.tsx
import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ContactGrid from "../../components/Contact-us/contactGrid";
// import Backdrop from "../../components/VFX/Backdrop";
import Section from "../../components/VFX/Section";
import GradientBorderCard from "../../components/bits/GradientBorderCard";
import Aurora from "../../components/VFX/Aurora";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with us",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-[#050a17]">
      <Navbar />

      <Section fadeTo="#111827" className="bg-transparent">
        <Aurora>
          {/* Header copy */}
          <header className="mx-auto w-full max-w-5xl px-4 pt-28 text-center sm:pt-36">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Contact <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#34d399,#22d3ee)]">Green&nbsp;Pulse</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-balance text-white/70">
              Questions about products, solutions, or partnership? We’ll get back to you quickly.
            </p>
          </header>
          {/* Grid */}
          <main className="mx-auto w-full max-w-4xl px-4 py-16">
            <GradientBorderCard>
              <ContactGrid />
            </GradientBorderCard>
          </main>
        </Aurora>
      </Section>

      <Footer />
    </div>
  );
}
