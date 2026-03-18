"use client";

import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, Clock3, ListTodo } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

type HeroModeKey = "plan" | "focus" | "review";

interface HeroMetric {
  label: string;
  value: string;
}

interface HeroTimelineItem {
  time: string;
  title: string;
  detail: string;
  active?: boolean;
}

interface HeroMode {
  key: HeroModeKey;
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  status: string;
  progressLabel: string;
  progressValue: string;
  metrics: HeroMetric[];
  timeline: HeroTimelineItem[];
  bars: number[];
  note: string;
}

const trustItems = [
  "120K+ сессий планируются в Momentum каждую неделю",
  "Реалистичный план, фокус и обзор дня в одном интерфейсе",
  "Подходит для личной работы, фриланса и небольших команд"
];

const chartLabels = ["08", "10", "12", "14", "16", "18"];

const heroModes: HeroMode[] = [
  {
    key: "plan",
    label: "План",
    eyebrow: "План дня",
    title: "День собран и не перегружен",
    subtitle:
      "Главное вынесено вперед, встречи не ломают ритм, а в расписании остается запас.",
    status: "Сегодня • 07:30 - 18:00",
    progressLabel: "Загрузка дня",
    progressValue: "68%",
    metrics: [
      { label: "Главное", value: "03" },
      { label: "Встречи", value: "02" },
      { label: "Буфер", value: "1.5ч" }
    ],
    timeline: [
      {
        time: "07:30",
        title: "Утренняя настройка",
        detail: "Собраны приоритеты и рамки дня"
      },
      {
        time: "09:00",
        title: "Главный блок",
        detail: "Сложная работа поставлена на пик концентрации",
        active: true
      },
      {
        time: "12:30",
        title: "Коммуникации",
        detail: "Созвоны и быстрые согласования после основного блока"
      },
      {
        time: "16:00",
        title: "Буфер",
        detail: "Запас под ответы, доработку и завершение дня"
      }
    ],
    bars: [42, 78, 74, 36, 58, 32],
    note:
      "План держит темп спокойно: сложная задача впереди, встречи вынесены позже, перегруз не накапливается."
  },
  {
    key: "focus",
    label: "Фокус",
    eyebrow: "Фокус-сессия",
    title: "Сессия идет без лишнего шума",
    subtitle:
      "В поле зрения только текущая задача, таймер и ближайший следующий шаг.",
    status: "Сейчас • 00:52 / 01:20",
    progressLabel: "Удержание фокуса",
    progressValue: "84%",
    metrics: [
      { label: "Отвлечения", value: "02" },
      { label: "Темп", value: "94%" },
      { label: "Осталось", value: "28м" }
    ],
    timeline: [
      {
        time: "13:00",
        title: "Дизайн-спринт",
        detail: "В работе: ключевой сценарий экрана",
        active: true
      },
      {
        time: "13:52",
        title: "Короткая пауза",
        detail: "8 минут на восстановление"
      },
      {
        time: "14:00",
        title: "Вторая часть",
        detail: "Финализация решения и проверка"
      },
      {
        time: "15:10",
        title: "Быстрый разбор",
        detail: "Сохранить выводы и закрыть сессию"
      }
    ],
    bars: [28, 86, 90, 72, 46, 20],
    note:
      "Momentum убирает второстепенное и помогает держать внимание на одном рабочем контуре до конца сессии."
  },
  {
    key: "review",
    label: "Разбор",
    eyebrow: "Итоги дня",
    title: "Вечером видно, что день реально дал",
    subtitle:
      "Система сравнивает план и факт, показывает перегрузы и помогает точнее собрать завтра.",
    status: "17:40 • день завершен",
    progressLabel: "План выполнен",
    progressValue: "87%",
    metrics: [
      { label: "Сэкономлено", value: "6.2ч" },
      { label: "Фокус", value: "+21%" },
      { label: "Перенос", value: "02" }
    ],
    timeline: [
      {
        time: "17:20",
        title: "Завершение дня",
        detail: "Основной план закрыт без хвостов",
        active: true
      },
      {
        time: "17:35",
        title: "Короткие заметки",
        detail: "Что сработало лучше всего сегодня"
      },
      {
        time: "17:50",
        title: "Черновик на завтра",
        detail: "Утренний приоритет уже определен"
      },
      {
        time: "18:00",
        title: "Закрытие цикла",
        detail: "План следующего дня готов без спешки"
      }
    ],
    bars: [64, 48, 78, 88, 56, 70],
    note:
      "Видно не только сколько сделано, но и где план был слишком плотным. Завтра собирается точнее."
  }
];

const modeIcons: Record<
  HeroModeKey,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  plan: ListTodo,
  focus: Clock3,
  review: BarChart3
};

export function HeroSection() {
  const [activeModeKey, setActiveModeKey] = useState<HeroModeKey>(heroModes[0].key);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveModeKey((currentKey) => {
        const currentIndex = heroModes.findIndex((mode) => mode.key === currentKey);
        const nextIndex = (currentIndex + 1) % heroModes.length;
        return heroModes[nextIndex]?.key ?? heroModes[0].key;
      });
    }, 4200);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeMode =
    heroModes.find((mode) => mode.key === activeModeKey) ?? heroModes[0];
  const ActiveIcon = modeIcons[activeMode.key];

  return (
    <section id="hero" className="section-space relative overflow-hidden pt-16 sm:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:gap-10">
        <Reveal className="max-w-2xl">
          <Badge className="mb-6 border-accent/35 bg-accent/10 text-accent">
            Система управления временем
          </Badge>
          <h1 className="font-heading text-4xl font-semibold leading-[0.96] tracking-tighter text-white sm:text-5xl lg:text-[4.55rem]">
            Планируйте день так,
            <br />
            чтобы успевать главное
            <br />
            <span className="bg-gradient-to-r from-white to-white/58 bg-clip-text text-transparent">
              без перегруза.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/72 sm:text-lg">
            Momentum помогает расставить приоритеты, собрать реалистичный план и
            сохранить фокус до конца дня. Вы заранее видите нагрузку, окна для
            глубокой работы и запас по времени.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="/pricing" size="lg">
              Попробовать бесплатно <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/features" variant="secondary" size="lg">
              Посмотреть возможности
            </Button>
          </div>
          <div className="mt-9 flex flex-wrap gap-2 text-[0.78rem] leading-relaxed text-white/62 sm:gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.02] px-3 py-2"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative">
            <motion.div
              className="absolute -right-10 top-8 hidden h-40 w-40 rounded-full bg-accent/18 blur-3xl sm:block"
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />

            <Card className="relative overflow-hidden rounded-[30px] border-white/15 bg-gradient-to-b from-[#1a141a] via-[#150f15] to-[#100c11] p-4 shadow-premium lg:hidden">
              <div className="absolute inset-0 bg-grid-fade bg-[length:28px_28px] opacity-[0.14]" />
              <div className="relative">
                <div className="mb-4 rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.18em] text-white/42">
                    Мобильный обзор дня
                  </p>
                  <p className="mt-1 font-heading text-xl text-white">Сегодня все на месте</p>
                </div>

                <div className="mb-4 flex snap-x gap-2 overflow-x-auto pb-1">
                  {heroModes.map((mode) => {
                    const Icon = modeIcons[mode.key];
                    const isActive = mode.key === activeMode.key;

                    return (
                      <button
                        key={mode.key}
                        type="button"
                        onClick={() => setActiveModeKey(mode.key)}
                        className={`relative inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                          isActive
                            ? "border-accent/40 bg-accent/12 text-white"
                            : "border-white/12 bg-white/[0.02] text-white/68"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{mode.label}</span>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeMode.key}-mobile`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.32 }}
                    className="space-y-3"
                  >
                    <div className="rounded-[24px] border border-accent/22 bg-accent/8 p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.16em] text-accent">
                            {activeMode.eyebrow}
                          </p>
                          <h3 className="mt-2 font-heading text-2xl leading-tight text-white">
                            {activeMode.title}
                          </h3>
                        </div>
                        <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-xs text-white/60">
                          {activeMode.status}
                        </span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-white/10">
                        <motion.div
                          key={`${activeMode.key}-mobile-progress`}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-[#8d6370]"
                          initial={{ width: 0 }}
                          animate={{ width: activeMode.progressValue }}
                          transition={{ duration: 0.7 }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {activeMode.metrics.map((metric) => (
                        <div
                          key={`${activeMode.key}-mobile-${metric.label}`}
                          className="rounded-2xl border border-white/10 bg-black/18 p-3"
                        >
                          <p className="text-[10px] uppercase tracking-[0.14em] text-white/40">
                            {metric.label}
                          </p>
                          <p className="mt-2 font-heading text-xl text-white">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-[24px] border border-white/12 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/42">
                        Что сейчас важно
                      </p>
                      <div className="mt-3 space-y-2">
                        {activeMode.timeline.slice(0, 2).map((item) => (
                          <div
                            key={`${activeMode.key}-mobile-item-${item.time}`}
                            className="rounded-2xl border border-white/10 bg-black/18 px-3 py-3"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <p className="text-sm font-medium text-white">{item.title}</p>
                              <span className="text-[10px] uppercase tracking-[0.16em] text-white/40">
                                {item.time}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-white/58">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Card>

            <Card className="relative hidden overflow-hidden rounded-[32px] border-white/15 bg-gradient-to-b from-[#1a141a] via-[#150f15] to-[#100c11] p-5 shadow-premium sm:p-6 lg:block">
              <div className="absolute inset-0 bg-grid-fade bg-[length:34px_34px] opacity-[0.16]" />
              <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(206,179,187,0.12),transparent_60%)]" />

              <div className="relative">
                <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                      Сегодня
                    </p>
                    <p className="mt-1 font-heading text-xl text-white">Среда, 19 марта</p>
                  </div>
                  <div className="rounded-full border border-accent/35 bg-accent/12 px-3 py-1 text-xs text-accent">
                    Живая система дня
                  </div>
                </div>

                <div className="mb-5 flex flex-wrap gap-2">
                  {heroModes.map((mode) => {
                    const Icon = modeIcons[mode.key];
                    const isActive = mode.key === activeMode.key;

                    return (
                      <button
                        key={mode.key}
                        type="button"
                        onClick={() => setActiveModeKey(mode.key)}
                        className={`relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition ${
                          isActive
                            ? "border-accent/40 bg-accent/12 text-white"
                            : "border-white/12 bg-white/[0.02] text-white/68 hover:bg-white/[0.05] hover:text-white"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="hero-mode-pill"
                            className="absolute inset-0 rounded-full bg-accent/10"
                            transition={{ type: "spring", stiffness: 320, damping: 28 }}
                          />
                        )}
                        <Icon className="relative z-10 h-4 w-4" />
                        <span className="relative z-10">{mode.label}</span>
                      </button>
                    );
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMode.key}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-3 md:grid-cols-[1.04fr_0.96fr]"
                  >
                    <div className="rounded-[26px] border border-white/12 bg-white/[0.03] p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                            {activeMode.eyebrow}
                          </p>
                          <h3 className="mt-2 font-heading text-2xl leading-tight text-white sm:text-[2rem]">
                            {activeMode.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/64">
                            {activeMode.subtitle}
                          </p>
                        </div>
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/40 bg-accent/12 text-accent">
                          <ActiveIcon className="h-5 w-5" />
                        </div>
                      </div>

                      <div className="mt-6 space-y-3">
                        {activeMode.timeline.map((item, index) => (
                          <motion.div
                            key={`${activeMode.key}-${item.time}-${item.title}`}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.05 * index }}
                            className={`rounded-2xl border px-4 py-3 ${
                              item.active
                                ? "border-accent/35 bg-accent/10"
                                : "border-white/10 bg-black/16"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div>
                                <p className="text-sm font-medium text-white">{item.title}</p>
                                <p className="mt-1 text-sm text-white/58">{item.detail}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-xs uppercase tracking-[0.16em] text-white/46">
                                  {item.time}
                                </p>
                                <span
                                  className={`mt-2 inline-flex h-2.5 w-2.5 rounded-full ${
                                    item.active ? "bg-accent" : "bg-white/26"
                                  }`}
                                />
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-3">
                      <div className="rounded-[26px] border border-white/12 bg-white/[0.03] p-4 sm:p-5">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <p className="text-xs uppercase tracking-[0.18em] text-white/45">
                              {activeMode.progressLabel}
                            </p>
                            <p className="mt-2 font-heading text-4xl text-white">
                              {activeMode.progressValue}
                            </p>
                          </div>
                          <span className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-xs text-white/62">
                            {activeMode.status}
                          </span>
                        </div>
                        <div className="mt-4 h-2 rounded-full bg-white/10">
                          <motion.div
                            key={`${activeMode.key}-progress`}
                            className="h-full rounded-full bg-gradient-to-r from-accent to-[#8d6370]"
                            initial={{ width: 0 }}
                            animate={{ width: activeMode.progressValue }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {activeMode.metrics.map((metric, index) => (
                          <motion.div
                            key={`${activeMode.key}-${metric.label}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.04 * index + 0.08 }}
                            className="rounded-2xl border border-white/10 bg-black/18 p-4"
                          >
                            <p className="text-xs uppercase tracking-[0.16em] text-white/42">
                              {metric.label}
                            </p>
                            <p className="mt-2 font-heading text-2xl text-white">
                              {metric.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>

                      <div className="rounded-[26px] border border-white/12 bg-white/[0.03] p-4 sm:p-5">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                          Ритм по часам
                        </p>
                        <div className="mt-5 flex h-28 items-end gap-2">
                          {activeMode.bars.map((bar, index) => (
                            <div
                              key={`${activeMode.key}-bar-${chartLabels[index]}`}
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

                      <div className="rounded-[26px] border border-accent/20 bg-accent/8 p-4">
                        <p className="text-xs uppercase tracking-[0.16em] text-accent">
                          Подсказка системы
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-white/72">
                          {activeMode.note}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </Card>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
