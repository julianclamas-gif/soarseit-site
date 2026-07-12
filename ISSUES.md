# Soarseit — Issues List (deferred)

Items that are real but out of scope for this build cycle.

- **[high] CrowdStrike-first co-branding requires authorized-partner status.** The navbar now
  LEADS with the CrowdStrike logo (larger than SoarseIT), moving the site from "SoarseIT-forward"
  to CrowdStrike-forward co-branding per the owner's request. This raises the bar: SoarseIT must be
  an authorized CrowdStrike partner, must follow CrowdStrike brand guidelines, and must use the
  OFFICIAL CrowdStrike logo asset (recoloring is usually not permitted). The current nav mark is a
  blue placeholder at `src/components/site/CrowdStrikeLogo.tsx` — swap in the official asset
  (`public/crowdstrike-logo.svg`) before launch. Get partner-marketing/legal sign-off first.
- **[high] Legal / brand sign-off before public launch.** The site uses CrowdStrike marks and
  paraphrased platform messaging under a "powered by CrowdStrike Falcon" framing, with an
  independent-partner + non-affiliation disclaimer and in-copy attribution for all stats. Formal
  legal/brand review and (if required) CrowdStrike partner-marketing approval must happen before
  the site goes public. Mitigated this cycle by: industry labels instead of invented customers,
  attributed stats, an "illustrative Soarseit workflow" caption on the console mock, and the footer
  trademark/non-affiliation line. (Raised by Codex round 1, findings on endorsement + claims.)
- **[low] Real LinkedIn / social URLs.** No approved Soarseit social URL exists; external social
  links are omitted this cycle (email + contact routes only). Add when a real profile exists.
