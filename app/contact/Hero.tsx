import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/header";
import Image from "next/image";

export default function AboutHero() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden">
      <div className="absolute size-full bg-background">
        <Image
          src={
            "https://plus.unsplash.com/premium_photo-1661402449857-67d921f61fe6?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={""}
          width={1000}
          height={1000}
          className="size-full object-cover opacity-25"
        />
      </div>

      <Container as={"section"} className="relative z-10">
        <PageHeader
          label="Contact Us"
          title={
            <>
              Get in Touch with{" "}
              <span className="text-primary drop-shadow-[0_0_24px_#3466FF88]">
                Us
              </span>
            </>
          }
          desc={
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Send us an email or fill out the form below and we&apos;ll get back to
              you as soon as we can.
            </p>
          }
          className="pb-0!"
          animate
        />
      </Container>
    </div>
  );
}
