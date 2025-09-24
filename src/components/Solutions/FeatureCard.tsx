"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type FeatureProps = { icon?: string; title: string; desc: string };

export default function FeatureCard({ icon, title, desc }: FeatureProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full flex flex-col rounded-2xl bg-white/4 border border-white/10 shadow-xl p-6 md:p-7 transition-all duration-300 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <div className="relative size-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
          {icon ? <Image src={icon} alt="" width={24} height={24} className="opacity-90" /> : <span className="text-white/80">★</span>}
        </div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
      {/* <div className="mt-auto pt-4">CTA here if needed</div> */}
    </motion.article>
  );
}
