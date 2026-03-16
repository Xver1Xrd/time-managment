"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
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

export function ShowcaseSection() {
  const [activeKey, setActiveKey] = useState(showcaseTabs[0]?.key ?? "plan");
  const activeTab = useMemo(
    () => showcaseTabs.find((tab) => tab.key === activeKey) ?? showcaseTabs[0],
    [activeKey]
  );
  const ActiveIcon = iconMap[activeTab.key as keyof typeof iconMap] ?? Layers;

  return (
    <section id="showcase" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <Badge>Демо Продукта</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Единая интеллектуальная система для планирования, фокуса и
            непрерывного роста.
          </h2>
        </Reveal>

        <Card className="rounded-[30px] border-white/15 bg-[#0c1118]/88 p-5 sm:p-7">
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

          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-2xl border border-white/12 bg-[#101723] p-6"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] text-accent">
                  <ActiveIcon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-3xl leading-tight text-white">
                  {activeTab.headline}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/68">
                  {activeTab.description}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {activeTab.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-white/12 bg-black/24 p-3"
                    >
                      <p className="text-xs uppercase tracking-[0.15em] text-white/45">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-heading text-2xl text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
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
                className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-b from-[#131b29] to-[#0c1119] p-6"
              >
                <div className="absolute inset-0 bg-grid-fade bg-[length:30px_30px] opacity-20" />
                <div className="relative">
                  <div className="mb-4 overflow-hidden rounded-xl border border-white/12">
                    <Image
                      src="/images/showcase-desk.jpg"
                      alt="Рабочий стол, настроенный для deep work"
                      width={1600}
                      height={900}
                      className="h-28 w-full object-cover"
                    />
                  </div>
                  <div className="mb-4 flex items-center justify-between rounded-xl border border-white/12 bg-white/[0.03] px-4 py-3">
                    <p className="text-sm text-white/76">Ритм Сегодняшнего Дня</p>
                    <p className="text-xs uppercase tracking-[0.15em] text-white/46">
                      Онлайн
                    </p>
                  </div>

                  <div className="space-y-3">
                    {activeTab.timeline.map((item, idx) => (
                      <motion.div
                        key={`${item.time}-${item.title}`}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.08 + 0.06 }}
                        className="flex items-center justify-between rounded-xl border border-white/12 bg-black/25 px-4 py-3"
                      >
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.13em] text-white/48">
                            {item.time}
                          </p>
                        </div>
                        <span
                          className={cn(
                            "h-2.5 w-2.5 rounded-full",
                            item.tone === "accent" ? "bg-accent" : "bg-white/45"
                          )}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl border border-white/12 bg-black/25 p-3">
                    <p className="text-xs uppercase tracking-[0.15em] text-white/46">
                      Целостность Сессий
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-[#88a9df]"
                        initial={{ width: 0 }}
                        animate={{ width: "84%" }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                    <p className="mt-2 text-right text-xs text-white/55">84%</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </Card>
      </Container>
    </section>
  );
}
