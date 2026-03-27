import type { TMember } from "@/type";
import { Card, CardHeader, CardTitle, CardDescription } from "./card";
import { ChevronRight } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import Image from "next/image";

type TProps = {
  team: TMember;
  className?: string;
};

export default function TeamCard({ team, className }: TProps) {
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
      <CardHeader className="px-4">
        <div className="aspect-square rounded-md overflow-hidden bg-background-secondary mb-4">
          <Image
            src={team.img.src}
            alt={team.img.alt}
            width={500}
            height={500}
            className="size-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="flex justify-between gap-4">
          <div className="space-y-1">
            <CardTitle>{team.name}</CardTitle>
            <CardDescription className="text-sm">{team.role}</CardDescription>
          </div>
          {/* <MemberInfoAlert team={team} /> */}
        </div>
      </CardHeader>
    </Card>
  );
}

export function MemberInfoAlert({ team }: TProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          aria-label={`View profile of ${team.name}`}
          aria-haspopup="dialog"
          className="border size-8 flex items-center justify-center rounded-full transition-transform hover:scale-110"
        >
          <ChevronRight size={18} />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="rounded-4xl">
        <div className="aspect-square rounded-xl overflow-hidden bg-background-secondary mb-4">
          <Image
            src={team.img.src}
            alt={team.img.alt}
            className="size-full object-cover group-hover:scale-110 transition-transform duration-300"
            width={500}
            height={500}
          />
        </div>
        <AlertDialogHeader>
          <AlertDialogTitle>{team.name}</AlertDialogTitle>
          <p className="text-sm">{team.role}</p>
          <AlertDialogDescription>{team.about}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="w-full rounded-xl">
            Close
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
