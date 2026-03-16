"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function StatsSection() {
  return (
    <section className="section-space pt-4 sm:pt-6">
      <Container>
        <Card className="relative overflow-hidden rounded-[26px] border-white/15 bg-[#0c1118]/82">
          <Image
            src="/images/stats-bg.jpg"
            alt="Фоновое фото для блока метрик"
            fill
            className="object-cover opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/64 to-black/72" />
          <div className="relative grid gap-0 divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-5">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                className="p-6 text-center sm:p-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.05 * index }}
              >
                <p className="font-heading text-3xl tracking-tight text-white">{item.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/58">
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
