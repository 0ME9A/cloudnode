import { Container } from "@/components/ui/container";
import { SectionHeader } from "./header";
import { TSectionHeader } from "@/type";
import { ReactNode } from "react";
import LightRays from "../animate/ogl";

type TProps = {
  header: TSectionHeader;
  className?: string;
  children?: ReactNode;
};

export default function CtaBanner({ header, className, children }: TProps) {
  return (
    <div className="relative">
      <div className="absolute w-full h-1/2 bg-accent bottom-0" />

      <div className="p-4">
        <Container
          as={"section"}
          className="relative z-10 flex items-center justify-between gap-6 p-16! md:p-24! lg:p-32! rounded-xl overflow-hidden bg-background border border-primary"
        >
          <div className="absolute inset-0 pointer-events-none size-full bg-primary/10">
            <LightRays
              raysOrigin="top-center"
              raysColor="#3466FF"
              raysSpeed={0.001}
              rayLength={1}
              followMouse={true}
              mouseInfluence={0.8}
              noiseAmount={1}
              distortion={5}
              pulsating={false}
              fadeDistance={1}
              saturation={1}
              className="scale-150 origin-left"
            />
          </div>
          <SectionHeader {...header} className="z-3" />
          {children}
        </Container>
      </div>
    </div>
  );
}
