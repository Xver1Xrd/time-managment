import { AdvantagesSection } from "@/components/sections/advantages";
import { CtaSection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { PageHero } from "@/components/sections/page-hero";
import { ShowcaseSection } from "@/components/sections/showcase";

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        badge="Возможности"
        title="Полная архитектура фокуса и планирования."
        description="От карты приоритетов до защиты deep work — Momentum дает вам операционную систему дня с максимальной ясностью."
      />
      <FeaturesSection />
      <AdvantagesSection />
      <ShowcaseSection />
      <CtaSection />
    </>
  );
}
