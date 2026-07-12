import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import ProductCards from "@/components/sections/ProductCards";
import Stats from "@/components/sections/Stats";
import ProblemPanels from "@/components/sections/ProblemPanels";
import Features from "@/components/sections/Features";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProductCards />
      <Stats />
      <ProblemPanels />
      <Features />
      <CTA />
    </>
  );
}
