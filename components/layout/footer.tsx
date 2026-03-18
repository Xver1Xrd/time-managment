import Link from "next/link";
import { footerLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";

const socialItems = ["X", "Dribbble", "LinkedIn", "GitHub"];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#20161d] to-[#32222d] py-14">
      <Container className="grid gap-12 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <div className="max-w-sm">
          <p className="font-heading text-sm uppercase tracking-[0.22em] text-white/62">
            Momentum
          </p>
          <h3 className="mt-4 font-heading text-2xl tracking-tight text-white">
            Спокойный ритм начинается с понятной системы.
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/64">
            Momentum помогает планировать без перегруза, сохранять фокус и
            видеть реальную картину недели.
          </p>
          <p className="mt-6 text-sm text-white/60">hello@momentum.system</p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/54">Продукт</p>
          <div className="space-y-3">
            {footerLinks.product.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/54">Компания</p>
          <div className="space-y-3">
            {footerLinks.company.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/54">Соцсети</p>
          <div className="space-y-3">
            {socialItems.map((social) => (
              <Link
                key={social}
                href="#"
                className="block text-sm text-white/75 transition hover:text-white"
              >
                {social}
              </Link>
            ))}
          </div>
        </div>
      </Container>
      <Container className="mt-12 border-t border-white/10 pt-6 text-xs text-white/45">
        Copyright (c) {new Date().getFullYear()} Momentum Systems. Все права защищены.
      </Container>
    </footer>
  );
}
