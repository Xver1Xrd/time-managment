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
    title: "Умное планирование",
    description:
      "План не перегружает день и подстраивается под реальную загрузку."
  },
  {
    title: "Карта приоритетов",
    description:
      "Главные задачи всегда на поверхности, даже когда день идет не по плану."
  },
  {
    title: "Сессии глубокой работы",
    description:
      "Четкие интервалы помогают держать внимание и не дробить время на мелочи."
  },
  {
    title: "Планирование по энергии",
    description:
      "Сложная работа попадает в часы, когда у вас больше ресурса."
  },
  {
    title: "Прозрачный прогресс",
    description:
      "Вы видите не только количество задач, но и качество выполненной работы."
  },
  {
    title: "Еженедельный обзор",
    description:
      "Неделя закрывается выводами, а новая начинается без накопленного шума."
  }
];

export function AdvantagesSection() {
  return (
    <section className="section-space" id="system">
      <Container>
        <Reveal className="mb-10">
          <Badge>Почему это работает</Badge>
          <h2 className="mt-5 max-w-3xl font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Система, которая помогает держать день в руках без лишнего напряжения.
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
            <Card className="group relative h-full min-h-[280px] overflow-hidden border-white/15 bg-gradient-to-br from-[#231821] via-[#18121a] to-[#120e14] p-6">
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
                  Единый обзор
                </p>
                <h3 className="mt-3 font-heading text-3xl text-white">
                  Один экран, на котором видно весь день.
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68">
                  Приоритеты, фокус-сессии и итоги собраны в одном спокойном
                  интерфейсе без визуального шума.
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
              <Card className="premium-card flex h-full items-center justify-between gap-4 border-white/12 bg-[#17121b]/80 p-5">
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
              <Card className="premium-card flex h-full flex-col justify-between border-white/12 bg-[#1b1420]/85 p-5">
                <div>
                  <h3 className="font-heading text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/63">{item.description}</p>
                </div>
                <span className="mt-6 text-xs uppercase tracking-[0.18em] text-white/46">
                  Подробнее
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
            <Card className="relative h-full min-h-[210px] overflow-hidden border-white/15 bg-gradient-to-br from-[#1e151b] via-[#17121a] to-[#120f16] p-5">
              <Image
                src="/images/adv-workspace.jpg"
                alt="Рабочее пространство для еженедельного обзора"
                fill
                className="object-cover opacity-34"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_18%,rgba(169,123,136,0.28),transparent_36%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/58 to-black/72" />
              <div className="relative">
                <h3 className="font-heading text-2xl text-white">{advantages[5].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/66">
                  {advantages[5].description}
                </p>
                <div className="mt-6 flex gap-2">
                  {["Обзор", "Перезапуск", "Фокус"].map((tag) => (
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
