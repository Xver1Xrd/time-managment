"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Hourglass, Layers3, Sparkles } from "lucide-react";
import { valueCards } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const iconMap = [Compass, Layers3, Sparkles, Hourglass];
const cardBackgrounds = [
  "/images/feature-clarity.jpg",
  "/images/feature-priority.jpg",
  "/images/feature-focus.jpg",
  "/images/feature-awareness.jpg"
];

export function FeaturesSection() {
  return (
    <section id="features" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <Badge>Основа системы</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Все ключевые инструменты для спокойного и собранного дня.
          </h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {valueCards.map((card, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.58, delay: index * 0.06 }}
                className="h-full"
              >
                <Card className="premium-card hover-glow group relative flex h-full flex-col justify-between overflow-hidden border-white/12 bg-[#17121a]/82 p-5">
                  <Image
                    src={cardBackgrounds[index] ?? "/images/feature-clarity.jpg"}
                    alt={`Фоновое фото для карточки ${card.title}`}
                    fill
                    className="object-cover opacity-30 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/36 via-black/62 to-black/82" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-2xl tracking-tight text-white">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/66">
                      {card.description}
                    </p>
                  </div>
                  <Link
                    href="/features"
                    className="relative mt-7 inline-flex items-center text-sm text-white/78 transition hover:text-white"
                  >
                    Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
