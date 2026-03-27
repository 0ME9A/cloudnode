import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/header";
import { ContactCard, Section, Toc } from "@/components/ui/legal";
import { Separator } from "@/components/ui/separator";
import { companyInfo } from "@/data/siteData";

// Define the Table of Contents data mapping to section IDs
const tocData = [
  { id: "introduction", label: "Cancellation/Refund Policy" },
  { id: "one-day-refund", label: "1-day Full Refund Policy" },
  { id: "seven-day-refund", label: "Seven-day(s) Partial Refund Policy" },
  { id: "processing-conditions", label: "Processing & Conditions" },
  { id: "contact", label: "Contact Us" },
];
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Read our policies regarding cancellations and refunds for CloudNode RDP services and products.",
  keywords: [
    "CloudNode RDP Refund Policy",
    "Server Cancellation",
    "VPS Money Back Guarantee",
    "RDP Refunds",
  ],
};

export default function page() {
  return (
    <main>
      <Container className="pb-0!">
        <PageHeader
          title="Cancellation/Refund Policy"
          desc="Read our policies regarding cancellations and refunds for CloudNode RDP services and products."
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
            <Section
              id="introduction"
              title="Welcome To CloudNode RDP Cancellation/Refund Policy."
            >
              <p>
                We offer a money-back guarantee to those clients who placed an
                order first time or using our service first time and are unhappy
                with our service. To get the refund, you have to give a valid
                reason as to why you are unhappy with our service, after that,
                you have to provide us with some time so that we can solve your
                problem if we fail then only money will be refunded. The refund
                request will be considered valid for 7 days after plan
                activation;
              </p>
              <p className="mt-4">
                <strong>
                  1-day full refund policy and seven days partial refund policy
                  after that, the refund requested will be deemed invalid.
                </strong>
              </p>
            </Section>

            <Section id="one-day-refund" title="1-day Full Refund Policy">
              <p>
                This policy allows customers to receive a full refund for their
                purchase within one day of the original transaction. If a
                customer decides they no longer want the product or service they
                purchased, they can cancel it within 24 hours and receive a
                complete /full refund. This policy aims to give customers a
                quick and hassle-free way to cancel their purchase and receive a
                full refund.
              </p>
            </Section>

            <Section
              id="seven-day-refund"
              title="Seven-day(s) Partial Refund Policy"
            >
              <p>
                This policy allows customers to receive a partial refund for
                their purchase within seven days of the original transaction. If
                a customer decides to cancel the service within the specified
                time frame (seven days), they will receive a refund. However,
                the refund may be for less than the total purchase amount.
                Instead, it will be a percentage of the original price after
                deducting any applicable fees or charges. This policy allows
                customers to cancel their purchase within a slightly extended
                timeframe.
              </p>
              <br />
              <p>
                Please note that refund policies may vary depending on the
                business or organization. It&apos;s always important to review
                the specific refund policy of the company you are dealing with
                to understand any conditions, exceptions, or limitations that
                may apply.
              </p>
            </Section>

            <Section id="processing-conditions" title="Processing & Conditions">
              <p>
                Refunds will be issued using the original payment method used
                for the purchase.
              </p>
              <p>
                Refunds will be processed within 5-7 business days from the date
                of approval.
              </p>
              <ul className="list-disc ml-8 mt-4 space-y-2 opacity-80 pl-4">
                <li>
                  I am not getting download/upload speed. (The download/upload
                  speeds depend on many factors which are not in our hands).
                </li>
                <li>I ordered by mistake.</li>
                <li>I changed my mood, I don&apos;t want RDP Server.</li>
                <li>
                  I don&apos;t know how to use the VPS/RDP Serve. (We will help,
                  just contact us).
                </li>
                <li>
                  I ordered the wrong plan mistakenly. (Contact us, and we will
                  change the plan without any extra cost).
                </li>
                <li>
                  I was out of station/Vacation and was not able to use your
                  server.
                </li>
                <li>
                  No refund will be given if you violate our Terms Of Service.
                </li>
              </ul>
              <br />
              <p>
                <strong>Note:</strong> If you do not agree with the above rules,
                please DO NOT place an order. If you open a dispute without any
                reason or after using our service, then no refund will be made
                in any case, and your service will also be terminated. You have
                to accept our Terms Of Service and Refund Policy while placing
                an order.
              </p>
              <br />
              <p>
                We appreciate your understanding and cooperation. Our goal is to
                ensure your satisfaction and provide a seamless experience with
                our products/services.
              </p>
              <p className="mt-4">
                <strong>
                  To request a refund, please contact our customer support team
                  at {companyInfo.email.support} or raised a support ticket.
                  Kindly provide your order number, reasons for the refund, and
                  any supporting documentation.
                </strong>
              </p>
            </Section>

            <div id="contact">
              <ContactCard mType={"support"} />
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
