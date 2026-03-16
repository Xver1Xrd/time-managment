"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export function PageHero({ badge, title, description }: PageHeroProps) {
  return (
    <section className="section-space pt-14 sm:pt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <Badge>{badge}</Badge>
          <h1 className="mt-5 font-heading text-4xl leading-tight tracking-tight text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
