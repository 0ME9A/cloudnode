"use client";

import { otherAnnouncement } from "@/data/announcement";
import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function AnnouncementBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeAnnouncement = otherAnnouncement.filter(
    (announcement) => announcement.active,
  );

  useEffect(() => {
    if (!scrollRef.current || !activeAnnouncement.length) return;

    let ctx = gsap.context(() => {
      // Create a seamless loop animation moving horizontally to -50%
      const animation = gsap.to(scrollRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 60, // Decrease for faster scrolling, increase for slower
        repeat: -1,
      });

      // Pause on hover
      scrollRef.current?.addEventListener("mouseenter", () =>
        animation.pause(),
      );
      scrollRef.current?.addEventListener("mouseleave", () => animation.play());
    }, scrollRef);

    return () => ctx.revert();
  }, [activeAnnouncement.length]);

  if (!activeAnnouncement.length) return null;

  // We group multiple renders so that the track is wide enough on all screens
  const renderAnnouncements = () =>
    activeAnnouncement.map((announcement, idx) => (
      <span
        key={announcement.id || idx}
        className="mx-8 inline-flex items-center"
      >
        <span className="animate-pulse inline-block size-1.5 rounded-full bg-primary mr-2 mb-0.5" />
        {announcement.message}{" "}
        {announcement.code && (
          <>
            <span className="ml-1">Use code</span>{" "}
            <span className="font-bold text-foreground tracking-widest bg-primary/10 border border-primary/30 rounded px-1.5 py-0.5 mx-1">
              {announcement.code}
            </span>{" "}
          </>
        )}
        {announcement.href && announcement.cta && (
          <Link
            href={announcement.href}
            target="_blank"
            className="text-primary font-semibold hover:underline ml-1 underline-offset-4"
          >
            {announcement.cta}
          </Link>
        )}
      </span>
    ));

  return (
    <div className="relative bg-primary/10 border-b border-primary/20 py-2.5 text-sm overflow-hidden flex whitespace-nowrap">
      {/* Animated glow line */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/60 to-transparent z-10 pointer-events-none" />

      <div
        ref={scrollRef}
        className="flex w-max text-muted-foreground select-none"
      >
        <div className="flex items-center flex-nowrap">
          {renderAnnouncements()}
          {renderAnnouncements()}
          {renderAnnouncements()}
          {renderAnnouncements()}
        </div>
        <div className="flex items-center flex-nowrap">
          {renderAnnouncements()}
          {renderAnnouncements()}
          {renderAnnouncements()}
          {renderAnnouncements()}
        </div>
      </div>
    </div>
  );
}
