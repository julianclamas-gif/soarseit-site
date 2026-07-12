import Link from "next/link";

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group mt-8 inline-flex items-center rounded-xl bg-ink-soft px-6 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-ink focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-cyan focus-visible:ring-offset-3"
    >
      {children}
    </Link>
  );
}

function SoarseitMark() {
  return (
    <svg aria-hidden="true" width="52" height="52" viewBox="0 0 52 52" fill="none">
      <defs>
        <linearGradient id="cta-blue" x1="6" y1="4" x2="46" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2E7DFF" />
          <stop offset="1" stopColor="#22D3EE" />
        </linearGradient>
      </defs>
      <path d="M11 29.5 26 12l15 17.5L26 43 11 29.5Z" stroke="url(#cta-blue)" strokeWidth="4" strokeLinejoin="round" />
      <path d="m18 29 8-9 8 9-8 7-8-7Z" fill="url(#cta-blue)" opacity=".32" />
    </svg>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-tint-50 to-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-8 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,125,255,0.14),transparent_62%)] blur-2xl" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <div className="mb-8 flex justify-center">
          <SoarseitMark />
        </div>

        <h2 className="display mx-auto max-w-[900px] text-center text-[46px] sm:text-[68px] lg:text-[84px]">
          Outpace
          <br />
          <span className="brand-text">the adversary.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-[16px] leading-relaxed text-body">
          Book a briefing and we&apos;ll map the Falcon modules to your environment — and stand up your AI-native SOC.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <article className="rounded-3xl border border-tint-200 bg-white p-9 shadow-[0_24px_70px_-45px_rgba(46,125,255,0.45)]">
            <span className="inline-flex rounded-full bg-tint-100 px-4 py-1.5 text-[13px] font-medium text-brand-blue">
              Briefing
            </span>
            <h3 className="mt-8 text-[30px] font-semibold tracking-tight text-ink">Build your Falcon roadmap.</h3>
            <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-body">
              Map the right platform capabilities to your risks, environment, and operating model.
            </p>
            <ArrowLink href="/contact">Book a briefing →</ArrowLink>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-brand-blue/20 bg-[linear-gradient(135deg,#e9f1ff,#f4f8ff)] p-9 shadow-[0_24px_70px_-45px_rgba(34,211,238,0.5)]">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-cyan/10 blur-3xl" />
            <div className="relative">
              <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-brand-blue ring-1 ring-brand-blue/15">
                Why Soarseit
              </span>
              <h3 className="mt-8 text-[30px] font-semibold tracking-tight text-ink">One partner. Every stage.</h3>
              <p className="mt-4 max-w-[480px] text-[15px] leading-relaxed text-body">
                One partner for licensing, deployment, tuning, and 24/7 operations — so your team runs the business, not the tooling.
              </p>
              <ArrowLink href="/why-soarseit">Why Soarseit →</ArrowLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
