import Navbar from "@/components/Navbar";
import Hero from "@/components/HeroSlider";
import SolutionFeatures from "@/components/Solutions/SolutionFeatures";
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
          title="Supercharge Your EV Infrastructure"
          subtitle="Talk to our team to choose the optimal charging solution."
          primary={{ label: "Get In Touch", href: "/contact" }}
          secondary={{ label: "Sign up", href: "/signup" }}
        />
      </Section>
      <Footer />
    </>
  );
}
