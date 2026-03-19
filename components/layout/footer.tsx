import Link from "next/link";
import { footerLinks } from "@/lib/data";
import { Container } from "@/components/ui/container";

const socialItems = [
  { label: "GitHub", href: "https://github.com/Xver1Xrd/time-managment" }
];

const projectGithubUrl = "https://github.com/Xver1Xrd/time-managment";

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
            Momentum помогает планировать без перегруза, сохранять фокус и видеть
            реальную картину недели.
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
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="block text-sm text-white/75 transition hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
        <p>made by xverlxrd</p>
        <a
          href={projectGithubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-white/60 transition hover:text-white"
        >
          github.com/Xver1Xrd/time-managment
        </a>
      </Container>
    </footer>
  );
}
