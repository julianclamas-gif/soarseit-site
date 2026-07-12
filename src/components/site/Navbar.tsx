"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_URL, NAV } from "@/lib/nav";
import Logo from "./Logo";

export default function Navbar() {
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobile(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-tint-200 bg-white/85 backdrop-blur-md"
          : "border-transparent bg-white"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-[1240px] items-center justify-between px-5">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-[15px] text-ink-soft transition-colors hover:bg-tint-50 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-gradient rounded-full px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_10px_24px_-8px_rgba(46,125,255,0.62)] transition-transform hover:scale-[1.03]"
          >
            Book a briefing
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-brand-blue/35 bg-white px-5 py-2.5 text-[15px] font-medium text-ink-soft transition-colors hover:border-brand-blue hover:text-brand-blue"
          >
            Talk to us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobile((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          aria-label={mobile ? "Close menu" : "Open menu"}
          aria-expanded={mobile}
          aria-controls="mobile-navigation"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d={mobile ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {mobile && (
        <nav
          id="mobile-navigation"
          className="menu-in overflow-hidden border-t border-tint-200 bg-white lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="space-y-1 px-5 py-4">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMobile}
                className="block rounded-lg px-2 py-2 font-medium text-ink hover:bg-tint-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="grid gap-3 pt-3 sm:grid-cols-2">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="brand-gradient rounded-full py-2.5 text-center text-sm font-medium text-white"
              >
                Book a briefing
              </Link>
              <Link
                href="/contact"
                onClick={closeMobile}
                className="rounded-full border border-brand-blue/35 py-2.5 text-center text-sm font-medium text-ink-soft"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
