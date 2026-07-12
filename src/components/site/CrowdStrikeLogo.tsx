/**
 * CrowdStrike wordmark + placeholder falcon glyph.
 *
 * NOTE: This is a PLACEHOLDER for the official CrowdStrike logo. For production,
 * drop the official partner asset at `public/crowdstrike-logo.svg` and replace the
 * inline <svg> below with:  <img src="/crowdstrike-logo.svg" alt="CrowdStrike" height={height} />
 * CrowdStrike brand guidelines generally require the approved, un-recolored logo.
 */
export default function CrowdStrikeLogo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="CrowdStrike">
      <svg
        height={height}
        viewBox="0 0 40 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="cs-falcon" x1="2" y1="2" x2="38" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2E7DFF" />
            <stop offset="1" stopColor="#22D3EE" />
          </linearGradient>
        </defs>
        {/* angular falcon-in-flight (placeholder) */}
        <path d="M20 1 L26.5 13 L20 9.5 L13.5 13 Z" fill="url(#cs-falcon)" />
        <path d="M1 24 L20 9.5 L14.5 21.5 L5 28 Z" fill="url(#cs-falcon)" opacity="0.92" />
        <path d="M39 24 L20 9.5 L25.5 21.5 L35 28 Z" fill="url(#cs-falcon)" opacity="0.92" />
        <path d="M20 11.5 L23 33 L20 28 L17 33 Z" fill="url(#cs-falcon)" opacity="0.8" />
      </svg>
      <span
        className="font-semibold leading-none tracking-tight text-ink"
        style={{ fontSize: height * 0.64 }}
      >
        CrowdStrike
      </span>
    </span>
  );
}
