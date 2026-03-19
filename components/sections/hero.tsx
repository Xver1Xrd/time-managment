"use client";

import { useEffect, useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, Clock3, ListTodo } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

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
  "120K+ сессий планируют в Momentum каждую неделю",
  "План, фокус и разбор дня собраны в одном интерфейсе",
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
      "Главное стоит впереди, встречи не ломают ритм, а в расписании остается запас на реальную жизнь.",
    status: "Сегодня • 07:30–18:00",
    progressLabel: "Загрузка дня",
    progressValue: "68%",
    metrics: [
      { label: "Главное", value: "03" },
      { label: "Встречи", value: "02" },
      { label: "Запас", value: "1.5ч" }
    ],
    timeline: [
      {
        time: "07:30",
        title: "Утренняя настройка",
        detail: "Приоритеты и рамки дня собраны до старта работы"
      },
      {
        time: "09:00",
        title: "Главный блок",
        detail: "Сложная задача стоит на пике концентрации",
        active: true
      },
      {
        time: "12:30",
        title: "Коммуникации",
        detail: "Созвоны и быстрые ответы вынесены после главной работы"
      },
      {
        time: "16:00",
        title: "Буфер",
        detail: "Остается время на доработку и спокойное закрытие дня"
      }
    ],
    bars: [42, 78, 74, 36, 58, 32],
    note:
      "Система держит темп спокойно: сложная работа стоит впереди, а перегруз не накапливается к вечеру."
  },
  {
    key: "focus",
    label: "Фокус",
    eyebrow: "Фокус-сессия",
    title: "Сессия идет без лишнего шума",
    subtitle:
      "В поле зрения только текущая задача, таймер и ближайший следующий шаг. Ничего лишнего не тянет внимание в сторону.",
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
        detail: "В работе только ключевой сценарий экрана",
        active: true
      },
      {
        time: "13:52",
        title: "Короткая пауза",
        detail: "8 минут на восстановление без выпадения из ритма"
      },
      {
        time: "14:00",
        title: "Вторая часть",
        detail: "Финализация решения и быстрая проверка"
      },
      {
        time: "15:10",
        title: "Разбор сессии",
        detail: "Фиксируем выводы и закрываем блок без хвостов"
      }
    ],
    bars: [28, 86, 90, 72, 46, 20],
    note:
      "Momentum убирает второстепенное и помогает удерживать внимание на одной рабочей линии до самого конца сессии."
  },
  {
    key: "review",
    label: "Разбор",
    eyebrow: "Итоги дня",
    title: "Вечером видно, что день реально дал",
    subtitle:
      "Система сравнивает план и факт, показывает перегрузы и помогает собрать завтрашний день точнее, чем сегодня.",
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
        detail: "Основной план закрыт без накопленных хвостов",
        active: true
      },
      {
        time: "17:35",
        title: "Короткие заметки",
        detail: "Что сработало лучше всего и что мешало темпу"
      },
      {
        time: "17:50",
        title: "Черновик на завтра",
        detail: "Утренний приоритет уже определен и не требует спешки"
      },
      {
        time: "18:00",
        title: "Закрытие цикла",
        detail: "Следующий день подготовлен еще до ухода из работы"
      }
    ],
    bars: [64, 48, 78, 88, 56, 70],
    note:
      "Видно не только сколько сделано, но и где план был слишком плотным. Поэтому завтра собирается точнее."
  }
];

const modeIcons: Record<HeroModeKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  plan: ListTodo,
  focus: Clock3,
  review: BarChart3
};

interface HeroModeTabsProps {
  activeKey: HeroModeKey;
  onChange: (key: HeroModeKey) => void;
  compact?: boolean;
}

function HeroModeTabs({ activeKey, onChange, compact = false }: HeroModeTabsProps) {
  return (
    <div
      className={cn(
        compact
          ? "grid grid-cols-3 gap-2"
          : "flex flex-wrap gap-2"
      )}
    >
      {heroModes.map((mode) => {
        const Icon = modeIcons[mode.key];
        const isActive = mode.key === activeKey;

        return (
          <button
            key={mode.key}
            type="button"
            onClick={() => onChange(mode.key)}
            className={cn(
              "relative overflow-hidden border transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              compact
                ? "min-w-0 rounded-[20px] px-3 py-3 text-left"
                : "rounded-full px-4 py-2 text-sm",
              isActive
                ? "border-accent/42 bg-accent/12 text-white"
                : "border-white/12 bg-white/[0.02] text-white/66 hover:bg-white/[0.05] hover:text-white"
            )}
          >
            {isActive ? (
              <motion.span
                layoutId={compact ? "hero-mode-pill-mobile" : "hero-mode-pill-desktop"}
                className="absolute inset-0 bg-accent/10"
                transition={{ type: "spring", stiffness: 320, damping: 28 }}
              />
            ) : null}
            <span
              className={cn(
                "relative z-10 flex items-center gap-2",
                compact && "flex-col items-start gap-1.5"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className={compact ? "text-sm font-medium" : "text-sm"}>{mode.label}</span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

interface HeroPreviewProps {
  activeMode: HeroMode;
  activeModeKey: HeroModeKey;
  setActiveModeKey: (key: HeroModeKey) => void;
}

function MobileHeroPreview({ activeMode, activeModeKey, setActiveModeKey }: HeroPreviewProps) {
  const ActiveIcon = modeIcons[activeMode.key];

  return (
    <Card className="relative mx-auto max-w-[26rem] overflow-hidden rounded-[34px] border-white/15 bg-gradient-to-b from-[#1a1218] via-[#140f14] to-[#0f0b10] p-4 shadow-premium">
      <div className="absolute inset-0 bg-grid-fade bg-[length:28px_28px] opacity-[0.14]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(214,194,198,0.18),transparent_66%)]" />

      <div className="relative space-y-4">
        <div className="rounded-[24px] border border-white/12 bg-white/[0.04] px-4 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                Собранный день
              </p>
              <p className="mt-1 font-heading text-xl text-white">Телефонный обзор без лишних экранов</p>
            </div>
            <span className="rounded-full border border-accent/26 bg-accent/10 px-3 py-1 text-[0.68rem] text-accent">
              {activeMode.label}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-white/58">
            План, фокус и разбор переключаются внутри одного спокойного интерфейса.
          </p>
        </div>

        <HeroModeTabs
          compact
          activeKey={activeModeKey}
          onChange={(key) => setActiveModeKey(key)}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeMode.key}-mobile`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <div className="overflow-hidden rounded-[30px] border border-white/12 bg-[#120d13]/82">
              <div className="border-b border-white/10 px-4 py-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/42">
                      {activeMode.eyebrow}
                    </p>
                    <h3 className="mt-2 max-w-[14rem] font-heading text-[1.85rem] leading-[0.98] text-white">
                      {activeMode.title}
                    </h3>
                  </div>
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent/36 bg-accent/12 text-accent">
                    <ActiveIcon className="h-5 w-5" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{activeMode.subtitle}</p>
              </div>

              <div className="px-4 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.64rem] uppercase tracking-[0.18em] text-white/40">
                      {activeMode.progressLabel}
                    </p>
                    <p className="mt-2 font-heading text-3xl text-white">{activeMode.progressValue}</p>
                  </div>
                  <span className="max-w-[10rem] rounded-full border border-white/12 bg-white/[0.04] px-3 py-2 text-right text-[0.68rem] leading-relaxed text-white/60">
                    {activeMode.status}
                  </span>
                </div>

                <div className="mt-4 h-2 rounded-full bg-white/10">
                  <motion.div
                    key={`${activeMode.key}-mobile-progress`}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-[#8d6370]"
                    initial={{ width: 0 }}
                    animate={{ width: activeMode.progressValue }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                  />
                </div>

                <div className="mt-4 space-y-3">
                  {activeMode.timeline.slice(0, 3).map((item, index) => (
                    <div key={`${activeMode.key}-mobile-${item.time}`} className="flex gap-3">
                      <div className="flex flex-col items-center pt-1">
                        <span
                          className={cn(
                            "inline-flex h-2.5 w-2.5 rounded-full",
                            item.active ? "bg-accent" : "bg-white/24"
                          )}
                        />
                        {index < 2 ? <span className="mt-1 h-full w-px bg-white/10" /> : null}
                      </div>
                      <div className="min-w-0 pb-3">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-sm font-medium text-white">{item.title}</p>
                          <span className="text-[0.64rem] uppercase tracking-[0.16em] text-white/38">
                            {item.time}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-white/56">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {activeMode.metrics.map((metric, index) => (
                <div
                  key={`${activeMode.key}-mobile-metric-${metric.label}`}
                  className={cn(
                    "rounded-[22px] border border-white/10 bg-black/22 p-4",
                    index === 2 && "col-span-2"
                  )}
                >
                  <p className="text-[0.64rem] uppercase tracking-[0.16em] text-white/40">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-heading text-[1.75rem] leading-none text-white">{metric.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-accent/22 bg-accent/8 p-4">
              <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">Ритм по часам</p>
              <p className="mt-2 text-sm leading-relaxed text-white/72">{activeMode.note}</p>
              <div className="mt-5 flex h-24 items-end gap-2">
                {activeMode.bars.map((bar, index) => (
                  <div key={`${activeMode.key}-mobile-bar-${chartLabels[index]}`} className="flex flex-1 items-end">
                    <motion.div
                      className="w-full rounded-t-2xl bg-gradient-to-t from-accent to-white/78"
                      initial={{ height: 0 }}
                      animate={{ height: `${bar}%` }}
                      transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
                    />
                  </div>
                ))}
              </div>
              <div className="mt-3 flex justify-between text-[0.6rem] uppercase tracking-[0.16em] text-white/38">
                {chartLabels.map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  );
}

function DesktopHeroPreview({ activeMode, activeModeKey, setActiveModeKey }: HeroPreviewProps) {
  const ActiveIcon = modeIcons[activeMode.key];

  return (
    <Card className="relative overflow-hidden rounded-[32px] border-white/15 bg-gradient-to-b from-[#1a141a] via-[#150f15] to-[#100c11] p-5 shadow-premium sm:p-6">
      <div className="absolute inset-0 bg-grid-fade bg-[length:34px_34px] opacity-[0.16]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(206,179,187,0.12),transparent_60%)]" />

      <div className="relative">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/12 bg-white/[0.03] px-4 py-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-white/44">Сегодня</p>
            <p className="mt-1 font-heading text-xl text-white">Среда, 19 марта</p>
          </div>
          <div className="rounded-full border border-accent/35 bg-accent/12 px-3 py-1 text-xs text-accent">
            Живая система дня
          </div>
        </div>

        <HeroModeTabs activeKey={activeModeKey} onChange={(key) => setActiveModeKey(key)} />

        <AnimatePresence mode="wait">
          <motion.div
            key={activeMode.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 grid gap-3 md:grid-cols-[1.04fr_0.96fr]"
          >
            <div className="rounded-[26px] border border-white/12 bg-white/[0.03] p-4 sm:p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/45">{activeMode.eyebrow}</p>
                  <h3 className="mt-2 font-heading text-2xl leading-tight text-white sm:text-[2rem]">
                    {activeMode.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/64">{activeMode.subtitle}</p>
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
                    className={cn(
                      "rounded-2xl border px-4 py-3",
                      item.active ? "border-accent/35 bg-accent/10" : "border-white/10 bg-black/16"
                    )}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">{item.title}</p>
                        <p className="mt-1 text-sm text-white/58">{item.detail}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/46">{item.time}</p>
                        <span
                          className={cn(
                            "mt-2 inline-flex h-2.5 w-2.5 rounded-full",
                            item.active ? "bg-accent" : "bg-white/26"
                          )}
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
                    <p className="mt-2 font-heading text-4xl text-white">{activeMode.progressValue}</p>
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
                    <p className="text-xs uppercase tracking-[0.16em] text-white/42">{metric.label}</p>
                    <p className="mt-2 font-heading text-2xl text-white">{metric.value}</p>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-[26px] border border-white/12 bg-white/[0.03] p-4 sm:p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-white/45">Ритм по часам</p>
                <div className="mt-5 flex h-28 items-end gap-2">
                  {activeMode.bars.map((bar, index) => (
                    <div key={`${activeMode.key}-bar-${chartLabels[index]}`} className="flex flex-1 items-end">
                      <motion.div
                        className="w-full rounded-t-2xl bg-gradient-to-t from-accent to-white/78"
                        initial={{ height: 0 }}
                        animate={{ height: `${bar}%` }}
                        transition={{ duration: 0.55, delay: index * 0.04, ease: "easeOut" }}
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
                <p className="text-xs uppercase tracking-[0.16em] text-accent">Подсказка системы</p>
                <p className="mt-2 text-sm leading-relaxed text-white/72">{activeMode.note}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Card>
  );
}

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

  const activeMode = heroModes.find((mode) => mode.key === activeModeKey) ?? heroModes[0];

  return (
    <section id="hero" className="section-space relative overflow-hidden pt-8 sm:pt-14 lg:pt-16">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <Reveal className="max-w-2xl">
          <Badge className="mb-6 border-accent/35 bg-accent/10 text-accent">
            Система управления временем
          </Badge>
          <h1 className="font-heading text-[2.6rem] font-semibold leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.55rem]">
            Планируйте день так, чтобы успевать главное{" "}
            <span className="bg-gradient-to-r from-white to-white/58 bg-clip-text text-transparent">
              без перегруза.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-white/72 sm:mt-6 sm:text-lg">
            Momentum помогает расставить приоритеты, собрать реалистичный план и сохранить фокус до конца дня.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <Button href="/pricing" size="lg" className="w-full sm:w-auto">
              Попробовать бесплатно <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/features" variant="secondary" size="lg" className="w-full sm:w-auto">
              Посмотреть возможности
            </Button>
          </div>
          <div className="mt-8 grid gap-2 text-[0.8rem] leading-relaxed text-white/62 sm:flex sm:flex-wrap sm:gap-3">
            {trustItems.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-3 py-2"
              >
                <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative lg:hidden">
            <motion.div
              className="absolute -right-4 top-8 h-32 w-32 rounded-full bg-accent/16 blur-3xl"
              animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <MobileHeroPreview
              activeMode={activeMode}
              activeModeKey={activeModeKey}
              setActiveModeKey={setActiveModeKey}
            />
          </div>

          <div className="relative hidden lg:block">
            <motion.div
              className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-accent/18 blur-3xl"
              animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.05, 1] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <DesktopHeroPreview
              activeMode={activeMode}
              activeModeKey={activeModeKey}
              setActiveModeKey={setActiveModeKey}
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
