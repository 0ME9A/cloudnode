import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { Target, Eye, Heart } from "lucide-react";
import IconFeatureCard from "@/components/ui/icon-feature-card";

const MISSION_ITEMS = [
  {
    id: "a1",
    icon: Target,
    title: "Our Mission",
    desc: "To democratize access to high-performance remote computing by providing affordable, reliable, and feature-rich Windows RDP servers accessible to everyone — from individuals to enterprises.",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    border: "border-primary/40",
  },
  {
    id: "a2",
    icon: Eye,
    title: "Our Vision",
    desc: "To become the most trusted RDP provider in India and globally, known for unmatched uptime, transparent pricing, and world-class customer support.",
    gradient: "from-primary/15 via-primary/8 to-transparent",
    border: "border-primary/30",
  },
  {
    id: "a3",
    icon: Heart,
    title: "Our Values",
    desc: "We believe in honesty, transparency, and putting customers first. No hidden fees, no lock-ins — just straightforward, powerful RDP services that work.",
    gradient: "from-primary/12 via-primary/5 to-transparent",
    border: "border-primary/25",
  },
];

export default function MissionVision() {
  return (
    <Container as="section" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/8 blur-[140px]" />
      </div>

      <div className="relative z-10 space-y-14">
        <SectionHeader
          animate
          label="Our Purpose"
          title={
            <>
              Mission, Vision &{" "}
              <span className="text-primary drop-shadow-[0_0_20px_#20F5EB66]">
                Values
              </span>
            </>
          }
          desc="We started CloudNode RDP with a simple belief — everyone deserves fast, affordable, and secure remote computing."
          align="c"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MISSION_ITEMS.map((mission) => (
            <IconFeatureCard key={mission.id} feature={mission} />
          ))}
        </div>
      </div>
    </Container>
  );
}
