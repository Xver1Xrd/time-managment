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
      {open ? (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <motion.button
            type="button"
            aria-label="Закрыть подложку мобильного меню"
            className="fixed inset-0 bg-black/76 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <div className="relative flex min-h-full items-start justify-center p-3">
            <motion.div
              className="relative w-full max-w-sm overflow-hidden rounded-[30px] border border-white/15 bg-[#161018]/95 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.42)]"
              initial={{ opacity: 0, y: -24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute inset-0 bg-grid-fade bg-[length:30px_30px] opacity-[0.12]" />
              <div className="absolute inset-x-0 top-0 h-28 bg-[radial-gradient(circle_at_top,rgba(214,194,198,0.18),transparent_68%)]" />

              <div className="relative">
                <div className="mb-6 flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[0.68rem] uppercase tracking-[0.2em] text-white/44">
                      Momentum
                    </p>
                    <p className="mt-1 font-heading text-xl text-white">Навигация по сайту</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Закрыть меню"
                    onClick={onClose}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/82 transition hover:bg-white/[0.08]"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="mb-6 rounded-[24px] border border-accent/24 bg-accent/10 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                    В одном ритме
                  </p>
                  <p className="mt-2 font-heading text-2xl leading-tight text-white">
                    Откройте нужный раздел без лишнего поиска.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/64">
                    О сервисе, демо, тарифы и контакты собраны в одном месте. Все важное открывается за пару касаний.
                  </p>
                </div>

                <nav className="space-y-2">
                  {links.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 + index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between rounded-[22px] border border-white/10 bg-white/[0.03] px-4 py-3.5 transition hover:border-white/18 hover:bg-white/[0.06]"
                        onClick={onClose}
                      >
                        <div>
                          <span className="text-[0.62rem] uppercase tracking-[0.18em] text-white/34">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="mt-1 block font-heading text-xl text-white/88 transition group-hover:text-white">
                            {link.label}
                          </span>
                        </div>
                        <span className="text-xs uppercase tracking-[0.16em] text-white/42">
                          Открыть
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {[
                    { value: "120K+", label: "планов в неделю" },
                    { value: "89%", label: "лучше фокус" }
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[22px] border border-white/10 bg-black/22 p-4"
                    >
                      <p className="font-heading text-2xl text-white">{item.value}</p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/42">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-3">
                  <Button href="/pricing" fullWidth size="lg" onClick={onClose}>
                    Попробовать бесплатно
                  </Button>
                  <Button
                    href="/contact"
                    variant="secondary"
                    fullWidth
                    size="lg"
                    onClick={onClose}
                  >
                    Связаться с командой
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
