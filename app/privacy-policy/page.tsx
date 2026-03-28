import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/header";
import { ContactCard, Section, Toc } from "@/components/ui/legal";
import { Separator } from "@/components/ui/separator";

// Define the Table of Contents data mapping to section IDs
const tocData = [
  { id: "introduction", label: "Introduction" },
  { id: "personal-information", label: "Personal Information" },
  { id: "usage-information", label: "Usage of Information" },
  { id: "protection", label: "Protection of Information" },
  { id: "cookies", label: "Usage of Cookies" },
  { id: "third-party", label: "Third Party Links & Disclosure" },
  { id: "compliance", label: "Compliance (COPPA, CAN-SPAM)" },
  { id: "contact", label: "Contact Us" },
];
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how CloudNode RDP protects your personal data and respects your privacy online.",
  keywords: [
    "CloudNode RDP Privacy Policy",
    "Data Protection",
    "User Privacy",
    "Information Security",
    "COPPA",
  ],
};

export default function page() {
  return (
    <main>
      <Container className="pb-0!">
        <PageHeader
          title="Privacy Policy"
          desc="Learn how CloudNode RDP protects your personal data and respects your privacy online."
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
                Welcome to CloudNode RDP This Privacy Policy explains how we collect,
                use, disclose, and safeguard your personal information. By
                accessing or using our services, you agree to this Privacy
                Policy and our Terms of Service.
              </p>
              <br />
              <p>
                Once a visitor becomes a client of CloudNode RDP by filling out our
                online order form or account activation form, they are
                immediately affected by our privacy policy. We also collect
                personal information to process our customer’s service requests.
                Their personal information is only used to process the request,
                and for no other purpose. All information that is collected from
                our customers is kept strictly confidential, and will never be
                shared with a third party. All customers have their own unique
                account with CloudNode RDP and it is kept completely secure at all
                times.
              </p>
              <br />
              <p>
                Our privacy policy has been compiled to better serve those who
                are concerned with how their &apos;Personally identifiable
                information&apos; (PII) is being used online. PII, as used in US
                privacy law and information security, is information that can be
                used on its own or with other information to identify, contact,
                or locate a single person, or to identify an individual in
                context. Please read our privacy policy carefully to get a clear
                understanding of how we collect, use, protect or otherwise
                handle your Personally Identifiable Information in accordance
                with our website.
              </p>
            </Section>

            <Section
              id="personal-information"
              title="Personal information that we collect from our users"
            >
              <p>
                We may collect personal information, such as your name, email
                address, phone number, and billing address, when you register an
                account, make a purchase, or interact with our services.
              </p>
              <br />
              <p>
                We collect information from you when you register on our site,
                place an order, subscribe to a newsletter, respond to a survey,
                fill out a form or enter information on our site.
              </p>
            </Section>

            <Section id="usage-information" title="Usage of user information">
              <p>
                We may use the information we collect from you when you
                register, make a purchase, sign up for our newsletter, respond
                to a survey or marketing communication, surf the website, or use
                certain other site features in the following ways:
              </p>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  To personalize user&apos;s experience and to allow us to
                  deliver the type of content and product offerings in which you
                  are most interested.
                </li>
                <li>To improve our website in order to better serve you.</li>
                <li>
                  To allow us to better service you in responding to your
                  customer service requests.
                </li>
                <li>
                  To administer a contest, promotion, survey or other site
                  feature.
                </li>
                <li>To quickly process your transactions.</li>
                <li>
                  To send periodic emails regarding your order or other products
                  and services.
                </li>
              </ul>
            </Section>

            <Section id="protection" title="Protection of User Information">
              <p>
                Our website is scanned on a regular basis for security holes and
                known vulnerabilities in order to make your visit to our site as
                safe as possible.
              </p>
              <br />
              <p>
                Your personal information is contained behind secured networks
                and is only accessible by a limited number of persons who have
                special access rights to such systems, and are required to keep
                the information confidential. In addition, all sensitive/credit
                information you supply is encrypted via Secure Socket Layer
                (SSL) technology.
              </p>
              <br />
              <p>
                We implement a variety of security measures when a user places
                an order enters, submits, or accesses their information to
                maintain the safety of your personal information.
              </p>
              <br />
              <p>
                All transactions are processed through a gateway provider and
                are not stored or processed on our servers.
              </p>
            </Section>

            <Section id="cookies" title="Usage of 'cookies'">
              <p>
                Cookies are small files that a site or its service provider
                transfers to your computer&apos;s hard drive through your Web
                browser (if you allow) that enables the site&apos;s or service
                provider&apos;s systems to recognize your browser and capture
                and remember certain information. For instance, we use cookies
                to help us remember and process the items in your shopping cart.
                They are also used to help us understand your preferences based
                on previous or current site activity, which enables us to
                provide you with improved services. We also use cookies to help
                us compile aggregate data about site traffic and site
                interaction so that we can offer better site experiences and
                tools in the future.
              </p>
              <br />
              <h3>We use cookies to:</h3>
              <ul className="list-disc list-outside pl-5 mt-4 space-y-2 opacity-80">
                <li>
                  Help remember and process the items in the shopping cart.
                </li>
                <li>
                  Understand and save user&apos;s preferences for future visits.
                </li>
                <li>Keep track of advertisements.</li>
                <li>
                  Compile aggregate data about site traffic and site
                  interactions in order to offer better site experiences and
                  tools in the future. We may also use trusted third party
                  services that track this information on our behalf.
                </li>
              </ul>
              <br />
              <p>
                You can choose to have your computer warn you each time a cookie
                is being sent, or you can choose to turn off all cookies. You do
                this through your browser (like Internet Explorer) settings.
                Each browser is a little different, so look at your
                browser&apos;s Help menu to learn the correct way to modify your
                cookies.
              </p>
              <br />
              <p>
                If you disable cookies off, some features will be disabled It
                won&apos;t affect the users experience that make your site
                experience more efficient and some of our services will not
                function properly.
              </p>
            </Section>

            <Section id="third-party" title="Third Party Disclosure">
              <p>
                We do not sell, trade, or otherwise transfer to outside parties
                your personally identifiable information unless we provide you
                with advance notice. This does not include website hosting
                partners and other parties who assist us in operating our
                website, conducting our business, or servicing you, so long as
                those parties agree to keep this information confidential. We
                may also release your information when we believe release is
                appropriate to comply with the law, enforce our site policies,
                or protect ours or others&apos; rights, property, or safety.
              </p>
              <br />
              <p>
                However, non-personally identifiable visitor information may be
                provided to other parties for marketing, advertising, or other
                uses.
              </p>
              <br />
              <h3 className="font-semibold text-foreground mb-4 mt-6 text-xl">
                Third Party Links
              </h3>
              <p>
                Occasionally, at our discretion, we may include or offer third
                party products or services on our website. These third party
                sites have separate and independent privacy policies. We
                therefore have no responsibility or liability for the content
                and activities of these linked sites. Nonetheless, we seek to
                protect the integrity of our site and welcome any feedback about
                these sites.
              </p>
            </Section>

            <Section
              id="compliance"
              title="COPPA - Children Online Privacy Protection Act"
            >
              <p>
                When it comes to the collection of personal information from
                children under 13, the Children&apos;s Online Privacy Protection
                Act (COPPA) puts parents in control. The Federal Trade
                Commission, the nation&apos;s consumer protection agency,
                enforces the COPPA Rule, which spells out what operators of
                websites and online services must do to protect children&apos;s
                privacy and safety online.
              </p>
              <br />
              <p>We do not specifically market to children under 13.</p>
              <br />
              <h3 className="font-semibold text-foreground mb-4 mt-6 text-xl">
                Fair Information Practices
              </h3>
              <p>
                The Fair Information Practices Principles form the backbone of
                privacy law in the United States and the concepts they include
                have played a significant role in the development of data
                protection laws around the globe. Understanding the Fair
                Information Practice Principles and how they should be
                implemented is critical to comply with the various privacy laws
                that protect personal information.
              </p>
              <br />
              <p>
                In order to be in line with Fair Information Practices we will
                take the following responsive action, should a data breach
                occur: We will notify the users via email
              </p>
              <ul className="list-disc list-outside pl-5 mt-2 space-y-2 opacity-80">
                <li>
                  Within 7 working days We will notify the users via in site
                  notification
                </li>
                <li>Within 7 working days</li>
              </ul>
              <br />
              <p>
                We also agree to the individual redress principle, which
                requires that individuals have a right to pursue legally
                enforceable rights against data collectors and processors who
                fail to adhere to the law. This principle requires not only that
                individuals have enforceable rights against data users, but also
                that individuals have recourse to courts or a government agency
                to investigate and/or prosecute non-compliance by data
                processors.
              </p>
              <br />
              <h3 className="font-semibold text-foreground mb-4 mt-6 text-xl">
                CAN SPAM Act
              </h3>
              <p>
                The CAN-SPAM Act is a law that sets the rules for commercial
                email, establishes requirements for commercial messages, gives
                recipients the right to have emails stopped from being sent to
                them, and spells out tough penalties for violations.
              </p>
              <br />
              <p>We collect your email address in order to:</p>
              <ul className="list-disc list-outside pl-5 mt-2 space-y-2 opacity-80">
                <li>
                  Send information, respond to inquiries, and/or other requests
                  or questions.
                </li>
                <li>
                  Process orders and to send information and updates pertaining
                  to orders
                </li>
                <li>
                  We may also send you additional information related to your
                  product and/or service.
                </li>
                <li>
                  Market to our mailing list or continue to send emails to our
                  clients after the original transaction has occurred
                </li>
              </ul>
              <br />
              <p>To be accordance with CAN SPAM we agree to the following:</p>
              <ul className="list-disc list-outside pl-5 mt-2 space-y-2 opacity-80">
                <li>
                  NOT use false, or misleading subjects or email addresses
                </li>
                <li>
                  Identify the message as an advertisement in some reasonable
                  way
                </li>
                <li>
                  Include the physical address of our business or site
                  headquarters
                </li>
                <li>
                  Monitor third party email marketing services for compliance,
                  if one is used.
                </li>
                <li>Honor opt-out/unsubscribe requests quickly</li>
                <li>
                  Allow users to unsubscribe by using the link at the bottom of
                  each email If at any time you would like to unsubscribe from
                  receiving future emails, you can
                </li>
              </ul>
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
