type Line = { text: string; className?: string };

const LINES: Line[] = [
  { text: "▸ Detection  CS-4417  ·  Critical", className: "text-brand-cyan" },
  { text: "✓ Charlotte AI  Triaged in 4s", className: "text-brand-blue-bright" },
  { text: "  └ Kerberoasting attempt → svc-sql01 (identity risk: 92)", className: "text-white/55" },
  { text: "🛡 Identity Protection  Enforced step-up MFA", className: "text-white/85" },
  { text: "✓ Falcon Insight XDR  Isolated host WIN-APP-07", className: "text-white/85" },
  { text: "◈ Next-Gen SIEM  Correlated 3 domains · 1 incident", className: "text-brand-blue-bright" },
  { text: "🔍 AIDR  Blocked prompt-injection on internal copilot", className: "text-brand-cyan" },
  { text: "  └ 0 data exfiltration · analyst notified", className: "text-white/55" },
];

export default function TerminalMock() {
  return (
    <figure className="w-full text-left">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#070c16] shadow-[0_40px_120px_-30px_rgba(46,125,255,0.45)]">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#3A4453]" />
          <span className="h-3 w-3 rounded-full bg-[#4B5566]" />
          <span className="h-3 w-3 rounded-full bg-[#5B6478]" />
          <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/35">SoarseIT SOC</span>
        </div>

        <div className="thin-scroll overflow-hidden px-5 py-5 font-mono text-[12px] leading-[1.8] sm:text-[13px]">
          {LINES.map((line, index) => (
            <div
              key={line.text}
              className={`reveal-x ${line.className ?? "text-white/70"}`}
              style={{ animationDelay: `${0.15 + index * 0.14}s` }}
            >
              {line.text}
            </div>
          ))}
          <div
            className="reveal-x mt-5 flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2.5 text-white/40"
            style={{ animationDelay: `${0.15 + LINES.length * 0.14}s` }}
          >
            <span className="caret text-brand-cyan">▍</span>
            Ask Charlotte AI…
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-[12px] text-body/55">Illustrative SoarseIT workflow</figcaption>
    </figure>
  );
}
