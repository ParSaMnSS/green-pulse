import FeatureCard from "./FeatureCard";
import Reveal from "../VFX/Reveal";

const features = [
  {
    icon: "/next.svg",
    title: "Total electric isolation",
    desc: "Isolation between grid, battery, EV and new energy input.",
  },
  {
    icon: "/next.svg",
    title: "High compatibility",
    desc: "Works with different system configurations.",
  },
  {
    icon: "/next.svg",
    title: "Flexible configuration",
    desc: "Change capacity and power-flow direction easily.",
  },
  {
    icon: "/next.svg",
    title: "Diversified access",
    desc: "Multiple battery group configurations and access modes.",
  },
  {
    icon: "/next.svg",
    title: "Unified EMS strategy",
    desc: "Centralized, consistent energy management.",
  },
  {
    icon: "/next.svg",
    title: "HPC 500A support",
    desc: "Supports high-power charging scenarios.",
  },
];

export default function SolutionFeatures() {
  return (
    <section id="features" className="bg-[#071733] py-16 md:pt-24 md:pb-40 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Solution Features
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 items-stretch">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
