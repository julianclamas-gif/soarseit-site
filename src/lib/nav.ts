export type NavLink = { label: string; href: string; desc?: string };
export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    children: [
      { label: "Symbiotic Code", href: "/products/symbiotic-code", desc: "AI code generation built to produce secure code only." },
      { label: "Symbiotic Flow", href: "/products/symbiotic-flow", desc: "Secure AI-assisted development across the SDLC." },
    ],
  },
  {
    label: "Solutions",
    children: [
      "Vibe Coding",
      "Compliance",
      "Financial Services",
      "Technology",
      "Security Leaders",
      "Application Security Engineers",
      "Developers",
    ].map((l) => ({ label: l, href: `/solutions/${slug(l)}` })),
  },
  {
    label: "Resources",
    children: [
      "Trust Center",
      "Docs",
      "CTF Challenges",
      "Blog",
    ].map((l) => ({ label: l, href: `/resources/${slug(l)}` })),
  },
  { label: "About", href: "/about" },
];
