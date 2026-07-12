"use client";

import { useState } from "react";

const TABS = [
  {
    label: "Secure AI Code Generation",
    tagline: "Generate production-ready code that's secure from the first line",
    body: "Symbiotic Code is the first model-agnostic AI agent to generate code with built-in security. We embed transparent enforcement across 15+ models to ensure every output is secure, verified, and ready for production.",
  },
  {
    label: "AI Guardrails",
    tagline: "Turn your policies into guardrails the AI can't ignore",
    body: "Encode organizational security and compliance policies into machine-enforced guardrails. Symbiotic reads your AGENTS.md and applies your rules on every generation — no drift, no exceptions.",
  },
  {
    label: "In-IDE Detection & Auto-fix",
    tagline: "Catch and remediate vulnerabilities before you ever commit",
    body: "Detect insecure patterns as they're written and auto-remediate them directly in your editor. Developers stay in flow while Symbiotic quietly keeps the codebase clean.",
  },
  {
    label: "Just-In-Time Training",
    tagline: "Teach secure coding at the exact moment it matters",
    body: "When a risky pattern appears, Symbiotic delivers contextual, bite-sized guidance so developers learn why a fix matters — building real security expertise over time.",
  },
  {
    label: "PR & CI/CD Protection",
    tagline: "Stop insecure code from ever reaching production",
    body: "Symbiotic reviews pull requests and gates your CI/CD pipeline, blocking vulnerabilities and compliance violations before they ship — with clear, actionable remediation.",
  },
];

const MODELS = ["✳", "❋", "∞", "◍", "◐", "M"];

function Player() {
  return (
    <div className="relative mx-auto mt-16 max-w-[1120px] overflow-hidden rounded-[28px] bg-[#0e0d12] ring-1 ring-white/8">
      <div className="grid min-h-[440px] place-items-center px-6 py-20">
        <div className="w-full max-w-[380px] font-mono">
          <div className="mb-4 text-[26px] font-bold tracking-[0.12em] text-white/90">
            SYMBIOTIC CODE
          </div>
          <p className="text-[12px] text-white/50">Welcome to Symbiotic</p>
          <p className="text-[12px] text-white/50">Build secure code</p>
          <p className="mt-4 text-[12px] leading-relaxed text-white/45">
            Use <span className="text-brand-purple">/init</span> to analyze your codebase and
            create an AGENTS.md file with project-specific guidelines.
          </p>
          <div className="my-5 h-px w-full bg-white/10" />
          <p className="text-right text-[11px] text-white/40">~/Projects/appsmith</p>
          <div className="mt-2 flex items-center gap-2 rounded-md border border-brand-purple/40 bg-black/40 px-3 py-2.5 text-[12px] text-white/45">
            <span className="caret text-brand-purple">▍</span>
            Describe what you want… (e.g. refactor the auth flow)
          </div>
          <p className="mt-3 text-right text-[11px] text-white/40">
            claude-haiku-4-5 <span className="font-semibold text-white/70">200K context</span>
          </p>
        </div>
      </div>
      <button className="absolute bottom-6 right-6 grid h-12 w-12 place-items-center rounded-full bg-white text-black shadow-lg">
        <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
          <rect x="1" y="1" width="4" height="14" rx="1" />
          <rect x="9" y="1" width="4" height="14" rx="1" />
        </svg>
      </button>
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 col-grid opacity-50" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <h2 className="display mx-auto max-w-[880px] text-center text-[40px] sm:text-[58px] lg:text-[72px]">
          <span className="brand-text">End-to-End Security</span>
          <br />
          for AI Coding
        </h2>

        {/* tabs */}
        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {TABS.map((t, i) => (
            <button
              key={t.label}
              onClick={() => setActive(i)}
              className={`rounded-xl px-5 py-3 text-[14px] font-medium transition-colors ${
                i === active
                  ? "brand-gradient text-white shadow-[0_12px_30px_-12px_rgba(126,79,255,0.6)]"
                  : "bg-ink-soft text-white/90 hover:bg-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* tab body */}
        <div key={active} className="reveal-up mx-auto mt-12 max-w-[720px] text-center">
          <p className="text-[19px] font-semibold text-brand-purple">{tab.tagline}</p>
          <p className="mx-auto mt-4 max-w-[640px] text-[15px] leading-relaxed text-body">{tab.body}</p>
          <div className="mt-6 flex justify-center gap-4 text-2xl text-brand-purple/70">
            {MODELS.map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        <Player />
      </div>
    </section>
  );
}
