"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function TestimonialsSection() {
  return (
    <section className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <Badge>Отзывы</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Нам доверяют люди, которые серьезно относятся к своему времени.
          </h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.52, delay: index * 0.08 }}
            >
              <Card className="premium-card h-full border-white/12 bg-[#101621]/84 p-6">
                <p className="text-sm leading-relaxed text-white/74">&quot;{item.quote}&quot;</p>
                <div className="mt-7 border-t border-white/10 pt-4">
                  <p className="font-heading text-lg text-white">{item.name}</p>
                  <p className="text-sm text-white/55">{item.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
