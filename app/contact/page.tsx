import type { Metadata } from "next";
import { ArrowUpRight, Mail, MessageSquare, PhoneCall } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { CtaSection } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Свяжитесь с командой Momentum по вопросам запуска, продукта или внедрения системы управления временем."
};

const channels = [
  {
    title: "Почта",
    value: "hello@momentum.system",
    description: "Сюда можно писать по вопросам продукта, доступа и поддержки.",
    icon: Mail,
    href: "mailto:hello@momentum.system"
  },
  {
    title: "Продажи",
    value: "+1 (415) 904-1108",
    description: "Подходит для командного подключения, запуска и персональной настройки.",
    icon: PhoneCall,
    href: "tel:+14159041108"
  },
  {
    title: "Сообщество",
    value: "community@momentum.system",
    description: "Разборы недели, практики планирования и совместные фокус-сессии для участников.",
    icon: MessageSquare,
    href: "mailto:community@momentum.system"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Контакты"
        title="Поможем настроить систему под ваш ритм работы."
        description="Можно написать по вопросам запуска, продукта или внедрения. Обычно отвечаем в течение одного рабочего дня."
      />

      <section className="section-space pt-6">
        <Container className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-white/12 bg-[#18131d]/84 p-6 sm:p-7">
            <h2 className="font-heading text-3xl text-white">Написать нам</h2>
            <p className="mt-3 text-sm text-white/66">
              Расскажите, что именно хотите наладить. Мы подскажем, какой
              сценарий Momentum подойдет под ваш рабочий процесс.
            </p>
            <ContactForm />
          </Card>

          <div className="space-y-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.title} className="border-white/12 bg-[#18131d]/84 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        {channel.title}
                      </p>
                      <p className="mt-2 font-heading text-2xl text-white">{channel.value}</p>
                      <p className="mt-2 text-sm text-white/64">{channel.description}</p>
                    </div>
                    <a
                      href={channel.href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/74 transition hover:bg-white/[0.08] hover:text-white"
                      aria-label={channel.title}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
