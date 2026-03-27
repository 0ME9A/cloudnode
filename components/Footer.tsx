"use client";
import { companyInfo, footerSitemap, socialMedia } from "@/data/siteData";
import { paymentMethod } from "@/data/paymentMethod";
import { Separator } from "./ui/separator";
import { Container } from "./ui/container";
import { ModeToggle } from "./mode-toggle";
import { Badge } from "./ui/badge";
import { getSMI } from "@/lib/smi";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Clock,
  Headphones,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const trustBadges = [
  { icon: ShieldCheck, label: "99.9% Uptime" },
  { icon: Clock, label: "24×7 Support" },
  { icon: Headphones, label: "Full Admin Access" },
];

export default function Footer() {
  return (
    <div className="bg-accent">
      {/* ── Main Footer Body ── */}
      <footer className="relative px-4 pb-4">
        <Container>
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="space-y-3">
                <Image
                  src={"/logos/text-logo.png"}
                  alt="CloudNode RDP"
                  width={150}
                  height={150}
                  className="h-8 w-auto drop-shadow-xl drop-shadow-black dark:drop-shadow-white"
                />
                <h3 className="text-2xl font-bold text-primary">
                  {/* {companyInfo.name} */}
                </h3>
                <p className="text-xs font-semibold uppercase tracking-widest">
                  {companyInfo.slogan}
                </p>
                <p className="text-sm leading-relaxed max-w-sm">
                  {companyInfo.about}
                </p>
              </div>

              {/* Trust Badges */}
              <ul className="flex flex-wrap gap-3">
                {trustBadges.map(({ icon: Icon, label }) => (
                  <li key={label}>
                    <Badge
                      variant={"outline"}
                      className="flex items-center gap-1.5 border-primary/20"
                    >
                      <Icon className="size-3.5 shrink-0" />
                      {label}
                    </Badge>
                  </li>
                ))}
              </ul>

              {/* Social Icons */}
              <ul className="flex gap-2">
                {socialMedia
                  .filter((sm) => sm.label !== "Whatsapp")
                  .map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        title={item.label}
                        className="flex items-center justify-center size-9 rounded-lg border border-primary/20 hover:border-primary bg-primary/20 hover:bg-primary transition-all duration-200"
                      >
                        {getSMI(item.label)}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Sitemap Columns */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {footerSitemap.map((group) => (
                <div key={group.id} className="space-y-4">
                  <h4 className="text-base font-semibold text-foreground">
                    {group.title}
                  </h4>
                  <ul className="space-y-2.5 text-sm">
                    {group.links.map((link) => (
                      <li key={link.id}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors duration-200"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="hover:text-primary transition-colors duration-200"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact Column */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">
                Contact
              </h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href={`tel:${companyInfo.phone.primary.code}${companyInfo.phone.primary.number}`}
                    className="flex items-start gap-2.5 hover:text-primary transition-colors duration-200 group"
                  >
                    <Phone className="size-4 mt-0.5 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                    <span>
                      {companyInfo.phone.primary.code}{" "}
                      {companyInfo.phone.primary.number}
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${companyInfo.email.primary}`}
                    className="flex items-start gap-2.5 hover:text-primary transition-colors duration-200 group"
                  >
                    <Mail className="size-4 mt-0.5 shrink-0 text-primary/60 group-hover:text-primary transition-colors" />
                    <span>{companyInfo.email.primary}</span>
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="size-4 mt-0.5 shrink-0 text-primary/60" />
                  <address className="not-italic leading-relaxed">
                    {companyInfo.address.headOffice.fullAddress}
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </Container>

        <Separator className="container mx-auto" />

        {/* ── Payment Methods ── */}
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 py-5! space-y-0!">
          <p className="text-xs font-semibold uppercase tracking-widest shrink-0">
            We Accept
          </p>

          <div className="flex flex-wrap items-center gap-4">
            {paymentMethod.map((pm) => (
              <div
                key={pm.id}
                title={pm.name}
                className="flex items-center justify-center"
              >
                <Image
                  src={pm.image.src}
                  alt={pm.image.alt}
                  width={32}
                  height={32}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Container>

        <Separator className="container mx-auto" />

        {/* ── Bottom Bar ── */}
        <Container className="flex flex-col md:flex-row justify-between items-center py-6! space-y-0! gap-4 text-xs">
          <p className="text-center sm:text-left">{companyInfo.copyRights}</p>
          <ModeToggle />
        </Container>
        <Container className="py-0! overflow-hidden relative">
          <div className="size-full absolute top-0 left-0 bg-linear-to-b to-accent" />
          <div className="text-[15vw] xl:text-[15rem] text-center text-primary/20 leading-none font-extrabold">
            CloudNode RDP
          </div>
        </Container>
      </footer>
    </div>
  );
}
