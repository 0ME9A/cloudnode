"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Check,
  ChevronRight,
  Computer,
  Receipt,
  Edit2,
  CalendarDays,
  MapPin,
} from "lucide-react";
import type { ICheckoutState } from "@/type";
import { serverLocations } from "@/data/locations";
import { OS_OPTIONS } from "../types";
import { cn } from "@/lib/utils";

type Props = {
  isActive: boolean;
  isCompleted: boolean;
  state: ICheckoutState;
  updateState: (updates: Partial<ICheckoutState>) => void;
  onNext: () => void;
  onEdit: () => void;
};

export default function ConfigureStep({
  isActive,
  isCompleted,
  state,
  updateState,
  onNext,
  onEdit,
}: Props) {
  if (isCompleted && !isActive) {
    // Collapsed completed view
    return (
      <Card
        className="border-primary/20 bg-background/50 hover:bg-primary/5 transition-colors cursor-pointer shadow-sm"
        onClick={onEdit}
      >
        <CardContent className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center shrink-0">
              <Check className="size-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Server Configuration</h3>
              <p className="text-sm text-muted-foreground mt-0.5 capitalize">
                {state.billingCycle} ·{" "}
                {OS_OPTIONS.find((o) => o.id === state.os)?.label}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground"
          >
            <Edit2 className="size-4" /> Edit
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!isActive) return null;

  // Active configuration view
  return (
    <Card className="border-primary/40 shadow-xl shadow-primary/5 overflow-hidden ring-1 ring-primary/20">
      <div className="bg-primary/10 px-6 py-4 border-b border-primary/10 flex items-center gap-3">
        <div className="size-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center shrink-0">
          1
        </div>
        <h2 className="text-xl font-semibold">Configure Your Server</h2>
      </div>

      <CardContent className="p-6 space-y-10">
        {/* Billing Cycle Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <CalendarDays className="size-5 text-primary" />
            <h3 className="font-medium text-lg">Choose Billing Cycle</h3>
          </div>

          <RadioGroup
            value={state.billingCycle}
            onValueChange={(val: any) => updateState({ billingCycle: val })}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {[
              { id: "monthly", label: "Monthly", desc: "Pay as you go" },
              {
                id: "quarterly",
                label: "Quarterly",
                desc: "Billed every 3 months",
              },
              {
                id: "semi-annually",
                label: "Semi-Annually",
                desc: "Billed every 6 months",
              },
              { id: "annually", label: "Annually", desc: "15% Discount" },
            ].map((cycle) => (
              <Label
                key={cycle.id}
                htmlFor={cycle.id}
                className={cn(
                  "cursor-pointer flex flex-col items-start gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50",
                  state.billingCycle === cycle.id
                    ? "border-primary bg-primary/5"
                    : "border-muted",
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="font-semibold capitalize">{cycle.label}</div>
                  <RadioGroupItem
                    value={cycle.id}
                    id={cycle.id}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "size-4 rounded-full border-2",
                      state.billingCycle === cycle.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/50",
                      "flex items-center justify-center",
                    )}
                  >
                    {state.billingCycle === cycle.id && (
                      <div className="size-1.5 rounded-full bg-background" />
                    )}
                  </div>
                </div>
                <div
                  className={cn(
                    "text-xs",
                    cycle.id === "annually"
                      ? "text-emerald-500 font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  {cycle.desc}
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Server Location Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <MapPin className="size-5 text-primary" />
            <h3 className="font-medium text-lg">Server Location</h3>
          </div>

          <RadioGroup
            value={state.location || ""}
            onValueChange={(val: string) => updateState({ location: val })}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {serverLocations.map((loc) => (
              <Label
                key={loc.city}
                htmlFor={`loc-${loc.city}`}
                className={cn(
                  "cursor-pointer flex flex-col items-start gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50",
                  state.location === loc.city
                    ? "border-primary bg-primary/5"
                    : "border-muted",
                  !loc.available && "opacity-50 pointer-events-none grayscale",
                )}
              >
                <div className="flex w-full items-center justify-between">
                  <div className="flex items-center gap-2 font-semibold">
                    <span className="text-xl leading-none">{loc.flag}</span>
                    {loc.city}, {loc.country}
                  </div>
                  <RadioGroupItem
                    value={loc.city}
                    id={`loc-${loc.city}`}
                    className="sr-only"
                    disabled={!loc.available}
                  />
                  <div
                    className={cn(
                      "size-4 rounded-full border-2",
                      state.location === loc.city
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/50",
                      "flex items-center justify-center",
                    )}
                  >
                    {state.location === loc.city && (
                      <div className="size-1.5 rounded-full bg-background" />
                    )}
                  </div>
                </div>
                <div className="text-xs text-muted-foreground ml-8 flex items-center justify-between w-[calc(100%-2rem)]">
                  <span>Ping: {loc.ping}</span>
                  {!loc.available && (
                    <span className="text-destructive font-medium">
                      Sold Out
                    </span>
                  )}
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Operating System Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Computer className="size-5 text-primary" />
            <h3 className="font-medium text-lg">Operating System</h3>
          </div>

          <RadioGroup
            value={state.os}
            onValueChange={(val: any) => updateState({ os: val })}
            className="grid sm:grid-cols-2 gap-4"
          >
            {OS_OPTIONS.map((os) => (
              <Label
                key={os.id}
                htmlFor={os.id}
                className={cn(
                  "cursor-pointer flex items-center justify-between rounded-xl border-2 p-4 transition-all hover:bg-muted/50",
                  state.os === os.id
                    ? "border-primary bg-primary/5"
                    : "border-muted",
                )}
              >
                <div className="flex items-center gap-3">
                  <RadioGroupItem
                    value={os.id}
                    id={os.id}
                    className="sr-only"
                  />
                  <div
                    className={cn(
                      "size-4 rounded-full border-2",
                      state.os === os.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/50",
                      "flex items-center justify-center",
                    )}
                  >
                    {state.os === os.id && (
                      <div className="size-1.5 rounded-full bg-background" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">{os.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {os.price === 0 ? "Included Free" : `+ ₹${os.price}`}
                    </div>
                  </div>
                </div>
              </Label>
            ))}
          </RadioGroup>
        </div>

        {/* Action Bar */}
        <div className="pt-4 flex justify-end">
          <Button size="lg" onClick={onNext}>
            Continue to Account <ChevronRight className="size-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
