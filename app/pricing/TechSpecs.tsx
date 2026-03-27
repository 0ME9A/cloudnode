import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { featureItems } from "@/data/features";
import FeatureSpecCard from "@/components/ui/feature-spec-card";

export default function TechSpecs() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-1/4 size-[600px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <Container as={"section"}>
        <SectionHeader
          label="Technical Specifications"
          title={
            <>
              Everything You Need, <br />
              <span className="text-primary drop-shadow-[0_0_20px_#20F5EB44]">
                Included Standard.
              </span>
            </>
          }
          desc="Unlike competitors that charge extra for basic features, we include premium technical specs on every single RDP plan we offer."
          align="l"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-16">
          {featureItems.map((feature, i) => (
            <FeatureSpecCard key={i} feature={feature} />
          ))}
        </div>
      </Container>
    </div>
  );
}
