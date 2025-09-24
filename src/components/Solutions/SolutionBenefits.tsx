import FeatureCard from "./BenefitsCard";

const features = [
  {
    icon: "/icons/grid.svg",
    title: "Grid Independence",
    desc: "Operate even in weak-grid or off-grid locations by storing energy locally and delivering high-power DC charging without relying on real-time grid supply.",
  },
  {
    icon: "/icons/cost.svg",
    title: "Peak-Shaving & Cost Optimization",
    desc: "Charge ESS during off-peak hours and discharge during peak demand, reducing electricity costs and avoiding demand charges.",
  },
  {
    icon: "/icons/deployment.svg",
    title: "Rapid Deployment",
    desc: "Modular, containerized ESS systems enable faster installation compared to traditional grid-tied fast chargers that require infrastructure upgrades.",
  },
  {
    icon: "/icons/efficiency.svg",
    title: "High-Power DC-to-DC Efficiency",
    desc: "Direct DC-to-DC charging minimizes conversion losses, shortens charging times, and improves overall energy efficiency.",
  },
  {
    icon: "/icons/scalability.svg",
    title: "Scalability & Flexibility",
    desc: "ESS platforms can be scaled from portable units to large hubs, adapting to urban, roadside, or fleet needs with minimal redesign.",
  },
  {
    icon: "/icons/resilience.svg",
    title: "Resilience & Reliability",
    desc: "Stored energy ensures uptime during grid outages or fluctuations, enhancing service continuity and user trust.",
  },
];

export default function SolutionBenefits() {
  return (
    <section
      id="benefits"
      className="bg-[#071733] py-16 md:pt-24 md:pb-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          Solution Benefits
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
