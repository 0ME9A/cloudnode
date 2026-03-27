import { Activity, Clock, MapPin, Headphones } from "lucide-react";

export type TStatItem = {
  icon: typeof Activity;
  value: string;
  label: string;
  suffix?: string;
};

export const stats: TStatItem[] = [
  {
    icon: Activity,
    value: "99.9",
    suffix: "% Uptime",
    label: "SLA-Backed Guarantee",
  },
  {
    icon: Clock,
    value: "<20",
    suffix: " Min",
    label: "Average Delivery Time",
  },
  {
    icon: MapPin,
    value: "6",
    suffix: "+ Locations",
    label: "Global Server Regions",
  },
  {
    icon: Headphones,
    value: "24/7",
    suffix: "",
    label: "Expert Technical Support",
  },
];
