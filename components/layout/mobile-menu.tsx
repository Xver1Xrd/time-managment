"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: Array<{ label: string; href: string }>;
}

export function MobileMenu({ open, onClose, links }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close mobile menu overlay"
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-3 top-3 z-50 rounded-2xl border border-white/15 bg-[#0d1015]/96 p-5 shadow-2xl"
            initial={{ opacity: 0, y: -24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-white/70">
                Menu
              </span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/80 transition hover:bg-white/[0.08]"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block rounded-xl border border-transparent px-3 py-3 text-base text-white/85 transition hover:border-white/15 hover:bg-white/[0.05]"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-7">
              <Button href="/pricing" fullWidth size="lg" onClick={onClose}>
                Build Your Day
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
