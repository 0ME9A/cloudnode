import { type LucideIcon } from "lucide-react";
import { type IconType } from "react-icons";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "./card";
import { cn } from "@/lib/utils";
import { Badge } from "./badge";

type FeatureSpecCardProps = {
  feature: {
    icon: IconType | LucideIcon;
    title: string;
    description: string;
    highlight?: string;
  };
  className?: string;
};

export default function FeatureSpecCard({
  feature,
  className,
}: FeatureSpecCardProps) {
  const Icon = feature.icon;

  return (
    <div className={cn("group relative", className)}>
      {/* Connector line for the grid effect */}
      <div className="absolute -left-4 top-0 h-full w-px bg-border/40 hidden sm:block" />

      <Card className="flex items-start gap-4 border-none bg-transparent shadow-none p-0">
        <div className="shrink-0 mt-1">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="size-5" />
          </div>
        </div>
        <CardContent className="space-y-2 p-0">
          <CardTitle className="font-semibold text-lg flex items-center gap-2">
            {feature.title}
          </CardTitle>
          {feature.highlight && (
            <Badge variant={"secondary"} className="">
              <CheckCircle2 className="size-3" />
              {feature.highlight}
            </Badge>
          )}
          <CardDescription className="text-sm text-muted-foreground leading-relaxed">
            {feature.description}
          </CardDescription>
        </CardContent>
      </Card>
    </div>
  );
}

// className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full border border-emerald-400/20"
