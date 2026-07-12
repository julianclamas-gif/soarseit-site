"use client";

import { useRef, useState, type KeyboardEvent } from "react";

const TABS = [
  {
    label: "Identity Protection",
    tagline: "Stop the attacks that start with a login.",
    body: "Falcon Identity Threat Protection detects and blocks credential theft, lateral movement, and privilege escalation in real time — enforcing risk-based MFA across AD, Entra ID, and every identity, human or service.",
  },
  {
    label: "Next-Gen SIEM",
    tagline: "Your whole SOC, on one blazing-fast data layer.",
    body: "Falcon Next-Gen SIEM unifies first- and third-party data at petabyte scale, correlating identity, endpoint, cloud, and AI telemetry into single incidents — with search in seconds, not minutes.",
  },
  {
    label: "EDR / MDR",
    tagline: "See everything. Stop everything. Even while you sleep.",
    body: "Falcon Insight XDR delivers industry-leading detection and response across your estate, while Falcon Complete MDR puts CrowdStrike's elite analysts on watch 24/7 to hunt, triage, and remediate on your behalf.",
  },
  {
    label: "AI Detection & Response",
    tagline: "Defend the AI your business is racing to adopt.",
    body: "AIDR discovers shadow AI, secures models and agents, and blocks prompt injection and data exfiltration across your GenAI stack — so innovation doesn't become your next breach.",
  },
  {
    label: "Charlotte AI",
    tagline: "An AI analyst that works the queue with you.",
    body: "Charlotte AI triages detections, writes the investigation, and drafts response actions in seconds — cutting alert fatigue and giving every analyst the speed of your best one.",
  },
] as const;

function SocPlayer() {
  return (
    <div className="relative mx-auto mt-14 max-w-[960px] overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(135deg,#070c16,#0b1526)] shadow-[0_35px_100px_-35px_rgba(46,125,255,0.55)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-5 py-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3A4453]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#4B5566]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5B6478]" />
        <span className="ml-3 font-mono text-[10px] font-semibold tracking-[0.22em] text-white/45">
          SOARSEIT SOC
        </span>
      </div>
      <div className="mx-auto max-w-[720px] px-6 py-12 font-mono text-[12px] leading-[1.9] sm:px-10 sm:py-16 sm:text-[13px]">
        <p className="text-brand-cyan">✓ Incident CS-4417 contained</p>
        <p className="text-white/75">◈ Identity + endpoint + cloud telemetry correlated</p>
        <p className="text-brand-blue-bright">✓ Charlotte AI drafted investigation summary in 4s</p>
        <div className="mt-6 flex items-center gap-2 rounded-lg border border-brand-blue/35 bg-black/25 px-4 py-3 text-white/45">
          <span className="caret text-brand-cyan">▍</span>
          Ask Charlotte AI to summarize the incident and recommend next steps…
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const tab = TABS[active];

  function selectAndFocus(index: number) {
    setActive(index);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (index + 1) % TABS.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + TABS.length) % TABS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = TABS.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      selectAndFocus(nextIndex);
    }
  }

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 col-grid opacity-50" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <h2 className="display mx-auto max-w-[940px] text-center text-[40px] sm:text-[58px] lg:text-[72px]">
          One platform.
          <br />
          <span className="brand-text">Every layer of the attack.</span>
        </h2>

        <div role="tablist" aria-label="SoarseIT capabilities" className="mt-14 flex flex-wrap justify-center gap-3">
          {TABS.map((item, index) => (
            <button
              key={item.label}
              ref={(element) => { tabRefs.current[index] = element; }}
              id={`capability-tab-${index}`}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-controls="capability-panel"
              tabIndex={index === active ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`rounded-xl px-5 py-3 text-[14px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-cyan focus-visible:ring-offset-3 ${
                index === active
                  ? "brand-gradient text-white shadow-[0_12px_30px_-12px_rgba(46,125,255,0.7)]"
                  : "bg-ink-soft text-white/90 hover:bg-ink"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          key={active}
          id="capability-panel"
          role="tabpanel"
          aria-labelledby={`capability-tab-${active}`}
          className="reveal-up mx-auto mt-12 max-w-[760px] text-center"
        >
          <p className="text-[20px] font-semibold text-brand-blue">{tab.tagline}</p>
          <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-relaxed text-body">{tab.body}</p>
        </div>

        <SocPlayer />
      </div>
    </section>
  );
}
