import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/header";

export default function AffiliatesHero() {
  return (
    <Container className="relative pb-0!">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      
      <PageHeader
        label="Affiliate Program"
        title={
          <>
            Earn Money with the{" "}
            <span className="text-primary">CloudNode RDP Affiliate Program</span>
          </>
        }
        desc="Join our high-paying affiliate program today. Refer clients to our premium RDP services and earn recurring lifetime commissions on every sale."
        align="c"
        cta={[
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
        ]}
      />
    </Container>
  );
}
