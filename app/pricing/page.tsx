import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing";
import { CtaSection } from "@/components/sections/cta";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const faq = [
  {
    q: "Можно ли сменить тариф позже?",
    a: "Да. Вы можете повысить или понизить тариф в любой момент, изменения применяются мгновенно."
  },
  {
    q: "Есть ли онбординг для команд?",
    a: "Тариф Элит включает персональный онбординг с архитектурой планирования и недельной настройкой."
  },
  {
    q: "Есть ли пробный период для Про?",
    a: "Да. Тариф Про можно протестировать 14 дней с полным доступом к фокусу и аналитике."
  }
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Тарифы"
        title="Выберите систему, соответствующую вашим амбициям."
        description="Прозрачные тарифы для людей и команд, которым нужны ясность, стабильность и измеримый прогресс."
      />
      <PricingSection />
      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {faq.map((item) => (
              <Card key={item.q} className="border-white/12 bg-[#0f151f]/84 p-6">
                <h3 className="font-heading text-2xl text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{item.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
