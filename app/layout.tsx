import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "@/app/globals.css";
import "@/styles/animations.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Momentum | Премиальная Система Тайм-Менеджмента",
  description:
    "Momentum — премиальная платформа продуктивности для фокуса, планирования и высокоэффективного исполнения дня.",
  keywords: [
    "тайм-менеджмент",
    "продуктивность",
    "система фокуса",
    "планирование",
    "глубокая работа"
  ]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${manrope.variable} ${spaceGrotesk.variable} bg-background text-foreground antialiased`}
      >
        <div className="noise-overlay" />
        <div className="relative z-10 flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
