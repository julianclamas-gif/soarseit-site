# Soarseit — Vision / Traction Organizer

## Core Focus (one sentence)
A fast, credible Soarseit marketing site that positions the CrowdStrike Falcon platform as the answer to AI-era threats — identity attacks, shadow AI, prompt injection — and an AI-native SOC, then drives visitors into a complete Falcon module portfolio.

## What "done" looks like
- Homepage rebranded end-to-end as **Soarseit**, "powered by CrowdStrike," in an **electric cyber-blue / white / near-black** theme (no purple, no red).
- Hero blends two ideas: **secure your AI adoption** (AIDR, shadow AI, prompt injection) **+ AI-native SOC** (Next-Gen SIEM, MDR, Charlotte AI).
- A homepage **"Learn More" section that expands** into a grouped preview of CrowdStrike's modules, with a clear CTA to the full portfolio page.
- A dedicated **/modules** page listing the **full Falcon portfolio grouped by category** (~30+ modules) with accurate names and descriptions.
- Nav is minimal: **Modules · Why Soarseit · Contact**; stub pages exist so every route resolves.
- `npm run build` passes; the production build renders and is interactive (verified via `next start`, not dev — see constraints).

## Non-goals
- No impersonation of CrowdStrike. Soarseit is an independent solutions partner; a trademark line appears in the footer.
- No real backend, auth, forms submission, CMS, or e-commerce. CTAs route to a Contact stub.
- No pricing, no live chat, no analytics wiring.
- Not a pixel clone of crowdstrike.com — it reuses the Soarseit/symbiotic base layout language, reskinned.
- The words "broker" / "reseller" never appear in site copy.

## Constraints & stack
- **Next.js 16 (App Router), React 19, Tailwind v4, TypeScript** — reuse the existing base at `~/soarseit`.
- Project `AGENTS.md` applies: this is Next 16 with breaking changes — consult `node_modules/next/dist/docs/` before writing framework code.
- **Entrance/reveal/interaction animations must be CSS-driven** (the base proved framer mount/`whileInView` animations don't hydrate in dev here). Framer is allowed only for the verified scroll-scale effect in `ProblemPanels`.
- `next.config.ts` already pins `turbopack.root` (a stray `~/package-lock.json` otherwise breaks the workspace root).
- **Verify with the production build** (`npm run build && next start`), not `npm run dev` — dev HMR websocket is intercepted in this environment and blocks hydration.
- All CrowdStrike module names/descriptions come from `CONTENT.md` (Visionary-authored, authoritative). Codex does not invent module names.

## Goals (this cycle)
1. Reskin the shell to Soarseit + electric cyber-blue (logo, nav, footer, tokens, metadata).
2. Rewrite the homepage narrative around CrowdStrike's AI-era threat + AI-native SOC messaging.
3. Present the core platform capabilities (Identity, Next-Gen SIEM, EDR/MDR, AIDR/shadow-AI, Charlotte AI).
4. Ship the "Learn More" expandable modules preview that leads to /modules.
5. Ship the full **/modules** portfolio page, grouped and accurate.
