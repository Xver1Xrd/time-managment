"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { pricingComparison, pricingPlans } from "@/lib/data";
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

type BillingMode = "monthly" | "yearly";

export function PricingSection() {
  const [billing, setBilling] = useState<BillingMode>("monthly");

  return (
    <section id="pricing" className="section-space">
      <Container>
        <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Badge>Тарифы</Badge>
            <h2 className="mt-5 font-heading text-3xl tracking-tight text-white sm:text-5xl">
              Тарифы без лишней сложности.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/66">
              Можно стартовать бесплатно, перейти на полный рабочий ритм или
              подключить команду к единой системе планирования.
            </p>
          </Reveal>

          <div className="rounded-full border border-white/12 bg-white/[0.03] p-1">
            <div className="flex items-center gap-1">
              {[
                { key: "monthly", label: "Месяц" },
                { key: "yearly", label: "Год" }
              ].map((option) => {
                const isActive = billing === option.key;

                return (
                  <button
                    key={option.key}
                    type="button"
                    onClick={() => setBilling(option.key as BillingMode)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm transition",
                      isActive
                        ? "bg-accent text-black"
                        : "text-white/62 hover:text-white"
                    )}
                  >
                    {option.label}
                  </button>
                );
              })}
              <span className="px-2 text-xs text-white/46">в год выгоднее</span>
            </div>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {pricingPlans.map((plan, index) => {
            const displayPrice = billing === "monthly" ? plan.monthly : plan.yearly;
            const note =
              billing === "monthly"
                ? "оплата помесячно"
                : plan.yearlyNote;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={plan.highlight ? "lg:-translate-y-4" : ""}
              >
                <Card
                  className={cn(
                    "group relative flex h-full flex-col overflow-hidden rounded-[30px] border-white/12 bg-[#17121b]/86 p-6",
                    plan.highlight &&
                      "border-accent/45 bg-gradient-to-b from-[#251926] to-[#17111a] shadow-[0_24px_70px_rgba(143,97,112,0.22)]"
                  )}
                >
                  <Image
                    src={planBackgrounds[index] ?? "/images/pricing-starter.jpg"}
                    alt={`Фоновое фото для тарифа ${plan.name}`}
                    fill
                    className={cn(
                      "object-cover transition duration-700 group-hover:scale-105",
                      plan.highlight ? "opacity-30" : "opacity-22"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/64 to-black/86" />
                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        {plan.highlight && (
                          <span className="mb-5 inline-flex w-fit rounded-full border border-accent/45 bg-accent/16 px-3 py-1 text-xs uppercase tracking-[0.16em] text-accent">
                            Лучший баланс
                          </span>
                        )}
                        <h3 className="font-heading text-2xl text-white">{plan.name}</h3>
                        <p className="mt-2 text-sm text-white/65">{plan.description}</p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-end gap-2">
                      <span className="font-heading text-5xl leading-none text-white">
                        {displayPrice}
                      </span>
                      <span className="mb-1 text-sm text-white/60">/месяц</span>
                    </div>
                    <p className="mt-2 text-sm text-white/52">{note}</p>
                    {billing === "yearly" && plan.savings ? (
                      <p className="mt-2 text-sm text-accent">{plan.savings}</p>
                    ) : null}

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
                        href={plan.name === "Команда" ? "/contact" : "/pricing"}
                        variant={plan.highlight ? "primary" : "secondary"}
                        fullWidth
                      >
                        {plan.cta}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <Card className="mt-6 overflow-hidden rounded-[30px] border-white/12 bg-[#17121b]/86 p-4 sm:p-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-white/44">
                Сравнение планов
              </p>
              <h3 className="mt-2 font-heading text-2xl text-white">
                Что входит в каждый тариф
              </h3>
            </div>
            <div className="rounded-full border border-white/12 bg-black/18 px-3 py-1 text-xs text-white/56">
              {billing === "monthly" ? "помесячная оплата" : "годовая оплата"}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr className="text-left">
                  <th className="px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/40">
                    Возможность
                  </th>
                  {pricingPlans.map((plan) => (
                    <th
                      key={plan.name}
                      className={cn(
                        "px-3 py-2 text-xs uppercase tracking-[0.16em] text-white/40",
                        plan.highlight && "text-accent"
                      )}
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row) => (
                  <tr key={row.feature}>
                    <td className="rounded-l-2xl border border-white/10 bg-black/18 px-3 py-3 text-sm text-white/74">
                      {row.feature}
                    </td>
                    {row.values.map((value, index) => (
                      <td
                        key={`${row.feature}-${index}`}
                        className={cn(
                          "border border-white/10 bg-black/18 px-3 py-3 text-sm text-white/66",
                          index === row.values.length - 1 && "rounded-r-2xl"
                        )}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </Container>
    </section>
  );
}
