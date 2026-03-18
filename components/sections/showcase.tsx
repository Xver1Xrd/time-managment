"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Clock3, Layers, Sparkles } from "lucide-react";
import { showcaseTabs } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const iconMap = {
  plan: Layers,
  focus: Clock3,
  review: BarChart3,
  improve: Sparkles
};

const showcaseDetails = {
  plan: {
    windowLabel: "Среда, 19 марта",
    status: "План собран",
    signalLabel: "Реалистичность плана",
    signalValue: "92%",
    note:
      "Система держит утро свободным от встреч и оставляет буфер на вторую половину дня.",
    pressure: [36, 74, 70, 42, 56, 30],
    details: [
      "Три результата дня уже вынесены вперед.",
      "Сложная работа поставлена на пик концентрации.",
      "Коммуникации сдвинуты после основного блока."
    ]
  },
  focus: {
    windowLabel: "В работе",
    status: "Сессия активна",
    signalLabel: "Удержание фокуса",
    signalValue: "84%",
    note:
      "Во время сессии на экране остается только текущая задача, таймер и ближайший следующий шаг.",
    pressure: [28, 82, 88, 74, 46, 18],
    details: [
      "Главная задача открыта без лишних панелей.",
      "Пауза запланирована заранее, чтобы не терять темп.",
      "Вторая часть сессии начинается без ручной пересборки."
    ]
  },
  review: {
    windowLabel: "Вечерний разбор",
    status: "День закрыт",
    signalLabel: "Точность плана",
    signalValue: "87%",
    note:
      "Momentum показывает не только процент выполнения, но и где день оказался плотнее, чем стоило.",
    pressure: [58, 46, 74, 86, 54, 68],
    details: [
      "Основной план завершен без накопленных хвостов.",
      "Короткие заметки фиксируют, что сработало лучше всего.",
      "Завтрашний приоритет уже подготовлен к старту."
    ]
  },
  improve: {
    windowLabel: "Недельная настройка",
    status: "Система обновлена",
    signalLabel: "Совпадение с ритмом",
    signalValue: "91%",
    note:
      "На основе реального поведения система предлагает перераспределить нагрузку и защитить нужные часы.",
    pressure: [34, 58, 76, 64, 72, 44],
    details: [
      "Повторяющиеся перегрузы отмечены автоматически.",
      "Энергозатратные задачи перенесены в сильные часы.",
      "Неделя пересобрана без ручного хаоса в календаре."
    ]
  }
} as const;

const chartLabels = ["08", "10", "12", "14", "16", "18"];

export function ShowcaseSection() {
  const [activeKey, setActiveKey] = useState(showcaseTabs[0]?.key ?? "plan");

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveKey((currentKey) => {
        const currentIndex = showcaseTabs.findIndex((tab) => tab.key === currentKey);
        const nextIndex = (currentIndex + 1) % showcaseTabs.length;
        return showcaseTabs[nextIndex]?.key ?? showcaseTabs[0]?.key ?? "plan";
      });
    }, 4800);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeTab =
    showcaseTabs.find((tab) => tab.key === activeKey) ?? showcaseTabs[0];
  const ActiveIcon = iconMap[activeTab.key as keyof typeof iconMap] ?? Layers;
  const activeDetails =
    showcaseDetails[activeTab.key as keyof typeof showcaseDetails] ??
    showcaseDetails.plan;

  return (
    <section id="showcase" className="section-space pt-6">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <Badge>Живой интерфейс</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Посмотрите, как Momentum ведет день от первого приоритета до
            вечернего разбора.
          </h2>
        </Reveal>

        <Card className="relative overflow-hidden rounded-[32px] border-white/15 bg-[#151019]/90 p-5 sm:p-7">
          <div className="absolute inset-0 bg-grid-fade bg-[length:32px_32px] opacity-[0.16]" />
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(214,194,198,0.12),transparent_62%)]" />

          <div className="relative">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                  Интерфейс продукта
                </p>
                <p className="mt-1 text-sm text-white/62">
                  Один экран для плана, фокуса, аналитики и настройки системы.
                </p>
              </div>
              <div className="rounded-full border border-accent/35 bg-accent/12 px-3 py-1 text-xs text-accent">
                Обновляется в реальном времени
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {showcaseTabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveKey(tab.key)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    activeKey === tab.key
                      ? "animated-border border-accent/50 bg-accent/18 text-white"
                      : "border-white/12 bg-white/[0.02] text-white/70 hover:bg-white/[0.06]"
                  )}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab.key}-summary`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[26px] border border-white/12 bg-[#19131d] p-6"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] text-accent">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-3xl leading-tight text-white">
                    {activeTab.headline}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68">
                    {activeTab.description}
                  </p>

                  <div className="mt-6 grid grid-cols-3 gap-2">
                    {activeTab.metrics.map((metric, index) => (
                      <motion.div
                        key={`${activeTab.key}-${metric.label}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className="rounded-xl border border-white/12 bg-black/24 p-3"
                      >
                        <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                          {metric.label}
                        </p>
                        <p className="mt-2 font-heading text-2xl text-white">
                          {metric.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-accent/22 bg-accent/8 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-accent">
                      Подсказка системы
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/72">
                      {activeDetails.note}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab.key}-preview`}
                  initial={{ opacity: 0, y: 14, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.99 }}
                  transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                  className="rounded-[28px] border border-white/12 bg-gradient-to-b from-[#231922] to-[#151018] p-4 sm:p-5"
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                        {activeDetails.windowLabel}
                      </p>
                      <p className="mt-1 font-heading text-xl text-white">
                        {activeDetails.status}
                      </p>
                    </div>
                    <div className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-xs text-white/62">
                      Momentum Workspace
                    </div>
                  </div>

                  <div className="grid gap-3 lg:grid-cols-[1.02fr_0.98fr]">
                    <div className="rounded-[24px] border border-white/12 bg-black/18 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/44">
                        Ритм дня
                      </p>
                      <div className="mt-4 space-y-3">
                        {activeTab.timeline.map((item, index) => (
                          <motion.div
                            key={`${activeTab.key}-${item.time}-${item.title}`}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.06 * index + 0.04 }}
                            className={cn(
                              "rounded-2xl border px-4 py-3",
                              item.tone === "accent"
                                ? "border-accent/35 bg-accent/10"
                                : "border-white/10 bg-white/[0.02]"
                            )}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="font-medium text-white">{item.title}</p>
                                <p className="mt-1 text-sm text-white/58">
                                  {activeDetails.details[index] ?? "Состояние обновляется в реальном времени."}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs uppercase tracking-[0.13em] text-white/46">
                                  {item.time}
                                </p>
                                <span
                                  className={cn(
                                    "mt-2 inline-flex h-2.5 w-2.5 rounded-full",
                                    item.tone === "accent" ? "bg-accent" : "bg-white/28"
                                  )}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-[24px] border border-white/12 bg-white/[0.03] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/44">
                          {activeDetails.signalLabel}
                        </p>
                        <div className="mt-3 flex items-center justify-between gap-3">
                          <p className="font-heading text-4xl text-white">
                            {activeDetails.signalValue}
                          </p>
                          <span className="rounded-full border border-accent/32 bg-accent/10 px-3 py-1 text-xs text-accent">
                            обновлено сейчас
                          </span>
                        </div>
                        <div className="mt-4 h-2 rounded-full bg-white/10">
                          <motion.div
                            key={`${activeTab.key}-signal`}
                            className="h-full rounded-full bg-gradient-to-r from-accent to-[#8f6170]"
                            initial={{ width: 0 }}
                            animate={{ width: activeDetails.signalValue }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-white/12 bg-white/[0.03] p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/44">
                          Нагрузка по часам
                        </p>
                        <div className="mt-5 flex h-28 items-end gap-2">
                          {activeDetails.pressure.map((bar, index) => (
                            <div
                              key={`${activeTab.key}-bar-${chartLabels[index]}`}
                              className="flex flex-1 items-end"
                            >
                              <motion.div
                                className="w-full rounded-t-2xl bg-gradient-to-t from-accent to-white/78"
                                initial={{ height: 0 }}
                                animate={{ height: `${bar}%` }}
                                transition={{
                                  duration: 0.55,
                                  delay: index * 0.04,
                                  ease: "easeOut"
                                }}
                              />
                            </div>
                          ))}
                        </div>
                        <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.16em] text-white/38">
                          {chartLabels.map((label) => (
                            <span key={label}>{label}</span>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[24px] border border-white/12 bg-black/18 p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/44">
                          Сигнал системы
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/72">
                          {activeDetails.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}
