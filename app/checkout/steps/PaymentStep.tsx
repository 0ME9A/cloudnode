"use client";

import type { ICheckoutState } from "@/type";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CreditCard, Wallet, Lock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  isActive: boolean;
  state: ICheckoutState;
  updateState: (updates: Partial<ICheckoutState>) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
};

export default function PaymentStep({
  isActive,
  state,
  updateState,
  onSubmit,
  isSubmitting,
}: Props) {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleDetailedSubmit = () => {
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }
    setCaptchaError(false);
    onSubmit();
  };

  if (!isActive) {
    return (
      <Card className="border-border/40 opacity-50 shadow-none pointer-events-none">
        <div className="px-6 py-4 flex items-center gap-3">
          <div className="size-8 rounded-full bg-muted text-muted-foreground font-bold flex items-center justify-center shrink-0">
            3
          </div>
          <h2 className="text-xl font-semibold text-muted-foreground">
            Payment Method
          </h2>
        </div>
      </Card>
    );
  }

  return (
    <Card className="border-primary/40 shadow-xl shadow-primary/5 overflow-hidden ring-1 ring-primary/20">
      <div className="bg-primary/10 px-6 py-4 border-b border-primary/10 flex items-center gap-3">
        <div className="size-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">
          3
        </div>
        <h2 className="text-xl font-semibold">Payment Method</h2>
      </div>

      <CardContent className="p-6 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CreditCard className="size-5 text-primary" />
            <h3 className="font-medium text-lg">Select How You Want to Pay</h3>
          </div>

          <RadioGroup
            value={state.paymentMethod || ""}
            onValueChange={(val: any) => updateState({ paymentMethod: val })}
            className="grid sm:grid-cols-2 gap-4"
          >
            {[
              {
                id: "razorpay",
                label: "RazorPay",
                desc: "Cards, UPI, Netbanking",
                icon: Wallet,
              },
              {
                id: "crypto",
                label: "Cryptocurrency",
                desc: "BTC, ETH, USDT",
                icon: Lock,
              },
              {
                id: "paypal",
                label: "PayPal",
                desc: "International cards",
                icon: CreditCard,
              },
              {
                id: "perfect-money",
                label: "Perfect Money",
                desc: "Fast & Secure",
                icon: Sparkles,
              },
            ].map((method) => {
              const Icon = method.icon;
              return (
                <Label
                  key={method.id}
                  htmlFor={method.id}
                  className={cn(
                    "cursor-pointer flex flex-col items-start gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50",
                    state.paymentMethod === method.id
                      ? "border-primary bg-primary/5"
                      : "border-muted",
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2 font-semibold">
                      <Icon className="size-4 text-muted-foreground" />
                      {method.label}
                    </div>
                    <RadioGroupItem
                      value={method.id}
                      id={method.id}
                      className="sr-only"
                    />
                    <div
                      className={cn(
                        "size-4 rounded-full border-2",
                        state.paymentMethod === method.id
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/50",
                        "flex items-center justify-center",
                      )}
                    >
                      {state.paymentMethod === method.id && (
                        <div className="size-1.5 rounded-full bg-background" />
                      )}
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground ml-6">
                    {method.desc}
                  </div>
                </Label>
              );
            })}
          </RadioGroup>
        </div>

        <div className="bg-muted/20 p-4 rounded-xl border mt-6">
          <Label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="mt-1 size-4 rounded border-primary text-primary focus:ring-primary"
            />
            <span className="text-sm leading-relaxed text-muted-foreground">
              By placing this order, I verify that I have read and agree to the{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              .
            </span>
          </Label>
        </div>

        <div className="pt-2">
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
            ref={recaptchaRef}
            onChange={(token) => {
              setCaptchaToken(token);
              if (token) setCaptchaError(false);
            }}
          />
          {captchaError && (
            <p className="text-sm font-medium text-destructive mt-2">
              Please complete the reCAPTCHA.
            </p>
          )}
        </div>

        <div className="pt-4">
          <Button
            size="lg"
            className="w-full shadow-xl shadow-primary/20 transition-transform"
            onClick={handleDetailedSubmit}
            disabled={!state.paymentMethod || isSubmitting}
          >
            {isSubmitting ? "Processing Details..." : "Deploy Server Securely"}
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
            <Lock className="size-3" /> 256-bit SSL encrypted & secure checkout
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
