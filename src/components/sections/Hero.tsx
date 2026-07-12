import Button from "@/components/ui/Button";
import TerminalMock from "./TerminalMock";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-lav-50 via-white to-lav-50" />
        <div className="absolute inset-0 col-grid opacity-70" />
        <div className="absolute left-1/2 top-24 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(206,104,162,0.14),transparent_60%)] blur-2xl" />
        {/* chain-link watermark */}
        <svg className="absolute left-2 top-[380px] h-[340px] w-[340px] opacity-[0.05]" viewBox="0 0 40 40" fill="none">
          <g transform="rotate(45 20 20)" stroke="#7e4fff" strokeWidth="2.4" fill="none">
            <rect x="6" y="10.5" width="16" height="19" rx="7" />
            <rect x="18" y="10.5" width="16" height="19" rx="7" />
          </g>
        </svg>
      </div>

      <div className="mx-auto max-w-[1240px] px-5 pb-28 pt-20 text-center sm:pt-24">
        <h1 className="display mx-auto max-w-[900px] text-[52px] sm:text-[72px] lg:text-[84px]">
          Generate Code
          <br />
          <span className="brand-text">You Can Trust</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[680px] text-[17px] leading-relaxed text-body">
          Symbiotic is the AI Coding solution for organizations that care about their
          data, people, and customers. We enforce security at every step to generate
          compliant, secure code while making you extraordinarily productive.
        </p>
        <p className="mt-2 text-[15px] italic text-body/60">
          Supports most models &amp; Works the way developers expect.
        </p>

        <div className="mt-9 flex justify-center">
          <Button href="/contact">Generate Secure Code</Button>
        </div>

        <div className="relative mx-auto mt-20 max-w-[720px]">
          <TerminalMock />
        </div>
      </div>
    </section>
  );
}
