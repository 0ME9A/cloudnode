import { Container, ContainerWrapper } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/header";
import { padZero } from "@/lib/utils";

export default function ResponseExpectations() {
  const points = [
    {
      title: "Technical Support",
      desc: "For existing clients. Open a ticket via the HelpDesk for the fastest resolution. Typical response: 15–30 minutes.",
    },
    {
      title: "Sales & General",
      desc: "Available during business hours (10 AM - 6 PM IST) via Phone, WhatsApp, or Email. Typical response: 1–2 hours.",
    },
    {
      title: "Billing & Accounts",
      desc: "Account-related queries are verified securely through the Client Area portal. Typical response: 2–4 hours.",
    },
  ];

  return (
    <ContainerWrapper>
      <Container
        as="section"
        className="grid lg:grid-cols-2 gap-4 items-center"
      >
        <SectionHeader
          title={"Support SLAs & Response Times"}
          desc={
            <p>
              We route inquiries to specialized teams to ensure you receive the
              fastest, most accurate help possible. Existing clients should
              always use the ticket system.
            </p>
          }
          align="l"
          className="lg:py-16 xl:py-24 max-w-none"
        />
        <div className="pt-6 space-y-6 lg:pl-16">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex gap-6 pb-6 border-b border-border/50 last:border-none"
            >
              <span className="text-primary font-bold">
                {padZero(index + 1)}
              </span>
              <div>
                <h4 className="font-semibold text-lg mb-1">{point.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </ContainerWrapper>
  );
}
