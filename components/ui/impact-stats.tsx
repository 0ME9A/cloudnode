"use client";

import type { TImpactStats } from "@/type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

interface ImpactStatsProps {
  stats: TImpactStats[];
  className?: string;
  itemClassName?: string;
  animated?: boolean;
}

export default function ImpactStats({
  stats,
  className,
  itemClassName,
  animated = true,
}: ImpactStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!animated || !containerRef.current) return;

    const ctx = gsap.context(() => {
      countersRef.current.forEach((counter, idx) => {
        if (!counter) return;

        const stat = stats[idx];
        const hasDecimals = stat.value % 1 !== 0;
        const targetValue = stat.value;
        const rawObj = { val: 0 };

        gsap.to(rawObj, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: counter,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            counter.innerText = hasDecimals
              ? rawObj.val.toFixed(1)
              : Math.round(rawObj.val).toString();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [stats, animated]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative z-10 grid grid-cols-2 gap-px bg-linear-to-r via-primary/10",
        className,
      )}
    >
      <div className="absolute bg-linear-to-r via-primary/40 w-full h-px" />
      {stats.map((stat, idx) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.id}
            className={cn(
              "flex flex-col items-center text-center gap-1 p-8 relative overflow-hidden",
              itemClassName,
            )}
          >
            {Icon && (
              <span className="text-2xl mb-1 mt-2 absolute top-1/4 left-1/2 -translate-x-1/2">
                <Icon className="size-48 text-accent/10 dark:text-accent/5" />
              </span>
            )}
            <span className="text-3xl md:text-4xl font-bold dark:text-primary tracking-tight dark:drop-shadow-primary flex items-center justify-center relative">
              {stat.wrapper?.l && <span>{stat.wrapper.l}</span>}
              <span
                ref={(el) => {
                  countersRef.current[idx] = el;
                }}
              >
                {animated ? "0" : stat.value}
              </span>
              {stat.wrapper?.r && <span>{stat.wrapper.r}</span>}
            </span>
            <span className="text-xs text-muted-foreground leading-tight mt-1">
              {stat.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
