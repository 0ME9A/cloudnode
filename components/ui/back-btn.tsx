"use client";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

type TProps = {
  name?: string;
  className?: string;
};

export default function BackBtn({ name, className }: TProps) {
  const navigate = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => navigate.back()}
      className={cn("hover:text-foreground", className)}
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      {name || "Go Back"}
    </Button>
  );
}
