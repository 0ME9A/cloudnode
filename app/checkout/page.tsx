import type { Metadata } from "next";
import { Suspense } from "react";
import CheckoutWizard from "./CheckoutWizard";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your CloudNode RDP server configuration and securely finalize your order.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading checkout...
        </div>
      }
    >
      <CheckoutWizard />
    </Suspense>
  );
}
