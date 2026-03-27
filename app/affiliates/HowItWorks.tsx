import { IconFeatureCardMini } from "@/components/ui/icon-feature-card";
import { HandCoins, LinkIcon, Users } from "lucide-react";
import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";

const steps = [
  {
    id: "s1",
    icon: LinkIcon,
    title: "1. Sign Up & Get Your Link",
    desc: "Create an affiliate account in seconds. You'll instantly receive a unique tracking link and access to banners and promotional materials.",
  },
  {
    id: "s2",
    icon: Users,
    title: "2. Refer Customers",
    desc: "Share your tracking link on your website, blog, social media, or YouTube channel and drive targeted traffic to CloudNode RDP.",
  },
  {
    id: "s3",
    icon: HandCoins,
    title: "3. Earn Commissions",
    desc: "For every successful purchase made through your link, you earn a recurring commission. We handle the billing and customer support.",
  },
];

export default function HowItWorks() {
  return (
    <Container>
      <SectionHeader
        label=""
        title={
          <>
            How it <span className="text-primary">Works</span>
          </>
        }
        desc="Becoming an affiliate is completely free and requires no technical knowledge. It’s as easy as 1, 2, 3."
        align="l"
      />

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <IconFeatureCardMini key={step.id} feature={step}>
            <div className="absolute top-0 right-0 p-8 text-9xl font-black text-primary/5 -z-10 group-hover:scale-110 transition-transform duration-500">
              {index + 1}
            </div>
          </IconFeatureCardMini>
        ))}
      </div>
    </Container>
  );
}
