import { ContactCard, Section, Toc } from "@/components/ui/legal";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { PageHeader } from "@/components/ui/header";
import { companyInfo } from "@/data/siteData";

// Define the Table of Contents data mapping to section IDs
const tocData = [
  { id: "introduction", label: "Introduction" },
  { id: "account-setup", label: "Account Setup" },
  { id: "account-content", label: "Account Content" },
  { id: "zero-tolerance-spam", label: "Zero Tolerance Spam Policy" },
  { id: "payment-information", label: "Payment Information" },
  { id: "backups-data", label: "Backups and Data Loss" },
  {
    id: "changes-cancellations",
    label: "Change of Plans, Cancellations and Payments",
  },
  { id: "resource-usage", label: "Resource Usage Policy" },
  { id: "price-change", label: "Price Change" },
  { id: "indemnification", label: "Indemnification" },
  { id: "arbitration", label: "Arbitration" },
  { id: "disclaimer", label: "Disclaimer" },
  { id: "law-enforcement", label: "Disclosure to law enforcement" },
  { id: "tos-changes", label: "Changes to the TOS" },
  { id: "contact", label: "Contact Us" },
];

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing the use of CloudNode RDP's services and products.",
  keywords: [
    "CloudNode RDP Terms of Service",
    "TOS",
    "RDP Hosting Terms",
    "Acceptable Use",
    "Service Agreement",
  ],
};

export default function page() {
  return (
    <main>
      <Container className="pb-0!">
        <PageHeader
          title="Terms of Service"
          desc="Read the terms and conditions governing the use of CloudNode RDP's services and products."
          align="l"
          className="px-0!"
        >
          <p className="text-sm font-medium text-foreground opacity-60">
            Last Updated: May 25, 2023
          </p>
        </PageHeader>
      </Container>
      <Separator className="container mx-auto" />
      <Container className="pb-32">
        <div className="flex flex-col lg:flex-row gap-12 relative">
          <div className="flex-1 w-full space-y-12 leading-relaxed [&_p]:opacity-80 [&_ul]:ml-4">
            <Section id="introduction" title="Introduction">
              <p>
                The following terms and conditions (these “Terms”) govern the
                provision by CloudNode RDP of the services and/or products (referred
                collectively herein as “Services and Products”) described on the
                Server Order Form, the Service Level Agreement and Service
                Exhibit attached hereto (collectively the “Service
                Descriptions”) and defined in any of the Company’s product
                support listing, to the customer (“Customer”) identified on the
                Service Descriptions. The Service Descriptions, these Terms and
                the attachments and any addenda hereto, executed with respect to
                the Services and Products, are referred to herein, collectively,
                as this “Agreement.”
              </p>
            </Section>

            <Section
              id="account-setup"
              title="Account Setup / Email and Phone Number on file"
            >
              <p>
                We will setup your account after we have received payment and we
                and/or our payment partner(s) have screened the order(s) incase
                of fraud. A valid phone number is required for order setup In
                addition, it is your responsibility to provide us with an email
                address which is not @ the domain(s) you are signing up under.
                If there is ever an abuse issue or we in to contact you, the
                primary email address on file will be used for this purpose. It
                is your responsibility to ensure the email address on file is
                current and/or up to date at all times. In high risk
                transactions, it may be necessary to provide government issued
                identification and possibly a scan of the credit card used for
                the purchase. Providing false contact information of any kind
                may result in the termination of your account. If you fail to
                meet these requirements, the order may be considered fraudulent
                in nature and be denied.
              </p>
            </Section>

            <Section id="account-content" title="Account Content">
              <p>
                All services provided by CloudNode RDP may only be used for lawful
                practices, and purposes. The laws applied to the state of
                Wyoming, USA. Every customer agrees to indemnify and hold
                harmless CloudNode RDP from any claims resulting from the use of our
                services. In addition, the use of our services to infringe upon
                any copyright or trademark is adamantly prohibited. This
                includes but is not limited to unauthorized copying of music,
                books, photographs, or any other copyrighted material. Any offer
                of sale of any counterfeit merchandise of a trademark holder
                will result in the immediate termination of your account. If you
                believe that your copyright or trademark is being infringed
                upon, please email {companyInfo.email.abuse} with the
                information required. Examples of unacceptable material on VPS,
                RDP Servers and Dedicated Servers are listed in AUP. For more
                informations please check{" "}
                <strong>Acceptable Usage Policy</strong> We reserve the right to
                refuse service to anyone. Any material that, in our judgement,
                is obscene or threatening is prohibited and will be removed from
                our servers with or without notice. Failure to respond to email
                from our abuse department within 48 hours may result in the
                suspension or termination of your services. All abuse issues
                must be dealt with via support ticket/email and will have a
                response within 48 hours. If in doubt regarding the
                acceptability of your site or service, please contact us at
                {companyInfo.email.support} and we will be happy to assist you.
                Potential harm to minors is strictly forbidden, including but
                not limited to child pornography or content perceived to be
                child pornography: Any site found to host child pornography or
                linking to child pornography will be suspended immediately
                without notice. Violations will be reported to the appropriate
                law enforcement agency.
              </p>
            </Section>

            <Section
              id="zero-tolerance-spam"
              title="Zero Tolerance Spam Policy"
            >
              <p>
                We take a zero tolerance stance against sending of unsolicited
                e-mail, bulk emailing, and spam. &quot;Safe lists&quot; and
                &quot;double opt-in&quot; will be treated as spam. Any user who
                sends out spam will have their account terminated with or
                without notice. Sites advertised via SPAM (Spamvertised) may not
                be hosted on our servers. This provision includes, but is not
                limited to SPAM sent via fax, email, instant messaging, or
                usernet/newsgroups. No organization or entity listed in the
                ROKSO may be hosted on our servers. Any account which results in
                our IP space being blacklisted will be immediately suspended
                and/or terminated. CloudNode RDP reserves the right to require changes
                or disable as necessary any RDP Servers, Account, VPS, or other
                component that does not comply with its established policies, or
                to make any such modifications in an emergency at its sole
                discretion. CloudNode RDP reserves the right to charge the holder of
                the account used to send any unsolicited e-mail a clean up fee.
                This cost of the clean up fee is entirely at the discretion of
                CloudNode RDP. The clean up fee will contain fee from damages to the
                servers, the process of cleaning the Spam up, and then a fee for
                all other costs associated at are discretion.
              </p>
            </Section>

            <Section id="payment-information" title="Payment Information">
              <p>
                You agree to supply appropriate payment for the services
                received from CloudNode RDP , in advance of the time period during
                which such services are provided. You agree that until and
                unless you notify CloudNode RDP of your desire to cancel any or all
                services received, those services will be billed on a recurring
                basis. Cancellations must be done in via the cancellation form
                provided in the client area. To get to this area please follow
                these directions: Client Area &gt; My Services &gt; Request
                Cancellation. Once we receive your cancellation and have
                confirmed all necessary information with you via e-mail, we will
                inform you that your account has been canceled. At this time,
                your account with us has been canceled. If you do not hear back
                from us or receive an e-mail confirming this cancellation,
                please contact us immediately. As a client of CloudNode RDP , it is
                your responsibility to ensure that your payment information is
                up to date, and that all invoices are paid on time. CloudNode RDP
                provides a 10 day grace period from the time the invoice is due
                and when it must be paid. Any invoice that is overdue for 10
                days and not paid will result in a late fee and/or an account
                suspension until account balance has been paid in full. Invoices
                that have been paid more than once with multiple PayPal
                Subscriptions can only be added as credit towards the account
                and cannot be refunded via PayPal. If you require assistance
                with this provision, please contact {companyInfo.email.billing}{" "}
                CloudNode RDP reserves the right to change the monthly payment amount
                and any other charges at any time. Current CloudNode RDP clients will
                never pay more for a monthly service than at the time of sign
                up. This is void when signing up under a Promotion.
              </p>
            </Section>

            <Section id="backups-data" title="Backups and Data Loss">
              <p>
                Your use of the service is at your sole risk unless and until
                specified in the service we offer. CloudNode RDP is not responsible
                for files and/or data residing on your account. You agree to
                take full responsibility for files and data transferred and to
                maintain all appropriate backup of files and data stored on
                CloudNode RDP servers.
              </p>
            </Section>

            <Section
              id="changes-cancellations"
              title="Change of Plans, Cancellations and Payments"
            >
              <p>
                <strong>CloudNode RDP</strong> reserves the right to alter, change,
                amend, or delete fees at its sole discretion. CloudNode RDP further
                reserves the right to institute new services and charge fees in
                association with the provision of such new services as it deems
                appropriate. CloudNode RDP reserves the right to offer promotional
                rates which may or may not be more favorable than the terms
                under which you entered this agreement. Any special rates shall
                not affect the existing rights and responsibilities of each
                party. CloudNode RDP also reserves the right to change the rate
                charged for any such fee under this agreement with 30 days
                notice.
              </p>
              <p>
                <strong>Payment of Fees:</strong> We accept payment by PhonePe,
                Credit &amp; Debit Cards,Net Banking ,UPI, stripe, and Paytm.
              </p>
              <p>
                <strong>Payment Obligations:</strong> Full payment is required
                in advance before service is established. We send out invoices
                that are due every pay period. You are given four (04) days to
                fully pay the invoice. You warrant and represent that the
                information you supply in the order form (or other information
                that CloudNode RDP may require) is accurate and truthful. All
                payment-due notices will be sent by email. No bills or invoices
                will be sent by postal mail or fax. If payment is not received
                by due date, your account will be suspended. To have your
                account re-established, you will in to pay the monthly fees.
              </p>
              <p>
                <strong>Renewals:</strong> Your account will be automatically
                renewed under the same time and fee structure unless you give
                written notice to fourteen (14) days before the renewal date
                that you do not wish to renew or make changes to such term of
                this agreement.
              </p>
              <p>
                <strong>Cancellations:</strong> All cancellation requests must
                be sent 5 (five) days before the due date of the invoice. If you
                do not raise a cancellation request and are not paying the
                invoice as well, the due date is the server expiration date. The
                server will be wiped of all data due to customer privacy. Data
                on the server will be retained only if a cancellation request is
                received well in time.
              </p>
              <p>
                <strong>Payment Disputes and Chargebacks:</strong> Customer
                agrees to contact our billing department and attempt to resolve
                any billing issues before filing a dispute / payment chargeback.
                The decision of the bank / payment processor will be final and
                binding once a payment dispute / chargeback is filed. CloudNode RDP
                will in no case overrule this decision. CloudNode RDP may at its sole
                discretion place the customer account on temporary suspension
                until the charge-back / payment dispute is resolved. Violations
                of the Terms of Service will waive/void the refund policy.
              </p>
            </Section>

            <Section id="resource-usage" title="Resource Usage Policy">
              <p>
                <strong>Bandwidth Usage:</strong> All servers / accounts are
                provided with unmetered bandwidth limits as per the plans
                selected. Customers are requested to use these wisely. We
                reserve the right to review / amend / downgrade / upgrade /
                modify this allocation any time if we feel that this is
                affecting the server / network performance.
              </p>
              <br />
              <p>
                <strong>Memory Usage:</strong> We reserve the right to monitor
                the memory (RAM / Processor) performance of our servers at all
                the time. We reserve the right to suspend services (temporarily
                or permanently) if we find that high memory consumption is
                affecting network performance.
              </p>
            </Section>

            <Section id="price-change" title="Price Change">
              <p>
                The amount you pay for your service will not increase from the
                date of purchase in the current billing cycle, however prices
                may be increased from next billing cycle. We reserve the right
                to change prices listed on our websites, and the right to
                increase/decrease the amount of resources given to plans at any
                time.
              </p>
            </Section>

            <Section id="indemnification" title="Indemnification">
              <p>
                Customer agrees that it shall defend, indemnify, save and hold
                CloudNode RDP harmless from any and all demands, liabilities, losses,
                costs and claims, including reasonable attorney&apos;s fees
                asserted against {companyInfo.website}, its agents, its
                customers, officers and employees, that may arise or result from
                any service provided or performed or agreed to be performed or
                any product sold by customer, its agents, employees or assigns.
                Customer agrees to defend, indemnify and hold harmless CloudNode RDP
                against liabilities arising out of: Any injury to person or
                property caused by any products sold or otherwise distributed in
                connection with CloudNode RDP Any material supplied by customer
                infringing or allegedly infringing on the proprietary rights of
                a third party; Copyright infringement and any defective products
                sold to customers from CloudNode RDP server.
              </p>
            </Section>

            <Section id="arbitration" title="Arbitration">
              <p>
                By using any CloudNode RDP services, you agree to binding arbitration.
                If any disputes or claims arise against CloudNode RDP or its
                subsidiaries, such disputes will be handled by an arbitrator of
                CloudNode RDP choice. All decisions rendered by that arbitrator will
                be binding and final. You are also responsible for any and all
                costs related to such arbitration.
              </p>
            </Section>

            <Section id="disclaimer" title="Disclaimer">
              <p>
                CloudNode RDP shall not be responsible for any damages your business
                may suffer. CloudNode RDP makes no warranties of any kind, expressed
                or implied for services we provide. CloudNode RDP disclaims any
                warranty or merchantability or fitness for a particular purpose.
                This includes loss of data resulting from delays, no deliveries,
                wrong delivery, and any and all service interruptions caused by
                CloudNode RDP and its employees.
              </p>
            </Section>

            <Section id="law-enforcement" title="Disclosure to law enforcement">
              <p>
                CloudNode RDP may disclose any subscriber information to law
                enforcement agencies without further consent or notification to
                the subscriber upon lawful request from such agencies. We will
                cooperate fully with law enforcement agencies.
              </p>
            </Section>

            <Section id="tos-changes" title="Changes to the TOS">
              <p>
                CloudNode RDP reserves the right to revise its policies at any time
                without notice.
              </p>
              <br />
              <strong>
                By purchasing any of our services, you already agree to this
                Terms of Service (ToS) Agreement. If you don’t agree to these
                services, either don’t purchase any service or if already
                purchased, immediately cancel it. No refund will be processed in
                such case.
              </strong>
            </Section>

            <div id="contact">
              <ContactCard />
            </div>
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
