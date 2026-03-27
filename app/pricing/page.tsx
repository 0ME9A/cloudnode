import type { Metadata } from "next";
import { Separator } from "@/components/ui/separator";
import CtaBanner from "@/components/ui/cta-banner";
import TechSpecs from "./TechSpecs";
import Pricing from "./Pricing";
import Hero from "./Hero";
import FAQ from "./FAQ";

export const metadata: Metadata = {
  title: "Pricing Plans",
  description:
    "Explore our high-performance Windows RDP server pricing. Flexible plans starting from ₹599/mo with full Administrator access.",
  keywords: [
    "Cheap Windows RDP",
    "RDP Server Pricing",
    "Buy Admin RDP",
    "₹599 RDP Hosting",
    "NVMe Server Plans",
    "Unlimited Bandwidth Windows VPS",
    "Premium RDP Checkout",
  ],
};

export default function page() {
  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Pricing />
      <Separator className="container mx-auto" />
      <TechSpecs />
      <Separator className="container mx-auto" />
      <FAQ />
      <CtaBanner
        header={{
          label: "Your Server. Your Control. Starting Today.",
          title: "Stop waiting — launch your RDP server in minutes.",
          desc: "Join thousands of users who trust CloudNode RDP for blazing-fast, full admin access servers. No contracts, no hassle — just instant, reliable power at your fingertips.",
          cta: [
            {
              href: "/checkout",
              label: "Get Your RDP Now",
              highlight: true,
              icon: {
                showIcon: true,
              },
            },
            {
              href: "/contact",
              label: "Talk to an Expert",
            },
          ],
          align: "l",
        }}
      />
    </main>
  );
}
