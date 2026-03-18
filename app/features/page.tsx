import type { Metadata } from "next";
import { AdvantagesSection } from "@/components/sections/advantages";
import { CtaSection } from "@/components/sections/cta";
import { FeaturesSection } from "@/components/sections/features";
import { PageHero } from "@/components/sections/page-hero";
import { ShowcaseSection } from "@/components/sections/showcase";

export const metadata: Metadata = {
  title: "Возможности",
  description:
    "Посмотрите, как Momentum помогает планировать, работать глубже и не терять контроль над днем."
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        badge="Возможности"
        title="Все, что нужно, чтобы планировать, работать глубже и не терять контроль над днем."
        description="От карты приоритетов до фокус-сессий и аналитики — Momentum собирает весь рабочий ритм в одной понятной системе."
      />
      <FeaturesSection />
      <AdvantagesSection />
      <ShowcaseSection />
      <CtaSection />
    </>
  );
}
