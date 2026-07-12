const STATS = [
  { big: "93%", label: "Reduction in AI-generated vulnerabilities" },
  { big: "12x", label: "More complex vulnerabilities fixed correctly by default" },
  { big: "27", label: "hours saved per developer per month on reviewing, re-prompting, fixing issues" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-white pb-10 pt-4">
      <div className="absolute inset-0 col-grid opacity-50" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <h2 className="display mx-auto max-w-[960px] text-center text-[34px] sm:text-[48px] lg:text-[58px]">
          Symbiotic Security Leads in <span className="brand-text">Securing AI Code</span>
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div
              key={s.big}
              className="rounded-3xl bg-[linear-gradient(150deg,#8a5cff,#9b57d6)] p-9 text-center text-white shadow-[0_24px_60px_-24px_rgba(126,79,255,0.6)]"
            >
              <div className="text-[64px] font-semibold leading-none tracking-tight">{s.big}</div>
              <p className="mx-auto mt-4 max-w-[240px] text-[14px] leading-snug text-white/85">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
