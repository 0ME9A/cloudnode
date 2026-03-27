"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/header";
import { serverLocations } from "@/data/locations";
import { Globe, Wifi } from "lucide-react";
import { Cobe } from "@/components/ui/cobe-globe";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LocationCardV2 } from "@/components/ui/location-card";

gsap.registerPlugin(ScrollTrigger);

const NETWORK_STATS = [
  { label: "Network Speed", value: "Up to 4 Gbps" },
  { label: "Uptime SLA", value: "99.9%" },
  { label: "Bandwidth", value: "Unlimited" },
  { label: "Monitoring", value: "24/7" },
];

export default function Locations() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Location cards — cascade stagger like a grid reveal
      if (cardsRef.current) {
        gsap.fromTo(
          Array.from(cardsRef.current.children),
          { y: 40, opacity: 0, scale: 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            stagger: {
              amount: 0.6,
              grid: "auto",
              from: "start",
            },
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Network stats strip — slide up after cards
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 90%",
              once: true,
            },
          },
        );
      }

      // Globe — scale + fade in
      if (globeRef.current) {
        gsap.fromTo(
          globeRef.current,
          { opacity: 0, scale: 0.85, filter: "blur(8px)" },
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: globeRef.current,
              start: "top 80%",
              once: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-linear-to-b from-primary/10 to-transparent">
      <Container as="section" className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/4 size-[500px] rounded-full bg-primary/5 blur-[120px]" />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
          {/* ─── Left column ─── */}
          <div className="flex flex-col gap-10">
            <SectionHeader
              animate
              label="Global Reach"
              title={
                <>
                  Your Data,{" "}
                  <span className="text-primary drop-shadow-[0_0_20px_#20F5EB66]">
                    Closer to You
                  </span>
                </>
              }
              desc="Choose from 6 optimised server locations worldwide. Low latency, high-speed network with 99.9% uptime — wherever you are."
              align="l"
            />

            {/* Globe (mobile only) */}
            <div className="lg:hidden">
              <Cobe
                variant="auto-draggable"
                locations={serverLocations.map((l) => ({
                  name: l.city,
                  lat: l.coordinates[0],
                  long: l.coordinates[1],
                }))}
                markerColor="#20F5EB"
                glowColor="#20F5EB"
                dark={1}
              />
            </div>

            <div
              ref={cardsRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3"
            >
              {serverLocations.map((location) => (
                <LocationCardV2 key={location.country} location={location} />
              ))}
            </div>

            {/* Network stats strip — single row */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground border-t border-border/40 pt-5"
            >
              {NETWORK_STATS.map(({ label, value }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <Globe className="size-3 text-primary shrink-0" />
                  <span>
                    {label}:{" "}
                    <span className="text-foreground font-medium">{value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ─── Right column: Globe (desktop) ─── */}
          <div ref={globeRef} className="hidden lg:block">
            <Cobe
              variant="auto-draggable"
              locations={serverLocations.map((l) => ({
                name: l.city,
                lat: l.coordinates[0],
                long: l.coordinates[1],
                emoji: "📍",
              }))}
              markerColor="#20F5EB"
              glowColor="#20F5EB"
              dark={1}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
