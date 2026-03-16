"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Compass,
  Hourglass,
  Layers3,
  Sparkles
} from "lucide-react";
import { valueCards } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const iconMap = [Compass, Layers3, Sparkles, Hourglass];

export function FeaturesSection() {
  return (
    <section id="features" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <Badge>Core System</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Replace scattered effort with structured execution.
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
                <Card className="premium-card hover-glow flex h-full flex-col justify-between border-white/12 bg-[#0f141c]/82 p-5">
                  <div>
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
                    className="mt-7 inline-flex items-center text-sm text-white/78 transition hover:text-white"
                  >
                    Explore <ArrowUpRight className="ml-1 h-4 w-4" />
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
