export default function CurveDivider({ fill = "#071733" }: { fill?: string }) {
  return (
    <div className="relative">
      <svg
        className="absolute -bottom-px left-0 w-full"
        viewBox="0 0 1440 120" preserveAspectRatio="none"
      >
        <path d="M0,0 C300,120 1140,-60 1440,60 L1440,120 L0,120 Z" fill={fill} />
      </svg>
    </div>
  );
}
