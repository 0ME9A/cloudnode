"use client";

import { ServerIllustration } from "@/components/illustrations/ServerIllustration";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import LinkButton from "@/components/ui/link-btn";
import LightRays from "@/components/animate/ogl";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Global Error Caught:", error);
  }, [error]);

  return (
    <main className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ef4444"
          raysSpeed={1.5}
          lightSpread={0.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0}
          distortion={0}
          pulsating={true}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-4 py-16">
        <ServerIllustration isError={true} />

        <div className="mt-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_24px_rgba(239,68,68,0.4)]">
            System Error
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-muted-foreground">
            Something went wrong while processing your request.
          </h2>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Button variant={"destructive"} onClick={() => reset()}>
              Try Again
            </Button>

            <LinkButton
              link={{
                href: "/",
                label: "Return to Homepage",
              }}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
