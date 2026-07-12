"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BOOKING_URL, NAV } from "@/lib/nav";
import { BOOKING_PATHS } from "@/lib/paths";
import ChoosePath from "./ChoosePath";
import CoBrand from "./CoBrand";

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
        <CoBrand />

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

        <div className="hidden lg:block">
          <ChoosePath />
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
            <div className="space-y-2 pt-3">
              <p className="px-2 pb-1 text-[12px] font-semibold uppercase tracking-wide text-body/60">
                Choose your path
              </p>
              {BOOKING_PATHS.map((p) => (
                <Link
                  key={p.label}
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                  className="block rounded-lg bg-tint-50 px-3 py-2.5 text-[14px] font-medium text-ink"
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
