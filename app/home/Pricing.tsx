"use client";

import { Zap, Shield, Wifi, Clock } from "lucide-react";
import { discountAnnouncement } from "@/data/announcement";
import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { rdpPlans } from "@/data/plans";
import PricingCard from "@/components/ui/pricing-card";
import PromoCard from "@/components/ui/promo-card";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const ALL_PLAN_INCLUDES = [
  { icon: Shield, text: "Full Admin Access" },
  { icon: Wifi, text: "Unlimited Bandwidth" },
  { icon: Zap, text: "SSD / NVMe Storage" },
  { icon: Clock, text: "Instant Setup (~20 min)" },
];

export default function Pricing() {
  const promoRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Promo banner — slide down and fade in
      if (promoRef.current) {
        gsap.fromTo(
          promoRef.current,
          { y: -24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: promoRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );
      }

      // Pricing cards — stagger with skew correction
      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 60, opacity: 0, skewY: 3 },
          {
            y: 0,
            opacity: 1,
            skewY: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Footer bar — fade up last
      if (footerRef.current) {
        gsap.fromTo(
          footerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 90%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <Container as="section" className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none animate-pulse">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/10 blur-[140px]" />
        </div>
        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <SectionHeader
            animate
            label="Plans & Pricing"
            title={
              <>
                Simple, Transparent{" "}
                <span className="text-primary drop-shadow-[0_0_20px_#3466FF66]">
                  Pricing
                </span>
              </>
            }
            desc="No hidden fees. No contracts. Choose a plan, pay, and get your RDP server in under 20 minutes."
            align="c"
          />

          {/* Promo banner */}
          <div ref={promoRef}>
            {discountAnnouncement && (
              <PromoCard
                code={discountAnnouncement[0].code || ""}
                discount={discountAnnouncement[0].discount || ""}
              />
            )}
          </div>
        </div>
        <div className="relative z-10">
          {/* ── Plan Cards ── */}
          <div
            ref={cardsRef}
            className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {rdpPlans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
        {/* ── All plans include micro-list ── */}
        <footer
          ref={footerRef}
          className="rounded-2xl border border-border/40 bg-background/30 backdrop-blur-sm px-8 py-6 mt-16"
        >
          <p className="text-sm font-semibold text-center mb-5 text-muted-foreground uppercase tracking-widest">
            Every plan includes
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {ALL_PLAN_INCLUDES.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm">
                <Icon className="size-4 text-primary shrink-0" />
                <span className="text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-5">
            All plans include a{" "}
            <span className="text-foreground font-medium">
              free 30-minute trial
            </span>{" "}
            — no credit card required.
          </p>
        </footer>
      </Container>
    </div>
  );
}
