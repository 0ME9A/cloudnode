import { PageHeaderV2 } from "@/components/ui/header";
import { FAQ_DATA } from "@/data/faqs";
import FaqSection from "@/components/FaqSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to our most commonly asked questions about CloudNode RDP's services, billing, features, and technical support.",
  keywords: [
    "CloudNode RDP FAQ",
    "RDP Hosting Questions",
    "Windows VPS Billing",
    "Admin Access Help",
    "RDP Troubleshooting",
    "Server Upgrade Knowledge Base",
  ],
};

export default function page() {
  return (
    <main>
      <PageHeaderV2
        label="Got Questions?"
        title="Frequently Asked Questions"
        desc="Browse through our comprehensive FAQ base or filter by category to find exactly what you're looking for."
        align="c"
      />
      <div className="max-w-4xl mx-auto">
        <FaqSection
          data={FAQ_DATA}
          showFilter={true}
        />
      </div>
    </main>
  );
}
