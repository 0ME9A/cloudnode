import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type TProps = {
  layers?: number;
  colors?: string[]; // Tailwind bg classes e.g. ["bg-primary", "bg-purple-500"]
  intensity?: "low" | "medium" | "high";
  shape?: "circle" | "rounded" | "square";
  seed?: number; // optional stable randomness
  className?: string;
};

type LayerConfig = {
  size: number;
  top: number;
  left: number;
  blur: number;
  opacity: number;
  duration: number;
  delay: number;
  color: string;
};

export default function Pulse({
  layers = 4,
  colors,
  intensity = "medium",
  shape = "circle",
  seed,
  className,
}: TProps) {
  // Default theme-focused palette
  const defaultColors = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-primary/60",
  ];

  const palette = colors && colors.length > 0 ? colors : defaultColors;

  const intensityConfig = {
    low: { blur: 80, opacity: 0.3 },
    medium: { blur: 120, opacity: 0.4 },
    high: { blur: 160, opacity: 0.5 },
  };

  const config = intensityConfig[intensity];

  const [layerConfigs, setLayerConfigs] = useState<LayerConfig[]>([]);

  useEffect(() => {
    // Deterministic random generator (if seed provided)
    const random = (() => {
      let s = seed ?? Math.random() * 10000;
      return () => {
        s = Math.sin(s) * 10000;
        return s - Math.floor(s);
      };
    })();

    const configs = Array.from({ length: layers }).map(() => {
      const size = 30 + random() * 60; // %
      const top = random() * 80;
      const left = random() * 80;
      const blur = config.blur * (0.6 + random() * 0.8);
      const opacity = config.opacity * (0.6 + random() * 0.8);
      const duration = 2 + random() * 4; // seconds
      const delay = random() * 2;
      const color = palette[Math.floor(random() * palette.length)];

      return {
        size,
        top,
        left,
        blur,
        opacity,
        duration,
        delay,
        color,
      };
    });

    requestAnimationFrame(() => setLayerConfigs(configs));
  }, [layers, palette, intensity, seed]);

  const shapeClass =
    shape === "circle"
      ? "rounded-full"
      : shape === "rounded"
        ? "rounded-3xl"
        : "rounded-none";

  return (
    <div
      className={cn(
        "relative pointer-events-none animate-spin animation-duration-[20s]",
        className,
      )}
    >
      {layerConfigs.map((layer, i) => (
        <div
          key={i}
          className={cn(
            "absolute animate-pulse will-change-transform",
            shapeClass,
            layer.color,
          )}
          style={{
            width: `${layer.size}%`,
            height: `${layer.size}%`,
            top: `${layer.top}%`,
            left: `${layer.left}%`,
            filter: `blur(${layer.blur}px)`,
            opacity: layer.opacity,
            animationDuration: `${layer.duration}s`,
            animationDelay: `${layer.delay}s`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
}
