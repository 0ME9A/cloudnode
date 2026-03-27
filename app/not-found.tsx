import { ServerIllustration } from "@/components/illustrations/ServerIllustration";
import { Container } from "@/components/ui/container";
import LinkButton from "@/components/ui/link-btn";
import LightRays from "@/components/animate/ogl";

export default function NotFound() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-[85vh] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#20F5EB"
          raysSpeed={1}
          lightSpread={0.6}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.08}
          noiseAmount={0}
          distortion={0}
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <Container className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl px-4 py-16">
        <ServerIllustration />

        <div className="mt-8">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-[0_0_24px_rgba(32,245,235,0.4)]">
            Error 404
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8 text-muted-foreground">
            Sorry, We can't find the page that you searched!
          </h2>

          <div className="flex justify-center">
            <LinkButton
              link={{
                href: "/",
                label: "Return to Homepage",
                highlight: true,
                icon: {
                  showIcon: true,
                },
              }}
            />
          </div>
        </div>
      </Container>
    </main>
  );
}
