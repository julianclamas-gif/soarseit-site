import type { Metadata } from "next";
import Link from "next/link";

import { moduleCategories } from "@/data/modules";

export const metadata: Metadata = {
  title: "Falcon Module Portfolio | Soarseit",
  description:
    "Explore the complete CrowdStrike Falcon module portfolio, delivered and operated by Soarseit.",
};

export default function ModulesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-tint-200 bg-tint-50">
        <div className="pointer-events-none absolute inset-0 col-grid opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-[-280px] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(46,125,255,0.2),transparent_68%)]" />
        <div className="relative mx-auto max-w-[1100px] px-5 py-24 sm:py-32 lg:py-36">
          <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-brand-blue">
            Powered by CrowdStrike Falcon
          </p>
          <h1 className="display mt-6 text-[48px] sm:text-[68px] lg:text-[84px]">
            <span className="block">The full Falcon</span>
            <span className="brand-text block">module portfolio</span>
          </h1>
          <p className="mt-7 max-w-[760px] text-[17px] leading-relaxed text-body sm:text-[19px]">
            Every module below is part of the unified Falcon platform — one console and one data layer.
            Soarseit licenses, deploys, tunes, and operates the ones you need.
          </p>
        </div>
      </section>

      <div className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] space-y-20 px-5 sm:space-y-28">
          {moduleCategories.map((category, categoryIndex) => (
            <section key={category.id} id={category.id} aria-labelledby={`${category.id}-heading`}>
              <div className="flex items-end gap-5 border-b border-tint-200 pb-6">
                <span className="font-mono text-[12px] font-semibold text-brand-blue" aria-hidden="true">
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 id={`${category.id}-heading`} className="display text-[32px] sm:text-[42px]">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-[13px] font-medium text-body">
                    {category.modules.length} {category.modules.length === 1 ? "module" : "modules"}
                  </p>
                </div>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {category.modules.map((module) => (
                  <article
                    key={module.name}
                    className="group rounded-2xl border border-tint-200 bg-tint-50/60 p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-[0_20px_45px_-28px_rgba(46,125,255,0.5)] motion-reduce:transition-none"
                  >
                    <span className="inline-flex rounded-full bg-tint-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-blue ring-1 ring-tint-200">
                      {category.name}
                    </span>
                    <h3 className="mt-5 text-[20px] font-semibold tracking-tight text-ink">
                      {module.name}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-body">
                      {module.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden bg-ink py-16 text-white sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.13),transparent_42%)]" />
        <div className="relative mx-auto flex max-w-[1100px] flex-col items-start justify-between gap-7 px-5 sm:flex-row sm:items-center">
          <h2 className="text-[28px] font-semibold tracking-tight sm:text-[36px]">
            Not sure which modules you need?
          </h2>
          <Link
            href="/contact"
            className="brand-gradient inline-flex shrink-0 rounded-full px-7 py-4 text-[15px] font-semibold text-white shadow-[0_14px_34px_-12px_rgba(46,125,255,0.75)] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-cyan focus-visible:ring-offset-3 focus-visible:ring-offset-ink motion-reduce:transition-none"
          >
            Book a briefing →
          </Link>
        </div>
      </section>
    </>
  );
}
