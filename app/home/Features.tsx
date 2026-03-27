"use client";

import { MonitorCheck, ArrowRight, Server, CheckCircle2 } from "lucide-react";
import { IconFeatureCardMini } from "@/components/ui/icon-feature-card";
import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { featureItems } from "@/data/features";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const OS_VERSIONS = [
  { label: "2025", color: "from-primary/30 to-primary/10" },
  { label: "2022", color: "from-primary/25 to-primary/8" },
  { label: "2019", color: "from-primary/20 to-primary/5" },
  { label: "2016", color: "from-primary/15 to-primary/5" },
];

const PLAN_INCLUSIONS = [
  "Windows Server 2025 / 2022 / 2019 / 2016",
  "1 Dedicated / Private IP Address",
  "Full Admin Access",
  "SSD / NVME Storage",
  "Control Panel Access",
  "1X Exclusively Allocated Resources",
  "Instant Setup & Delivery",
  "24×7 Technical Support",
];

export default function Features() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Feature cards — stagger scale+fade upward
      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 50, opacity: 0, scale: 0.92 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.75,
            stagger: 0.1,
            ease: "back.out(1.5)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Bento panels — slide in from opposite sides
      if (bentoRef.current) {
        const [left, right] = Array.from(
          bentoRef.current.children,
        ) as HTMLElement[];
        gsap.fromTo(
          left,
          { x: -60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bentoRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
        gsap.fromTo(
          right,
          { x: 60, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.85,
            ease: "power3.out",
            delay: 0.1,
            scrollTrigger: {
              trigger: bentoRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <Container as="section" className="relative">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] rounded-full bg-primary/10 animate-pulse blur-[120px]" />
      </div>

      <div className="relative z-10 space-y-16">
        {/* ── Section Header ── */}
        <SectionHeader
          animate
          label="Why CloudNode RDP?"
          title={
            <>
              Everything You Need,{" "}
              <span className="text-primary drop-shadow-[0_0_20px_#20F5EB66]">
                Right Out of the Box
              </span>
            </>
          }
          desc="CloudNode RDP servers are built for performance, reliability, and ease of use — with no hidden fees or complicated setup."
          align="c"
        />

        {/* ── Feature Cards Grid ── */}
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {featureItems.map((feature) => (
            <IconFeatureCardMini
              key={feature.title}
              feature={{
                title: feature.title,
                desc: feature.description,
                icon: feature.icon,
              }}
            >
              <Badge className="mt-4">{feature.highlight}</Badge>
            </IconFeatureCardMini>
          ))}
        </div>

        {/* ── Bento Row: OS Versions + All-Inclusive Plans ── */}
        <div ref={bentoRef} className="grid lg:grid-cols-2 gap-6">
          {/* OS Versions Panel */}
          <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-8 flex flex-col gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MonitorCheck className="size-5 text-primary" />
                <h3 className="font-semibold text-lg">
                  Popular Windows Server Versions
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Choose your preferred OS version at no extra cost — all plans
                support every version listed below.
              </p>
            </div>

            {/* OS version tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {OS_VERSIONS.map(({ label, color }) => (
                <div
                  key={label}
                  className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-primary/20 bg-linear-to-b ${color} p-4 hover:border-primary/50 hover:scale-105 transition-all duration-200 cursor-default`}
                >
                  {/* Windows-style logo */}
                  <div className="grid grid-cols-2 gap-0.5 size-8">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="rounded-[2px] bg-primary/70" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-foreground">
                    Windows
                  </span>
                  <span className="text-xs text-primary font-bold">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Every Plan Includes Panel */}
          <div className="rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-8 flex flex-col gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Server className="size-5 text-primary" />
                <h3 className="font-semibold text-lg">Every Plan Includes</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                No upsells, no hidden charges. Every RDP plan comes packed with
                these features from day one.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {PLAN_INCLUSIONS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button
                size="sm"
                className="gap-1.5 shadow-[0_0_16px_#20F5EB33] hover:shadow-[0_0_24px_#20F5EB55] transition-all duration-300"
                asChild
              >
                <Link href={"/pricing"}>
                  View All Plans <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
