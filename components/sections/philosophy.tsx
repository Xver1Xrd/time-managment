"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const principles = [
  "Хороший день начинается не с мотивации, а с понятной структуры.",
  "Когда приоритеты определены заранее, голове становится заметно легче.",
  "Спокойный ритм почти всегда дает результат лучше, чем постоянный рывок."
];

export function PhilosophySection() {
  return (
    <section id="about" className="section-space">
      <Container>
        <Card className="overflow-hidden rounded-[32px] border-white/15 bg-[#15111a]/90 p-6 sm:p-8 lg:p-10">
          <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <Reveal>
              <Badge className="border-white/20">Философия</Badge>
              <h2 className="mt-5 font-heading text-3xl leading-tight tracking-tight text-white sm:text-[3.4rem]">
                Свобода начинается с порядка.
              </h2>
              <div className="mt-7 grid gap-6 text-sm leading-relaxed text-white/68 sm:grid-cols-2">
                <p>
                  Momentum помогает относиться ко времени как к ресурсу, а не
                  как к бесконечному запасу. Вместо хаотичного списка дел у вас
                  появляется понятная система, на которую можно опереться.
                </p>
                <p>
                  День собирается заранее: важное выходит вперед, внимание
                  защищено, а прогресс видно без самообмана. Так становится
                  проще и работать, и восстанавливаться без чувства завала.
                </p>
              </div>
              <div className="mt-8 space-y-2">
                {principles.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-white/78"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="relative rounded-3xl border border-white/12 bg-gradient-to-b from-[#211724] to-[#151018] p-5">
                <div className="absolute inset-0 bg-grid-fade bg-[length:32px_32px] opacity-25" />
                <div className="relative">
                  <div className="mb-4 rounded-2xl border border-white/12 bg-black/30 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/46">
                      Ритм недели
                    </p>
                    <p className="mt-2 font-heading text-2xl text-white">
                      Качество фокуса 91%
                    </p>
                    <p className="mt-2 text-sm text-white/65">
                      Часы глубокой работы держатся стабильно уже четыре недели.
                    </p>
                  </div>
                  <div className="mb-3 overflow-hidden rounded-2xl border border-white/12">
                    <Image
                      src="/images/philosophy-team.jpg"
                      alt="Команда синхронизирует приоритеты и фокусный процесс"
                      width={1600}
                      height={900}
                      className="h-36 w-full object-cover sm:h-40"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/12 bg-black/28 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                        Баланс нагрузки
                      </p>
                      <p className="mt-2 font-heading text-3xl text-white">1:4</p>
                    </div>
                    <div className="rounded-2xl border border-white/12 bg-black/28 p-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                        Точность приоритетов
                      </p>
                      <p className="mt-2 font-heading text-3xl text-white">88%</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded-2xl border border-white/12 bg-black/28 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-white/45">
                      План недели
                    </p>
                    <div className="mt-3 grid grid-cols-7 gap-2">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <div
                          key={i}
                          className="h-9 rounded-md border border-white/10 bg-white/[0.04]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Card>
      </Container>
    </section>
  );
}
