import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { KBCategoary } from "@/components/ui/kb-card";
import { CATEGORIES } from "@/data/kb";

export default function TutorialList() {
  return (
    <Container>
      <SectionHeader
        title={<>Browse by Category</>}
        desc={"Explore our organized collections of articles"}
        align="l"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((category) => (
          <KBCategoary key={category.id} {...category} />
        ))}
      </div>
    </Container>
  );
}
