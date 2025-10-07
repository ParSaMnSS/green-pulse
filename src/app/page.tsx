import Navbar from "../components/Navbar";
import Hero from "../components/HeroSlider";
import SolutionFeatures from "../components/Solutions/SolutionBenefits";
import Footer from "../components/Footer";
import Section from "../components/VFX/Section";
import HeroCTA from "../components/HeroCTA";
import CurveDivider from "../components/VFX/CurveDevider";
import Reveal from "../components/VFX/Reveal";

export default function Home() {
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
        title="Innovative and Reliable EV Charging Solution"
        subtitle=""
        primary={{ label: "Contact us", href: "/contact" }}
      />
      <Footer />
    </>
  );
}