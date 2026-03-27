export const BILLING_MULTIPLIERS = {
  monthly: 1,
  quarterly: 3, // Typically 3 months, maybe a small discount
  "semi-annually": 6, // 6 months
  annually: 12, // 12 months with larger discount
};

// Base config
export const OS_OPTIONS = [
  { id: "windows-2016", label: "Windows Server 2016", price: 0 },
  { id: "windows-2019", label: "Windows Server 2019", price: 0 },
  { id: "windows-2022", label: "Windows Server 2022", price: 0 },
  { id: "windows-2025", label: "Windows Server 2025", price: 0 },
] as const;
