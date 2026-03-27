import { Separator } from "@/components/ui/separator";
import ResponseExpectations from "./ResponseExpectations";
import CtaBanner from "@/components/ui/cta-banner";
import Contact from "./Contact";
import Hero from "./Hero";
import Faqs from "./Faqs";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CloudNode RDP support or sales for any inquiries regarding our premium Windows VPS solutions.",
  keywords: [
    "Contact CloudNode RDP",
    "CloudNode RDP Support",
    "RDP Customer Service",
    "Windows VPS Setup Help",
    "Sales Inquiry",
    "Technical Support HelpDesk",
  ],
};

export default function Index() {
  return (
    <main className="overflow-hidden relative">
      <Hero />
      <Contact />
      <Separator className="container mx-auto" />
      <ResponseExpectations />
      <Separator className="container mx-auto" />
      <Faqs />
      <CtaBanner
        header={{
          label: "Ready to get started?",
          title: "Launch your fast & secure RDP server in minutes.",
          desc: (
            <p>
              Join thousands of users who trust CloudNode RDP for blazing-fast, full
              admin access Windows servers.
            </p>
          ),
          align: "c",
          cta: [
            {
              id: "a1",
              href: "/pricing",
              label: "View Plans",
              highlight: true,
              icon: { showIcon: true },
            },
            {
              id: "a2",
              href: "/login",
              label: "Login",
            },
          ],
        }}
      />
    </main>
  );
}
