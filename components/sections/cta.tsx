"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="section-space pt-8">
      <Container>
        <Card className="relative overflow-hidden rounded-[30px] border-white/15 bg-gradient-to-br from-[#1a1712] via-[#101822] to-[#0c1018] p-7 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(211,137,78,0.28),transparent_34%),radial-gradient(circle_at_88%_25%,rgba(90,122,184,0.22),transparent_34%)]" />
          <motion.div
            className="relative z-10 max-w-2xl"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/58">
              Final Step
            </p>
            <h2 className="mt-4 font-heading text-3xl tracking-tight text-white sm:text-5xl">
              Build a Day That Works for You.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
              Replace chaos with clarity using a premium system for planning,
              focus, and progress. Design your time, then execute with calm
              precision.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/pricing" size="lg">
                Start Designing Time <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Talk to Team
              </Button>
            </div>
          </motion.div>
        </Card>
      </Container>
    </section>
  );
}
