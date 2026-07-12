import Link from "next/link";

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Button({
  href = "#",
  children,
  variant = "dark",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "dark" | "gradient";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-medium transition-all";
  const styles =
    variant === "gradient"
      ? "brand-gradient rounded-full text-white shadow-[0_14px_34px_-10px_rgba(46,125,255,0.6)] hover:scale-[1.02]"
      : "bg-ink-soft text-white hover:bg-ink";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      <Arrow />
    </Link>
  );
}
