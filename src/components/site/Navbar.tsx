"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { NAV } from "@/lib/nav";

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" className="mt-0.5 opacity-60" fill="none">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-lav-200 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
          {NAV.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpen(item.label)}
              >
                <button className="flex items-center gap-1 rounded-lg px-3.5 py-2 text-[15px] text-ink-soft transition-colors hover:text-ink">
                  {item.label}
                  <Chevron />
                </button>
                {open === item.label && (
                  <div className="menu-in absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-2xl border border-lav-200 bg-white p-2 shadow-[0_20px_60px_-20px_rgba(80,40,160,0.28)]">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block rounded-xl px-3.5 py-2.5 transition-colors hover:bg-lav-50"
                        >
                          <span className="block text-[14.5px] font-medium text-ink">{c.label}</span>
                          {c.desc && (
                            <span className="mt-0.5 block text-[12.5px] leading-snug text-body/70">
                              {c.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                className="rounded-lg px-3.5 py-2 text-[15px] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full border border-lav-200 bg-white px-5 py-2.5 text-[15px] font-medium text-ink-soft transition-colors hover:border-brand-purple/40"
          >
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="brand-gradient rounded-full px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_10px_24px_-8px_rgba(126,79,255,0.6)] transition-transform hover:scale-[1.03]"
          >
            Book a demo
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobile((m) => !m)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d={mobile ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobile && (
          <div
            className="menu-in overflow-hidden border-t border-lav-200 bg-white lg:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link href={item.href} onClick={() => setMobile(false)} className="block py-2 font-medium text-ink">
                      {item.label}
                    </Link>
                  ) : (
                    <div className="py-2 text-xs font-semibold uppercase tracking-wide text-body/60">{item.label}</div>
                  )}
                  {item.children?.map((c) => (
                    <Link key={c.href} href={c.href} onClick={() => setMobile(false)} className="block py-1.5 pl-3 text-[15px] text-ink-soft">
                      {c.label}
                    </Link>
                  ))}
                </div>
              ))}
              <div className="flex gap-3 pt-3">
                <Link href="/contact" onClick={() => setMobile(false)} className="flex-1 rounded-full border border-lav-200 py-2.5 text-center text-sm font-medium">Contact Us</Link>
                <Link href="/contact" onClick={() => setMobile(false)} className="brand-gradient flex-1 rounded-full py-2.5 text-center text-sm font-medium text-white">Book a demo</Link>
              </div>
            </div>
          </div>
        )}
    </header>
  );
}
