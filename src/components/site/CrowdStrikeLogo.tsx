import Image from "next/image";

/**
 * Official CrowdStrike logo lockup (falcon + wordmark), served from
 * public/crowdstrike-logo.png (trimmed to a tight bounding box).
 * The `height` prop sets the rendered height; width follows the logo's aspect ratio.
 */
const LOGO_W = 930;
const LOGO_H = 182;

export default function CrowdStrikeLogo({
  height = 32,
  className = "",
}: {
  height?: number;
  className?: string;
}) {
  const width = Math.round((height * LOGO_W) / LOGO_H);
  return (
    <Image
      src="/crowdstrike-logo.png"
      alt="CrowdStrike"
      width={width}
      height={height}
      priority
      className={className}
    />
  );
}
