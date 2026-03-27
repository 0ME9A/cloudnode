import { TLocationItem } from "@/type";

export const serverLocations: TLocationItem[] = [
  {
    city: "Mumbai",
    country: "India",
    flag: "🇮🇳",
    ping: "~2ms",
    available: true,
    coordinates: [19.076, 72.8777],
  },
  {
    city: "Frankfurt",
    country: "Germany",
    flag: "🇩🇪",
    ping: "~10ms",
    available: true,
    coordinates: [50.1109, 8.6821],
  },
  {
    city: "Paris",
    country: "France",
    flag: "🇫🇷",
    ping: "~12ms",
    available: true,
    coordinates: [48.8566, 2.3522],
  },
  {
    city: "Amsterdam",
    country: "Netherlands",
    flag: "🇳🇱",
    ping: "~11ms",
    available: true,
    coordinates: [52.3676, 4.9041],
  },
  {
    city: "New York",
    country: "USA",
    flag: "🇺🇸",
    ping: "~85ms",
    available: true,
    coordinates: [40.7128, -74.006],
  },
  {
    city: "Singapore",
    country: "Singapore",
    flag: "🇸🇬",
    ping: "~30ms",
    available: true,
    coordinates: [1.3521, 103.8198],
  },
];

export const ISO_CODE: Record<string, string> = {
  India: "IN",
  Germany: "DE",
  France: "FR",
  Netherlands: "NL",
  USA: "US",
  Singapore: "SG",
};
