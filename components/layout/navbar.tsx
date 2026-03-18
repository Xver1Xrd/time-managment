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
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "";
  }, [menuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 px-3 pt-3">
        <Container
          className={cn(
            "flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 transition-all duration-300 sm:px-6",
            isScrolled
              ? "bg-[#161118]/90 shadow-[0_10px_40px_rgba(0,0,0,0.34)] backdrop-blur-xl"
              : "bg-[#1a1218]/60 backdrop-blur-md"
          )}
        >
          <Link href="/" className="group inline-flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-accent/85 to-[#84505e]/80 font-heading text-xs font-semibold text-black">
              M
            </span>
            <span className="font-heading text-base tracking-[0.16em] text-white/90 transition group-hover:text-white">
              MOMENTUM
            </span>
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

          <div className="hidden md:block">
            <Button href="/pricing" size="sm">
              Попробовать бесплатно
            </Button>
          </div>

          <button
            type="button"
            aria-label="Открыть меню"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={18} />
          </button>
        </Container>
      </header>
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  );
}
