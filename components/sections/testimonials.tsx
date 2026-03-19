"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <Card className="premium-card h-full border-white/12 bg-[#18131d]/84 p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/24 bg-accent/10 font-heading text-sm text-accent">
          {item.avatar}
        </div>
        <div>
          <p className="font-heading text-lg text-white">{item.name}</p>
          <p className="text-sm text-white/55">
            {item.role}, {item.company}
          </p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/74">&quot;{item.quote}&quot;</p>
      <div className="mt-7 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.16em] text-white/42">
        Проверено на реальном рабочем ритме
      </div>
    </Card>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <Badge>Отзывы</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Momentum выбирают люди, которым важны ясность, темп и спокойствие.
          </h2>
        </Reveal>

        <div className="lg:hidden">
          <div className="mb-4 flex items-center justify-between gap-3 px-1">
            <p className="text-sm text-white/58">Живые отзывы от людей с плотным графиком.</p>
            <span className="text-[0.68rem] uppercase tracking-[0.18em] text-white/34">листайте</span>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 no-scrollbar">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="min-w-[85%] snap-center"
              >
                <TestimonialCard item={item} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="hidden gap-4 lg:grid lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
