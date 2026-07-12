# Soarseit — Same Page Meeting Log

Core Focus: A fast, credible Soarseit marketing site positioning the CrowdStrike Falcon platform
as the answer to AI-era threats (identity attacks, shadow AI, prompt injection) and an AI-native
SOC, driving visitors into a complete Falcon module portfolio.

Integrator: Codex (gpt-5.6-sol), thread 019f5524-96ae-7b22-8efc-5cf935a2c55a.

## Round 1
### Integrator findings (Codex, verbatim)
- [FIX] Rock 4 says eight categories while Rock 5 and the authoritative portfolio contain nine, excluding SaaS Security from a preview titled "The complete Falcon platform" -> Include SaaS Security in the accordion or explicitly label the preview as selected categories.
- [FIX] The shared dataset is introduced in Rock 4 but its required scope is ambiguous, inviting an eight-category dataset that Rock 5 must later restructure -> Rock 4 must create the complete nine-category dataset, with Learn More selecting from that same source.
- [FIX] CONTENT claims "40+ modules," but the authoritative portfolio lists only 32 entries -> Change the claim to "30+ modules" or supply the missing authoritative modules.
- [FIX] Falcon Adversary OverWatch and Falcon OverWatch appear as separate portfolio entries despite representing overlapping managed threat-hunting offerings -> Confirm the official distinction or consolidate them before publishing.
- [FIX] ProductCards remains mounted between TrustedBy and Stats but no rock removes or rewrites its Symbiotic product narrative -> Delete ProductCards from the homepage composition in Rock 2.
- [FIX] Rock 5 only reskins StubPage, so its current "placeholder in the clone," "pixel-faithful recreation," and "Book a demo" copy would survive -> Rewrite StubPage with credible Soarseit-specific holding copy and briefing terminology.
- [KILL] Invented customer wordmarks under "Trusted by teams" imply real customer relationships and create an avoidable credibility and impersonation risk -> Replace them with non-customer industry labels until approved customer names are available.
- [FIX] "Powered by CrowdStrike Falcon" can imply endorsement despite the footer disclaimer and conflicts with the stated independent, non-endorsed status -> Require legal approval or use clearly independent wording such as "CrowdStrike Falcon solutions, delivered by Soarseit."
- [FIX] "Falcon-style SOC console" risks presenting a fictional mockup as CrowdStrike product UI -> Label it clearly as an illustrative Soarseit workflow and avoid CrowdStrike trade dress.
- [FIX] Time-sensitive performance claims such as 51 seconds, one-hour containment, and 150+ adversaries have no citation or substantiation requirement in the plan -> Add approved source links, "as of" dates, and legal/content verification to Rock 2.
- [FIX] The modules hero says every offering runs on one lightweight agent, which is not credible for services, SaaS security, intelligence, and several cloud capabilities -> Narrow the claim to Falcon's unified platform architecture using approved CrowdStrike language.
- [FIX] Rock 4 specifies CSS height animation without a feasible strategy for unknown dynamic content height -> Use a CSS grid `0fr`/`1fr` disclosure pattern or native `details`/`summary`.
- [FIX] Rock 4's proof checks clicking but not disclosure semantics, keyboard operation, focus, or state announcement -> Require buttons with `aria-expanded` and `aria-controls`, keyboard testing, and reduced-motion behavior.
- [FIX] Rock 3's tabs are visually switchable but the plan omits tab semantics and keyboard navigation -> Require `tablist`/`tab`/`tabpanel`, selected-state attributes, arrow-key navigation, and visible focus.
- [FIX] Rock 1's proof can pass while legacy Symbiotic copy and forbidden colors remain outside the screenshot -> Add repository-wide checks for legacy brand strings/color tokens plus a production crawl of every retained route.
- [FIX] Rock 5's status checks can pass while nav or footer destinations are wrong because only three routes are explicitly tested -> Crawl and activate every header, footer, CTA, email, and external link in the production build.
- [CLARIFY] CONTENT names LinkedIn as a footer destination but provides no approved Soarseit profile URL -> What exact LinkedIn URL should be used, or should the link be omitted this cycle?
- [FIX] The plan places Learn More after Capabilities but does not explicitly update `src/app/page.tsx`, where section ordering is manually composed -> Add homepage composition and removal/insertion work explicitly to the relevant rocks.

VERDICT: NOT YET

### Visionary response (Fable)
- ACCEPTED: SaaS Security omission -> CONTENT Learn More now renders all NINE categories incl. SaaS Security.
- ACCEPTED: dataset scope ambiguity -> Rock 4 now explicitly creates `src/data/modules.ts` as single source of truth (all 9 categories); Rock 5 reuses it verbatim.
- ACCEPTED: "40+ modules" -> changed to "30+ modules across the unified Falcon platform."
- ACCEPTED: OverWatch overlap -> removed duplicate `Falcon OverWatch` from Managed Services; managed hunting stays as `Falcon Adversary OverWatch` under Threat Intelligence.
- ACCEPTED: ProductCards -> Rock 2 now explicitly deletes it from `page.tsx`; final composition documented at top of PLAN.
- ACCEPTED: StubPage legacy copy -> Rock 5 now rewrites StubPage copy to Soarseit briefing language.
- ACCEPTED (KILL): invented customers -> trusted-by strip now uses industry labels (Financial Services, Healthcare, ...), no customer names.
- PARTIAL: "powered by CrowdStrike" endorsement -> KEPT the user-chosen "powered by CrowdStrike Falcon" tagline (explicit user constraint), but strengthened via prominent non-affiliation/trademark disclaimer; formal legal sign-off DEFERRED to ISSUES.md.
- ACCEPTED: console trade-dress -> CONTENT now labels it "illustrative Soarseit workflow," not CrowdStrike UI.
- ACCEPTED: uncited stats -> stats reframed to CrowdStrike's public 1-10-60 framework + "150+ adversaries," with attribution footnote; panel-1 "51 sec" carries "as reported by CrowdStrike."
- ACCEPTED: "one lightweight agent" overclaim -> modules hero reworded to "unified Falcon platform — one console and one data layer."
- ACCEPTED: accordion height strategy -> Rock 4 mandates CSS grid `0fr`/`1fr` (or `<details>`).
- ACCEPTED: accordion a11y -> Rock 4 requires `aria-expanded`/`aria-controls`, keyboard, reduced-motion; proof updated.
- ACCEPTED: tab a11y -> Rock 3 requires tablist/tab/tabpanel, aria-selected, arrow-key nav, focus ring; proof updated.
- ACCEPTED: Rock 1 leftover-copy/color risk -> Rock 1 proof adds repo-wide grep for `symbiotic` + purple tokens.
- ACCEPTED: Rock 5 link coverage -> Rock 5 proof adds a crawl of all header/footer/CTA/mailto links across the four routes.
- RESOLVED (CLARIFY): LinkedIn URL -> omit external social this cycle; email is `mailto:contact@soarseit.com`, other company links -> /contact. Logged in ISSUES.md.
- ACCEPTED: page.tsx composition -> final composition documented at top of PLAN; each rock updates it explicitly.
