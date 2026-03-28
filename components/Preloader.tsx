"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const ring1Ref = useRef<HTMLDivElement>(null);
  const ring2Ref = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLHeadingElement>(null);
  const rdpspanRef = useRef<HTMLSpanElement>(null);
  const initializingRef = useRef<HTMLParagraphElement>(null);
  const bootTextRef = useRef<HTMLSpanElement>(null);
  const percentTextRef = useRef<HTMLSpanElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on mount

    const hasLoaded = sessionStorage.getItem("CloudNode RDP_preloader_done");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const ctx = gsap.context(() => {
      // Cool pulsing background rings
      gsap.to(ring1Ref.current, {
        keyframes: [
          { scale: 1, opacity: 0.5 },
          { scale: 1.8, opacity: 0 },
          { scale: 1, opacity: 0.5 },
        ],
        duration: 2.5,
        repeat: -1,
        ease: "power1.inOut",
      });

      gsap.to(ring2Ref.current, {
        keyframes: [
          { scale: 1, opacity: 0.8 },
          { scale: 1.5, opacity: 0 },
          { scale: 1, opacity: 0.8 },
        ],
        duration: 2.5,
        repeat: -1,
        delay: 0.4,
        ease: "power1.inOut",
      });

      // Animated Logo Text
      gsap.from(textContainerRef.current, {
        y: 100,
        duration: 0.7,
        ease: "power3.out",
      });

      gsap.fromTo(
        rdpspanRef.current,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.5, delay: 0.4 },
      );

      // Initializing Text
      gsap.fromTo(
        initializingRef.current,
        { opacity: 0 },
        { opacity: 1, delay: 0.6, duration: 0.5 },
      );

      // Boot sequence texts
      gsap.fromTo(
        [bootTextRef.current, percentTextRef.current],
        { opacity: 0 },
        { opacity: 1, delay: 0.8, duration: 0.5, stagger: 0.1 },
      );
    });

    // Simulate loading progress
    const duration = 1800;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(
        Math.round((currentStep / steps) * 100),
        100,
      );
      setProgress(newProgress);

      // Animate progress bar fill smoothly
      gsap.to(progressFillRef.current, {
        width: `${newProgress}%`,
        duration: 0.1,
        ease: "none",
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure minimum screen time before hiding
        setTimeout(() => {
          gsap.to(containerRef.current, {
            y: "-100%",
            opacity: 0,
            duration: 0.8,
            ease: "power3.inOut",
            onComplete: () => {
              sessionStorage.setItem("CloudNode RDP_preloader_done", "true");
              setLoading(false);
              document.body.style.overflow = "auto";
            },
          });
        }, 400);
      }
    }, intervalTime);

    return () => {
      clearInterval(timer);
      ctx.revert();
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
    >
      <div className="relative flex flex-col items-center">
        {/* Cool pulsing background rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] pointer-events-none">
          <div
            ref={ring1Ref}
            className="absolute inset-0 rounded-full border border-primary/20 opacity-50"
          />
          <div
            ref={ring2Ref}
            className="absolute inset-[40px] rounded-full border border-primary/40 opacity-80"
          />
        </div>

        {/* Animated Logo Text */}
        <div className="mb-2 z-10">
          <h1
            ref={textContainerRef}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground"
          >
            CloudNode
            <span ref={rdpspanRef} className="text-primary inline-block">
              RDP
            </span>
          </h1>
        </div>

        <p
          ref={initializingRef}
          className="text-muted-foreground font-medium tracking-widest text-sm mb-12 z-10 uppercase opacity-0"
        >
          Initializing Workspace
        </p>

        {/* Precision Loading Bar */}
        <div className="flex flex-col w-64 z-10">
          <div className="flex justify-between w-full mb-2 text-xs font-mono text-muted-foreground font-medium">
            <span ref={bootTextRef} className="opacity-0">
              BOOT SEQUENCE
            </span>
            <span ref={percentTextRef} className="opacity-0">
              {progress < 10 ? `0${progress}` : progress}%
            </span>
          </div>
          <div className="h-0.5 w-full bg-muted overflow-hidden">
            <div ref={progressFillRef} className="h-full bg-primary w-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
