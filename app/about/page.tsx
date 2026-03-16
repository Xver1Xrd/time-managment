import { CtaSection } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Momentum"
        title="We help ambitious people design better days."
        description="Momentum is a premium time management system focused on calm execution. We combine intentional planning, deep work structure, and continuous review into one cohesive workflow."
      />
      <PhilosophySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
