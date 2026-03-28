"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { useRef, useEffect } from "react";
import ServerStack from "@/components/illustrations/server-stack";
import Link from "next/link";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function CtaBanner() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading — clip-path reveal (left to right) + fade
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { clipPath: "inset(0 100% 0 0)", opacity: 0 },
          {
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      // Buttons — stagger fade + slide up
      if (buttonsRef.current) {
        gsap.fromTo(
          Array.from(buttonsRef.current.children),
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.12,
            ease: "power3.out",
            delay: 0.35,
            scrollTrigger: {
              trigger: buttonsRef.current,
              start: "top 88%",
              once: true,
            },
          },
        );
      }

      // Server illustration — slide in from right
      if (illustrationRef.current) {
        gsap.fromTo(
          illustrationRef.current,
          { x: 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: illustrationRef.current,
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
    <div className="relative bg-linear-to-br from-primary/20">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container className="relative z-10 flex items-center justify-between gap-6 py-32!">
        <div className="space-y-7">
          <h2
            ref={headingRef}
            className="text-3xl sm:text-4xl lg:text-5xl leading-tight font-bold drop-shadow-[0_2px_12px_rgba(0,0,0,0.2)] max-w-2xl"
          >
            Buy a Full Admin Access RDP server with{" "}
            <span>powerful support.</span>
          </h2>

          <div ref={buttonsRef} className="flex items-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="/pricing">
                Get Started <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-7 border-primary/30 hover:border-primary/70"
              asChild
            >
              <Link href="/contact">
                <MessageCircle className="size-4" /> Contact Us
              </Link>
            </Button>
          </div>
        </div>

        <div
          ref={illustrationRef}
          className="hidden lg:flex items-end justify-start px-32"
        >
          <ServerStack />
        </div>
      </Container>
    </div>
  );
}
