"use client";

import { SectionHeader } from "@/components/ui/header";
import { Container } from "@/components/ui/container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { FAQ_DATA } from "@/data/faqs";
import FaqSection from "@/components/FaqSection";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!accordionRef.current) return;

    const ctx = gsap.context(() => {
      // Target each AccordionItem via the wrapper div's direct children
      gsap.fromTo(
        Array.from(
          accordionRef.current!.querySelectorAll<HTMLElement>(":scope > div"),
        ),
        { y: 30, opacity: 0, x: -10 },
        {
          y: 0,
          opacity: 1,
          x: 0,
          duration: 0.65,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: accordionRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );
    }, accordionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <Container as="section" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-primary/10 blur-[140px]" />
      </div>

      <SectionHeader
        animate
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
