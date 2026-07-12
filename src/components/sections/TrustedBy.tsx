const LOGOS = ["MERCURY", "Trustpair", "Adaptive ML", "packmind", "lendis", "Hugging Face"];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-4">
      {/* sweeping gradient arc */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <svg
          className="absolute left-1/2 top-[-200px] h-[760px] w-[1500px] -translate-x-1/2"
          viewBox="0 0 1500 760"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient id="arc-grad" x1="120" y1="120" x2="1380" y2="560" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#7e4fff" stopOpacity="0.15" />
              <stop offset="0.35" stopColor="#7e4fff" />
              <stop offset="1" stopColor="#ce68a2" />
            </linearGradient>
          </defs>
          <path
            d="M 150 150 A 720 720 0 0 1 1400 560"
            stroke="url(#arc-grad)"
            strokeWidth="30"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-5">
        <h2 className="display mx-auto max-w-[820px] text-center text-[40px] sm:text-[58px] lg:text-[72px]">
          Trusted By the <span className="brand-text">Best People</span> on the{" "}
          <span className="brand-text">Best Teams</span>
        </h2>

        <div className="mx-auto mt-14 max-w-[1080px] rounded-3xl bg-lav-50 px-8 py-12">
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3">
            {LOGOS.map((l) => (
              <span
                key={l}
                className="text-2xl font-semibold tracking-tight text-ink/70"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
