import ProductsHero from "./ProductsHero";
import EssCard from "./EssCard";
import EssSafety from "./EssSafety";
import ChargerCard from "./ChargerCard";
import UseCases from "./UseCases";
import ContactCTA from "./ContactCTA";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsHero />
      <EssCard />
      <EssSafety />
      <ChargerCard />
      <UseCases />
      <ContactCTA />
      <Footer />
    </>
  );
}