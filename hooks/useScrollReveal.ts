"use client";

import { useEffect, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealOptions {
  /** CSS selector for the animated elements, relative to container */
  selector?: string;
  /** Stagger delay in seconds between each element */
  stagger?: number;
  /** ScrollTrigger start position, default "top 85%" */
  start?: string;
  /** Duration in seconds, default 0.8 */
  duration?: number;
  /** GSAP easing, default power3.out */
  ease?: string;
  /** Extra delay before the animation starts */
  delay?: number;
}

/**
 * Attach GSAP ScrollTrigger scroll-reveal to a container ref.
 * All matched elements inside the container animate from `fromVars` to natural state.
 */
export function useScrollReveal<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  fromVars: gsap.TweenVars,
  options: ScrollRevealOptions = {},
) {
  const {
    selector = ":scope > *",
    stagger = 0,
    start = "top 85%",
    duration = 0.8,
    ease = "power3.out",
    delay = 0,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements =
      selector === "__self__"
        ? [container]
        : Array.from(container.querySelectorAll<HTMLElement>(selector));

    if (!elements.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        elements,
        { ...fromVars },
        {
          y: 0,
          x: 0,
          opacity: 1,
          scale: 1,
          skewX: 0,
          clipPath: "inset(0 0% 0 0)",
          duration,
          stagger,
          ease,
          delay,
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

/**
 * Register ScrollTrigger once in client contexts (call at the top of a component file).
 * Idempotent — safe to call multiple times.
 */
export function registerScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);
}
