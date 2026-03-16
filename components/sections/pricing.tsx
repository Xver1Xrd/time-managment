"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { pricingPlans } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const planBackgrounds = [
  "/images/pricing-starter.jpg",
  "/images/pricing-pro.jpg",
  "/images/pricing-elite.jpg"
];

export function PricingSection() {
  return (
    <section id="pricing" className="section-space">
      <Container>
        <Reveal className="mb-10 max-w-2xl">
          <Badge>Тарифы</Badge>
          <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
            Тарифы для каждого уровня осознанного исполнения.
          </h2>
        </Reveal>
        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card
                className={cn(
                  "group relative flex h-full flex-col overflow-hidden border-white/12 bg-[#0f151f]/86 p-6",
                  plan.highlight &&
                    "relative border-accent/45 bg-gradient-to-b from-[#141d2b] to-[#101723]"
                )}
              >
                <Image
                  src={planBackgrounds[index] ?? "/images/pricing-starter.jpg"}
                  alt={`Фоновое фото для тарифа ${plan.name}`}
                  fill
                  className={cn(
                    "object-cover transition duration-700 group-hover:scale-105",
                    plan.highlight ? "opacity-30" : "opacity-24"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/64 to-black/86" />
                <div className="relative">
                  {plan.highlight && (
                    <span className="mb-5 inline-flex w-fit rounded-full border border-accent/45 bg-accent/16 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent">
                      Самый Популярный
                    </span>
                  )}
                  <h3 className="font-heading text-2xl text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-white/65">{plan.description}</p>
                  <div className="mt-5 flex items-end gap-1">
                    <span className="font-heading text-5xl leading-none text-white">
                      {plan.price}
                    </span>
                    <span className="mb-1 text-sm text-white/60">{plan.period}</span>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-white/75"
                      >
                        <Check className="mt-0.5 h-4 w-4 text-accent" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      href={plan.name === "Элит" ? "/contact" : "/pricing"}
                      variant={plan.highlight ? "primary" : "secondary"}
                      fullWidth
                    >
                      {plan.cta}
                    </Button>
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
