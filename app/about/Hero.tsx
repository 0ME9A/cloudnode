"use client";

import { Shield, Zap, Globe, Users } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/header";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const PILLARS = [
  { icon: Shield, label: "Trusted & Secure" },
  { icon: Zap, label: "Blazing Fast" },
  { icon: Globe, label: "Global Locations" },
  { icon: Users, label: "24×7 Support" },
];

import ImpactStats from "@/components/ui/impact-stats";
import { aboutImpactStats } from "@/data/impactStats";

export default function AboutHero() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="absolute size-full bg-background">
        <Image
          src={
            "https://images.unsplash.com/photo-1762163516269-3c143e04175c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={""}
          width={1000}
          height={1000}
          className="size-full object-cover opacity-25"
        />
      </div>

      <Container as={"section"} className="relative z-10">
        <PageHeader
          label={"About Us"}
          title={
            <>
              Everything You Need to{" "}
              <span className="text-primary drop-shadow-[0_0_24px_#3466FF88]">
                Know About Us
              </span>
            </>
          }
          desc={
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              CloudNode RDP provides world-class Windows RDP servers from multiple
              global locations — built for speed, security, and reliability.
            </p>
          }
          className="pb-0!"
          animate
        />
        {/* Pillars row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {PILLARS.map(({ icon: Icon, label }) => (
            <Badge key={label} className="py-1 px-3">
              <Icon /> {label}
            </Badge>
          ))}
        </div>
      </Container>
      <div className="bg-linear-to-r via-primary/20 relative">
        <div className="container mx-auto">
          <ImpactStats
            stats={aboutImpactStats}
            className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px"
            animated={true}
          />
        </div>
      </div>
    </div>
  );
}
