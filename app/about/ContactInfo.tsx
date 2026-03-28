import { IconFeatureCardMini } from "@/components/ui/icon-feature-card";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { companyInfo } from "@/data/siteData";

const CONTACT_ITEMS = [
  {
    id: "phone",
    icon: Phone,
    label: "Call Us",
    value: companyInfo.phone.primary.number,
    href: `tel:+91${companyInfo.phone.primary.number}`,
  },
  {
    id: "mail",
    icon: Mail,
    label: "Email",
    value: companyInfo.email.primary,
    href: `mailto:${companyInfo.email.primary}`,
  },
  {
    id: "company",
    icon: Building2,
    label: "Company",
    value: companyInfo.fullName,
    href: null,
  },
  {
    id: "icon",
    icon: MapPin,
    label: "Address",
    value: companyInfo.address.headOffice.fullAddress,
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <Container as="section" className="relative">
      <div className="relative z-10 space-y-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Header + CTA */}
          <div className="space-y-6">
            <SectionHeader
              animate
              label="Get In Touch"
              title={
                <>
                  We&apos;re Here to{" "}
                  <span className="text-primary drop-shadow-[0_0_20px_#3466FF66]">
                    Help You
                  </span>
                </>
              }
              desc="Have questions? Our team is available 24×7 to assist you. Reach out through any of the channels below and we'll get back to you quickly."
              align="l"
              cta={[
                {
                  href: "/contact",
                  label: "Contact Page",
                  highlight: true,
                  icon: {
                    showIcon: true,
                  },
                },
              ]}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {CONTACT_ITEMS.map((contact) => (
              <IconFeatureCardMini
                key={contact.id}
                feature={{
                  title: contact.label,
                  desc: contact.value,
                  action: contact.href
                    ? {
                        href: contact.href,
                        label: contact.label,
                      }
                    : undefined,
                  icon: contact.icon,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
