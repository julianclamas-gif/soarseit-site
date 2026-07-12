"use client";

import Link from "next/link";
import { useState } from "react";

import { moduleCategories } from "@/data/modules";

export default function LearnMore() {
  const [openCategories, setOpenCategories] = useState<Set<string>>(() => new Set());

  function toggleCategory(id: string) {
    setOpenCategories((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,125,255,0.2),transparent_65%)] blur-2xl" />
      <div className="relative mx-auto max-w-[1100px] px-5">
        <h2 className="display text-center text-[40px] text-white sm:text-[58px] lg:text-[72px]">
          The complete <span className="brand-text">Falcon platform</span>
        </h2>
        <p className="mx-auto mt-6 max-w-[760px] text-center text-[16px] leading-relaxed text-white/65">
          30+ modules across the unified Falcon platform — one console, one data layer. Expand a category to see what SoarseIT can turn on for you.
        </p>

        <div className="mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
          {moduleCategories.map((category) => {
            const isOpen = openCategories.has(category.id);
            const triggerId = `module-trigger-${category.id}`;
            const panelId = `module-panel-${category.id}`;

            return (
              <div key={category.id} className="border-b border-white/10 last:border-b-0">
                <h3>
                  <button
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleCategory(category.id)}
                    className="group flex w-full items-center justify-between gap-5 px-6 py-6 text-left focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-brand-cyan sm:px-8"
                  >
                    <span className="text-[18px] font-semibold tracking-tight sm:text-[21px]">{category.name}</span>
                    <span className="flex shrink-0 items-center gap-4">
                      <span className="text-[13px] font-medium text-white/50">
                        {category.modules.length} {category.modules.length === 1 ? "module" : "modules"}
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 20 20"
                        className={`h-5 w-5 text-brand-cyan transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : "rotate-0"}`}
                      >
                        <path d="m5 7.5 5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-3 px-6 pb-7 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
                      {category.modules.map((module) => (
                        <article key={module.name} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                          <h4 className="text-[15px] font-semibold text-white">{module.name}</h4>
                          <p className="mt-2 text-[13px] leading-relaxed text-white/55">{module.description}</p>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/modules"
            className="brand-gradient inline-flex rounded-xl px-7 py-4 text-[15px] font-semibold text-white shadow-[0_16px_35px_-15px_rgba(46,125,255,0.8)] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-cyan focus-visible:ring-offset-3 focus-visible:ring-offset-ink"
          >
            See all modules →
          </Link>
        </div>
      </div>
    </section>
  );
}
