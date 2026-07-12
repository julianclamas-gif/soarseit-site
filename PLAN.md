# Soarseit — Build Plan (Rocks)

Reuse the base at `~/soarseit`. All copy/module data comes from `CONTENT.md`.
Global rules: electric cyber-blue theme (no purple, no red); entrance/reveal/accordion/tab
animations are **CSS-driven** (framer only for the existing `ProblemPanels` scroll-scale);
consult `node_modules/next/dist/docs/` per `AGENTS.md`. Proof is run by Fable against the
**production build** (`npm run build && PORT=41xx npm run start`), never `npm run dev`.

---

## Rock 1 — Shell & theme (reskin the chrome)
**Do:** Swap design tokens in `globals.css` to the cyber-blue palette in CONTENT (remove purple
`--brand-*`, remove any red). Rebrand `Logo` → `soarseit` wordmark + `CYBER DEFENSE` sub. Rebuild
`Navbar` to minimal nav (Modules · Why Soarseit · Contact) with `Book a briefing` (gradient) +
`Talk to us` (outline) buttons; drop the old dropdown data. Rebuild `Footer` with the CONTENT
columns + tagline + trademark line. Update `layout.tsx` metadata (title/description) and any
brand-text/gradient utility classes.
**Done looks like:** Homepage shell is fully Soarseit + blue; no purple/red remains anywhere; no
references to "Symbiotic" in shown UI.
**Proof:** `npm run build` exits 0; on the production server `/` shows the `soarseit` wordmark,
blue gradient `Book a briefing` button, and footer trademark line. (Fable screenshots.)

## Rock 2 — Homepage narrative (hero + trust + threat panels + stats)
**Do:** Rewrite `Hero` to the two-line headline (`Secure the AI era.` / `Run an AI-native SOC.`),
subhead, eyebrow `Powered by CrowdStrike Falcon`, CTAs, and reskin the terminal into the SOC
console mock with the CONTENT feed lines (CSS-staggered, left-aligned). Rewrite `TrustedBy` copy +
placeholder wordmarks. Rewrite the three `ProblemPanels` to the CONTENT threat narrative (51-sec
gauge; shadow-AI discovery list; blue "repeated gaps" bars). Rewrite `Stats` to the three CONTENT
stats. Keep the `ProblemPanels` framer scroll-scale; bars/lists are CSS.
**Done looks like:** Homepage top half reads as the CrowdStrike/AI-era Soarseit narrative in blue.
**Proof:** `npm run build` exits 0; `/` hero shows both headline lines with a populated console
feed; the three panels show the 51-sec gauge, the shadow-AI list, and the gap bars. (Fable screenshots.)

## Rock 3 — Capabilities tabs + closing CTA
**Do:** Reskin `Features` to the 5 CONTENT tabs (Identity Protection, Next-Gen SIEM, EDR/MDR,
AI Detection & Response, Charlotte AI) with their taglines/bodies and the reskinned `SOARSEIT SOC`
player. Rewrite the closing `CTA` section (`Outpace the adversary.`, briefing card + Why-Soarseit card).
Tab switching stays React state (works in production); no framer mount animations.
**Done looks like:** Five working capability tabs + a rebranded closing CTA, all blue.
**Proof:** `npm run build` exits 0; on the production server clicking a second tab swaps the
tagline/body text; the closing CTA renders both cards. (Fable interactivity check + screenshot.)

## Rock 4 — "Learn More" expandable modules preview
**Do:** New `LearnMore` section on the homepage: an accordion of the 8 CONTENT categories, collapsed
by default, each expanding (CSS height/opacity + rotating chevron) to reveal that category's module
chips (name + one-liner) sourced from a shared modules dataset. A prominent `See all modules →`
button links to `/modules`. Place it between Capabilities and the closing CTA.
**Done looks like:** Visitors can expand any category inline and click through to the full page.
**Proof:** `npm run build` exits 0; on the production server clicking a category row expands its
module chips and a second click (or another row) works; `See all modules` navigates to `/modules`.
(Fable interactivity check.)

## Rock 5 — Full /modules page + stub pages
**Do:** Build `/modules`: hero + the full grouped portfolio from CONTENT (9 categories, ~30 module
cards: name, category tag, description) in the site theme, driven by the shared modules dataset
(single source of truth shared with Rock 4). Reskin `StubPage` to blue and add `/why-soarseit` and
`/contact` routes. Ensure all nav/footer links resolve.
**Done looks like:** `/modules` shows the entire portfolio grouped; nav routes all 200.
**Proof:** `npm run build` exits 0; `/modules` renders all category groups with their module cards;
`/why-soarseit` and `/contact` return 200 and render the blue stub. (Fable screenshots + status checks.)
