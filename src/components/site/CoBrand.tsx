import Link from "next/link";
import CrowdStrikeLogo from "./CrowdStrikeLogo";

/**
 * Co-brand lockup for the navbar: CrowdStrike leads (larger), SoarseIT is the
 * smaller "delivered by" partner mark. Keeps the site clearly a SoarseIT partner
 * site (not an impersonation of CrowdStrike) while foregrounding CrowdStrike.
 */
export default function CoBrand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="SoarseIT — CrowdStrike partner, home">
      <CrowdStrikeLogo height={34} />
      <span className="hidden h-9 w-px bg-ink/12 min-[420px]:block" aria-hidden />
      <span className="hidden flex-col leading-none min-[420px]:flex">
        <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-body/55">
          Delivered by
        </span>
        <span className="text-[15px] font-semibold tracking-tight text-ink">SoarseIT</span>
      </span>
    </Link>
  );
}
