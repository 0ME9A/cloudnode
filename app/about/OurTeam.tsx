import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { TEAM_MEMBERS } from "@/data/team";
import TeamCard from "@/components/ui/team-card";

export default function OurTeam() {
  const team = TEAM_MEMBERS.flatMap((team) => team.members);

  return (
    <Container as="section" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 size-[400px] rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 space-y-14">
        <SectionHeader
          animate
          label="Meet The Team"
          title={
            <>
              Connect With Our{" "}
              <span className="text-primary drop-shadow-[0_0_20px_#3466FF66]">
                CloudNode RDP Team
              </span>
            </>
          }
          desc="Our passionate team is the backbone of CloudNode RDP — from infrastructure engineers to support specialists, we work tirelessly to keep your servers running perfectly."
          align="c"
        />

        <div className="grid sm:grid-cols-3 gap-6">
          {team.map((member) => (
            <TeamCard key={member.id} team={member} />
          ))}
        </div>
      </div>
    </Container>
  );
}
