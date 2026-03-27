/**
 * LinkButton
 * -----------------------------
 * A button-styled React Router link.
 * Used for primary CTAs like "Pitch Your Startup" or "View Portfolio".
 *
 * Design intent:
 * - Looks like a button
 * - Behaves like a link
 * - Supports optional trailing icon with hover animation
 */

import type { TLink } from "@/type";
import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LinkButtonProps = {
  link: TLink;
  className?: string;
};

export default function LinkButton({
  link: { orderSwitch = false, ...link },
  className,
}: LinkButtonProps) {
  const { href, label, icon, highlight }: TLink = link;

  const CustomIcon = icon?.customIcon;

  return (
    <Button
      asChild
      size={"lg"}
      variant={highlight ? "default" : "outline"}
      className={cn("hover:bg-accent! hover:text-background duration-300",className)}
    >
      <Link
        href={href}
        className={cn("flex border", orderSwitch ? "flex-row-reverse" : "")}
      >
        {label}

        {link.icon?.showIcon && (
          <span
            className={cn(
              (icon?.className ?? orderSwitch)
                ? "group-hover:-rotate-360"
                : "group-hover:rotate-360",
            )}
          >
            {CustomIcon ? <CustomIcon /> : <ArrowRight />}
          </span>
        )}
      </Link>
    </Button>
  );
}
