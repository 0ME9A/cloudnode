import { Separator } from "@/components/ui/separator";
import CtaBanner from "@/components/ui/cta-banner";
import MissionVision from "./MissionVision";
import ContactInfo from "./ContactInfo";
import Hero from "./Hero";
import WhoWeAre from "./WhoWeAre";
import OurTeam from "./OurTeam";
import FAQ from "./Faqs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about CloudNode RDP by Aazoob Technology Private Limited — India's trusted provider of high-performance Windows RDP servers with global locations, full admin access, and 24×7 expert support.",
  keywords: [
    "About CloudNode RDP",
    "Aazoob Technology Private Limited",
    "Windows RDP Provider India",
    "RDP Hosting Company",
    "Server Infrastructure Team",
  ],
};

export default function page() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <WhoWeAre />
      <Separator className="container mx-auto" />
      <MissionVision />
      <OurTeam />
      <Separator className="container mx-auto" />
      <ContactInfo />
      <Separator className="container mx-auto" />
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
