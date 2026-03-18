import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing";
import { CtaSection } from "@/components/sections/cta";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Выберите тариф Momentum для личной работы, устойчивого ритма или командного планирования."
};

const faq = [
  {
    q: "Можно ли сменить тариф позже?",
    a: "Да. Переключиться на другой тариф можно в любой момент, без сложных переносов и ручной настройки."
  },
  {
    q: "Помогаете ли вы с запуском для команд?",
    a: "Да. В тарифе «Команда» есть персональный запуск, настройка структуры и помощь в первом рабочем цикле."
  },
  {
    q: "Есть ли пробный период для Про?",
    a: "Да. Тариф «Про» можно попробовать 14 дней с полным доступом к фокус-сессиям и аналитике."
  }
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Тарифы"
        title="Выберите формат, который подходит вашему ритму работы."
        description="Прозрачные тарифы для тех, кому важны ясность, устойчивый темп и понятный результат."
      />
      <PricingSection />
      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {faq.map((item) => (
              <Card key={item.q} className="border-white/12 bg-[#18131d]/84 p-6">
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
