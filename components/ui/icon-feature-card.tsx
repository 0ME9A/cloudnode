import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import type { TLink } from "@/type";
import { ChevronRight } from "lucide-react";
import { cn, padZero } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import Link from "next/link";

type TFeature = {
  id?: string;
  title: string;
  desc?: string;
  action?: TLink;
  icon: IconType;
};

type TProps = {
  feature: TFeature;
  children?: ReactNode;
  className?: string;
};

export default function IconFeatureCard({
  feature,
  children,
  className,
}: TProps) {
  const Icon = feature.icon;
  const action = feature.action;

  return (
    <Card
      className={cn(
        "group pt-0 gap-0 bg-background",
        "shadow-2xl shadow-primary/10 hover:shadow-primary/20",
        "transition-transform duration-300 hover:-translate-y-2",
        "border border-border/50 bg-background/40 backdrop-blur-sm hover:border-primary/40 hover:bg-primary/5",
        className,
      )}
    >
      <div className="p-6 aspect-square">
        <div className="size-full flex items-center justify-center rounded-xl bg-linear-to-t from-background-secondary">
          <Icon
            strokeWidth={1}
            className="text-primary/20 size-32 sm:size-24 lg:size-32 xl:size-48"
          />
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">{feature.title}</CardTitle>
        {feature.desc && <CardDescription>{feature.desc}</CardDescription>}
        {action && (
          <CardAction>
            <Link
              href={action?.href}
              aria-label={action.label}
              className="border size-8 flex items-center justify-center rounded-full transition-transform hover:scale-110"
            >
              <ChevronRight size={18} />
            </Link>
          </CardAction>
        )}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  );
}

export function IconFeatureCardMini({ feature, children, className }: TProps) {
  const Icon = feature.icon;
  const action = feature.action;

  return (
    <Card
      className={cn(
        "group gap-0 group relative bg-background/40 backdrop-blur-sm hover:bg-primary/5",
        "shadow-2xl shadow-primary/10 hover:shadow-primary/20",
        "transition-all duration-300 hover:-translate-y-2",
        "border border-border/50 hover:border-primary/40",
        className,
      )}
    >
      {action && (
        <CardAction className="absolute top-6 right-6 z-1">
          <Link
            href={action?.href}
            aria-label={action.label}
            className="border size-8 flex items-center justify-center rounded-full transition-transform hover:scale-110"
          >
            <ChevronRight size={18} />
          </Link>
        </CardAction>
      )}
      <CardHeader>
        <span className="flex items-center justify-center size-10 rounded-xl bg-primary/15 border border-primary/30 group-hover:bg-primary/20 transition-colors">
          <Icon size={18} />
        </span>

        <CardTitle className="mt-4 leading-snug">{feature.title}</CardTitle>
        {feature.desc && <CardDescription>{feature.desc}</CardDescription>}
      </CardHeader>
      {children && (
        <CardContent className="mt-2 space-y-2!">{children}</CardContent>
      )}
    </Card>
  );
}

export function NumberedIconFeatureCard({
  feature,
  index,
  className,
}: TProps & { index: number }) {
  const Icon = feature.icon;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-4xl bg-background py-6",
        "transition-all duration-300",
        "shadow-2xl shadow-primary/10 hover:shadow-primary/20",
        className,
      )}
    >
      {typeof index === "number" && (
        <div className="flex flex-col items-center absolute right-6 bottom-0">
          <span className="text-[6rem] text-muted-foreground/10 font-black">
            {padZero(index + 1)}
          </span>
          <div className="h-full w-px bg-background-secondary mt-2" />
        </div>
      )}

      <CardHeader className="flex gap-4 w-full">
        <span className="size-10 rounded-full bg-background-secondary flex items-center justify-center shrink-0">
          <Icon size={18} className="text-primary" />
        </span>

        <CardTitle className="leading-snug mt-3">{feature.title}</CardTitle>
      </CardHeader>
    </Card>
  );
}
