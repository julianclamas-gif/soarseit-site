import Button from "@/components/ui/Button";

const CARDS = [
  {
    title: "Symbiotic Code",
    tag: "AI code generation built to produce secure code only",
    body: "An AI code generation agent that embeds security enforcement directly into the generation workflow — enforcing policies, verifying outputs, auto-remediating issues, and revalidating correctness before code is returned. Empower your teams with transparent, secure AI coding.",
    cta: "Generate Secure Code",
    href: "/products/symbiotic-code",
  },
  {
    title: "Symbiotic Flow",
    tag: "Secure AI-assisted development across the SDLC",
    body: "Detect, fix, and prevent vulnerabilities in AI-assisted development with pre-code guardrails, in-IDE agentic protection, PR and CI/CD security, and just-in-time developer guidance.",
    cta: "Secure Your AI Workflows Now",
    href: "/products/symbiotic-flow",
  },
];

export default function ProductCards() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute inset-0 col-grid opacity-50" />
      <div className="relative mx-auto max-w-[1240px] px-5">
        <h2 className="display mx-auto max-w-[820px] text-center text-[38px] sm:text-[54px] lg:text-[66px]">
          How Symbiotic
          <br />
          <span className="brand-text">Secures AI Code</span>
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {CARDS.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-3xl bg-lav-50 p-9 ring-1 ring-lav-200 transition-shadow hover:shadow-[0_30px_70px_-30px_rgba(80,40,160,0.25)]"
            >
              <h3 className="text-[30px] font-semibold tracking-tight text-ink">{c.title}</h3>
              <p className="mt-3 text-[15px] font-semibold italic text-brand-purple">{c.tag}</p>
              <p className="mt-5 flex-1 text-[15px] leading-relaxed text-body">{c.body}</p>
              <div className="mt-8">
                <Button href={c.href}>{c.cta}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
