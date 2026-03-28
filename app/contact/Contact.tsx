import { IconFeatureCardMini } from "@/components/ui/icon-feature-card";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { companyInfo } from "@/data/siteData";
import ContactForm from "./ContactForm";

export default function Contact() {
  // const days = companyInfo.officeTime.days;
  // const hours = companyInfo.officeTime.hours;

  return (
    <Container className="grid lg:grid-cols-2 gap-6 mt-8">
      <div className="grid sm:grid-cols-2 gap-4 h-full">
        <IconFeatureCardMini
          feature={{
            title: "Email Us",
            icon: Mail,
          }}
          className="h-full overflow-hidden"
        >
          <a
            href={`mailto:${companyInfo.email.primary}`}
            className="font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm block"
          >
            {companyInfo.email.primary}
          </a>

          <p className="text-sm opacity-75 mt-2">
            24x7 Email Support. Drop us an email and we&apos;ll get back to you as
            soon as possible.
          </p>
          <span className="absolute -bottom-6 -right-6 opacity-5 scale-150">
            <Mail size={192} />
          </span>
        </IconFeatureCardMini>
        <IconFeatureCardMini
          feature={{
            title: "Contact Us",
            icon: Phone,
          }}
          className="h-full overflow-hidden"
        >
          <a
            href={`tel:+91${companyInfo.phone.primary.number}`}
            className="font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm block"
          >
            +91 {companyInfo.phone.primary.number}
          </a>

          <p className="text-sm opacity-75 mt-2">
            Give us a call. Our phone support is available during 10 AM - 6 PM
            IST.
          </p>
          <span className="absolute -bottom-6 -right-6 opacity-5 scale-150">
            <Phone size={192} />
          </span>
        </IconFeatureCardMini>

        <IconFeatureCardMini
          feature={{
            title: "WhatsApp Chat",
            icon: MessageCircle,
          }}
          className="h-full overflow-hidden"
        >
          <a
            href="https://wa.me/918058050040"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm block"
          >
            Start Chat Now
          </a>

          <p className="text-sm opacity-75 mt-2">
            Chat with us 24/7 on WhatsApp for instant support and queries.
          </p>
          <span className="absolute -bottom-6 -right-6 opacity-5 scale-150">
            <MessageCircle size={192} />
          </span>
        </IconFeatureCardMini>

        <IconFeatureCardMini
          feature={{
            title: "Visit Our Office",
            icon: MapPin,
          }}
          className="h-full overflow-hidden"
        >
          <h4 className="text-sm font-semibold">{companyInfo.fullName}</h4>
          <address className="not-italic text-sm opacity-75 mt-2">
            {companyInfo.address.headOffice.fullAddress}
          </address>
          <span className="absolute -bottom-6 -right-6 opacity-5 scale-150">
            <MapPin size={192} />
          </span>
        </IconFeatureCardMini>
      </div>
      <ContactForm />
    </Container>
  );
}
