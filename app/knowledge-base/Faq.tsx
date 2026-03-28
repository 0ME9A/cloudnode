import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { FAQ_DATA } from "@/data/faqs";
import FaqSection from "@/components/FaqSection";

export default function FAQ() {
  return (
    <Container as="section" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <SectionHeader
        label="Got Questions?"
        title={
          <>
            Frequently Asked{" "}
            <span className="text-primary drop-shadow-[0_0_20px_#3466FF66]">
              Questions
            </span>
          </>
        }
        desc="Find answers to common questions about our CloudNode RDP servers, features, and pricing."
        align="c"
      />
      <FaqSection
        data={FAQ_DATA}
        limit={5}
        className="max-w-5xl pt-0! px-0"
        showViewAll
      />
    </Container>
  );
}
