import Image from "next/image";

type FeatureProps = {
  icon?: string;   // path in /public
  title: string;
  desc: string;
};

export default function FeatureCard({ icon, title, desc }: FeatureProps) {
  return (
    <div className="group rounded-2xl bg-white/5 border border-white/10 shadow-xl p-6 md:p-7
                    hover:bg-white/7.5 hover:border-white/15 transition-all duration-300
                    backdrop-blur-sm">
      <div className="flex items-center gap-3">
        {icon ? (
          <div className="relative size-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
            <Image src={icon} alt="" width={24} height={24} className="opacity-90" />
          </div>
        ) : (
          <div className="relative size-10 shrink-0 rounded-full bg-white/10 grid place-items-center">
            <span className="text-white/80">★</span>
          </div>
        )}
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}
