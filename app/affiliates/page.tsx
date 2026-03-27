import { Separator } from "@/components/ui/separator";
import CtaBanner from "@/components/ui/cta-banner";
import ProgramBenefits from "./ProgramBenefits";
import AffiliatesHero from "./AffiliatesHero";
import HowItWorks from "./HowItWorks";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Program",
  description:
    "Join the CloudNode RDP Affiliate Program and earn recurring commissions for every customer you refer to our premium Windows VPS hosting.",
  keywords: [
    "CloudNode RDP Affiliates",
    "Hosting Affiliate Program",
    "Earn With RDP",
    "Recurring Commission Program",
    "Windows Server Reseller",
  ],
};

export default function page() {
  return (
    <main>
      <AffiliatesHero />
      <Separator className="container mx-auto" />
      <HowItWorks />
      <Separator className="container mx-auto" />
      <ProgramBenefits />

      <CtaBanner
        header={{
          label: "Ready to start earning?",
          title: "Join the CloudNode RDP Affiliate Program Today",
          desc: "Sign up now, grab your affiliate link, and start generating a passive income stream by promoting India's trusted RDP provider!",
          align: "l",
          cta: [
            {
              label: "Join the Program",
              href: "/register",
              highlight: true,
              icon: {
                showIcon: true,
              },
            },
            {
              label: "Affiliate Login",
              href: "/login",
            },
          ],
        }}
      />
    </main>
  );
}
