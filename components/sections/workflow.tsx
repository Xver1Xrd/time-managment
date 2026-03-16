"use client";

import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function WorkflowSection() {
  return (
    <section id="workflow" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <Badge>Процесс</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Фокус строится через повторяемую последовательность.
          </h2>
        </Reveal>

        <div className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/18 to-transparent xl:block" />
          {workflowSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="premium-card relative rounded-2xl border border-white/12 bg-[#0f141d]/82 p-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/15 font-heading text-sm text-accent">
                {index + 1}
              </span>
              <h3 className="font-heading text-2xl text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/64">
                {step.description}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
