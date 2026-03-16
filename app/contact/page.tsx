import { ArrowUpRight, Mail, MessageSquare, PhoneCall } from "lucide-react";
import { CtaSection } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const channels = [
  {
    title: "Email",
    value: "hello@momentum.system",
    description: "Best for product questions and account support.",
    icon: Mail,
    href: "mailto:hello@momentum.system"
  },
  {
    title: "Sales",
    value: "+1 (415) 904-1108",
    description: "Talk to our team about Elite and onboarding.",
    icon: PhoneCall,
    href: "tel:+14159041108"
  },
  {
    title: "Community",
    value: "Join Momentum Circle",
    description: "Weekly planning workshops and focus sessions.",
    icon: MessageSquare,
    href: "#"
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        title="Let's design your time system together."
        description="Reach out for onboarding, product questions, or implementation support. We reply within one business day."
      />

      <section className="section-space pt-6">
        <Container className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className="border-white/12 bg-[#0f151f]/84 p-6 sm:p-7">
            <h2 className="font-heading text-3xl text-white">Send a message</h2>
            <p className="mt-3 text-sm text-white/66">
              Tell us what you are trying to improve. We will recommend the right
              setup for your workflow.
            </p>
            <form
              action="mailto:hello@momentum.system"
              method="post"
              encType="text/plain"
              className="mt-6 space-y-4"
            >
              <label className="block text-sm text-white/74">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  className="mt-2 h-11 w-full rounded-xl border border-white/12 bg-black/30 px-3 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
                />
              </label>
              <label className="block text-sm text-white/74">
                Email
                <input
                  required
                  name="email"
                  type="email"
                  className="mt-2 h-11 w-full rounded-xl border border-white/12 bg-black/30 px-3 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
                />
              </label>
              <label className="block text-sm text-white/74">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-white/12 bg-black/30 px-3 py-2 text-white outline-none transition focus:border-accent/55 focus:ring-2 focus:ring-accent/45"
                />
              </label>
              <button
                type="submit"
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-full bg-accent px-6 text-[0.95rem] font-medium tracking-wide text-black transition-all duration-300 hover:bg-[#f0b985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-[#090909]"
              >
                <span className="relative z-10">Send via Email Client</span>
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          </Card>

          <div className="space-y-4">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <Card key={channel.title} className="border-white/12 bg-[#0f151f]/84 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="text-xs uppercase tracking-[0.18em] text-white/50">
                        {channel.title}
                      </p>
                      <p className="mt-2 font-heading text-2xl text-white">{channel.value}</p>
                      <p className="mt-2 text-sm text-white/64">{channel.description}</p>
                    </div>
                    <a
                      href={channel.href}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/74 transition hover:bg-white/[0.08] hover:text-white"
                      aria-label={channel.title}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
