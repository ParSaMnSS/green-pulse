import Link from "next/link";

export default function AnimatedUnderlineLink({
  href,
  children,
  className = "",
}: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={`relative inline-flex items-center ${className}`}>
      <span className="relative z-10 text-white/85 transition-colors hover:text-white">
        {children}
      </span>
      <span className="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 
                       transition-all duration-300 group-hover:w-full peer-hover:w-full" />
    </Link>
  );
}
