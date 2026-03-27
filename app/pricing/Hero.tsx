import { PageHeaderV2 } from "@/components/ui/header";

export default function Hero() {
  return (
    <PageHeaderV2
      label="Transparent. powerful. Instant."
      title={
        <span>
          Simple Pricing, <span className="text-primary">Unmatched Power</span>
        </span>
      }
      desc="No hidden fees. No restrictive contracts. Choose the RDP plan that fits your exact workflow and start compiling, streaming, or trading in under 20 minutes."
    />
  );
}
