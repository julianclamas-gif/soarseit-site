"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Panel({
  index,
  heading,
  body,
  children,
}: {
  index: number;
  heading: React.ReactNode;
  body: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${96 + index * 22}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="mx-auto grid max-w-[1120px] items-center gap-10 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1b1a20] to-[#111015] p-10 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.7)] ring-1 ring-white/5 md:grid-cols-2 md:p-14"
      >
        <div>
          <h3 className="text-[36px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[44px]">
            {heading}
          </h3>
          <p className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-white/55">{body}</p>
        </div>
        <div className="min-w-0">{children}</div>
      </motion.div>
    </div>
  );
}

function Gauge() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-8 text-center font-mono">
      <p className="text-[13px] leading-snug text-white/60">
        half of AI-generated code
        <br />
        is insecure or non-compliant
      </p>
      <div className="relative mx-auto mt-7 h-44 w-44">
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "conic-gradient(#e05a63 0deg 180deg, rgba(255,255,255,0.12) 180deg 360deg)",
          }}
        />
        <div className="absolute inset-[14px] rounded-full bg-[#141319]" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-[40px] font-bold text-danger">50%</span>
        </div>
        <div className="absolute -right-1 top-2 grid h-8 w-8 place-items-center rounded-full bg-[#2a2930] text-danger ring-1 ring-white/10">
          !
        </div>
      </div>
      <p className="mt-6 text-[13px] font-semibold text-white/80">Your code is highly vulnerable</p>
    </div>
  );
}

const VULNS = [
  ["Use of a weak hash", "5 month ago"],
  ["Improper Limitation of a Pathname", "5 month ago"],
  ["Deserialization of Untrusted Data", "3 month ago"],
  ["Use of a Risky Cryptographic Algorithm", "2 month ago"],
  ["Unencrypted S3 Bucket", "2 days ago"],
];

function VulnList() {
  return (
    <div className="space-y-2 rounded-2xl border border-white/10 bg-black/25 p-4 font-mono">
      {VULNS.map(([name, when], i) => (
        <div
          key={i}
          className="flex items-center justify-between rounded-lg bg-white/[0.03] px-4 py-3"
          style={{ opacity: 0.55 + i * 0.09 }}
        >
          <div className="min-w-0">
            <span className="block truncate text-[10px] text-white/30">ID #AVD-AWS-0164</span>
            <span className="block truncate text-[13px] text-white/85">{name}</span>
          </div>
          <span className="ml-3 shrink-0 text-right text-[11px] text-white/45">
            {when} –<br />unresolved
          </span>
        </div>
      ))}
    </div>
  );
}

const BARS = ["SQL Injection", "Unencrypted S3 bucket", "Improper certificate validation"];

function RepeatBars() {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-7 font-mono">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[15px] text-white/85">Repeated Vulnerabilities</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/5 text-danger">!</span>
      </div>
      <div className="space-y-5">
        {BARS.map((b, i) => (
          <div key={b}>
            <p className="mb-2 text-[13px] text-white/70">{b}</p>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="bar-grow h-full rounded-full bg-gradient-to-r from-[#c94b54] to-[#e07b82]"
                style={{ ["--w" as string]: `${92 - i * 6}%`, animationDelay: `${i * 0.15}s` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-7 text-[14px] font-semibold text-white/85">Your code remains very vulnerable</p>
    </div>
  );
}

export default function ProblemPanels() {
  return (
    <section className="bg-white px-5 pb-40 pt-16">
      <div className="mx-auto max-w-[1240px] space-y-8">
        <Panel
          index={0}
          heading={<>Your AI copilot is quietly taking things away</>}
          body="Every insecure or non-compliant line of AI-generated code costs you something. Academic research shows nearly half of AI-written code introduces risk by expanding your attack surface, undoing developer work, and draining the productivity gains AI was supposed to deliver."
        >
          <Gauge />
        </Panel>

        <Panel
          index={1}
          heading={<>Late security slowly erodes developer trust</>}
          body="When security only appears after the fact, it doesn't protect teams, instead it trains them to tune it out. Endless alerts, false positives, and interruptions chip away at focus and credibility."
        >
          <VulnList />
        </Panel>

        <Panel
          index={2}
          heading={<>AI accelerates mistakes faster than skills</>}
          body="AI makes developers faster, but it doesn't make them wiser. When security expertise is missing, AI confidently repeats unsafe patterns and spreads them everywhere."
        >
          <RepeatBars />
        </Panel>
      </div>
    </section>
  );
}
