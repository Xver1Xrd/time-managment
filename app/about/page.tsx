import type { Metadata } from "next";
import { CtaSection } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { TestimonialsSection } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "О сервисе",
  description:
    "Узнайте, как Momentum помогает собирать день так, чтобы в нем хватало места и для результата, и для спокойствия."
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="О сервисе"
        title="Momentum помогает собирать день так, чтобы в нем было место и для результата, и для спокойствия."
        description="Это не просто таск-менеджер, а система, которая помогает планировать реалистично, работать глубже и постепенно улучшать собственный ритм."
      />
      <PhilosophySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
