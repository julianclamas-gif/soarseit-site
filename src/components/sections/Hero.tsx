import Link from "next/link";
import TerminalMock from "./TerminalMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-tint-50 via-white to-tint-50" />
        <div className="absolute inset-0 col-grid opacity-70" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.16),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-[1240px] px-5 pb-28 pt-20 text-center sm:pt-24">
        <p className="reveal-up mx-auto inline-flex rounded-full border border-brand-blue/20 bg-white/80 px-4 py-2 text-[13px] font-semibold text-brand-blue shadow-sm">
          Powered by CrowdStrike Falcon
        </p>
        <h1 className="display mx-auto mt-7 max-w-[1040px] text-[48px] sm:text-[68px] lg:text-[82px]">
          Secure the AI era.
          <br />
          <span className="brand-text">Run an AI-native SOC.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[820px] text-[17px] leading-relaxed text-body">
          SoarseIT delivers the CrowdStrike Falcon platform end to end — stopping identity attacks,
          shadow AI, and prompt-injection threats while an AI-native SOC hunts, triages, and responds
          24/7. Deployed, managed, and operated for you.
        </p>
        <p className="mt-3 text-[15px] italic text-body/60">One platform. One agent. Every workload.</p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-5">
          <Link
            href="/contact"
            className="brand-gradient rounded-full px-6 py-3.5 text-[15px] font-medium text-white shadow-[0_14px_34px_-10px_rgba(46,125,255,0.65)] transition-transform hover:scale-[1.02]"
          >
            Book a briefing →
          </Link>
          <Link href="/modules" className="text-[15px] font-semibold text-brand-blue hover:text-brand-blue-bright">
            Explore the modules →
          </Link>
        </div>

        <div className="relative mx-auto mt-20 max-w-[820px]">
          <TerminalMock />
        </div>
      </div>
    </section>
  );
}
