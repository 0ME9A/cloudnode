import type { TFaqCategory } from "@/type";

export const FAQ_DATA: TFaqCategory[] = [
  {
    id: "general",
    category: "General Information",
    faqs: [
      {
        id: "what-is-CloudNode RDP",
        question: "What is CloudNode RDP?",
        answer:
          "CloudNode RDP provides high-performance, remote desktop environments (RDP/VPS) and dedicated servers. We specialize in fast provisioning, 99.9% uptime, and 24/7 support for both individuals and businesses needing robust remote work solutions.",
      },
      {
        id: "what-is-rdp-used-for",
        question: "What is an RDP server used for?",
        answer:
          "RDP (Remote Desktop Protocol) allows you to securely access a remote computer over the internet as if you were sitting right in front of it. Our users use them for running bots, hosting websites, forex trading, and managing heavy workloads that need to stay online 24/7.",
      },
      {
        id: "do-you-provide-admin-access",
        question: "Do I get full Administrator access?",
        answer:
          "Yes! All of our VPS and Dedicated Server plans come with full Administrator (Root) access, allowing you to install any software you desire.",
      },
    ],
  },
  {
    id: "billing",
    category: "Billing & Payments",
    faqs: [
      {
        id: "what-payment-methods",
        question: "What payment methods do you accept?",
        answer:
          "We accept a wide variety of payment methods including Major Credit Cards (Visa, Mastercard, Amex), PayPal, PerfectMoney, and Cryptocurrency (Bitcoin, Ethereum, USDT) via our secure checkout gateway.",
      },
      {
        id: "how-long-to-setup",
        question: "How long does it take to set up my server after payment?",
        answer:
          "Most of our VPS offerings are automated and provisioned instantly or within a few minutes after your payment is confirmed. Dedicated servers may take 12-24 hours depending on hardware availability.",
      },
      {
        id: "do-you-offer-refunds",
        question: "Do you offer a money-back guarantee?",
        answer:
          "Yes, we offer a 48-hour money-back guarantee if there is a technical issue we cannot resolve. Please review our full Refund Policy for exact terms and conditions.",
      },
    ],
  },
  {
    id: "technical",
    category: "Technical Support",
    faqs: [
      {
        id: "can-i-upgrade-later",
        question: "Can I upgrade my server plan later?",
        answer:
          "Absolutely. You can request an upgrade at any time from your client area. Your data will remain intact during the resource allocation process, though a quick reboot will be scheduled.",
      },
      {
        id: "can-i-reinstall-os",
        question: "Can I reinstall or change my Operating System?",
        answer:
          "Yes, you can easily reinstall your OS from the control panel in your client dashboard. We offer Windows Server 2012, 2016, 2019, 2022, and various Linux distributions.",
      },
      {
        id: "what-if-server-is-down",
        question: "What should I do if my RDP cannot connect?",
        answer:
          "First, verify from your client dashboard that your server is powered 'On'. Sometimes it may be applying Windows updates. If it still doesn't respond after 10 minutes, use the 'Hard Reboot' option. If the issue persists, open a support ticket.",
      },
      {
        id: "do-you-backup-data",
        question: "Do you back up my data automatically?",
        answer:
          "We do not provide automatic backups on unmanaged VPS plans. It is strictly your responsibility to maintain off-site backups of any critical data stored on your CloudNode RDP server.",
      },
    ],
  },
  {
    id: "allowed-usage",
    category: "Permitted Use",
    faqs: [
      {
        id: "can-i-run-vpn",
        question: "Can I install a VPN on my CloudNode RDP server?",
        answer:
          "Yes, you can install a VPN (like HMA, ExpressVPN, NordVPN). However, be very careful NOT to disconnect the primary network adapter that gives your RDP its public IP, as doing so will instantly lock you out of the server.",
      },
      {
        id: "is-mining-allowed",
        question: "Is cryptocurrency mining allowed?",
        answer:
          "No intensive cryptocurrency mining is allowed on our VPS or Shared RDP plans as it unfairly degrades disk/CPU performance for other tenants. Dedicated Servers are exempt from this rule.",
      },
      {
        id: "what-happens-if-abused",
        question: "What violates the Terms of Service?",
        answer:
          "Any illegal activity, spamming (mass emailing), port scanning, or hosting malicious files/malware will result in immediate termination of the service without a refund.",
      },
    ],
  },
];
