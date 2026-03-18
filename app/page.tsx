import type { Metadata } from "next";
import { AdvantagesSection } from "@/components/sections/advantages";
import { BeforeAfterSection } from "@/components/sections/before-after";
import { CtaSection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { PricingSection } from "@/components/sections/pricing";
import { ShowcaseSection } from "@/components/sections/showcase";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { TrustSection } from "@/components/sections/trust";
import { UseCasesSection } from "@/components/sections/use-cases";
import { WorkflowSection } from "@/components/sections/workflow";

export const metadata: Metadata = {
  title: "Главная",
  description:
    "Планируйте день так, чтобы успевать главное без перегруза. Momentum объединяет план, фокус и разбор дня в одной системе."
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <BeforeAfterSection />
      <ShowcaseSection />
      <UseCasesSection />
      <FeaturesSection />
      <PhilosophySection />
      <AdvantagesSection />
      <TrustSection />
      <WorkflowSection />
      <TestimonialsSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
