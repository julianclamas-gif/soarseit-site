import Link from "next/link";
import CoBrand from "./CoBrand";
import { BOOKING_URL } from "@/lib/nav";

const COLUMNS = [
  {
    title: "Explore",
    links: [
      { label: "Modules", href: "/modules" },
      { label: "Why SoarseIT", href: "/why-soarseit" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Identity Protection", href: "/modules" },
      { label: "Next-Gen SIEM", href: "/modules" },
      { label: "EDR/MDR", href: "/modules" },
      { label: "AI Detection & Response", href: "/modules" },
      { label: "Charlotte AI", href: "/modules" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "contact@soarseit.com", href: "mailto:contact@soarseit.com" },
      { label: "Book a briefing", href: BOOKING_URL },
      { label: "Talk to us", href: "/contact" },
    ],
  },
];

const TRADEMARK =
  "CrowdStrike, Falcon, and Charlotte AI are trademarks of CrowdStrike, Inc. SoarseIT is an independent solutions partner and is not affiliated with or endorsed by CrowdStrike, Inc.";

export default function Footer() {
  return (
    <footer className="border-t border-tint-200 bg-tint-50">
      <div className="mx-auto max-w-[1240px] px-5 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_1fr_1fr]">
          <div>
            <CoBrand />
            <p className="mt-6 max-w-sm text-[18px] leading-relaxed text-body">
              Enterprise security, powered by CrowdStrike Falcon.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <p className="text-[15px] font-semibold text-ink">{column.title}</p>
              <ul className="mt-5 space-y-3 text-[14px] text-body">
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="transition-colors hover:text-brand-blue"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-tint-200 pt-6 text-[12px] leading-relaxed text-body/75">
          <p className="font-medium text-ink-soft">© SoarseIT 2026</p>
          <p className="mt-2 max-w-5xl">{TRADEMARK}</p>
        </div>
      </div>
    </footer>
  );
}
