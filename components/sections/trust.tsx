"use client";

import { motion } from "framer-motion";
import { caseStudies, trustLogos } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function TrustSection() {
  return (
    <section id="proof" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-3xl">
          <Badge>Доверие</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Систему выбирают там, где фокус действительно влияет на результат.
          </h2>
        </Reveal>

        <Card className="mb-4 overflow-hidden rounded-[28px] border-white/12 bg-[#17121b]/88 p-5 sm:p-6">
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="flex h-16 items-center justify-center rounded-2xl border border-white/10 bg-black/18 font-heading text-lg tracking-[0.18em] text-white/64"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </Card>

        <div className="grid gap-4 lg:grid-cols-2">
          {caseStudies.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="premium-card h-full overflow-hidden rounded-[28px] border-white/12 bg-[#18131d]/88 p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-accent">
                  {item.label}
                </p>
                <div className="mt-3 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-white/52">{item.company}</p>
                    <h3 className="mt-2 font-heading text-2xl leading-tight text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/68">
                  {item.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {item.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-black/18 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.14em] text-white/42">
                        {metric.label}
                      </p>
                      <p className="mt-2 font-heading text-3xl text-white">{metric.value}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
