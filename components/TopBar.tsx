import { discountAnnouncement } from "@/data/announcement";
import { GoogleTranslate } from "./GoogleTranslate";
import { companyInfo } from "@/data/siteData";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground text-xs">
      <div className="container mx-auto px-6 lg:px-8 flex items-center justify-between h-9 gap-4">
        {/* Left — contact info */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${companyInfo.phone.primary.number}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Phone className="size-3 shrink-0" />
            <span className="hidden sm:inline">
              +91 - {companyInfo.phone.primary.number}
            </span>
          </a>
          <span className="text-primary-foreground/40 hidden sm:inline">|</span>
          <a
            href={`mailto:${companyInfo.email.support}`}
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <Mail className="size-3 shrink-0" />
            <span className="hidden md:inline">
              {companyInfo.email.support}
            </span>
          </a>
        </div>

        {/* Center — promo (desktop only) */}
        <p className="hidden lg:block text-center font-medium tracking-wide animate-pulse animation-duration-[500ms]">
          {discountAnnouncement[0].message}
        </p>

        {/* Right — auth links */}
        <div className="flex items-center gap-3">
          <GoogleTranslate />
          <div className="pl-2 flex gap-3">
            <Link
              href={"/login"}
              className="hover:opacity-80 transition-opacity"
            >
              Login
            </Link>
            <span className="text-primary-foreground/40">|</span>
            <Link
              href={"/register"}
              className="hover:opacity-80 transition-opacity"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
