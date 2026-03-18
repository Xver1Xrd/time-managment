"use client";

import { motion } from "framer-motion";
import { beforeAfterCards } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function BeforeAfterSection() {
  return (
    <section id="contrast" className="section-space pt-6">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <Badge>До / после</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Разница между днем, который случается с вами, и днем, который вы
            ведете сами.
          </h2>
        </Reveal>

        <div className="grid gap-4 xl:grid-cols-[1fr_auto_1fr] xl:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Card className="relative h-full overflow-hidden rounded-[30px] border-[#694751]/40 bg-[#1c1218]/88 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(150,82,92,0.16),transparent_40%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                  {beforeAfterCards.before.label}
                </p>
                <h3 className="mt-3 font-heading text-3xl text-white">
                  {beforeAfterCards.before.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/66">
                  {beforeAfterCards.before.description}
                </p>

                <div className="mt-6 space-y-3">
                  {beforeAfterCards.before.points.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.44, delay: index * 0.06 }}
                      className="rounded-2xl border border-white/10 bg-black/18 px-4 py-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-sm text-white/58">{item.detail}</p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.16em] text-white/42">
                          {item.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {beforeAfterCards.before.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.14em] text-white/42">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-heading text-2xl text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <div className="hidden xl:flex">
            <div className="rounded-full border border-white/12 bg-white/[0.03] px-5 py-2 text-sm text-white/62">
              Из хаоса в систему
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            <Card className="relative h-full overflow-hidden rounded-[30px] border-accent/28 bg-[#171019]/90 p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_0%,rgba(204,173,180,0.16),transparent_44%)]" />
              <div className="relative">
                <p className="text-xs uppercase tracking-[0.18em] text-accent">
                  {beforeAfterCards.after.label}
                </p>
                <h3 className="mt-3 font-heading text-3xl text-white">
                  {beforeAfterCards.after.title}
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/66">
                  {beforeAfterCards.after.description}
                </p>

                <div className="mt-6 space-y-3">
                  {beforeAfterCards.after.points.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.44, delay: index * 0.06 + 0.06 }}
                      className="rounded-2xl border border-accent/22 bg-accent/8 px-4 py-3"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-medium text-white">{item.title}</p>
                          <p className="mt-1 text-sm text-white/62">{item.detail}</p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.16em] text-accent">
                          {item.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {beforeAfterCards.after.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.14em] text-white/42">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-heading text-2xl text-white">{metric.value}</p>
                    </div>
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
