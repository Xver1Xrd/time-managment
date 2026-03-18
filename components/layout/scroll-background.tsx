"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollBackground() {
  const { scrollYProgress } = useScroll();

  const layerOneY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const layerTwoY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);
  const layerOneOpacity = useTransform(scrollYProgress, [0, 1], [0.68, 0.9]);
  const layerTwoOpacity = useTransform(scrollYProgress, [0, 1], [0.56, 0.82]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-[-16%] bg-[linear-gradient(180deg,#1b1419_0%,#261921_46%,#362530_100%)]" />
      <motion.div
        style={{ y: layerOneY, opacity: layerOneOpacity }}
        className="absolute inset-[-20%] will-change-transform bg-[radial-gradient(circle_at_20%_10%,rgba(190,138,122,0.34),transparent_42%),radial-gradient(circle_at_82%_14%,rgba(144,83,100,0.34),transparent_44%),radial-gradient(circle_at_50%_88%,rgba(112,79,97,0.26),transparent_48%)]"
      />
      <motion.div
        style={{ y: layerTwoY, opacity: layerTwoOpacity }}
        className="absolute inset-[-24%] will-change-transform bg-[radial-gradient(circle_at_54%_110%,rgba(197,156,145,0.24),transparent_44%),radial-gradient(circle_at_14%_72%,rgba(138,96,112,0.22),transparent_42%),radial-gradient(circle_at_88%_40%,rgba(112,76,93,0.18),transparent_34%)] blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02)_0%,transparent_16%,transparent_84%,rgba(255,255,255,0.015)_100%)]" />
    </div>
  );
}
