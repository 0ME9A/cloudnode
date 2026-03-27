import type { TPricingPlan } from "@/type";
import { ArrowRight, Check, MonitorCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

type TProps = {
  plan: TPricingPlan;
  className?: string;
};

export default function PricingCard({ plan }: TProps) {
  return (
    <div
      className={`relative flex flex-col rounded-lg border transition-all duration-300 overflow-hidden hover:scale-105 shadow-xl ${
        plan.popular
          ? "border-primary/60 shadow-primary/5"
          : "border-border/50 hover:border-primary/30 hover:shadow-primary/5"
      }`}
    >
      {/* Popular header strip */}
      {plan.popular && (
        <div className="bg-primary px-6 py-2 flex items-center justify-between">
          <span className="text-xs font-semibold text-primary-foreground tracking-wide uppercase">
            Most Popular
          </span>
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-0 text-[10px]">
            Best Value
          </Badge>
        </div>
      )}

      <div className="flex flex-col flex-1 p-6 gap-6 bg-background/40 backdrop-blur-sm">
        {/* Plan name + specs */}
        <div className="space-y-1">
          <p
            className={`text-xs uppercase tracking-widest font-semibold ${
              plan.popular ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {plan.name}
          </p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 pt-2">
            {[
              { label: "RAM", value: plan.ram },
              { label: "CPU", value: plan.cpu },
              { label: "Storage", value: plan.storage },
              { label: "Speed", value: plan.speed },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-[10px] text-muted-foreground/70 uppercase tracking-wider">
                  {label}
                </span>
                <span className="text-xs font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40" />

        {/* Perks */}
        <ul className="space-y-2.5 flex-1">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-xs">
              <Check
                className={`size-3.5 shrink-0 mt-0.5 ${
                  plan.popular ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span className="text-muted-foreground">{perk}</span>
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="space-y-3 pt-2">
          <div className="flex items-baseline gap-1">
            <span
              className={`text-3xl font-extrabold tracking-tight ${
                plan.popular ? "text-primary" : ""
              }`}
            >
              {plan.price}
            </span>
            <span className="text-xs text-muted-foreground">/month</span>
          </div>
          <Button
            size="sm"
            variant={plan.popular ? "default" : "outline"}
            className={`w-full gap-1.5 ${
              plan.popular
                ? "shadow-[0_0_20px_#20F5EB33] hover:shadow-[0_0_32px_#20F5EB55] transition-all duration-300"
                : "border-primary/30 hover:border-primary/60"
            }`}
            asChild
          >
            <Link href={plan.href}>
              Order Now <ArrowRight className="size-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export function PricingCardMini({ plan }: TProps) {
  return (
    <Link
      href={plan.href}
      className={`group flex items-center justify-between rounded-xl border px-5 py-4 transition-all duration-300 backdrop-blur-sm
                  ${
                    plan.popular
                      ? "border-primary/60 bg-primary/10 hover:bg-primary/15 shadow-[0_0_20px_#20F5EB22]"
                      : "border-border/60 bg-background/30 hover:border-primary/40 hover:bg-primary/5"
                  }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`size-10 rounded-lg flex items-center justify-center shrink-0
                    ${plan.popular ? "bg-primary/20 border border-primary/40" : "bg-muted/50 border border-border/50 group-hover:border-primary/30"}`}
        >
          <MonitorCheck
            className={`size-5 ${plan.popular ? "text-primary" : "text-muted-foreground group-hover:text-primary"} transition-colors`}
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm">{plan.name}</span>
            {plan.popular && (
              <Badge className="text-[10px] px-2 py-0 h-4 rounded-full">
                Popular
              </Badge>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-0.5">
            {plan.ram} RAM · {plan.cpu} · {plan.storage} · {plan.speed}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <div className="text-right">
          <p
            className={`font-bold text-base ${plan.popular ? "text-primary" : ""}`}
          >
            {plan.price}
          </p>
          <p className="text-[10px] text-muted-foreground">/month</p>
        </div>
        <ArrowRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}
