const STATS = [
  { big: "1·10·60", label: "the benchmark our SOC operates to: detect in 1, triage in 10, contain in 60 minutes" },
  { big: "150+", label: "adversary groups tracked by Counter Adversary Operations" },
  { big: "24/7", label: "expert-led detection and response, every day" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white pb-24 pt-4">
      <div className="absolute inset-0 col-grid opacity-50" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <div className="grid gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.big} className="rounded-3xl bg-[linear-gradient(145deg,#2E7DFF,#22D3EE)] p-9 text-center text-white shadow-[0_24px_60px_-24px_rgba(46,125,255,0.55)]">
              <div className="text-[58px] font-semibold leading-none tracking-tight sm:text-[64px]">{stat.big}</div>
              <p className="mx-auto mt-4 max-w-[280px] text-[14px] leading-snug text-white/85">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-[900px] text-center text-[12px] leading-relaxed text-body/60">
          The 1-10-60 benchmark and adversary figures reflect CrowdStrike&apos;s published frameworks and threat research (CrowdStrike Global Threat Report). Results vary by environment.
        </p>
      </div>
    </section>
  );
}
