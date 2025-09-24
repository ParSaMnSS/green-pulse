import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSlider";
import SolutionFeatures from "@/components/Solutions/SolutionBenefits";
import Footer from "@/components/Footer";
import Section from "@/components/VFX/Section";
import HeroCTA from "@/components/HeroCTA";
import CurveDivider from "@/components/VFX/CurveDevider";


export default function Home() {
  return (
    <>
      <Navbar />
      <Section fadeTo="#071733" className="bg-transparent">
        <Hero />
      </Section>
      <SolutionFeatures />
      <CurveDivider fill="rgba(255,255,255,0.15)"/>
      <Section fadeTo="#111827" className="bg-transparent">
        <HeroCTA
          title="Innovative and Reliable EV Charging Solution"
          subtitle=""
          primary={{ label: "Contact us", href: "/contact" }}
          secondary={{ label: "Sign up", href: "/signup" }}
        />
      </Section>
      <Footer />
    </>
  );
}
