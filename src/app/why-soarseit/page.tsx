import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/nav";

export const metadata: Metadata = {
  title: "Why SoarseIT | Enterprise security at boutique speed",
  description:
    "The full CrowdStrike Falcon platform, delivered by a partner small enough to move fast: quick meetings, quotes in days, one direct line, and no enterprise procurement slog.",
};

const PILLARS = [
  {
    title: "Days, not quarters",
    body: "Your first conversation happens this week, and a scoped quote lands in days. There's no enterprise sales gauntlet standing between you and getting protected.",
  },
  {
    title: "One direct line",
    body: "A single point of contact from the first call through every renewal — someone who knows your environment and actually picks up. Not a ticket queue, not a rotating rep.",
  },
  {
    title: "Scoped to you, not the catalog",
    body: "We map the exact Falcon modules your risk, stack, and budget call for. No pressure to buy shelfware you'll never turn on.",
  },
  {
    title: "CrowdStrike does the heavy lifting",
    body: "Deployment, tuning, and 24/7 detection and response are run by CrowdStrike's own experts. You get enterprise-grade operations with a direct line to a partner who moves.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Intro call",
    body: "A short call, this week. We learn your environment, your risks, and what “good” looks like for you.",
  },
  {
    n: "02",
    title: "A scoped quote",
    body: "The right Falcon modules, priced and back in your inbox in days — not weeks.",
  },
  {
    n: "03",
    title: "CrowdStrike deploys",
    body: "Rollout, tuning, and 24/7 detection and response, handled by CrowdStrike from day one.",
  },
  {
    n: "04",
    title: "One line for what's next",
    body: "Changes, renewals, and growth all go through the same person. No re-explaining your setup to a stranger.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-tint-200 bg-tint-50">
        <div className="pointer-events-none absolute inset-0 col-grid opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-[-260px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,125,255,0.2),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1100px] px-5 py-24 text-center sm:py-32">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
            Why SoarseIT
          </p>
          <h1 className="display mx-auto mt-6 max-w-[960px] text-[42px] sm:text-[60px] lg:text-[74px]">
            The platform is CrowdStrike.
            <br />
            <span className="brand-text">The speed is SoarseIT.</span>
          </h1>
          <p className="mx-auto mt-7 max-w-[720px] text-[17px] leading-relaxed text-body sm:text-[19px]">
            You get CrowdStrike&apos;s world-class Falcon platform — deployed, managed, and run
            24/7 by CrowdStrike. You get it through a partner small enough to move fast, answer
            directly, and scope only what you need.
          </p>
          <div className="mt-9 flex justify-center">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient rounded-full px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_34px_-12px_rgba(46,125,255,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Book a briefing →
            </Link>
          </div>
        </div>
      </section>

      {/* The problem, in one line */}
      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-5 py-16 text-center sm:py-20">
          <p className="text-[20px] leading-relaxed text-ink-soft sm:text-[24px]">
            Buying enterprise security is usually slow — weeks for a meeting, longer for a quote, a
            rotating cast of reps, and pressure to buy the whole catalog.{" "}
            <span className="font-semibold text-ink">It doesn&apos;t have to be.</span>
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-tint-50 py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5">
          <h2 className="display mx-auto max-w-[760px] text-center text-[32px] sm:text-[46px]">
            What being small <span className="brand-text">gets you</span>
          </h2>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {PILLARS.map((p) => (
              <article
                key={p.title}
                className="rounded-2xl border border-tint-200 bg-white p-8 transition-shadow hover:shadow-[0_24px_60px_-40px_rgba(46,125,255,0.5)]"
              >
                <h3 className="text-[22px] font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-[1100px] px-5">
          <h2 className="display mx-auto max-w-[760px] text-center text-[32px] sm:text-[46px]">
            From first call to <span className="brand-text">fully protected</span>
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <span className="font-mono text-[13px] font-semibold text-brand-blue">{s.n}</span>
                <div className="mt-3 h-px w-full bg-tint-200" />
                <h3 className="mt-5 text-[18px] font-semibold tracking-tight text-ink">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-body">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Small on purpose */}
      <section className="bg-ink py-20 text-white sm:py-24">
        <div className="mx-auto max-w-[860px] px-5 text-center">
          <h2 className="display text-[32px] text-white sm:text-[46px]">Small on purpose.</h2>
          <p className="mx-auto mt-6 max-w-[720px] text-[16px] leading-relaxed text-white/70 sm:text-[18px]">
            The security is CrowdStrike — the same platform trusted by the world&apos;s largest
            enterprises and governments. What being small changes is everything around it: how fast
            you can start, how easily you reach a human, and how precisely it&apos;s scoped to you.
            Small isn&apos;t the compromise. It&apos;s the reason it&apos;s this fast.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-tint-50 to-white py-24">
        <div className="pointer-events-none absolute left-1/2 top-8 h-[380px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.12),transparent_62%)] blur-2xl" />
        <div className="relative mx-auto max-w-[900px] px-5 text-center">
          <h2 className="display text-[40px] sm:text-[58px]">
            See how fast <br className="sm:hidden" />
            <span className="brand-text">this can move.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[600px] text-[16px] leading-relaxed text-body">
            Book a briefing and we&apos;ll scope your Falcon rollout on the first call.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="brand-gradient rounded-full px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_34px_-12px_rgba(46,125,255,0.7)] transition-transform hover:-translate-y-0.5"
            >
              Book a briefing →
            </Link>
            <Link
              href="/modules"
              className="rounded-full border border-brand-blue/30 px-7 py-4 text-[15px] font-semibold text-ink-soft transition-colors hover:border-brand-blue hover:text-brand-blue"
            >
              Explore the modules →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
