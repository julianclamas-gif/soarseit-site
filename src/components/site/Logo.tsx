import Link from "next/link";

export default function Logo({
  className = "",
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  const word = invert ? "text-white" : "text-ink";
  const sub = invert ? "text-white/60" : "text-ink/50";
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <defs>
          <linearGradient id="soarseit-logo-gradient" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0" stopColor="#2E7DFF" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        <g
          transform="rotate(45 20 20)"
          stroke="url(#soarseit-logo-gradient)"
          strokeWidth="3.4"
          fill="none"
        >
          <rect x="6" y="10.5" width="16" height="19" rx="7" />
          <rect x="18" y="10.5" width="16" height="19" rx="7" />
        </g>
      </svg>
      <span className="leading-none">
        <span className={`block text-[19px] font-semibold tracking-tight ${word}`}>
          SoarseIT
        </span>
        <span className={`block text-[9px] font-medium tracking-[0.35em] ${sub}`}>
          CYBER DEFENSE
        </span>
      </span>
    </Link>
  );
}
