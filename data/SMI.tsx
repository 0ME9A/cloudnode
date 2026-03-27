import type { SMINames } from "@/type";
import type { JSX } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { SiCrunchbase } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";

export const SMI_KEYS: SMINames[] = [
  "twitter",
  "linkedin",
  "instagram",
  "facebook",
  "youtube",
  "whatsapp",
  "crunchbase",
];

export const SMI: Record<SMINames, JSX.Element> = {
  twitter: <FaXTwitter />,
  linkedin: <FaLinkedinIn />,
  instagram: <IoLogoInstagram />,
  facebook: <FaFacebookF />,
  youtube: <FaYoutube />,
  whatsapp: <FaWhatsapp />,
  crunchbase: <SiCrunchbase />,
};
