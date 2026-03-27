import { ContactCard, Section, Toc } from "@/components/ui/legal";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/ui/header";

const tocData = [
  { id: "introduction", label: "Introduction" },
  { id: "prohibited-content", label: "Prohibited Content" },
  { id: "network-security", label: "Network & System Security" },
  { id: "spam-abuse", label: "Spam & Email Abuse" },
  { id: "resource-usage", label: "Resource Usage" },
  { id: "violations", label: "Violations & Consequences" },
  { id: "reporting", label: "Reporting Violations" },
  { id: "contact", label: "Contact Us" },
];
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy",
  description:
    "Guidelines and rules for using CloudNode RDP services responsibly and securely.",
  keywords: [
    "CloudNode RDP AUP",
    "Acceptable Use Policy",
    "Prohibited Server Content",
    "Network Security",
    "Spam Policy",
  ],
};

export default function page() {
  return (
    <main>
      <Container className="pb-0!">
        <PageHeader
          title="Acceptable Use Policy"
          desc="Guidelines and rules for using CloudNode RDP services responsibly and securely."
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
                This Acceptable Use Policy (AUP) specifies the actions
                prohibited by CloudNode RDP to users of our services. CloudNode RDP reserves
                the right to modify the Policy at any time, effective upon
                posting of the modified Policy to this website.
              </p>
              <br />
              <p>
                By using our services, you agree to comply with this AUP. Our
                goal is to provide high-quality, reliable services to our
                customers while preserving the privacy and security of our users
                and the Internet community as a whole.
              </p>
            </Section>

            <Section
              id="prohibited-content"
              title="Prohibited Content and Activities"
            >
              <p>
                The following content and activities are strictly prohibited on
                CloudNode RDP servers:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  Hosting, distributing, or linking to child pornography or
                  material related to child abuse.
                </li>
                <li>
                  Phishing, fraud, scams, or hosting fake banking/login pages.
                </li>
                <li>
                  Malware, viruses, trojans, ransomware, and any malicious
                  software.
                </li>
                <li>
                  Promoting or facilitating illegal activities such as hacking,
                  cracking, or carding.
                </li>
                <li>Hosting copyright-infringing content (DMCA violations).</li>
                <li>Torrenting trackers or illegal file-sharing nodes.</li>
                <li>
                  Selling or distributing dark-web-related goods (drugs,
                  weapons, illegal services).
                </li>
              </ul>
            </Section>

            <Section id="network-security" title="Network and System Security">
              <p>
                Customers are prohibited from violating or attempting to violate
                the security of the CloudNode RDP network. Security violations may
                result in civil or criminal liability. Prohibited activities
                include:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  Accessing data not intended for the customer or logging into a
                  server or account that the customer is not authorized to
                  access.
                </li>
                <li>
                  Attempting to probe, scan, or test the vulnerability of a
                  system or network or to breach security or authentication
                  measures without proper authorization.
                </li>
                <li>
                  Attempting to interfere with service to any user, host, or
                  network, including, via means of overloading, "flooding,"
                  "mailbombing," or "crashing."
                </li>
                <li>
                  Forging any TCP/IP packet header or any part of the header
                  information in any e-mail or newsgroup posting.
                </li>
                <li>
                  Executing DDoS (Distributed Denial of Service) and DoS (Denial
                  of Service) attacks from our network.
                </li>
                <li>Hosting Booter/Stresser websites or APIs.</li>
              </ul>
            </Section>

            <Section id="spam-abuse" title="Spam and Email Abuse">
              <p>
                CloudNode RDP maintains a zero-tolerance policy for use of its network
                or services in any manner associated with the transmission,
                distribution, or delivery of any bulk e-mail, including
                unsolicited bulk or unsolicited commercial e-mail (Spam).
              </p>
              <br />
              <p>
                You may not use our services to send Spam, nor may you host
                sites or information that are advertised by Spam from other
                networks. IP addresses that are blacklisted due to Spam or bulk
                email activity will be subject to an immediate suspension or
                termination without refund.
              </p>
            </Section>

            <Section id="resource-usage" title="Resource Usage">
              <p>
                CloudNode RDP servers are subject to fair usage policies to ensure
                continuous and stable operations for all clients in our shared
                and dedicated infrastructure.
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  Continuous extraction of cryptocurrency (Crypto Mining) such
                  as Bitcoin, Monero, or Chia is forbidden unless authorized on
                  specific dedicated server plans.
                </li>
                <li>
                  Running public proxies (such as Tor exit nodes) that attract
                  high abuse reports.
                </li>
                <li>
                  Consistent 100% CPU maxing or network abuse that continuously
                  degrades neighbor performance on shared VPS environments.
                </li>
              </ul>
            </Section>

            <Section id="violations" title="Violations and Consequences">
              <p>
                CloudNode RDP reserves the right to investigate suspected violations
                of this Policy. When CloudNode RDP becomes aware of possible
                violations, we may initiate an investigation that could include
                gathering information from the User and the complaining party,
                and reviewing materials on CloudNode RDP's servers and networks.
              </p>
              <br />
              <p>
                During an investigation, CloudNode RDP may suspend the account
                involved and/or remove the material involved from its servers.
                If we believe a violation of this AUP has occurred, we may take
                responsive action, which may include:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>Issuing a warning.</li>
                <li>Temporary suspension of the service.</li>
                <li>Permanent termination of our services without a refund.</li>
                <li>
                  Involving law enforcement authorities if the violation is a
                  criminal offense.
                </li>
              </ul>
            </Section>

            <Section id="reporting" title="Reporting Violations">
              <p>
                CloudNode RDP requests that anyone who believes that there is a
                violation of this AUP direct the information to our Abuse
                Department.
              </p>
              <br />
              <p>
                If available, please provide the following information: The IP
                address used to commit the alleged violation, the date and time
                of the alleged violation, and evidence of the violation. We may
                take any one or more of the following actions in response to
                complaints: issue warnings, suspend the customer account,
                terminate the customer account, and/or bring legal action to
                prevent further violations.
              </p>
            </Section>

            <ContactCard index={1} />
          </div>

          {/* Sticky Table of Contents Sidebar */}
          <div className="w-full lg:w-[350px] shrink-0">
            <Toc data={tocData} className="border-l pl-6 border-border/50" />
          </div>
        </div>
      </Container>
    </main>
  );
}
