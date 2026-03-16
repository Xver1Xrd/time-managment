import { PageHero } from "@/components/sections/page-hero";
import { PricingSection } from "@/components/sections/pricing";
import { CtaSection } from "@/components/sections/cta";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";

const faq = [
  {
    q: "Can I switch plans later?",
    a: "Yes. Upgrade or downgrade any time. Changes apply instantly with prorated billing."
  },
  {
    q: "Do you offer team onboarding?",
    a: "Elite includes white-glove onboarding with planning architecture and weekly setup."
  },
  {
    q: "Is there a free trial for Pro?",
    a: "Yes. You can try Pro for 14 days with full access to focus and analytics modules."
  }
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        badge="Pricing"
        title="Choose the system that matches your ambition."
        description="Transparent pricing for individuals and teams who want clarity, consistency, and measurable progress."
      />
      <PricingSection />
      <section className="section-space pt-6">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {faq.map((item) => (
              <Card key={item.q} className="border-white/12 bg-[#0f151f]/84 p-6">
                <h3 className="font-heading text-2xl text-white">{item.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/68">{item.a}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <CtaSection />
    </>
  );
}
