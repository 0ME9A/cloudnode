import type { SMINames } from "@/type";
import type { JSX } from "react";
import { SMI } from "@/data/SMI";

export function getSMI(name: string): JSX.Element {
  return SMI[name.toLowerCase() as SMINames];
}
