"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BOOKING_URL } from "@/lib/nav";
import { BOOKING_PATHS } from "@/lib/paths";

export default function ChoosePath() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="brand-gradient inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[15px] font-medium text-white shadow-[0_10px_24px_-8px_rgba(46,125,255,0.62)] transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-cyan focus-visible:ring-offset-2"
      >
        Choose your path
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="menu-in absolute right-0 top-full mt-3 w-[350px] overflow-hidden rounded-2xl border border-tint-200 bg-white p-2 shadow-[0_24px_70px_-24px_rgba(46,125,255,0.35)]"
        >
          {BOOKING_PATHS.map((p) => (
            <Link
              key={p.label}
              role="menuitem"
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 transition-colors hover:bg-tint-50 focus-visible:bg-tint-50 focus-visible:outline-none"
            >
              <span className="block text-[14.5px] font-semibold text-ink">{p.label}</span>
              <span className="mt-0.5 block text-[12.5px] leading-snug text-body/75">{p.desc}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
