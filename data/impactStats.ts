import type { TImpactStats } from "@/type";
import {
  Globe2,
  Zap,
  Rocket,
  ShieldCheck,
  Satellite,
  Gift,
  Activity,
  Shield,
} from "lucide-react";

// 4 Stats primarily used on the Hero / Home page UI
export const impactStatsDefault: TImpactStats[] = [
  {
    id: "bt-01",
    value: 5,
    wrapper: { l: "", r: "+" },
    label: "Global Locations",
    desc: "Strategically located premium data centers providing low-latency connections worldwide.",
    icon: Globe2,
    animate: true,
  },
  {
    id: "bt-02",
    value: 99.9,
    wrapper: { l: "", r: "%" },
    label: "Uptime SLA",
    desc: "Enterprise-grade infrastructure backed by our SLA, ensuring your applications are always online.",
    icon: Zap,
    animate: true,
  },
  {
    id: "bt-03",
    value: 20,
    wrapper: { l: "", r: " min" },
    label: "Average Delivery",
    desc: "Lightning fast automated provisioning gets your server online in minutes, not days.",
    icon: Rocket,
    animate: true,
  },
  {
    id: "bt-04",
    value: 24,
    wrapper: { l: "", r: "x7" },
    label: "Expert Support",
    desc: "Around the clock technical assistance from our team of dedicated hosting experts.",
    icon: ShieldCheck,
    animate: true,
  },
];

// Stats About page
export const aboutImpactStats: TImpactStats[] = [
  ...impactStatsDefault,
  {
    id: "bt-05",
    value: 4,
    wrapper: { l: "", r: " Gbps" },
    label: "Max Network Speed",
    desc: "High-throughput premium bandwidth available for demanding network applications.",
    icon: Satellite,
    animate: true,
  },
  {
    id: "bt-06",
    value: 30,
    wrapper: { l: "", r: " min" },
    label: "Free Trial",
    desc: "Test our premium infrastructure before committing to ensure it meets your exact requirements.",
    icon: Gift,
    animate: true,
  },
];

export const securityStats: TImpactStats[] = [
  {
    id: "sec-01",
    value: 10,
    wrapper: { l: "", r: " Gbps" },
    label: "DDoS Mitigation",
    desc: "Inline automated Layer 3/4/7 DDoS protection stopping malicious volumetric attacks instantly.",
    icon: Shield,
    animate: true,
  },
  {
    id: "sec-02",
    value: 99.99,
    wrapper: { l: "", r: "%" },
    label: "Network Availability",
    desc: "Redundant core routing logic guarantees high throughput under immense global traffic loads.",
    icon: Activity,
    animate: true,
  },
];
