# Soarseit — Content & Messaging Spec (authoritative)

> Codex: use these exact names and this copy. Do not invent CrowdStrike module names.
> Voice: confident, technical, enterprise-security. Soarseit speaks in first person ("we").
> Never use the words "broker" or "reseller." Framing is "powered by CrowdStrike Falcon."

## Brand
- Name: **Soarseit**
- Wordmark: `soarseit` lowercase, with a small tagline `CYBER DEFENSE` under it.
- Tagline (footer & meta): "Enterprise security, powered by CrowdStrike Falcon."
- Trademark line (footer, small): "CrowdStrike, Falcon, and Charlotte AI are trademarks of CrowdStrike, Inc. Soarseit is an independent solutions partner and is not affiliated with or endorsed by CrowdStrike, Inc."

## Color tokens (electric cyber-blue — no red, no purple)
- `--brand-blue: #2E7DFF`   (primary)
- `--brand-blue-bright: #5AA0FF`
- `--brand-cyan: #22D3EE`   (glow accent)
- Brand gradient: `linear-gradient(135deg, #2E7DFF, #22D3EE)`
- `--ink: #0B1220`  (near-black navy — display text)
- `--ink-soft: #16233B`
- `--body: #46536B` (body text on light)
- Dark section bg: `#070C16` → `#0B1526` (gradient), cyan/blue glow blobs
- Light tints: `--tint-50: #F4F8FF`, `--tint-100: #E9F1FF`, `--tint-200: #D9E6FF`
- Dark-section accents: text on dark is `#E8EEF9` / muted `rgba(232,238,249,.55)`

## Navigation (minimal)
- **Modules** → `/modules` (the full portfolio page)
- **Why Soarseit** → `/why-soarseit` (stub)
- **Contact** → `/contact` (stub)
- Right side buttons: `Book a briefing` (gradient) and `Talk to us` (outline) → both `/contact`

---

## HOMEPAGE

### Hero
- Eyebrow pill: `Powered by CrowdStrike Falcon`
- H1 (two-tone; second line gradient):
  `Secure the AI era.` / `Run an AI-native SOC.`
- Subhead: "Soarseit delivers the CrowdStrike Falcon platform end to end — stopping identity attacks, shadow AI, and prompt-injection threats while an AI-native SOC hunts, triages, and responds 24/7. Deployed, managed, and operated for you."
- Micro line (italic, muted): "One platform. One agent. Every workload."
- Primary CTA: `Book a briefing →`  ·  secondary text link: `Explore the modules →` (to /modules)
- Hero visual: a dark, **illustrative Soarseit SOC console** mock (reuse the terminal component, reskinned) — NOT a reproduction of CrowdStrike's product UI or trade dress. A detection feed with lines like an incident triage: Charlotte AI summarizing a detection, identity risk, containment action. CSS-staggered reveal. Left-aligned mono. Add a small muted caption below it: "Illustrative Soarseit workflow."

Console mock lines (mono, syntax-colored):
```
▸ Detection  CS-4417  ·  Critical
✓ Charlotte AI  Triaged in 4s
  └ Kerberoasting attempt → svc-sql01 (identity risk: 92)
🛡 Identity Protection  Enforced step-up MFA
✓ Falcon Insight XDR  Isolated host WIN-APP-07
◈ Next-Gen SIEM  Correlated 3 domains · 1 incident
🔍 AIDR  Blocked prompt-injection on internal copilot
  └ 0 data exfiltration · analyst notified
```
Input row placeholder: `Ask Charlotte AI…`

### Trusted-by / industries strip  (NOTE: no invented customers — use industry labels only)
- Heading: "Built for teams that can't afford a breach"
- Note under labels (muted): "Protecting identities, endpoints, clouds, and AI across regulated industries."
- Industry labels (NOT customer names): `Financial Services` · `Healthcare` · `Critical Infrastructure` · `SaaS & Technology` · `Public Sector` · `Manufacturing`

### Threat narrative — three stacked dark panels (reuse ProblemPanels, reskinned blue)
Panel 1 — heading "The adversary now moves in minutes, not days"
body: "The fastest eCrime breakout time is under an hour. Attackers log in with stolen identities instead of breaking in — and legacy tools that alert after the fact can't keep up."
visual: a gauge/stat — big number **"51 sec"** with label "fastest recorded eCrime breakout time" and a small muted caption "as reported by CrowdStrike" plus the line "Your window to respond is closing."

Panel 2 — heading "Shadow AI is your new unmanaged attack surface"
body: "Employees are wiring LLMs and copilots into real workflows faster than security can see them. Every unsanctioned model, agent, and API key expands what an attacker can reach — and what can be leaked."
visual: a list of "Discovered AI usage" rows (like the vuln list), each `unsanctioned`:
- `Internal copilot → customer PII`  · 2 days ago
- `Anthropic API key in repo`  · 5 days ago
- `Unreviewed AI agent · prod access`  · 1 week ago
- `Prompt logs → external endpoint`  · 3 weeks ago
- `Shadow model · finance data`  · 1 month ago

Panel 3 — heading "Point products can't correlate what they can't see"
body: "Identity, endpoint, cloud, and AI signals live in silos, so real attacks slip between them. Without one platform and one data layer, your SOC drowns in alerts and misses the incident."
visual: "Repeated gaps" bars (blue gradient): `Identity blind spots`, `Alert fatigue`, `Siloed telemetry` — all near-full.

### Stats band (blue gradient cards)
- `1·10·60` — "the benchmark our SOC operates to: detect in 1, triage in 10, contain in 60 minutes"
- `150+` — "adversary groups tracked by Counter Adversary Operations"
- `24/7` — "expert-led detection and response, every day"
- Small muted footnote under the band: "The 1-10-60 benchmark and adversary figures reflect CrowdStrike's published frameworks and threat research (CrowdStrike Global Threat Report). Results vary by environment."

### Capabilities — tabbed feature switcher (reuse Features, reskinned)
Section heading (two-tone): `One platform.` / `Every layer of the attack.`
Tabs (each has tagline + body):
1. **Identity Protection** — tagline "Stop the attacks that start with a login." body: "Falcon Identity Threat Protection detects and blocks credential theft, lateral movement, and privilege escalation in real time — enforcing risk-based MFA across AD, Entra ID, and every identity, human or service."
2. **Next-Gen SIEM** — tagline "Your whole SOC, on one blazing-fast data layer." body: "Falcon Next-Gen SIEM unifies first- and third-party data at petabyte scale, correlating identity, endpoint, cloud, and AI telemetry into single incidents — with search in seconds, not minutes."
3. **EDR / MDR** — tagline "See everything. Stop everything. Even while you sleep." body: "Falcon Insight XDR delivers industry-leading detection and response across your estate, while Falcon Complete MDR puts CrowdStrike's elite analysts on watch 24/7 to hunt, triage, and remediate on your behalf."
4. **AI Detection & Response** — tagline "Defend the AI your business is racing to adopt." body: "AIDR discovers shadow AI, secures models and agents, and blocks prompt injection and data exfiltration across your GenAI stack — so innovation doesn't become your next breach."
5. **Charlotte AI** — tagline "An AI analyst that works the queue with you." body: "Charlotte AI triages detections, writes the investigation, and drafts response actions in seconds — cutting alert fatigue and giving every analyst the speed of your best one."
- Under the tab body, a small player/visual: reuse the console mock reskinned, titled `SOARSEIT SOC` with a Charlotte-AI prompt line.

### "Learn More" — expandable modules preview (NEW, key feature)
- Section heading: `The complete Falcon platform`
- Subhead: "30+ modules across the unified Falcon platform — one console, one data layer. Expand a category to see what Soarseit can turn on for you."
- An **accordion**: one row per category (see MODULE PORTFOLIO below). Collapsed by default; clicking expands to reveal that category's module chips (name + one-line description). Multiple can be open.
- Disclosure mechanics (REQUIRED): use the CSS `grid-template-rows: 0fr → 1fr` reveal pattern (or native `<details>`), so it works with unknown/dynamic content height. The trigger is a real `<button>` with `aria-expanded` and `aria-controls`; the panel has a matching `id`; a chevron rotates via CSS. Keyboard-operable (Enter/Space) and honors `prefers-reduced-motion`.
- Render ALL NINE categories (source of truth = the shared modules dataset): Endpoint Security & XDR · Identity Protection · Cloud Security · Next-Gen SIEM & SOC · Threat Intelligence · Exposure Management · AI & Data Protection · Managed Services · SaaS Security.
- Below the accordion, a prominent CTA button: `See all modules →` → `/modules`.

### Closing CTA
- Mark (Soarseit glyph), heading (two-tone): `Outpace` `the adversary.`
- Sub: "Book a briefing and we'll map the Falcon modules to your environment — and stand up your AI-native SOC."
- Two cards: (a) a "Briefing" card with CTA `Book a briefing →`; (b) a "Why Soarseit" card: "One partner for licensing, deployment, tuning, and 24/7 operations — so your team runs the business, not the tooling." CTA `Why Soarseit →`.

### Footer
- Wordmark + "Enterprise security, powered by CrowdStrike Falcon."
- Columns: **Explore** (Modules, Why Soarseit, Contact) · **Platform** (Identity Protection, Next-Gen SIEM, EDR/MDR, AI Detection & Response, Charlotte AI → all to /modules) · **Company** (`contact@soarseit.com` as a `mailto:` link, `Book a briefing` → /contact, `Talk to us` → /contact). NOTE: do NOT add a LinkedIn/external social link this cycle — no approved URL exists.
- Bottom: "© Soarseit 2026" + the trademark line above.

---

## MODULES PAGE (`/modules`)

- Hero: eyebrow `Powered by CrowdStrike Falcon`; H1 (two-tone) `The full Falcon` / `module portfolio`; sub: "Every module below is part of the unified Falcon platform — one console and one data layer. Soarseit licenses, deploys, tunes, and operates the ones you need."
- Then the portfolio, **grouped by category**. Each category is a section header + a responsive grid of module cards (name, category tag, 1–2 sentence description).
- Sticky mini in-page category nav is a nice-to-have (only if cheap).
- Closing CTA band: `Not sure which modules you need? → Book a briefing`.

### MODULE PORTFOLIO (authoritative — use these names/descriptions)

**Endpoint Security & XDR**
- *Falcon Prevent* — Next-gen antivirus that stops malware, ransomware, and fileless attacks with on-sensor AI.
- *Falcon Insight XDR* — Industry-leading EDR/XDR: detection, investigation, and response across endpoint, identity, cloud, and more.
- *Falcon Device Control* — Granular control and visibility over USB and peripheral device usage.
- *Falcon Firewall Management* — Centralized host-based firewall policy management from the Falcon console.
- *Falcon Forensics* — At-scale forensic data collection for incident response and threat hunting.
- *Falcon for Mobile* — EDR for iOS and Android that detects threats without draining devices.
- *Falcon for XIoT* — Protection and visibility for IoT, OT, and connected medical/industrial devices.

**Identity Protection**
- *Falcon Identity Threat Detection* — Real-time visibility into identity risk across AD and Entra ID, surfacing attack paths and exposures.
- *Falcon Identity Threat Protection* — Blocks credential theft, lateral movement, and privilege escalation with risk-based conditional access and MFA enforcement.
- *Falcon Privileged Access* — Just-in-time, least-privilege access controls for high-risk accounts and sessions.

**Cloud Security (Falcon Cloud Security — CNAPP)**
- *Cloud Security Posture Management (CSPM)* — Continuous detection and remediation of cloud misconfigurations across AWS, Azure, and GCP.
- *Cloud Workload Protection (CWP)* — Runtime protection for hosts, containers, and Kubernetes wherever they run.
- *Cloud Infrastructure Entitlement Management (CIEM)* — Enforces least privilege across cloud identities and entitlements.
- *Application Security Posture Management (ASPM)* — Traces risk from code to cloud to prioritize what actually matters.
- *Data Security Posture Management (DSPM)* — Discovers and protects sensitive data across cloud and SaaS.

**Next-Gen SIEM & SOC**
- *Falcon Next-Gen SIEM* — Petabyte-scale, AI-native SIEM that unifies all data and correlates it into single incidents in seconds.
- *Falcon LogScale* — Blazing-fast, cost-efficient log management and observability at any scale.
- *Falcon Fusion SOAR* — Built-in orchestration and automation to codify and accelerate response workflows.

**Threat Intelligence (Counter Adversary Operations)**
- *Falcon Adversary Intelligence* — Automated, actionable intel on the adversaries targeting your industry and stack.
- *Falcon Adversary OverWatch* — Elite, intel-led managed threat hunting across endpoint, identity, and cloud, 24/7.
- *Falcon Intelligence Recon* — Monitors the deep and dark web for exposed credentials, brand abuse, and emerging threats.

**Exposure Management**
- *Falcon Exposure Management* — Unifies asset, vulnerability, and attack-surface risk into one prioritized view.
- *Falcon Spotlight* — Scanless, real-time vulnerability management built into the Falcon sensor.
- *Falcon Surface* — External attack surface management that finds and prioritizes internet-exposed risk.
- *Falcon Discover* — Continuous IT hygiene: discover unmanaged assets, accounts, and applications.

**AI & Data Protection**
- *Charlotte AI* — Agentic AI SOC analyst that triages detections, investigates, and drafts response in seconds.
- *AI Detection & Response (AIDR)* — Secures models, agents, and GenAI apps; discovers shadow AI and blocks prompt injection and data exfiltration.
- *Falcon Data Protection* — Modern DLP on the Falcon agent that stops data theft across web, endpoint, and GenAI.

**Managed Services**
- *Falcon Complete MDR* — Fully managed 24/7 detection, hunting, and response run by CrowdStrike experts as an extension of your team.
- *Falcon Complete Next-Gen SIEM* — Managed operation and tuning of Next-Gen SIEM, run for you around the clock.
- *CrowdStrike Services* — Incident response and proactive services to prepare for, respond to, and recover from breaches.

(Note: managed threat hunting lives under Threat Intelligence as *Falcon Adversary OverWatch* — do not duplicate it here.)

**SaaS Security**
- *Falcon Shield* — SaaS security posture management (SSPM) that secures identities, configs, and data across your SaaS estate.
