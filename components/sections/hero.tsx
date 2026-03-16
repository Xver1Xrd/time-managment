"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Check, TimerReset } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const trustItems = [
  "120K+ пользователей планируют с Momentum",
  "Оценка продукта 4.9/5",
  "Готово к требованиям SOC 2"
];

export function HeroSection() {
  return (
    <section className="section-space relative overflow-hidden pt-16 sm:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8">
        <Reveal className="max-w-2xl">
          <Badge className="mb-6 border-accent/35 bg-accent/10 text-accent">
            Премиальная Инфраструктура Продуктивности
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-[0.98] tracking-tighter2 text-white sm:text-5xl lg:text-[4.7rem]">
            Управляйте Своим Днем.
            <br />
            <span className="bg-gradient-to-r from-white to-white/55 bg-clip-text text-transparent">
              Стройте Настоящий Фокус.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
            Momentum превращает хаос в структуру. Планируйте с ясностью,
            работайте в режиме deep work и анализируйте прогресс как
            высокоэффективная система.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/pricing" size="lg">
              Собрать Свой День <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Изучить Систему
            </Button>
          </div>
          <div className="mt-9 flex flex-wrap gap-2 text-xs uppercase tracking-[0.14em] text-white/58 sm:gap-4">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.02] px-3 py-1.5"
              >
                <Check className="h-3.5 w-3.5 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <motion.div
              className="absolute -right-10 top-8 hidden h-36 w-36 rounded-full bg-accent/18 blur-3xl sm:block"
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.06, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <Card className="relative overflow-hidden rounded-[30px] border-white/15 bg-gradient-to-b from-[#12161f] to-[#0b0f15] p-5 shadow-premium sm:p-6">
              <div className="relative mb-4 overflow-hidden rounded-2xl border border-white/12">
                <Image
                  src="/images/hero-focus.jpg"
                  alt="Премиальное рабочее пространство для фокусной работы"
                  width={1600}
                  height={900}
                  className="h-40 w-full object-cover sm:h-44"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                  Среда Для Фокуса
                </div>
              </div>
              <div className="mb-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Фокус-Окно
                  </p>
                  <p className="mt-1 font-heading text-2xl text-white">09:00 - 11:30</p>
                </div>
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-accent/14 text-accent">
                  <TimerReset className="h-5 w-5" />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Нагрузка Приоритетов
                  </p>
                  <p className="mt-2 font-heading text-3xl text-white">68%</p>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-[#8aa6d8]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Стек Сессий
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-white/75">
                    <li className="flex items-center justify-between">
                      Стратегический Документ
                      <span className="text-white/50">52m</span>
                    </li>
                    <li className="flex items-center justify-between">
                      Продуктовое Ревью
                      <span className="text-white/50">35m</span>
                    </li>
                    <li className="flex items-center justify-between">
                      Командный Синк
                      <span className="text-white/50">20m</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-3 grid gap-3 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Линия Дня
                  </p>
                  <div className="mt-4 space-y-3">
                    {[
                      { label: "Глубокая Работа", width: "74%" },
                      { label: "Ключевые Созвоны", width: "35%" },
                      { label: "Восстановление", width: "28%" }
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="mb-1 flex items-center justify-between text-xs text-white/60">
                          <span>{item.label}</span>
                          <span>{item.width}</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-white/10">
                          <motion.div
                            className="h-full rounded-full bg-white/75"
                            initial={{ width: 0 }}
                            whileInView={{ width: item.width }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.15 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                  <span className="text-xs uppercase tracking-[0.16em] text-white/45">
                    Статус
                  </span>
                  <p className="mt-2 font-heading text-2xl text-white">Полный Контроль</p>
                  <p className="mt-1 text-sm text-white/62">
                    Структурный ритм держится уже 14 дней подряд.
                  </p>
                  <motion.div
                    className="absolute -bottom-6 right-0 h-20 w-20 rounded-full bg-accent/28 blur-2xl"
                    animate={{ x: [-8, 0, -8], y: [0, -6, 0] }}
                    transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
