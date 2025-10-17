"use client";
import { motion } from "framer-motion";
import BenefitsCard from "./BenefitsCard";
import { useI18n } from "@/i18n/client";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export default function SolutionBenefits() {
  const i18n = useI18n();

  const features = [
    {
      icon: "/icons/grid.svg",
      title: i18n("solutionBenefits.features.0.title", { count: 0 }),
      desc: i18n("solutionBenefits.features.0.desc", { count: 0 }),
    },
    {
      icon: "/icons/cost.svg",
      title: i18n("solutionBenefits.features.1.title", { count: 0 }),
      desc: i18n("solutionBenefits.features.1.desc", { count: 0 }),
    },
    {
      icon: "/icons/deployment.svg",
      title: i18n("solutionBenefits.features.2.title", { count: 0 }),
      desc: i18n("solutionBenefits.features.2.desc", { count: 0 }),
    },
    {
      icon: "/icons/efficiency.svg",
      title: i18n("solutionBenefits.features.3.title", { count: 0 }),
      desc: i18n("solutionBenefits.features.3.desc", { count: 0 }),
    },
    {
      icon: "/icons/scalability.svg",
      title: i18n("solutionBenefits.features.4.title", { count: 0 }),
      desc: i18n("solutionBenefits.features.4.desc", { count: 0 }),
    },
    {
      icon: "/icons/resilience.svg",
      title: i18n("solutionBenefits.features.5.title", { count: 0 }),
      desc: i18n("solutionBenefits.features.5.desc", { count: 0 }),
    },
  ];

  return (
    <section id="benefits" className="bg-[#123e23] py-16 md:pt-24 md:pb-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">
          {i18n("solutionBenefits.title", { count: 0 })}
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 items-stretch"
        >
          {features.map((f, i) => (
            <BenefitsCard key={i} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
