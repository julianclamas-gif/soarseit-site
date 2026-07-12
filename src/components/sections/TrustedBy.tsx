const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Critical Infrastructure",
  "SaaS & Technology",
  "Public Sector",
  "Manufacturing",
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-4">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-48 w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(46,125,255,0.12),transparent_68%)]" />
      </div>
      <div className="relative mx-auto max-w-[1240px] px-5">
        <h2 className="display mx-auto max-w-[900px] text-center text-[38px] sm:text-[52px] lg:text-[64px]">
          Built for teams that can&apos;t afford a breach
        </h2>
        <div className="mx-auto mt-12 max-w-[1080px] rounded-3xl border border-brand-blue/10 bg-tint-50 px-7 py-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <span key={industry} className="rounded-xl border border-brand-blue/10 bg-white px-4 py-4 text-center text-[14px] font-semibold text-ink-soft shadow-sm">
                {industry}
              </span>
            ))}
          </div>
          <p className="mt-7 text-center text-[14px] text-body/70">
            Protecting identities, endpoints, clouds, and AI across regulated industries.
          </p>
        </div>
      </div>
    </section>
  );
}
