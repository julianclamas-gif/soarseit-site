# Soarseit — Build Plan (Rocks)

Reuse the base at `~/soarseit`. All copy/module data comes from `CONTENT.md`.
Global rules: electric cyber-blue theme (no purple, no red); entrance/reveal/accordion/tab
animations are **CSS-driven** (framer only for the existing `ProblemPanels` scroll-scale);
consult `node_modules/next/dist/docs/` per `AGENTS.md`. Proof is run by Fable against the
**production build** (`npm run build && PORT=41xx npm run start`), never `npm run dev`.

**Final homepage composition (`src/app/page.tsx`), after all rocks — remove the base's
`ProductCards` entirely:** Hero → TrustedBy → ProblemPanels → Stats → Features (capabilities)
→ LearnMore → CTA. Each rock updates this composition as it lands.

**Shared data:** `src/data/modules.ts` is the SINGLE SOURCE OF TRUTH for all nine categories
and every module (name, category, one-liner). Created in Rock 4, reused verbatim by Rock 5.

**Legal note (carried, see ISSUES.md):** all CrowdStrike stats carry attribution + disclaimers
in-copy this cycle; formal legal/brand sign-off before public launch is deferred to the user.

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
**Proof:** `npm run build` exits 0; `grep -rniE 'symbiotic|7e4fff|ce68a2|brand-purple|brand-magenta' src/`
returns nothing; on the production server `/` shows the `soarseit` wordmark, blue gradient
`Book a briefing` button, and footer trademark line. (Fable screenshots + grep.)

## Rock 2 — Homepage narrative (hero + trust + threat panels + stats)
**Do:** Rewrite `Hero` to the two-line headline (`Secure the AI era.` / `Run an AI-native SOC.`),
subhead, eyebrow `Powered by CrowdStrike Falcon`, CTAs, and reskin the terminal into the SOC
console mock with the CONTENT feed lines (CSS-staggered, left-aligned). Rewrite `TrustedBy` copy +
placeholder wordmarks. Rewrite the three `ProblemPanels` to the CONTENT threat narrative (51-sec
gauge; shadow-AI discovery list; blue "repeated gaps" bars). Rewrite `Stats` to the three CONTENT
stats. Keep the `ProblemPanels` framer scroll-scale; bars/lists are CSS. Include the stats-band
footnote attribution and the panel-1 "as reported by CrowdStrike" caption from CONTENT. **Update
`src/app/page.tsx`: delete `ProductCards` from the composition** (it is the base's Symbiotic
narrative); order becomes Hero → TrustedBy → ProblemPanels → Stats.
**Done looks like:** Homepage top half reads as the CrowdStrike/AI-era Soarseit narrative in blue;
no ProductCards, no invented customer names (industry labels only).
**Proof:** `npm run build` exits 0; `/` hero shows both headline lines with a populated console
feed; the three panels show the 51-sec gauge, the shadow-AI list, and the gap bars; ProductCards
is gone. (Fable screenshots.)

## Rock 3 — Capabilities tabs + closing CTA
**Do:** Reskin `Features` to the 5 CONTENT tabs (Identity Protection, Next-Gen SIEM, EDR/MDR,
AI Detection & Response, Charlotte AI) with their taglines/bodies and the reskinned `SOARSEIT SOC`
player. Rewrite the closing `CTA` section (`Outpace the adversary.`, briefing card + Why-Soarseit card).
Tab switching stays React state (works in production); no framer mount animations. **Tab a11y
(required):** `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, roving `tabindex` with
Left/Right arrow-key navigation, and a visible focus ring. Update `page.tsx` to add Features after Stats.
**Done looks like:** Five working, keyboard-navigable capability tabs + a rebranded closing CTA, all blue.
**Proof:** `npm run build` exits 0; on the production server clicking a second tab swaps the
tagline/body text AND Arrow-key navigation moves selection; the closing CTA renders both cards.
(Fable interactivity + keyboard check + screenshot.)

## Rock 4 — Shared modules dataset + "Learn More" expandable preview
**Do:** First create `src/data/modules.ts` — the SINGLE SOURCE OF TRUTH for ALL NINE CONTENT
categories and every module (name, category, one-liner). Then a new `LearnMore` homepage section:
an accordion of all nine categories, collapsed by default, each expanding to reveal that category's
module chips (name + one-liner) read from the dataset. **Disclosure mechanics (required):** CSS
`grid-template-rows: 0fr → 1fr` reveal (or native `<details>`) so unknown content height works; the
trigger is a `<button>` with `aria-expanded` + `aria-controls`, the panel has the matching `id`, a
chevron rotates via CSS, it is keyboard-operable (Enter/Space), and it honors `prefers-reduced-motion`.
A prominent `See all modules →` button links to `/modules`. Insert into `page.tsx` between Features
and CTA.
**Done looks like:** Visitors expand any of the nine categories inline (mouse or keyboard) and click
through to the full page; dataset is reusable by Rock 5.
**Proof:** `npm run build` exits 0; on the production server clicking a category row toggles its
`aria-expanded` and reveals module chips, keyboard (Enter/Space) does the same, and `See all modules`
navigates to `/modules`. (Fable interactivity + keyboard/aria check.)

## Rock 5 — Full /modules page + stub pages
**Do:** Build `/modules`: hero + the full grouped portfolio rendered from `src/data/modules.ts`
(the SAME dataset created in Rock 4 — do NOT duplicate the data), all nine categories with their
module cards (name, category tag, description) in the site theme. **Rewrite `StubPage` copy** to
credible Soarseit briefing language — remove every base string ("placeholder in the clone",
"pixel-faithful recreation", "Book a demo") — and reskin it blue. Add `/why-soarseit` and `/contact`
routes. Ensure all nav/footer/CTA links resolve.
**Done looks like:** `/modules` shows the entire nine-category portfolio; stub pages read as Soarseit;
every internal link resolves.
**Proof:** `npm run build` exits 0; `/modules` renders all nine category groups with their module
cards; `/why-soarseit` and `/contact` return 200 with blue Soarseit copy; a crawl of every header/
footer/CTA/`mailto` link on `/`, `/modules`, `/why-soarseit`, `/contact` finds no dead internal
route and no leftover base copy. (Fable screenshots + link crawl.)
