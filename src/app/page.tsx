import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SolutionFeatures from "@/components/SolutionFeatures";
import Footer from "@/components/Footer";
import Section from "@/components/VFX/Section";


export default function Home() {
  return (
    <>
      <Navbar />
      <Section fadeTo="#071733" className="bg-transparent">
        <Hero />
      </Section>
      <Section fadeTo="#111827" className="bg-transparent">
        <SolutionFeatures />
      </Section>
      <Footer />
    </>
  );
}
