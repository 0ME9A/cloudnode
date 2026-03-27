import { TLocationItem } from "@/type";
import { Wifi } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./card";
import { Badge } from "./badge";
import { ISO_CODE } from "@/data/locations";

type TProps = TLocationItem & { className?: string };

export default function LocationCard({
  city,
  country,
  flag,
  ping,
  available,
  className,
}: TProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col gap-3 rounded-2xl border border-border/50 bg-background/40 backdrop-blur-sm p-5",
        "hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_24px_#20F5EB0D]",
        "transition-all duration-300",
        className,
      )}
    >
      {/* Flag + live indicator */}
      <div className="flex items-center justify-between">
        <span className="text-3xl leading-none">{flag}</span>
        <span
          className={cn(
            "flex items-center gap-1.5 text-[10px] font-semibold rounded-full px-2.5 py-1 border",
            available
              ? "text-emerald-400 bg-emerald-400/10 border-emerald-400/20"
              : "text-muted-foreground bg-muted border-border",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              available
                ? "bg-emerald-400 animate-pulse"
                : "bg-muted-foreground",
            )}
          />
          {available ? "Online" : "Offline"}
        </span>
      </div>

      {/* City / Country */}
      <div>
        <p className="font-semibold text-base">{city}</p>
        <p className="text-xs text-muted-foreground">{country}</p>
      </div>

      {/* Ping */}
      <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-auto">
        <Wifi className="size-3.5 text-primary shrink-0" />
        <span>
          Avg. latency: <span className="text-primary font-medium">{ping}</span>
        </span>
      </div>
    </div>
  );
}

type TPropsV2 = {
  location: TLocationItem;
  className?: string;
};
export function LocationCardV2({ location, className }: TPropsV2) {
  return (
    <Card className="hover:scale-[1.03] hover:border-primary/40 hover:shadow-[0_0_20px_#20F5EB0D] transition-all duration-300">
      <CardHeader className="pb-2">
        {/* Country code badge instead of emoji flag */}
        <span
          className={cn(
            "inline-flex items-center justify-center w-9 h-6 rounded text-[11px] font-bold tracking-widest mb-2",
            "bg-primary/15 text-accent border border-primary/25",
          )}
        >
          {ISO_CODE[location.country] ??
            location.country.slice(0, 2).toUpperCase()}
        </span>
        <CardTitle className="text-sm font-semibold leading-tight">
          {location.country}
        </CardTitle>
        <CardDescription className="text-xs">{location.city}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-[10px] gap-1 px-2 py-0.5">
            <Wifi className="size-3" />
            {location.ping}
          </Badge>
          <Badge
            variant="outline"
            className="text-[10px] gap-1 px-2 py-0.5 text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
          >
            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {location.available ? "Live" : "Offline"}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
