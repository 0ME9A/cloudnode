import { Container } from "@/components/ui/container";
import { rdpPlans } from "@/data/plans";
import PricingCard from "@/components/ui/pricing-card";

export default function Pricing() {
  return (
    <Container as={"section"}>
      <div className="relative z-10 w-full mt-[-60px]">
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {rdpPlans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </Container>
  );
}
