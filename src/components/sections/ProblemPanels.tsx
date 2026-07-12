"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Panel({ index, heading, body, children }: { index: number; heading: string; body: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div ref={ref} className="sticky" style={{ top: `${96 + index * 22}px` }}>
      <motion.div
        style={{ scale, opacity }}
        className="mx-auto grid max-w-[1120px] items-center gap-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#0b1526] to-[#070c16] p-10 shadow-[0_40px_100px_-40px_rgba(11,21,38,0.85)] ring-1 ring-brand-cyan/10 md:grid-cols-2 md:p-14"
      >
        <div>
          <h3 className="text-[36px] font-semibold leading-[1.08] tracking-tight text-dark-text sm:text-[44px]">{heading}</h3>
          <p className="mt-6 max-w-[460px] text-[15px] leading-relaxed text-dark-text/55">{body}</p>
        </div>
        <div className="min-w-0">{children}</div>
      </motion.div>
    </div>
  );
}

function Gauge() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-8 text-center font-mono">
      <p className="text-[13px] text-white/60">fastest recorded eCrime breakout time</p>
      <div className="relative mx-auto mt-6 h-44 w-44">
        <div className="h-full w-full rounded-full bg-[conic-gradient(from_225deg,#38BDF8_0deg,#22D3EE_270deg,rgba(255,255,255,0.1)_270deg)]" />
        <div className="absolute inset-[14px] rounded-full bg-[#0b1526]" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-[38px] font-bold text-brand-cyan">51 sec</span>
        </div>
      </div>
      <p className="mt-5 text-[11px] text-white/40">as reported by CrowdStrike</p>
      <p className="mt-3 text-[13px] font-semibold text-white/80">Your window to respond is closing.</p>
    </div>
  );
}

const AI_USAGE = [
  ["Internal copilot → customer PII", "2 days ago"],
  ["Anthropic API key in repo", "5 days ago"],
  ["Unreviewed AI agent · prod access", "1 week ago"],
  ["Prompt logs → external endpoint", "3 weeks ago"],
  ["Shadow model · finance data", "1 month ago"],
];

function AIUsageList() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4 font-mono">
      <p className="mb-3 px-2 text-[12px] uppercase tracking-[0.14em] text-white/45">Discovered AI usage</p>
      <div className="space-y-2">
        {AI_USAGE.map(([name, when], index) => (
          <div key={name} className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] px-4 py-3" style={{ opacity: 0.64 + index * 0.08 }}>
            <span className="min-w-0 truncate text-[12px] text-white/85">{name}</span>
            <span className="shrink-0 text-right text-[10px] text-white/45">{when}<br /><span className="text-brand-cyan">unsanctioned</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}

const GAPS = ["Identity blind spots", "Alert fatigue", "Siloed telemetry"];

function GapBars() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-7 font-mono">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[15px] text-white/85">Repeated gaps</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-cyan/10 text-brand-cyan">!</span>
      </div>
      <div className="space-y-5">
        {GAPS.map((gap, index) => (
          <div key={gap}>
            <p className="mb-2 text-[13px] text-white/70">{gap}</p>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
              <div className="bar-grow h-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#22D3EE]" style={{ ["--w" as string]: `${94 - index * 3}%`, animationDelay: `${index * 0.15}s` }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-7 text-[13px] text-white/55">One incident can cross every gap.</p>
    </div>
  );
}

export default function ProblemPanels() {
  return (
    <section className="bg-white px-5 pb-40 pt-16">
      <div className="mx-auto max-w-[1240px] space-y-8">
        <Panel index={0} heading="The adversary now moves in minutes, not days" body="The fastest eCrime breakout time is under an hour. Attackers log in with stolen identities instead of breaking in — and legacy tools that alert after the fact can't keep up."><Gauge /></Panel>
        <Panel index={1} heading="Shadow AI is your new unmanaged attack surface" body="Employees are wiring LLMs and copilots into real workflows faster than security can see them. Every unsanctioned model, agent, and API key expands what an attacker can reach — and what can be leaked."><AIUsageList /></Panel>
        <Panel index={2} heading="Point products can't correlate what they can't see" body="Identity, endpoint, cloud, and AI signals live in silos, so real attacks slip between them. Without one platform and one data layer, your SOC drowns in alerts and misses the incident."><GapBars /></Panel>
      </div>
    </section>
  );
}
