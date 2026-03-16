import { AdvantagesSection } from "@/components/sections/advantages";
import { CtaSection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { PricingSection } from "@/components/sections/pricing";
import { ShowcaseSection } from "@/components/sections/showcase";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { WorkflowSection } from "@/components/sections/workflow";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PhilosophySection />
      <AdvantagesSection />
      <ShowcaseSection />
      <WorkflowSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
