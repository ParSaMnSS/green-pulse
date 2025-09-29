import React from "react";

export default function GradientBorderCard({
  children,
  className = "",
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-[1px] ${className}`}>
      {/* gradient ring */}
      <div className="absolute inset-0 rounded-2xl bg-[conic-gradient(from_180deg_at_50%_50%,#22c55e33,transparent_40%,#22d3ee33,transparent_70%)] blur-[2px]" />
      {/* inner */}
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
