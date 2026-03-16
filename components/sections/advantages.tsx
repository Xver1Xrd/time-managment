"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const advantages = [
  {
    title: "Интеллектуальное Планирование",
    description:
      "Дневной план автоматически адаптируется под вашу реальную емкость."
  },
  {
    title: "Карта Приоритетов",
    description:
      "Ранжирование по влиянию держит стратегические задачи в фокусе."
  },
  {
    title: "Deep Work Сессии",
    description:
      "Границы сессий и визуальные таймеры снижают фрагментацию внимания."
  },
  {
    title: "Планирование По Энергии",
    description:
      "Сложная когнитивная работа ставится в пик вашей энергии."
  },
  {
    title: "Прозрачный Прогресс",
    description:
      "Панели в реальном времени показывают качество, а не только активность."
  },
  {
    title: "Система Недельного Ресета",
    description:
      "Закрывайте неделю через ревью-ритуал и запускайте новую с чистого листа."
  }
];

export function AdvantagesSection() {
  return (
    <section className="section-space" id="system">
      <Container>
        <Reveal className="mb-10">
          <Badge>Почему Это Работает</Badge>
          <h2 className="mt-5 max-w-3xl font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Премиальная архитектура планирования для стабильного контроля.
          </h2>
        </Reveal>

        <div className="grid gap-4 lg:grid-cols-12 lg:grid-rows-3">
          <motion.div
            className="lg:col-span-6 lg:row-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="group relative h-full min-h-[280px] overflow-hidden border-white/15 bg-gradient-to-br from-[#1a1e2a] via-[#121722] to-[#0d1219] p-6">
              <Image
                src="/images/adv-planning.jpg"
                alt="Карта планирования и сессия тайм-блокинга"
                fill
                className="object-cover opacity-38 transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/72" />
              <div className="absolute inset-0 bg-grid-fade bg-[length:34px_34px] opacity-18" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.18em] text-white/58">
                  Командный Дашборд
                </p>
                <h3 className="mt-3 font-heading text-3xl text-white">
                  Один Экран. Полная Оперативная Ясность.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68">
                  Видьте приоритеты, ритм сессий и сигналы результата в одном
                  спокойном экране управления.
                </p>
              </div>
            </Card>
          </motion.div>

          {advantages.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.title}
              className="lg:col-span-6"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: 0.07 * index }}
            >
              <Card className="premium-card flex h-full items-center justify-between gap-4 border-white/12 bg-[#0f141d]/80 p-5">
                <div>
                  <h3 className="font-heading text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/63">{item.description}</p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/75 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </Card>
            </motion.div>
          ))}

          {advantages.slice(3, 5).map((item, index) => (
            <motion.div
              key={item.title}
              className="lg:col-span-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 * index }}
            >
              <Card className="premium-card flex h-full flex-col justify-between border-white/12 bg-[#101521]/85 p-5">
                <div>
                  <h3 className="font-heading text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/63">{item.description}</p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-[0.18em] text-white/46">
                  Изучить
                </span>
              </Card>
            </motion.div>
          ))}

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Card className="relative h-full min-h-[210px] overflow-hidden border-white/15 bg-gradient-to-br from-[#171319] via-[#11141c] to-[#0b1118] p-5">
              <Image
                src="/images/adv-workspace.jpg"
                alt="Премиальное рабочее пространство для недельного ресета"
                fill
                className="object-cover opacity-34"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(210,138,88,0.34),transparent_36%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/58 to-black/72" />
              <div className="relative">
                <h3 className="font-heading text-2xl text-white">{advantages[5].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/66">
                  {advantages[5].description}
                </p>
                <div className="mt-6 flex gap-2">
                  {["Аудит", "Ресет", "Пересборка"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
