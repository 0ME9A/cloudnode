import { TCompanyInfo, TFooterLink, TLink, TNavMenu } from "@/type";
import { Home, Mail, BookOpen, Info, Server } from "lucide-react";

export const mainNavLinks: TNavMenu[] = [
  {
    id: "home",
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    id: "pricing",
    href: "/pricing",
    label: "Pricing",
    icon: Server,
  },
  {
    id: "support_nav",
    href: "#",
    label: "Support",
    icon: Info,
    subLinks: [
      {
        id: "sn1",
        label: "Knowledge Base",
        href: "/knowledge-base",
      },
      {
        id: "sn2",
        label: "HelpDesk",
        href: "/submit-ticket",
      },
    ],
  },
  {
    id: "blog",
    href: "/blog",
    label: "Blog",
    icon: BookOpen,
  },
  {
    id: "about",
    href: "/about",
    label: "About Us",
    icon: Info,
  },
  {
    id: "contact",
    href: "/contact",
    label: "Contact",
    icon: Mail,
  },
];

export const mainNavLinksTab: TNavMenu[] = [
  {
    id: "home",
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    id: "pricing",
    href: "/pricing",
    label: "Pricing",
    icon: Server,
  },
  {
    id: "support_nav",
    href: "#",
    label: "Support",
    icon: Info,
    subLinks: [
      {
        id: "sn1",
        label: "Knowledge Base",
        href: "/knowledge-base",
      },
      {
        id: "sn2",
        label: "HelpDesk",
        href: "/submit-ticket",
      },
    ],
  },
  {
    id: "about",
    href: "/about",
    label: "About",
    icon: Info,
  },
  {
    id: "contact",
    href: "/contact",
    label: "Contact",
    icon: Mail,
  },
];

export const footerSitemap: TFooterLink[] = [
  {
    id: "company",
    title: "Company",
    links: [
      { id: "c1", label: "About Us", href: "/about" },
      { id: "c2", label: "Contact Us", href: "/contact" },
      { id: "c3", label: "Blog", href: "/blog" },
      { id: "c4", label: "Affiliates", href: "/affiliates" },
    ],
  },
  {
    id: "quick_links",
    title: "Quick Links",
    links: [
      { id: "ql1", label: "Home", href: "/" },
      { id: "ql2", label: "Pricing", href: "/pricing" },
      { id: "ql3", label: "Client Login", href: "/login" },
      { id: "ql4", label: "Register", href: "/register" },
    ],
  },
  {
    id: "support",
    title: "Support",
    links: [
      {
        id: "su1",
        label: "HelpDesk",
        href: "/submit-ticket",
      },
      {
        id: "su2",
        label: "Knowledge Base",
        href: "/knowledge-base",
      },
      {
        id: "su3",
        label: "FAQs",
        href: "/faqs",
      },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      {
        id: "l1",
        label: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: "l2",
        label: "Terms & Conditions",
        href: "/terms-conditions",
      },
      {
        id: "l3",
        label: "Refund Policy",
        href: "/refund-policy",
      },
      {
        id: "l4",
        label: "Acceptable Use Policy",
        href: "/aup",
      },
      {
        id: "l5",
        label: "SLA",
        href: "/sla",
      },
    ],
  },
];

// socialMedia
export const socialMedia: TLink[] = [
  {
    id: "soc_00",
    label: "Facebook",
    href: "https://facebook.com/",
    external: true,
  },
  {
    id: "soc_01",
    label: "Twitter",
    href: "https://x.com/",
    external: true,
  },
  {
    id: "soc_02",
    label: "Linkedin",
    href: "https://www.linkedin.com/company/cloudnode",
    external: true,
  },
  {
    id: "soc_03",
    label: "Instagram",
    href: "https://www.instagram.com/cloudnode_rdp",
    external: true,
  },
  {
    id: "soc_04",
    label: "Youtube",
    href: "https://youtube.com/@CloudNodeRDP",
    external: true,
  },
  {
    id: "soc_05",
    label: "Whatsapp",
    href: "https://wa.me/15550123456",
    external: true,
  },
];

// Company info
export const companyInfo: TCompanyInfo = {
  name: "CloudNode RDP",
  fullName: "CloudNode Hosting Solutions LLC",
  website: "cloudnode.com",
  slogan: "Premium High-Performance RDP Hosting",
  about:
    "Next-generation Windows RDP server provider. High-performance remote desktop servers with full admin access, 99.9% uptime, and 24×7 support — starting at $9.99/mo.",
  address: {
    headOffice: {
      building: "123 Cloud Tower",
      near: "Suite 100, Tech District",
      pinCode: "75001",
      city: "Austin",
      state: "Texas",
      country: "USA",
      fullAddress:
        "123 Cloud Tower, Suite 100, Tech District, Austin, TX – 75001, USA",
      googleMap: "",
    },
  },
  phone: {
    primary: {
      code: "+1",
      number: "555-012-3456",
    },
  },
  email: {
    primary: "support@cloudnode.com",
    support: "support@cloudnode.com",
    contact: "hello@cloudnode.com",
    abuse: "abuse@cloudnode.com",
    billing: "billing@cloudnode.com",
  },
  officeTime: {
    days: {
      from: "Monday",
      to: "Sunday",
      closed: [],
    },
    hours: {
      from: "12:00 AM",
      to: "11:59 PM",
    },
  },
  fcra: "",
  cin: "",
  ngoId: "",
  registered: "",
  copyRights: `© 2025 CloudNode · All rights reserved.`,
};
