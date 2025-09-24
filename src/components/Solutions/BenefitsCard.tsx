"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = { icon?: string; title: string; desc: string };

export default function BenefitsCard({ icon, title, desc }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="h-full flex flex-col rounded-2xl bg-white/5 border border-white/10 shadow-xl p-6 md:p-7 backdrop-blur-sm"
    >
      <div className="flex items-center gap-3">
        {icon && (
          <div className="relative size-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
            {/* Quick color fix for black SVGs */}
            <Image src={icon} alt={title} width={24} height={24} className="opacity-90 invert" />
          </div>
        )}
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </motion.article>
  );
}
