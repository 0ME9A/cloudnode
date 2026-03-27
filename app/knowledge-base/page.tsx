import { Separator } from "@/components/ui/separator";
import CtaBanner from "@/components/ui/cta-banner";
import TutorialList from "./KBCategoaryList";
import KBHero from "./KBHero";
import FAQ from "./Faq";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knowledge Base",
  description:
    "Find helpful tutorials, guides, and troubleshooting steps for managing your CloudNode RDP Windows server efficiently.",
  keywords: [
    "CloudNode RDP Knowledge Base",
    "Windows VPS Tutorials",
    "RDP Server Troubleshooting",
    "Hosting Guides",
    "Server Management Help",
  ],
};

export default function page() {
  return (
    <main className="overflow-hidden">
      <KBHero />
      <Separator className="container mx-auto" />
      <TutorialList />
      <Separator className="container mx-auto" />
      <FAQ />
      <CtaBanner
        header={{
          label: "",
          title: (
            <>
              Still need <span className="text-primary">help?</span>
            </>
          ),
          desc: "Can't find the answer you're looking for? Our support team is available 24/7 to assist you with any technical or billing inquiries.",
          cta: [
            {
              href: "/submit-ticket",
              label: "Submit a Ticket",
              highlight: true,
              icon: {
                showIcon: true,
              },
            },
            {
              href: "/contact",
              label: "Contact Us",
            },
          ],
        }}
      />
    </main>
  );
}
