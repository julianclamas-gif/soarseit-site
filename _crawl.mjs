import { chromium } from "playwright";
const out = "/private/tmp/claude-501/-Users-julianl/323a1aae-cb29-491d-99db-f72960755978/scratchpad";
const base = "http://127.0.0.1:4020";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 1000 } });
const pages = ["/", "/modules", "/why-soarseit", "/contact"];
const links = new Set();
for (const path of pages) {
  const r = await p.goto(base + path, { waitUntil: "load", timeout: 15000 });
  console.log(`route ${path} -> ${r.status()}`);
  const hrefs = await p.$$eval("a[href]", els => els.map(e => e.getAttribute("href")));
  hrefs.forEach(h => links.add(h));
}
// verify every internal link resolves
const internal = [...links].filter(h => h && h.startsWith("/"));
console.log("internal links found:", internal.join(", "));
let dead = [];
for (const h of internal) {
  const r = await p.goto(base + h, { waitUntil: "commit", timeout: 10000 }).catch(() => null);
  if (!r || r.status() >= 400) dead.push(`${h}:${r?r.status():'ERR'}`);
}
console.log("dead internal links:", dead.length ? dead.join(", ") : "NONE");
const mailtos = [...links].filter(h => h && h.startsWith("mailto:"));
console.log("mailto links:", mailtos.join(", ") || "none");
// screenshot /modules hero + a section
await p.goto(base + "/modules", { waitUntil: "load", timeout: 15000 });
await p.waitForTimeout(800);
await p.screenshot({ path: `${out}/soar-r5-modules-hero.png` });
await p.evaluate(() => window.scrollTo(0, 1400));
await p.waitForTimeout(500);
await p.screenshot({ path: `${out}/soar-r5-modules-cards.png` });
await b.close();
