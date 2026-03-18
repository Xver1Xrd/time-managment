const vercelUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.VERCEL_PROJECT_PRODUCTION_URL ||
  process.env.VERCEL_URL;

export const siteConfig = {
  name: "Momentum",
  title: "Momentum | Система управления временем",
  description:
    "Momentum помогает планировать день, сохранять фокус и видеть реальную картину недели.",
  url: vercelUrl
    ? vercelUrl.startsWith("http")
      ? vercelUrl
      : `https://${vercelUrl}`
    : "http://localhost:3000",
  email: "hello@momentum.system"
};
