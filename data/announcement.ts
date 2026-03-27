export type TAnnouncementBar = {
  id?: string;
  message: string;
  code?: string;
  href?: string;
  cta?: string;
  active: boolean;
  discount?: string;
};

export const otherAnnouncement: TAnnouncementBar[] = [
  {
    id: "uptime",
    active: true,
    message:
      "⚡ Ensure your projects never sleep with our guaranteed 99.9% Uptime SLA.",
    href: "/sla",
    cta: "Read our SLA",
  },
  {
    id: "support247",
    active: true,
    message: "🛠️ Need help? Our dedicated technical team is available 24x7.",
    href: "/submit-ticket",
    cta: "Contact Support",
  },
  {
    id: "nvme",
    active: true,
    message:
      "🚀 Upgrade your speeds! All new server plans now include Enterprise NVMe Storage.",
    href: "/pricing",
    cta: "View Hardware",
  },
];

export const discountAnnouncement: TAnnouncementBar[] = [
  {
    id: "new10",
    active: true,
    message: "🏷️ Limited-Time Offer — Get 10% off all RDP Server Plans!",
    code: "NEW10",
    discount: "10%",
    href: "/checkout",
    cta: "Order Now →",
  },
];
