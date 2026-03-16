import { ArrowUpRight, Mail, MessageSquare, PhoneCall } from "lucide-react";
import { CtaSection } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const channels = [
  {
    title: "Почта",
    value: "hello@momentum.system",
    description: "Лучший канал для вопросов по продукту и поддержке аккаунта.",
    icon: Mail,
    href: "mailto:hello@momentum.system"
  },
  {
    title: "Продажи",
    value: "+1 (415) 904-1108",
    description: "Свяжитесь с командой по тарифу Элит и онбордингу.",
    icon: PhoneCall,
    href: "tel:+14159041108"
  },
  {
    title: "Сообщество",
    value: "Присоединиться к Momentum Circle",
    description: "Еженедельные воркшопы по планированию и фокус-сессии.",
    icon: MessageSquare,
    href: "#"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Контакты"
        title="Спроектируем вашу систему времени вместе."
        description="Напишите нам по вопросам онбординга, продукта или внедрения. Отвечаем в течение одного рабочего дня."
      />

      <section className="section-space pt-6">
        <Container className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-white/12 bg-[#0f151f]/84 p-6 sm:p-7">
            <h2 className="font-heading text-3xl text-white">Отправить сообщение</h2>
            <p className="mt-3 text-sm text-white/66">
              Опишите, что хотите улучшить. Мы предложим подходящую конфигурацию
              под ваш рабочий процесс.
            </p>
            <form
              action="mailto:hello@momentum.system"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <label className="block text-sm text-white/74">
                Имя
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 h-11 w-full rounded-xl border border-white/12 bg-black/30 px-3 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
                />
              </label>
              <label className="block text-sm text-white/74">
                Почта
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 h-11 w-full rounded-xl border border-white/12 bg-black/30 px-3 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
                />
              </label>
              <label className="block text-sm text-white/74">
                Сообщение
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/12 bg-black/30 px-3 py-2 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
                />
              </label>
              <button
                type="submit"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-accent px-6 text-[0.95rem] font-medium tracking-wide text-black transition-all duration-300 hover:bg-[#f0b985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
              >
                <span className="relative z-10">Отправить Через Почтовый Клиент</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          </Card>

          <div className="space-y-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.title} className="border-white/12 bg-[#0f151f]/84 p-5">
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
