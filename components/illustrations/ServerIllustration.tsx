"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export function ServerIllustration({ isError = false }: { isError?: boolean }) {
  const primaryColor = isError ? "#ef4444" : "#20F5EB";
  // const glowColor = isError
  //   ? "rgba(239, 68, 68, 0.5)"
  //   : "rgba(32, 245, 235, 0.5)";

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Abstract Background Blob
      gsap.fromTo(
        ".bg-blob",
        { scale: 0.8, opacity: 0 },
        { scale: 1.5, opacity: 0.2, duration: 1.5, ease: "power2.out" },
      );

      // Animated data packets
      const createTimeline = (
        className: string,
        points: { x: number; y: number }[],
        delay: number,
      ) => {
        const tl = gsap.timeline({ repeat: -1, delay });
        tl.fromTo(
          className,
          { attr: { cx: points[0].x, cy: points[0].y }, opacity: 0 },
          { opacity: 1, duration: 0.2 },
        );
        for (let i = 1; i < points.length; i++) {
          const dx = points[i].x - points[i - 1].x;
          const dy = points[i].y - points[i - 1].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          tl.to(className, {
            attr: { cx: points[i].x, cy: points[i].y },
            duration: dist * 0.006,
            ease: "none",
          });
        }
        tl.to(className, { opacity: 0, duration: 0.2 });
      };

      // Server 1
      createTimeline(
        ".data-packet-1",
        [
          { x: 200, y: 440 },
          { x: 240, y: 460 },
          { x: 370, y: 525 },
          { x: 420, y: 500 },
        ],
        0,
      );
      createTimeline(
        ".data-packet-2",
        [
          { x: 420, y: 500 },
          { x: 370, y: 525 },
          { x: 240, y: 460 },
          { x: 200, y: 440 },
        ],
        1.8,
      );

      // Server 2
      createTimeline(
        ".data-packet-3",
        [
          { x: 420, y: 370 },
          { x: 380, y: 390 },
          { x: 290, y: 435 },
          { x: 420, y: 500 },
        ],
        0.6,
      );
      createTimeline(
        ".data-packet-4",
        [
          { x: 420, y: 500 },
          { x: 290, y: 435 },
          { x: 380, y: 390 },
          { x: 420, y: 370 },
        ],
        2.2,
      );

      // Server 3
      createTimeline(
        ".data-packet-5",
        [
          { x: 560, y: 410 },
          { x: 520, y: 430 },
          { x: 400, y: 490 },
          { x: 420, y: 500 },
        ],
        1.2,
      );
      createTimeline(
        ".data-packet-6",
        [
          { x: 420, y: 500 },
          { x: 400, y: 490 },
          { x: 520, y: 430 },
          { x: 560, y: 410 },
        ],
        3.8,
      );

      // Server 4
      createTimeline(
        ".data-packet-7",
        [
          { x: 560, y: 410 },
          { x: 520, y: 430 },
          { x: 400, y: 490 },
          { x: 420, y: 500 },
        ],
        1.2,
      );
      createTimeline(
        ".data-packet-8",
        [
          { x: 420, y: 500 },
          { x: 400, y: 490 },
          { x: 520, y: 430 },
          { x: 560, y: 410 },
        ],
        2.8,
      );

      // Rack 1 lights
      gsap.utils.toArray<SVGElement>(".rack1-light").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: isError ? 1 : 0.4 },
          {
            opacity: isError ? 0.2 : 1,
            duration: (1 + Math.random()) / 2,
            yoyo: true,
            repeat: -1,
            delay: Math.random(),
          },
        );
      });

      // Rack 2 lights
      gsap.utils.toArray<SVGElement>(".rack2-light").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.3 },
          {
            opacity: 1,
            duration: 1.5 / 2,
            yoyo: true,
            repeat: -1,
            delay: Math.random(),
          },
        );
      });

      // Rack 3 lights
      gsap.utils.toArray<SVGElement>(".rack3-light").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0.5 },
          {
            opacity: 1,
            duration: 2 / 2,
            yoyo: true,
            repeat: -1,
            delay: Math.random(),
          },
        );
      });

      // Broken element spark
      if (isError) {
        gsap.fromTo(
          ".broken-spark",
          { opacity: 0 },
          {
            keyframes: [
              { opacity: 1, duration: 0.25 },
              { opacity: 0, duration: 0.25 },
              { opacity: 0, duration: 2 },
            ],
            repeat: -1,
            ease: "none",
          },
        );
      }

      // Platform dot
      gsap.fromTo(
        ".platform-dot",
        { opacity: 0.2 },
        {
          opacity: 0.8,
          duration: 1,
          yoyo: true,
          repeat: -1,
          ease: "power1.inOut",
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [isError]);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[600px] aspect-4/3 flex items-center justify-center"
    >
      {/* Abstract Background Blob */}
      <svg
        viewBox="0 0 500 500"
        className="bg-blob absolute w-full h-full opacity-20 dark:opacity-40"
      >
        <path
          fill="#1c2b3d"
          d="M407.5 310.5C391 386 313.5 432.5 240.5 412C167.5 391.5 101.5 329.5 95 254.5C88.5 179.5 139 106 209 76.5C279 47 362.5 76 397 142.5C431.5 209 424 235 407.5 310.5Z"
        />
      </svg>

      <svg
        viewBox="0 0 800 600"
        className="relative z-10 w-full h-full drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large 404 / Error floating Text behind */}
        <text
          x="400"
          y="250"
          textAnchor="middle"
          fontFamily="system-ui, sans-serif"
          fontSize="180"
          fontWeight="900"
          opacity="0.1"
          className="fill-primary"
        >
          {isError ? "500" : "404"}
        </text>

        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Network Floor Lines */}
        <g stroke="#ffffff" strokeOpacity="0.1" strokeWidth="2">
          {/* Wire to Server 1 */}
          <path d="M 200 440 L 240 460 L 370 525 L 420 500" />
          {/* Wire to Server 2 */}
          <path d="M 420 370 L 380 390 L 290 435 L 420 500" />
          {/* Wire to Server 3 */}
          <path d="M 560 410 L 520 430 L 400 490 L 420 500" />

          {/* Animated data packets */}
          <circle
            className="data-packet-1"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0}
          />
          <circle
            className="data-packet-2"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0}
          />
          <circle
            className="data-packet-3"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0}
          />
          <circle
            className="data-packet-4"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0}
          />
          <circle
            className="data-packet-5"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0}
          />
          <circle
            className="data-packet-6"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0}
          />
        </g>

        {/* --- Isometric Server Racks --- */}
        {/* Rack 1 (Left) */}
        <g transform="translate(180, 250)">
          {/* Side panel */}
          <path d="M 0 50 L 60 80 L 60 210 L 0 180 Z" fill="#1e293b" />
          {/* Top panel */}
          <path d="M 0 50 L 40 30 L 100 60 L 60 80 Z" fill="#334155" />
          {/* Front panel */}
          <path d="M 60 80 L 100 60 L 100 190 L 60 210 Z" fill="#0f172a" />
          {/* Server blades */}
          {[90, 110, 130, 150, 170, 190].map((y) => (
            <g key={y}>
              <path
                d={`M 65 ${y} L 95 ${y - 15} L 95 ${y - 10} L 65 ${y + 5} Z`}
                fill="#1e293b"
              />
              {/* Blinking lights */}
              <circle
                className="rack1-light"
                cx={75}
                cy={y - 2}
                r="2"
                fill={primaryColor}
                opacity={isError ? 1 : 0.4}
              />
              <circle
                cx={85}
                cy={y - 7}
                r="2"
                fill={isError ? "#ef4444" : "#10b981"}
              />
            </g>
          ))}
        </g>

        {/* Rack 2 (Middle Background) */}
        <g transform="translate(320, 180)">
          <path d="M 0 50 L 60 80 L 60 210 L 0 180 Z" fill="#1e293b" />
          <path d="M 0 50 L 40 30 L 100 60 L 60 80 Z" fill="#334155" />
          <path d="M 60 80 L 100 60 L 100 190 L 60 210 Z" fill="#0f172a" />
          {[90, 110, 130, 150, 170].map((y) => (
            <g key={y}>
              <path
                d={`M 65 ${y} L 95 ${y - 15} L 95 ${y - 10} L 65 ${y + 5} Z`}
                fill="#1e293b"
              />
              <circle
                className="rack2-light"
                cx={75}
                cy={y - 2}
                r="2"
                fill={primaryColor}
                opacity={0.3}
              />
            </g>
          ))}
        </g>

        {/* Rack 3 (Right) */}
        <g transform="translate(460, 220)">
          <path d="M 0 50 L 60 80 L 60 210 L 0 180 Z" fill="#1e293b" />
          <path d="M 0 50 L 40 30 L 100 60 L 60 80 Z" fill="#334155" />
          <path d="M 60 80 L 100 60 L 100 190 L 60 210 Z" fill="#0f172a" />
          {/* Missing blade (Error state representation) */}
          {[90, 110, 150, 170, 190].map((y) => (
            <g key={y}>
              <path
                d={`M 65 ${y} L 95 ${y - 15} L 95 ${y - 10} L 65 ${y + 5} Z`}
                fill="#1e293b"
              />
              <circle
                className="rack3-light"
                cx={75}
                cy={y - 2}
                r="2"
                fill={primaryColor}
                opacity={0.5}
              />
            </g>
          ))}
          {/* Broken element spark if error */}
          {isError && (
            <g className="broken-spark" opacity={0}>
              <path
                d="M 70 135 L 85 130 L 80 140 L 95 135"
                stroke="#ef4444"
                strokeWidth="2"
                fill="none"
                filter="url(#glow)"
              />
            </g>
          )}
        </g>

        {/* Isometric Platform / Base */}
        <g stroke="#ffffff" strokeOpacity="0.05" strokeWidth="1">
          <path d="M 380 500 L 420 480 L 460 500 L 420 520 Z" fill="#0f172a" />
          <path d="M 380 500 L 420 520 L 420 530 L 380 510 Z" fill="#1e293b" />
          <path d="M 420 520 L 460 500 L 460 510 L 420 530 Z" fill="#020617" />
          <circle
            className="platform-dot"
            cx="420"
            cy="500"
            r="4"
            fill={primaryColor}
            filter="url(#glow)"
            opacity={0.2}
          />
        </g>
      </svg>
    </div>
  );
}
