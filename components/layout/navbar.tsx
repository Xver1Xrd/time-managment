"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/layout/mobile-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3">
        <Container
          className={cn(
            "flex items-center justify-between gap-3 rounded-[24px] border border-white/10 px-3.5 py-3 transition-all duration-300 sm:px-6",
            isScrolled
              ? "bg-[#161118]/92 shadow-[0_14px_44px_rgba(0,0,0,0.34)] backdrop-blur-xl"
              : "bg-[#1a1218]/68 backdrop-blur-md"
          )}
        >
          <Link href="/" className="group inline-flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-accent/85 to-[#84505e]/80 font-heading text-xs font-semibold text-black shadow-[0_8px_24px_rgba(173,126,140,0.28)]">
              M
            </span>
            <div className="min-w-0">
              <span className="block truncate font-heading text-[0.92rem] tracking-[0.18em] text-white/92 transition group-hover:text-white">
                MOMENTUM
              </span>
              <span className="hidden text-[0.64rem] uppercase tracking-[0.18em] text-white/36 sm:block">
                система спокойного дня
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/pricing"
              className="inline-flex h-10 items-center rounded-full border border-accent/28 bg-accent/10 px-3.5 text-[0.72rem] font-medium text-white/88 transition hover:border-accent/45 hover:bg-accent/16 md:hidden"
            >
              Тарифы
            </Link>

            <div className="hidden md:block">
              <Button href="/pricing" size="sm">
                Попробовать бесплатно
              </Button>
            </div>

            <button
              type="button"
              aria-label="Открыть меню"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white transition hover:bg-white/[0.08] md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
