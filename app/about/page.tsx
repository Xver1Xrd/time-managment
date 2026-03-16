import { CtaSection } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { TestimonialsSection } from "@/components/sections/testimonials";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="О Momentum"
        title="Мы помогаем амбициозным людям проектировать лучшие дни."
        description="Momentum — премиальная система тайм-менеджмента, построенная вокруг спокойного и точного исполнения. Мы объединяем осознанное планирование, deep work и непрерывное ревью в единый процесс."
      />
      <PhilosophySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
