import { ContactCard, Section, Toc } from "@/components/ui/legal";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/ui/header";

const tocData = [
  { id: "introduction", label: "Introduction" },
  { id: "uptime-guarantee", label: "Network & Uptime Guarantee" },
  { id: "sla-credits", label: "SLA Credits & Compensation" },
  { id: "exceptions", label: "Exceptions & Limitations" },
  { id: "hardware-replacement", label: "Hardware Replacement" },
  { id: "claiming", label: "Claiming SLA Credits" },
  { id: "contact", label: "Contact Us" },
];
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Level Agreement",
  description:
    "Our commitment to maintaining high uptime, performance, and hardware reliability.",
  keywords: [
    "CloudNode RDP SLA",
    "Service Level Agreement",
    "99.9% Uptime Guarantee",
    "Server Uptime",
    "Hardware Replacement SLA",
  ],
};

export default function page() {
  return (
    <main>
      <Container className="pb-0!">
        <PageHeader
          title="Service Level Agreement"
          desc="Our commitment to maintaining high uptime, performance, and hardware reliability."
          align="l"
          className="px-0!"
        >
          <p className="text-sm font-medium text-foreground opacity-60">
            Last Updated: March 6, 2026
          </p>
        </PageHeader>
      </Container>
      <Separator className="container mx-auto" />
      <Container className="pb-32">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          <div className="flex-1 w-full space-y-12 leading-relaxed [&_p]:opacity-80 [&_ul]:ml-4">
            <Section id="introduction" title="Introduction">
              <p>
                This Service Level Agreement ("SLA") applies to all CloudNode RDP
                clients and establishes our commitment to providing a
                continuous, reliable network and hardware environment. CloudNode RDP
                focuses on offering premium performance with maximal
                availability.
              </p>
              <br />
              <p>
                This SLA forms part of the Terms of Service and covers
                parameters regarding network connectivity, hardware replacement,
                and compensation in the rare event of service interruptions.
              </p>
            </Section>

            <Section id="uptime-guarantee" title="Network & Uptime Guarantee">
              <p>
                CloudNode RDP guarantees that our data center network will be
                available 99.9% of the time in any given monthly billing period,
                excluding scheduled maintenance.
              </p>
              <br />
              <p>
                "Network Uptime" refers to the availability of the core routing
                and switching infrastructure. The network is considered
                unavailable if there is a 100% packet loss from CloudNode RDP's
                upstream providers to our core routers.
              </p>
            </Section>

            <Section id="sla-credits" title="SLA Credits & Compensation">
              <p>
                If we fail to meet our 99.9% uptime guarantee, customers may be
                eligible to request SLAs credits. Compensation is calculated
                based on the length of the downtime during a single billing
                month:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  <strong>99.9% to 100%:</strong> No Credit
                </li>
                <li>
                  <strong>99.0% to 99.8%:</strong> 5% Credit of the monthly
                  service fee
                </li>
                <li>
                  <strong>98.0% to 98.9%:</strong> 10% Credit of the monthly
                  service fee
                </li>
                <li>
                  <strong>95.0% to 97.9%:</strong> 25% Credit of the monthly
                  service fee
                </li>
                <li>
                  <strong>Less than 95.0%:</strong> 50% Credit of the monthly
                  service fee
                </li>
              </ul>
              <br />
              <p>
                SLA credits are applied to the customer’s CloudNode RDP account
                balance and cannot be refunded to the original payment method.
                The maximum credit issued in any single month shall not exceed
                50% of the monthly recurring charge for the affected service.
              </p>
            </Section>

            <Section id="exceptions" title="Exceptions & Limitations">
              <p>
                Downtime is not eligible for SLA credits if it is caused by one
                of the following exceptions:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  Scheduled maintenance, hardware upgrades, or network repairs.
                </li>
                <li>
                  Customer-induced errors, misconfigurations, or custom software
                  resulting in downtime.
                </li>
                <li>
                  Server suspensions due to non-payment or violations of our
                  Acceptable Use Policy (AUP).
                </li>
                <li>
                  DDoS (Distributed Denial of Service) attacks directed at the
                  customer's server unless protected by a specific CloudNode RDP DDoS
                  mitigation package.
                </li>
                <li>
                  Issues related to the customer's local ISP, local network
                  routing, or firewall blocks preventing access.
                </li>
                <li>
                  Force Majeure events, including natural disasters, acts of
                  war, or widespread internet outages outside CloudNode RDP's
                  infrastructure.
                </li>
              </ul>
            </Section>

            <Section
              id="hardware-replacement"
              title="Hardware Replacement Guarantee"
            >
              <p>
                For Dedicated Servers, CloudNode RDP guarantees the functioning of all
                leased hardware components. In the event of a hardware failure,
                we commit to replacing the faulty component at zero cost to the
                customer.
              </p>
              <br />
              <p>
                Hardware replacement will typically be completed within 2 to 6
                hours from the time CloudNode RDP verifies the hardware failure. This
                guarantee excludes data recovery time, OS reinstallation, or
                software configurations. We highly recommend customers maintain
                regular off-site backups to prevent data loss.
              </p>
            </Section>

            <Section id="claiming" title="Claiming SLA Credits">
              <p>
                To claim SLA credits, customers must submit a support ticket to
                our Billing Department within 7 days of the documented downtime
                event. The ticket must include:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>The affected service ID or IP address.</li>
                <li>Exact dates and timestamps of the downtime.</li>
                <li>
                  Ping or traceroute results demonstrating the unavailability
                  (if applicable).
                </li>
              </ul>
              <br />
              <p>
                Credit requests will be reviewed by CloudNode RDP management. Approval
                of claims is at the sole discretion of CloudNode RDP based on internal
                monitoring systems and network logs.
              </p>
            </Section>

            <ContactCard index={1} />
          </div>

          <div className="w-full lg:w-[350px] shrink-0">
            <Toc data={tocData} className="border-l pl-6 border-border/50" />
          </div>
        </div>
      </Container>
    </main>
  );
}
