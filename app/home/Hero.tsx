"use client";

import { PricingCardMini } from "@/components/ui/pricing-card";
import { discountAnnouncement } from "@/data/announcement";
import { Container } from "@/components/ui/container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect } from "react";
import { rdpPlans } from "@/data/plans";
import {
  Check,
  MonitorCheck,
  PhoneCall,
  Shield,
  Wifi,
  Zap,
} from "lucide-react";
import ShinyText from "@/components/animate/shiny-text";
import TextType from "@/components/animate/text-type";
import PromoCard from "@/components/ui/promo-card";
import LinkButton from "@/components/ui/link-btn";
import LightRays from "@/components/animate/ogl";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const BULLETS = [
  { icon: Shield, text: "Full Admin Access on every plan" },
  { icon: Zap, text: "Delivery within 20 minutes of payment" },
  { icon: Wifi, text: "Up to 4 Gbps Speed · Unlimited Bandwidth" },
  { icon: MonitorCheck, text: "Windows Server 2025 / 2022 / 2019 / 2016" },
];

import ImpactStats from "@/components/ui/impact-stats";
import { impactStatsDefault } from "@/data/impactStats";

export default function Hero() {
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Check if the preloader has run previously in this session
      const hasPreloaderRun = sessionStorage.getItem(
        "CloudNode RDP_preloader_done",
      );
      // Add a delay to account for the Preloader animation only if it's the first visit
      const animationDelay = hasPreloaderRun ? 0 : 2.4;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: animationDelay,
      });

      // Left column — cascade: badge row → headline → bullets → CTAs → trial note
      if (leftColRef.current) {
        const items = Array.from(leftColRef.current.children) as HTMLElement[];
        tl.fromTo(
          items,
          { y: 48, opacity: 0, filter: "blur(6px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.12,
          },
          0,
        );
      }

      // Right column — plan cards slide in from right with slight Y offset
      if (rightColRef.current) {
        const cards = Array.from(
          rightColRef.current.querySelectorAll<HTMLElement>("a, div.flex"),
        );
        tl.fromTo(
          cards,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.09,
            ease: "back.out(1.3)",
          },
          0.25,
        );
      }

      // Stats bar — fade up after left column
      if (statsRef.current) {
        const cells = Array.from(
          statsRef.current.querySelectorAll<HTMLElement>("div"),
        );
        tl.fromTo(
          cells,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
          },
          0.55,
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex flex-col justify-center overflow-hidden">
      {/* Background light rays */}
      <div className="absolute inset-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#3466FF"
          raysSpeed={1}
          lightSpread={0.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <Container className="relative z-10">
        <div className="py-28 lg:py-36 grid lg:grid-cols-2 gap-6 items-center">
          {/* ── Left column ── */}
          <div ref={leftColRef} className="space-y-8">
            {/* Trust badge */}
            <div className="flex items-center gap-3">
              <Badge>
                <ShinyText
                  text="New10 — 10% off all plans"
                  color="#000"
                  shineColor="#3466FF"
                  speed={3}
                  className="text-sm font-semibold tracking-wide"
                />
              </Badge>
              <Badge
                variant="outline"
                className="border-primary/40 text-primary text-xs px-3 py-1 bg-accent/20"
              >
                🇮🇳 India&apos;s RDP Provider
              </Badge>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight">
                Buy Windows <br className="block 2xl:hidden" /> Server Online{" "}
                <br className="block 2xl:hidden" />
                <span className="inline-flex items-baseline gap-2">
                  <span className="">in</span>
                  <TextType
                    text={[
                      "India",
                      "Germany",
                      "Netherlands",
                      "USA",
                      "Singapore",
                    ]}
                    className="text-primary drop-shadow-[0_0_24px_#3466FF88]"
                    as="span"
                    typingSpeed={65}
                    deletingSpeed={35}
                    pauseDuration={2200}
                  />
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                High-performance Windows RDP servers with full admin access,
                unlimited bandwidth, and 99.9% uptime — starting at just{" "}
                <span className="text-foreground font-semibold">₹599/mo</span>.
              </p>
            </div>

            {/* Bullet features */}
            <ul className="space-y-3">
              {BULLETS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm">
                  <span className="flex items-center justify-center size-6 rounded-full bg-accent/20 border border-primary/30 shrink-0">
                    <Icon className="size-3.5 text-primary" />
                  </span>
                  <span className="text-muted-foreground">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <LinkButton
                link={{
                  id: undefined,
                  href: "/pricing",
                  label: "Get Started",
                  highlight: true,
                  icon: {
                    showIcon: true,
                  },
                }}
              />
              <LinkButton
                link={{
                  href: "/contact",
                  label: "Talk to Sales",
                  orderSwitch: true,
                  icon: {
                    customIcon: PhoneCall,
                    showIcon: true,
                  },
                }}
              />
            </div>

            {/* Free trial note */}
            <p className="flex items-center gap-2 text-xs text-muted-foreground">
              <Check className="size-4 text-primary shrink-0" />
              Free 30-minute trial available on every plan — no credit card
              required
            </p>
          </div>

          {/* ── Right column — Plan cards ── */}
          <div ref={rightColRef} className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-4">
              Available Plans
            </p>
            {rdpPlans.map((plan) => (
              <PricingCardMini key={plan.name} plan={plan} />
            ))}

            {discountAnnouncement && (
              <PromoCard
                code={discountAnnouncement[0].code || ""}
                discount={discountAnnouncement[0].discount || ""}
              />
            )}
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div ref={statsRef} className="">
          <ImpactStats
            stats={impactStatsDefault.slice(0, 4)}
            className="grid-cols-2 md:grid-cols-4 gap-px"
            animated={true}
          />
        </div>
      </Container>
    </section>
  );
}
