import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  /** Optional: extra classes on the outer wrapper */
  className?: string;
  /** Optional: classes for the inner text span (controls hover color) */
  textClassName?: string;
};

export default function AnimatedUnderlineLink({
  href,
  children,
  className = "",
  textClassName = "text-white/80 hover:text-emerald-300 transition-colors",
}: Props) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center ${className}`}
    >
      {/* text */}
      <span className={`relative z-10 ${textClassName}`}>{children}</span>

      {/* animated gradient underline */}
      <span
        aria-hidden
        className="absolute -bottom-0.5 left-0 h-[2px] w-0
                   bg-gradient-to-r from-emerald-400 to-cyan-400
                   transition-all duration-300 group-hover:w-full"
      />
    </Link>
  );
}
