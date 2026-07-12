import Link from "next/link";
import { BOOKING_URL } from "@/lib/nav";

function SoarseITMark() {
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

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const PATHS = [
  {
    label: "Schedule a free Active Directory risk review",
    desc: "See exactly where your identity attack surface is exposed.",
    free: true,
  },
  {
    label: "Schedule an intro call",
    desc: "Not sure where to start? We'll map Falcon to your environment on a quick call.",
    free: false,
  },
  {
    label: "Schedule a free trial",
    desc: "Put Falcon to work in your own environment before you commit.",
    free: true,
  },
  {
    label: "Schedule an AI vulnerability check",
    desc: "Find where shadow AI and prompt-injection risks live — and how to safeguard against them.",
    free: false,
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-tint-50 to-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-8 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,125,255,0.14),transparent_62%)] blur-2xl" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <div className="mb-8 flex justify-center">
          <SoarseITMark />
        </div>

        <h2 className="display mx-auto max-w-[900px] text-center text-[46px] sm:text-[68px] lg:text-[84px]">
          Outpace
          <br />
          <span className="brand-text">the adversary.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-[16px] leading-relaxed text-body">
          Every path leads to the same 30-minute call — pick the one that fits where you are.
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PATHS.map((p) => (
            <Link
              key={p.label}
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-2xl border border-tint-200 bg-white p-7 transition-all hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-[0_28px_70px_-45px_rgba(46,125,255,0.55)] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between gap-3">
                {p.free ? (
                  <span className="inline-flex rounded-full bg-tint-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-blue ring-1 ring-tint-200">
                    Free
                  </span>
                ) : (
                  <span />
                )}
                <ArrowIcon className="shrink-0 text-brand-blue/40 transition-all group-hover:translate-x-0.5 group-hover:text-brand-blue" />
              </div>
              <h3 className="mt-5 text-[20px] font-semibold leading-snug tracking-tight text-ink">
                {p.label}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-body">{p.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
