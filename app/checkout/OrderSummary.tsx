"use client";

import type { ICheckoutState, TPricingPlan } from "@/type";
import { BILLING_MULTIPLIERS, OS_OPTIONS } from "./types";
import { Separator } from "@/components/ui/separator";
import { serverLocations } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  Server,
  ShieldCheck,
  Zap,
  Ticket,
  X,
  Loader2,
} from "lucide-react";

// Dummy coupon database for validation
const VALID_COUPONS: Record<
  string,
  { type: "percent" | "fixed"; value: number; desc: string }
> = {
  SAVE20: { type: "percent", value: 20, desc: "20% Off" },
  WELCOME500: { type: "fixed", value: 500, desc: "₹500 Off First Order" },
};

export default function OrderSummary({
  state,
  plan,
  updateState,
}: {
  state: ICheckoutState;
  plan: TPricingPlan;
  updateState: (updates: Partial<ICheckoutState>) => void;
}) {
  const [couponInput, setCouponInput] = useState("");
  const [couponStatus, setCouponStatus] = useState<
    "idle" | "loading" | "error" | "success"
  >("idle");
  const [couponMsg, setCouponMsg] = useState("");

  // Parsing the base price assuming format "₹599" -> 599
  const numPrice = parseInt(plan.price.replace(/\D/g, ""));
  const multiplier = BILLING_MULTIPLIERS[state.billingCycle];
  const cycleMonths = multiplier; // simplified

  const baseCost = numPrice * multiplier;
  const osData = OS_OPTIONS.find((o) => o.id === state.os)!;
  const osCost = osData.price * multiplier;

  const annualDiscount =
    state.billingCycle === "annually" ? baseCost * 0.15 : 0; // 15% off annual
  let subtotal = baseCost + osCost - annualDiscount;

  const locData = serverLocations.find((l) => l.city === state.location);

  // Calculate coupon discount
  let couponDiscount = 0;
  if (state.couponCode && VALID_COUPONS[state.couponCode]) {
    const coupon = VALID_COUPONS[state.couponCode];
    if (coupon.type === "percent") {
      couponDiscount = subtotal * (coupon.value / 100);
    } else {
      couponDiscount = coupon.value;
    }
    // Prevent total going below 0
    if (couponDiscount > subtotal) couponDiscount = subtotal;
  }

  const total = subtotal - couponDiscount;

  const handleApplyCoupon = () => {
    if (!couponInput.trim()) return;

    setCouponStatus("loading");
    setCouponMsg("");

    // Simulate API call
    setTimeout(() => {
      const code = couponInput.trim().toUpperCase();
      if (VALID_COUPONS[code]) {
        updateState({ couponCode: code });
        setCouponStatus("success");
        setCouponMsg(`Coupon applied: ${VALID_COUPONS[code].desc}`);
      } else {
        setCouponStatus("error");
        setCouponMsg("Invalid or expired coupon code");
      }
    }, 800);
  };

  const handleRemoveCoupon = () => {
    updateState({ couponCode: null });
    setCouponInput("");
    setCouponStatus("idle");
    setCouponMsg("");
  };

  return (
    <Card className="border-primary/20 bg-background/50 backdrop-blur-xl shadow-2xl shadow-primary/5 sticky top-28">
      <CardHeader className="bg-primary/5 pb-6 pt-2">
        <CardTitle className="flex justify-between items-end">
          <span className="text-xl">Order Summary</span>
        </CardTitle>
        <div className="flex items-center gap-3 mt-4">
          <div className="size-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
            <Server className="size-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg leading-tight">{plan.name}</h3>
            <p className="text-sm text-muted-foreground">
              {plan.ram} RAM · {plan.cpu} · {plan.storage}
            </p>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-6 space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">
            Base Server ({cycleMonths} {cycleMonths > 1 ? "Months" : "Month"})
          </span>
          <span className="font-medium">₹{baseCost.toLocaleString()}</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">OS: {osData.label}</span>
          <span className="font-medium">
            {osCost === 0 ? "Free" : `₹${osCost.toLocaleString()}`}
          </span>
        </div>

        {locData && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground whitespace-nowrap overflow-hidden text-ellipsis mr-2">
              Datacenter
            </span>
            <span className="font-medium flex items-center gap-1.5 shrink-0">
              <span className="text-base leading-none">{locData.flag}</span>
              {locData.city}, {locData.country}
            </span>
          </div>
        )}

        {annualDiscount > 0 && (
          <div className="flex justify-between text-sm text-emerald-500 font-medium">
            <span>Annual Discount (15%)</span>
            <span>- ₹{annualDiscount.toLocaleString()}</span>
          </div>
        )}

        {couponDiscount > 0 && (
          <div className="flex justify-between text-sm text-emerald-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Ticket className="size-3.5" /> Coupon ({state.couponCode})
            </span>
            <span>- ₹{couponDiscount.toLocaleString()}</span>
          </div>
        )}
      </CardContent>

      <Separator className="opacity-50" />

      {/* Coupon Field Section */}
      <CardContent className="py-5 bg-background">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Promo Code</span>
          </div>

          {state.couponCode ? (
            <div className="flex items-center justify-between bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                <CheckCircle2 className="size-4" />
                {state.couponCode} Applied
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="size-6 text-muted-foreground hover:text-destructive"
                onClick={handleRemoveCoupon}
              >
                <X className="size-4" />
              </Button>
            </div>
          ) : (
            <div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter code (e.g. SAVE20)"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  disabled={couponStatus === "loading"}
                  className="h-10 text-sm"
                  onKeyDown={(e) => e.key === "Enter" && handleApplyCoupon()}
                />
                <Button
                  variant="outline"
                  className="h-10 px-4 shrink-0 transition-all border-primary/30 hover:bg-primary hover:text-primary-foreground"
                  onClick={handleApplyCoupon}
                  disabled={couponStatus === "loading" || !couponInput.trim()}
                >
                  {couponStatus === "loading" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Apply"
                  )}
                </Button>
              </div>
              {couponStatus === "error" && (
                <p className="text-xs text-destructive mt-2 ml-1">
                  {couponMsg}
                </p>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <Separator className="opacity-50" />

      <CardContent className="py-4 space-y-3 bg-muted/20">
        <ul className="text-xs text-muted-foreground space-y-2">
          <li className="flex items-center gap-2">
            <Zap className="size-3.5 text-primary" /> Instant Delivery (~20 Min)
          </li>
          <li className="flex items-center gap-2">
            <ShieldCheck className="size-3.5 text-primary" /> Full Administrator
            Access
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="size-3.5 text-primary" /> Unmetered up to{" "}
            {plan.speed}
          </li>
        </ul>
      </CardContent>

      <Separator className="opacity-50" />

      <CardFooter className="flex flex-col pt-6 pb-8 gap-4 bg-primary/5">
        <div className="flex justify-between items-end w-full">
          <span className="text-sm font-medium">Total Due Today</span>
          <div className="text-right">
            <span className="text-3xl font-bold text-primary tracking-tight">
              ₹{total.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground block mt-0.5">
              Includes taxes & fees
            </span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
