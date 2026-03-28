"use client";

import type { ICheckoutState } from "@/type";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { rdpPlans } from "@/data/plans";
import ConfigureStep from "./steps/ConfigureStep";
import AccountStep from "./steps/AccountStep";
import PaymentStep from "./steps/PaymentStep";
import OrderSummary from "./OrderSummary";
import ShinyText from "@/components/animate/shiny-text";
import { serverLocations } from "@/data/locations";
import Confetti from "react-confetti";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CheckoutWizard() {
  const searchParams = useSearchParams();
  const planQuery = searchParams.get("plan");

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [checkoutState, setCheckoutState] = useState<ICheckoutState>({
    planId: planQuery || "RDP R-4", // Default to base if none provided
    billingCycle: "monthly",
    location: serverLocations[0]?.city || "Mumbai",
    os: "windows-2022",
    additionalIps: 0,
    paymentMethod: null,
    couponCode: null,
  });

  const selectedPlanData =
    rdpPlans.find((p) => p.name === checkoutState.planId) || rdpPlans[0];

  const handleFinalSubmit = () => {
    setIsSubmitting(true);
    // Simulate API call for final checkout sequence
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-24">
        {/* Dynamic Confetti fixed to the client viewport */}
        <div className="fixed inset-0 z-50 pointer-events-none">
          <Confetti
            recycle={false}
            numberOfPieces={800}
            gravity={0.15}
            colors={["#10b981", "#3b82f6", "#6366f1", "#8b5cf6", "#ec4899"]}
          />
        </div>

        <div className="max-w-md w-full mx-auto text-center px-4 relative z-10 animate-in zoom-in-95 duration-700">
          <div className="size-24 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/20 ring-1 ring-emerald-500/20">
            <CheckCircle2 className="size-12" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Deployment Successful!
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            <strong>{checkoutState.location}</strong> is spinning up. We&apos;ve sent
            your credentials to your email inbox.
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2 mx-auto shadow-lg shadow-primary/20 group hover:shadow-primary/40 duration-300"
          >
            Go to Client Dashboard
            <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
        <Container className="pb-0! mt-10">
          {/* Header Section */}
          <div className="mb-8 pb-8">
            <Badge className="inline-block rounded-full border border-primary/30 bg-foreground dark:bg-primary/10 px-4 py-1.5 text-sm font-medium mb-4">
              <ShinyText text="Checkout" />
            </Badge>
            <h1 className="text-3xl font-bold tracking-tight mb-2">
              Complete Your Order
            </h1>
            <p className="text-muted-foreground">
              Configure your server, create your account, and deploy instantly.
            </p>
          </div>
        </Container>
      <Separator className="container mx-auto" />
      <Container>
        <div className="flex flex-col lg:flex-row gap-6 items-start relative">
          {/* Main Wizard Area */}
          <div className="flex-1 w-full space-y-8">
            {/* Step 1: Configure */}
            <ConfigureStep
              isActive={currentStep === 1}
              isCompleted={currentStep > 1}
              state={checkoutState}
              updateState={(updates) =>
                setCheckoutState((prev) => ({ ...prev, ...updates }))
              }
              onNext={() => setCurrentStep(2)}
              onEdit={() => setCurrentStep(1)}
            />

            {/* Step 2: Account */}
            <AccountStep
              isActive={currentStep === 2}
              isCompleted={currentStep > 2}
              onNext={() => setCurrentStep(3)}
              onEdit={() => setCurrentStep(2)}
            />

            {/* Step 3: Payment */}
            <PaymentStep
              isActive={currentStep === 3}
              state={checkoutState}
              updateState={(updates) =>
                setCheckoutState((prev) => ({ ...prev, ...updates }))
              }
              onSubmit={handleFinalSubmit}
              isSubmitting={isSubmitting}
            />
          </div>

          {/* Sticky Sidebar */}
          <div className="w-full lg:w-[400px] sticky top-24 shrink-0">
            <OrderSummary
              state={checkoutState}
              plan={selectedPlanData}
              updateState={(updates) =>
                setCheckoutState((prev) => ({ ...prev, ...updates }))
              }
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
