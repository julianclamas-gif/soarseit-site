import Button from "@/components/ui/Button";

function IdeMock() {
  return (
    <div className="overflow-hidden rounded-xl border border-black/30 bg-[#0d0c11] font-mono text-[9px] leading-[1.7] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
      </div>
      <div className="grid grid-cols-[1.1fr_1fr]">
        <div className="border-r border-white/5 p-3 text-white/40">
          <p className="text-white/30">▾ VULNERABILITIES DETECTED</p>
          <p className="mt-2 pl-2">▸ proposal_ex… unused · 1 vulnerabilities</p>
          <p className="pl-2">▾ S3 Bucket ACL · 1 vulnerabilities</p>
          <p className="rounded bg-brand-purple/30 pl-4 text-white/70">Unencrypted S3 Bucket</p>
          <p className="pl-4">Enable Versioning</p>
          <p className="pl-4">S3 Bucket has Tags</p>
          <p className="mt-1 pl-2">▾ bad_batern… unused · 2 vulnerabilities</p>
        </div>
        <div className="p-3 text-white/45">
          <p><span className="text-brand-magenta">41</span> &quot;resource &apos;aws_s3_bucket&apos; &apos;logs&apos; {"{"}</p>
          <p className="pl-3">bucket = &quot;company-logs&quot;</p>
          <p className="pl-3">acl = &quot;log-delivery-write&quot;</p>
          <p>{"}"}</p>
          <p className="mt-3 rounded bg-danger/20 px-1 text-danger">! Unencrypted S3 Bucket</p>
        </div>
      </div>
    </div>
  );
}

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-lav-50 to-white py-24">
      <div className="pointer-events-none absolute left-1/2 top-10 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(206,104,162,0.12),transparent_60%)] blur-2xl" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        {/* mark */}
        <div className="mb-8 flex justify-center">
          <svg width="46" height="46" viewBox="0 0 40 40" fill="none">
            <defs>
              <linearGradient id="cta-lg" x1="0" y1="0" x2="40" y2="40">
                <stop offset="0" stopColor="#7e4fff" />
                <stop offset="1" stopColor="#ce68a2" />
              </linearGradient>
            </defs>
            <g transform="rotate(45 20 20)" stroke="url(#cta-lg)" strokeWidth="3.4" fill="none">
              <rect x="6" y="10.5" width="16" height="19" rx="7" />
              <rect x="18" y="10.5" width="16" height="19" rx="7" />
            </g>
          </svg>
        </div>

        <h2 className="display mx-auto max-w-[900px] text-center text-[46px] sm:text-[68px] lg:text-[84px]">
          <span className="brand-text">Outsmart</span> &amp; <span className="brand-text">Eliminate</span>
          <br />
          Vulnerabilities
        </h2>
        <p className="mx-auto mt-6 max-w-[640px] text-center text-[16px] text-body">
          Turn AI-generated code into secure code in minutes. Book a demo and see Symbiotic in action.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* research card */}
          <div className="rounded-3xl bg-lav-50 p-9 ring-1 ring-lav-200">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-ink ring-1 ring-lav-200">
                Research
              </span>
              <span className="text-[14px] text-body/70">July 2, 2026</span>
            </div>
            <h3 className="mt-8 text-[28px] font-semibold leading-tight tracking-tight text-ink">
              Reaching Frontier Parity in Security Code Remediation with an On-Premise 22B Model
            </h3>
            <p className="mt-5 text-[15px] leading-relaxed text-body">
              We fine-tune Codestral-22B on 4,811 validated vulnerability fix triples using SFT + DPO
              in 4-bit QLoRA. Results show parity with Claude Opus 4.8 on CyberSecEval remediation and
              a non-significant gap on SecurityEval.
            </p>
            <div className="mt-8">
              <Button href="/resources/blog">Read article</Button>
            </div>
          </div>

          {/* demo card */}
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,#efeaf7,#f7edf3)] p-9 ring-1 ring-lav-200">
            <h3 className="text-[34px] font-semibold tracking-tight text-ink">Book a demo</h3>
            <p className="mt-4 max-w-[300px] text-[15px] leading-relaxed text-body">
              See how our solution empowers teams to grow their security maturity and to code securely
              &amp; efficiently.
            </p>
            <div className="mt-8">
              <Button href="/contact">Secure AI coding now</Button>
            </div>
            <div className="mt-10 float-slow md:absolute md:-bottom-2 md:right-[-40px] md:mt-0 md:w-[340px]">
              <IdeMock />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
