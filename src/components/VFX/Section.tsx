type Props = React.PropsWithChildren<{
  className?: string;
  fadeFrom?: string; // fade at the TOP (from this color → transparent)
  fadeTo?: string;   // fade at the BOTTOM (transparent → this color)
}>;

export default function Section({
  children,
  className = "",
  fadeFrom,
  fadeTo,
}: Props) {
  return (
    <section className={`relative ${className}`}>
      {children}

      {/* TOP fade (into content) */}
      {fadeFrom && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-24"
          style={{
            background: `linear-gradient(to bottom, ${fadeFrom}, transparent)`,
          }}
        />
      )}

      {/* BOTTOM fade (into next section) */}
      {fadeTo && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background: `linear-gradient(to bottom, transparent, ${fadeTo})`,
          }}
        />
      )}
    </section>
  );
}
