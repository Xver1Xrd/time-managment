"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function StatsSection() {
  return (
    <section className="section-space pt-3 sm:pt-6">
      <Container>
        <Card className="relative overflow-hidden rounded-[28px] border-white/15 bg-[#151018]/82 p-1">
          <Image
            src="/images/stats-bg.jpg"
            alt="Фоновое фото для блока метрик"
            fill
            className="object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/62 to-black/72" />

          <div className="relative grid gap-px overflow-hidden rounded-[24px] bg-white/10 sm:grid-cols-2 xl:grid-cols-5">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className={cn(
                  "bg-black/34 p-5 text-left sm:p-6",
                  (index === 0 || index === stats.length - 1) && "col-span-2 xl:col-span-1",
                  index === 0 && "bg-gradient-to-br from-accent/12 via-black/40 to-black/32"
                )}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
              >
                <p
                  className={cn(
                    "font-heading tracking-tight text-white",
                    index === 0 ? "text-4xl sm:text-[2.6rem]" : "text-3xl"
                  )}
                >
                  {item.value}
                </p>
                <p className="mt-2 max-w-[16rem] text-[0.7rem] uppercase tracking-[0.14em] text-white/56 sm:text-[0.72rem]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      </Container>
    </section>
  );
}
