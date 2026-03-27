"use client";

import type { TSectionHeader } from "@/type";
import type { ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import ShinyText from "../animate/shiny-text";
import LinkButton from "./link-btn";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function header() {
  return null;
}

export function SectionHeader({
  label,
  title,
  desc,
  cta,
  align = "c",
  className,
  animate = false,
}: TSectionHeader) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animate || !ref.current) return;
    const el = ref.current;
    const children = Array.from(el.children) as HTMLElement[];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { y: 36, opacity: 0, filter: "blur(4px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.85,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [animate]);

  const textAlign = {
    l: "text-left",
    r: "text-right ml-auto",
    c: "mx-auto text-center",
  };

  return (
    <header
      ref={ref}
      className={cn("space-y-4 max-w-3xl", textAlign[align], className)}
    >
      {label && (
        <Badge className="inline-block rounded-full border border-primary/30 bg-primary/20 dark:bg-primary/10 px-4 text-sm font-medium mb-6">
          <ShinyText text={label}/>
        </Badge>
      )}
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h2>
      {desc && (
        <div
          className={cn(
            "text-muted-foreground text-lg leading-relaxed",
            align === "c" && "max-w-2xl mx-auto",
            align !== "c" && "max-w-xl",
          )}
        >
          {desc}
        </div>
      )}
      {cta && cta.length > 0 && (
        <div
          className={cn(
            "flex gap-2 sm:gap-4 flex-wrap mt-8",
            align === "c" && "justify-center",
            align === "r" && "justify-end items-end",
          )}
        >
          {cta.map((ctaItem, i) => (
            <LinkButton key={`${ctaItem.id}_${i}`} link={ctaItem} />
          ))}
        </div>
      )}
    </header>
  );
}

export function PageHeader({
  label,
  title,
  desc,
  cta,
  align = "c",
  children,
  animate = false,
  className,
}: TSectionHeader & {
  children?: ReactNode;
}) {
  const textAlign = {
    l: "text-left",
    r: "text-right ml-auto",
    c: "mx-auto text-center",
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <header
      className={cn(
        "max-w-3xl py-32 px-8 space-y-4",
        textAlign[align],
        className,
      )}
      ref={containerRef}
    >
      {label && (
        <Badge className="inline-block rounded-full border border-primary/30 bg-foreground dark:bg-primary/10 px-4 py-1.5 text-sm font-medium mb-6">
          <ShinyText text={label} />
        </Badge>
      )}
      {title && (
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">{title}</h1>
      )}
      {desc && <div className={cn(align !== "c" && "max-w-2xl")}>{desc}</div>}
      <div
        className={cn(
          "flex gap-4 flex-wrap mt-4",
          align === "c" && "justify-center",
          align === "r" && "justify-end items-end",
        )}
      >
        {cta &&
          cta.map((ctaItem) => <LinkButton key={ctaItem.id} link={ctaItem} />)}
        {children}
      </div>
    </header>
  );
}

export function PageHeaderV2({
  label,
  title,
  desc,
  cta,
  align = "c",
  children,
  className,
}: TSectionHeader & {
  children?: ReactNode;
}) {
  const textAlign = {
    l: "text-left",
    r: "text-right ml-auto",
    c: "mx-auto text-center",
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className={cn("relative pt-40 pb-8 px-4 overflow-hidden", className)}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      <header className="relative z-10 text-center" ref={containerRef}>
        {label && (
          <Badge className="inline-block rounded-full border border-primary/30 bg-foreground dark:bg-primary/10 px-4 py-1.5 text-sm font-medium mb-6">
            <ShinyText text={label} />
          </Badge>
        )}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          {title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10">
          {desc}
        </p>
        <div
          className={cn(
            "flex gap-4 flex-wrap mt-4",
            align === "c" && "justify-center",
            align === "r" && "justify-end items-end",
          )}
        >
          {cta &&
            cta.map((ctaItem) => (
              <LinkButton key={ctaItem.id} link={ctaItem} />
            ))}
          {children}
        </div>
      </header>
    </div>
  );
}
