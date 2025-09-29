"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Aurora({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate overflow-hidden bg-[#050a17]">
      {/* Aurora layers */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/30 to-cyan-500/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-[20%] h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 blur-2xl animate-[aurora_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-20%] right-[10%] h-[50rem] w-[50rem] rounded-full bg-gradient-to-r from-emerald-400/20 to-teal-500/20 blur-2xl animate-[aurora_25s_ease-in-out_infinite]" />
      </motion.div>

      {/* Aurora keyframes */}
      <style jsx global>{`
        @keyframes aurora {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
      `}</style>

      {/* Content above */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
