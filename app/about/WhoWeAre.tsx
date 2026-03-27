import { Server, ShieldCheck, Headphones, Globe2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { IconFeatureCardMini } from "@/components/ui/icon-feature-card";

const HIGHLIGHTS = [
  {
    icon: Server,
    title: "World-Class Infrastructure",
    desc: "High-performance SSD/NVMe VPS servers hosted in tier-1 data centers across India, Germany, Netherlands, USA, and Singapore.",
  },
  {
    icon: ShieldCheck,
    title: "Full Admin Access",
    desc: "Every RDP plan comes with complete Administrator privileges — you have full control with no restrictions on software or configurations.",
  },
  {
    icon: Headphones,
    title: "Expert 24×7 Support",
    desc: "Our dedicated support team is available around the clock via helpdesk and phone to resolve any issue instantly.",
  },
  {
    icon: Globe2,
    title: "Multiple Locations",
    desc: "Choose from 5+ global server locations to get the lowest latency and best performance for your use case.",
  },
];

export default function WhoWeAre() {
  return (
    <Container as="section" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 space-y-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionHeader
            animate
            label="Who We Are"
            title={
              <>
                Powering Remote Work <br />
                <span className="text-primary drop-shadow-[0_0_20px_#20F5EB66]">
                  Globally
                </span>
              </>
            }
            align="l"
          />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              CloudNode RDP is a product of{" "}
              <span className="text-foreground font-semibold">
                Aazoob Technology Private Limited
              </span>
              , an India-based technology company committed to delivering
              affordable, high-performance RDP solutions worldwide.
            </p>
            <p>
              Our servers are engineered for maximum performance and security.
              Whether you need an RDP for surfing, coding, bot running,
              streaming, or enterprise workloads — CloudNode RDP has a plan for you.
            </p>
            <p>
              From fully private, dedicated resources to instant delivery and
              flexible configurations, we make remote desktop access simple,
              fast, and worry-free.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {HIGHLIGHTS.map((highlight) => (
            <IconFeatureCardMini key={highlight.title} feature={highlight} />
          ))}
        </div>
      </div>
    </Container>
  );
}
