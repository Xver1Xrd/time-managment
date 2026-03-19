"use client";

import { motion } from "framer-motion";
import { audienceScenarios } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function UseCasesSection() {
  return (
    <section id="scenarios" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <Badge>Сценарии</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Momentum подстраивается под ваш рабочий ритм, а не наоборот.
          </h2>
        </Reveal>

        <div className="lg:hidden">
          <div className="mb-4 flex items-center justify-between gap-3 px-1">
            <p className="text-sm text-white/58">Подберите сценарий под свой тип работы.</p>
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-white/34">
              листайте
            </span>
          </div>

          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
            {audienceScenarios.map((scenario, index) => (
              <motion.article
                key={scenario.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="min-w-[85%] snap-center"
              >
                <Card className="relative h-full overflow-hidden rounded-[30px] border-white/12 bg-[#17121a]/88 p-5">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_0%,rgba(195,170,177,0.12),transparent_36%)]" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.18em] text-white/42">Сценарий</p>
                        <h3 className="mt-2 font-heading text-[2rem] leading-[0.98] text-white">
                          {scenario.title}
                        </h3>
                      </div>
                      <div className="rounded-full border border-accent/26 bg-accent/10 px-3 py-1 text-[0.68rem] text-accent">
                        {scenario.metric.value}
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-white/68">{scenario.summary}</p>

                    <div className="mt-5 space-y-3">
                      <div className="rounded-[22px] border border-white/10 bg-black/18 p-4">
                        <p className="text-[0.64rem] uppercase tracking-[0.16em] text-white/40">Где болит</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/68">{scenario.pain}</p>
                      </div>
                      <div className="rounded-[22px] border border-accent/18 bg-accent/8 p-4">
                        <p className="text-[0.64rem] uppercase tracking-[0.16em] text-accent">Что меняется</p>
                        <p className="mt-2 text-sm leading-relaxed text-white/72">{scenario.outcome}</p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {scenario.pattern.map((item) => (
                        <span
                          key={`${scenario.title}-${item}`}
                          className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-xs text-white/68"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-[0.68rem] uppercase tracking-[0.18em] text-white/38">
                      {scenario.metric.label}
                    </p>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-2">
          {audienceScenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
            >
              <Card className="premium-card relative overflow-hidden rounded-[28px] border-white/12 bg-[#17121a]/86 p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_0%,rgba(195,170,177,0.1),transparent_36%)]" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-white/44">Сценарий</p>
                      <h3 className="mt-2 font-heading text-3xl text-white">{scenario.title}</h3>
                    </div>
                    <div className="rounded-full border border-accent/26 bg-accent/10 px-3 py-1 text-xs text-accent">
                      {scenario.metric.value}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/68">{scenario.summary}</p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-[1.12fr_0.88fr]">
                    <div className="rounded-2xl border border-white/10 bg-black/18 p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-white/44">Где болит</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/68">{scenario.pain}</p>

                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/44">Что меняется</p>
                      <p className="mt-2 text-sm leading-relaxed text-white/72">{scenario.outcome}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.14em] text-white/44">Ритм дня</p>
                      <div className="mt-4 space-y-2">
                        {scenario.pattern.map((item, itemIndex) => (
                          <motion.div
                            key={`${scenario.title}-${item}`}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, delay: itemIndex * 0.05 }}
                            className="rounded-xl border border-white/10 bg-black/18 px-3 py-2 text-sm text-white/74"
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.14em] text-white/42">
                        {scenario.metric.label}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
