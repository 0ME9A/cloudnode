import type { TFeatureItem } from "@/type";
import {
  Headphones,
  ShieldCheck,
  Zap,
  Globe,
  Network,
  CloudOff,
} from "lucide-react";

export const featureItems: TFeatureItem[] = [
  {
    icon: ShieldCheck,
    title: "Full Admin Access",
    description:
      "Get complete control over your Windows RDP with full administrator privileges — install any software, configure settings, and run any task without restrictions.",
    highlight: "Root-level control",
  },
  {
    icon: Headphones,
    title: "24×7 Expert Support",
    description:
      "Our dedicated support team is available around the clock. Facing an issue? Reach us instantly via live chat, WhatsApp, or ticket and we'll resolve it fast.",
    highlight: "Avg. response < 5 min",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Your RDP server is provisioned and delivered within 20 minutes of payment confirmation. No waiting, no manual setup — ready to use immediately.",
    highlight: "Delivered in ~20 min",
  },
  {
    icon: Globe,
    title: "Global Server Locations",
    description:
      "Choose from server locations across India, Germany, France, Netherlands, USA, and Singapore — pick the region closest to your workflow for the lowest latency.",
    highlight: "6 locations worldwide",
  },
  {
    icon: Network,
    title: "High-Speed Network",
    description:
      "Up to 4 Gbps network speed with unlimited bandwidth on every plan. Stream, download, or run bots without any throttling or data caps.",
    highlight: "Up to 4 Gbps · Unmetered",
  },
  {
    icon: CloudOff,
    title: "99.9% Uptime SLA",
    description:
      "We back every plan with a 99.9% uptime guarantee. Enterprise-grade hardware, redundant power, and proactive monitoring ensure your server is always on.",
    highlight: "SLA-backed guarantee",
  },
];
