'use client';

import Navbar from "../../components/Navbar";
import Hero from "../../components/HeroSlider";
import SolutionFeatures from "../../components/Solutions/SolutionBenefits";
import Footer from "../../components/Footer";
import Section from "../../components/VFX/Section";
import HeroCTA from "../../components/HeroCTA";
import CurveDivider from "../../components/VFX/CurveDevider";
import Reveal from "../../components/VFX/Reveal";
import { useI18n } from '@/i18n/client';

export default function Home() {
  const i18n = useI18n();

  return (
    <>
      <Navbar />
      <Section fadeTo="#123e23" className="bg-transparent">
        <Hero />
      </Section>
      <Reveal>
        <SolutionFeatures />
      </Reveal>
      <CurveDivider fill="rgba(255,255,255,0.15)" />
      <HeroCTA
        title={i18n("home.heroCTA.title", { count: 0 })}
        subtitle=""
        primary={{ label: i18n("home.heroCTA.primary.label", { count: 0 }), href: "/contact" }}
      />
      <Footer />
    </>
  );
}