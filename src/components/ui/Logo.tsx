export default function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const textColor = light ? "text-white" : "text-[var(--color-text-dark)]";
  const mutedColor = light ? "text-white/60" : "text-[var(--color-text-muted)]";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Icon - Elegant M monogram */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={light ? "text-white" : "text-[var(--color-text-dark)]"}
      >
        <rect
          x="1"
          y="1"
          width="38"
          height="38"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M10 30V12L20 18L30 12V30"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinejoin="round"
        />
        <path
          d="M20 18V30"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>

      {/* Logo Text */}
      <div className={`flex flex-col leading-none ${textColor}`}>
        <span className="text-xl font-medium tracking-[0.02em]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Milenny
        </span>
        <span className={`text-[10px] uppercase tracking-[0.25em] ${mutedColor}`}>
          Property
        </span>
      </div>
    </div>
  );
}
