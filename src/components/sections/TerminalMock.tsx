type Line = { t: string; c?: string };

const LINES: Line[] = [
  { t: "> Refactor the auth module", c: "text-white/90" },
  { t: "✓ Thinking…", c: "text-emerald-400/80" },
  { t: "" },
  { t: "🛡 Guardrails", c: "text-brand-magenta" },
  { t: "✓ Read: AGENTS.md", c: "text-white/80" },
  { t: '  └ Found guardrails: "No auth behavior changes, log redaction, validate inputs."', c: "text-white/45" },
  { t: "" },
  { t: "✓ Create: src/auth/core.ts  +312", c: "text-white/80" },
  { t: "✓ Create: src/auth/session.ts  +138", c: "text-white/80" },
  { t: "◈ Security check", c: "text-brand-magenta" },
  { t: "  └ 10 passed, 0 failed", c: "text-emerald-400/80" },
  { t: "" },
  { t: "✓ Edit: src/auth/middleware.ts  +79 -101", c: "text-white/80" },
  { t: "🔍 Security scan", c: "text-brand-magenta" },
  { t: "  └ ✓ 0 new issues", c: "text-emerald-400/80" },
];

export default function TerminalMock() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0c11] text-left shadow-[0_40px_120px_-30px_rgba(70,30,140,0.55)]">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
      </div>

      <div className="thin-scroll max-h-[380px] overflow-hidden px-5 py-4 font-mono text-[12.5px] leading-[1.65]">
        {LINES.map((l, i) => (
          <div
            key={i}
            className={`reveal-x ${l.c ?? "text-white/70"}`}
            style={{ animationDelay: `${0.15 + i * 0.14}s` }}
          >
            {l.t === "" ? " " : renderLine(l.t)}
          </div>
        ))}
        {/* input row */}
        <div
          className="reveal-x mt-4 flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2.5 text-white/40"
          style={{ animationDelay: `${0.15 + LINES.length * 0.14}s` }}
        >
          <span className="caret text-brand-purple">▍</span>
          Type your prompt…
        </div>
      </div>
    </div>
  );
}

function renderLine(t: string) {
  return t.split(/(src\/[\w/.]+)/g).map((part, i) =>
    part.startsWith("src/") ? (
      <span key={i} className="text-brand-purple underline decoration-brand-purple/40 underline-offset-2">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}
