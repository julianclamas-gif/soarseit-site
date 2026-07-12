import Button from "@/components/ui/Button";

export default function StubPage({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-tint-50 via-white to-white">
        <div className="absolute inset-0 col-grid opacity-60" />
      </div>
      <div className="mx-auto flex min-h-[70vh] max-w-[820px] flex-col items-center justify-center px-5 py-28 text-center">
        <span className="rounded-full bg-tint-50 px-4 py-1.5 text-[13px] font-medium uppercase tracking-wide text-brand-blue ring-1 ring-tint-200">
          {eyebrow}
        </span>
        <h1 className="display mt-7 text-[46px] sm:text-[64px]">
          <span className="brand-text">{title}</span>
        </h1>
        <p className="mt-6 max-w-[520px] text-[16px] leading-relaxed text-body">
          We&apos;re preparing more detail for this page. In the meantime, talk with
          SoarseIT about your security priorities and the Falcon capabilities that fit them.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/contact" variant="gradient">Book a briefing</Button>
        </div>
      </div>
    </section>
  );
}
