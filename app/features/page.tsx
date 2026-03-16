import { AdvantagesSection } from "@/components/sections/advantages";
import { CtaSection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { PageHero } from "@/components/sections/page-hero";
import { ShowcaseSection } from "@/components/sections/showcase";

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        badge="Features"
        title="A complete focus and planning architecture."
        description="From priority mapping to deep work protection, Momentum gives you a high-clarity operating system for daily execution."
      />
      <FeaturesSection />
      <AdvantagesSection />
      <ShowcaseSection />
      <CtaSection />
    </>
  );
}
