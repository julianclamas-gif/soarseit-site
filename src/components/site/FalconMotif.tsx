/**
 * Subtle triple-swoosh motif that echoes a falcon in flight (CrowdStrike's visual
 * language) without reproducing their logo. Rendered faint, in the brand blue→cyan.
 * Decorative only.
 */
export default function FalconMotif({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 140" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="falcon-motif" x1="0" y1="140" x2="240" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2E7DFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path d="M6 94 C 74 76, 152 64, 236 24" stroke="url(#falcon-motif)" strokeWidth="9" strokeLinecap="round" />
      <path d="M16 114 C 80 97, 156 83, 232 49" stroke="url(#falcon-motif)" strokeWidth="7" strokeLinecap="round" />
      <path d="M28 133 C 86 119, 150 108, 214 82" stroke="url(#falcon-motif)" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}
