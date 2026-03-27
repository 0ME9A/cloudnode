import { companyInfo } from "@/data/siteData";
import { cn } from "@/lib/utils";

type TSection = {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: TSection) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      {children && <div className={cn(className)}>{children}</div>}
    </section>
  );
}

type TContactCard = {
  index?: number;
  mType?: keyof typeof companyInfo.email;
  pType?: keyof typeof companyInfo.phone;
};

export function ContactCard({
  index,
  mType = "primary",
  pType = "primary",
}: TContactCard) {
  const phone = companyInfo.phone[pType];
  <a href={`tel:${phone?.code}-${phone?.number}`}>
    {`${phone?.code}-${phone?.number}`}
  </a>;

  return (
    <address id="contact" className="not-italic scroll-mt-24">
      <h2 className="text-xl font-medium mb-4">
        {index ? index + ". " : ""}Contact
      </h2>
      <ul className="list-disc list-outside pl-5 space-y-2 [&_strong]:font-semibold">
        {/* <li>
        <strong>Website:</strong>{" "}
        <a
        href={`https://${companyInfo.website}`}
        className="underline text-blue-600 hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        >
        {companyInfo.website}
        </a>
        </li> */}
        <li>
          <strong>Email:</strong>{" "}
          <a
            href={`mailto:${companyInfo.email[mType]}`}
            className="underline hover:text-primary transition-colors duration-300"
          >
            {companyInfo.email[mType]}
          </a>
        </li>
        {/* <li>
          <strong>Phone:</strong>{" "}
          <a
            href={`tel:${companyInfo.phone[pType].code}${companyInfo.phone["primary"].number}`}
            className="underline hover:text-primary transition-colors duration-300"
          >
            {`${companyInfo.phone["primary"].code}-${companyInfo.phone["primary"].number}`}
          </a>
        </li> */}
        <li>
          <strong>Office Address:</strong>{" "}
          {companyInfo.address.headOffice.fullAddress}
        </li>
      </ul>
    </address>
  );
}

type TToc = {
  data: {
    id: string;
    label: string;
  }[];
  className?: string;
};

export function Toc({ data, className }: TToc) {
  return (
    <aside className={cn("hidden lg:block sticky top-24 h-fit", className)}>
      <nav aria-label="Table of contents" className="space-y-2 text-sm">
        <h2 className="font-medium text-foreground mb-4 text-lg">
          On this page
        </h2>

        {data.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="block text-muted-foreground hover:text-primary transition"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
