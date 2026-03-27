import { Separator } from "@/components/ui/separator";
import CtaBanner from "@/components/ui/cta-banner";
import CtaBannerX from "./home/CtaBanner";
import Locations from "./home/Locations";
import Features from "./home/Features";
import Pricing from "./home/Pricing";
import Hero from "./home/Hero";
import FAQ from "./home/FAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Windows RDP Servers — CloudNode RDP",
  description:
    "Experience blazing-fast, NVMe-powered Windows VPS with full Administrator access, unmetered bandwidth, and instant deployment. Starting at just ₹599.",
  keywords: [
    "Buy RDP India",
    "Cheap Admin RDP",
    "NVMe Windows VPS",
    "CloudNode RDP Official",
    "High Performance Remote Desktop",
  ],
};

export default function Home() {
  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Features />
      <Separator className="container mx-auto" />
      <Locations />
      <Separator className="container mx-auto" />
      <Pricing />
      <CtaBannerX />
      <FAQ />
      <CtaBanner
        header={{
          label: "Your Server. Your Control. Starting Today.",
          title: "Stop waiting — launch your RDP server in minutes.",
          desc: "Join thousands of users who trust CloudNode RDP for blazing-fast, full admin access servers. No contracts, no hassle — just instant, reliable power at your fingertips.",
          cta: [
            {
              href: "/pricing",
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
