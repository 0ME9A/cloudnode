import { CheckCircle2, PieChart, TrendingUp } from "lucide-react";
import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import IconFeatureCard from "@/components/ui/icon-feature-card";

const features = [
  {
    id: "f1",
    icon: TrendingUp,
    title: "Recurring Commissions",
    desc: "Earn up to 15% recurring commission for the lifetime of the referred customer. As long as they stay, you get paid.",
  },
  {
    id: "f2",
    icon: PieChart,
    title: "Real-Time Tracking",
    desc: "Access a detailed dashboard to monitor your clicks, sign-ups, and sales in real-time.",
  },
  {
    id: "f3",
    icon: CheckCircle2,
    title: "90-Day Cookie Duration",
    desc: "Our generous 90-day cookie ensures you get credited for the sale even if the customer takes their time to decide.",
  },
];

export default function ProgramBenefits() {
  return (
    <Container>
      <SectionHeader
        label="Program Benefits"
        title={
          <>
            Why Partner With <span className="text-primary">Us</span>
          </>
        }
        desc={
          "We provide our affiliates with the best tools and support to maximize conversion rates and earnings."
        }
      />

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((feature) => (
          <IconFeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </Container>
  );
}
