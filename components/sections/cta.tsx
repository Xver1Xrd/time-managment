"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="section-space pt-8">
      <Container>
        <Card className="relative overflow-hidden rounded-[30px] border-white/15 bg-gradient-to-br from-[#2a1d1f] via-[#201620] to-[#16131a] p-7 sm:p-10">
          <Image
            src="/images/cta-bg.jpg"
            alt="Фоновое фото финального блока призыва к действию"
            fill
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/38 via-black/62 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(183,136,146,0.24),transparent_34%),radial-gradient(circle_at_88%_25%,rgba(122,77,93,0.22),transparent_34%)]" />
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/58">
              Попробуйте Momentum
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-tight text-white sm:text-5xl">
              Соберите день, в котором легко держать фокус.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Планируйте спокойнее, работайте глубже и заканчивайте день с
              ощущением порядка, а не хаоса. Momentum помогает держать ритм без
              постоянного напряжения.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/pricing" size="lg">
                Попробовать бесплатно <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Написать нам
              </Button>
            </div>
          </motion.div>
        </Card>
      </Container>
    </section>
  );
}
