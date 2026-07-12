import Link from "next/link";
import Logo from "./Logo";

const COLS = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Solution", href: "/products/symbiotic-flow" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Linkedin", href: "/contact" },
      { label: "Contact us", href: "/contact" },
      { label: "contact@symbioticsec.ai", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-lav-200 bg-white">
      <div className="mx-auto max-w-[1240px] px-5 py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <h3 className="mt-6 text-[34px] font-semibold leading-tight tracking-tight text-ink">
              End-to-end security for
              <br />
              <span className="brand-text">AI coding</span>.
            </h3>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <p className="text-[15px] font-semibold text-ink">{c.title}</p>
              <ul className="mt-5 space-y-3 font-mono text-[14px] text-body">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="transition-colors hover:text-brand-purple">
                      &gt;_ {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="text-[15px] font-semibold text-ink">Offices</p>
            <p className="mt-5 text-[14px] leading-relaxed text-body">
              240 Kent Ave 3rd floor B15,
              <br />
              Brooklyn, NY 11249, United States
            </p>
            <Link
              href="/contact"
              className="brand-gradient mt-6 inline-block rounded-full px-6 py-3 text-[14px] font-medium text-white shadow-[0_12px_30px_-12px_rgba(126,79,255,0.6)] transition-transform hover:scale-[1.02]"
            >
              Subscribe to the Newsletter
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-lav-200 pt-6 text-[13px] text-body/70 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p>© Copyright Symbiotic Security 2026</p>
            <Link href="/" className="hover:text-brand-purple">Privacy Policy</Link>
          </div>
          <div className="grid h-11 w-11 place-items-center rounded-full bg-[radial-gradient(circle,#2a5bd7,#0f2f7a)] text-[8px] font-bold text-white">
            AICPA
            <br />
            SOC
          </div>
        </div>
      </div>
    </footer>
  );
}
