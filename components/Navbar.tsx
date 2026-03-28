"use client";
import type { TNavMenu } from "@/type";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import { mainNavLinks, mainNavLinksTab, socialMedia } from "@/data/siteData";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import { Container } from "./ui/container";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { getSMI } from "@/lib/smi";
import { cn } from "@/lib/utils";
import Image from "next/image";
import TopBar from "./TopBar";
import Link from "next/link";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const pathName = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);

  // Close mobile menu on route change
  useEffect(() => {
    if (open) setOpen(false);
  }, [pathName, open]);

  // Scroll hide / show (SSR-safe)
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!navRef.current) return;

    const nav = navRef.current;
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Always visible at top
      if (currentScrollY <= 0) {
        nav.style.transform = "translateY(0)";
        lastScrollY = currentScrollY;
        return;
      }

      // Scroll down → hide
      if (currentScrollY > lastScrollY) {
        nav.style.transform = "translateY(-100%)";
      }
      // Scroll up → show
      else {
        nav.style.transform = "translateY(0)";
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={navRef}
      className="fixed top-0 z-50 w-full will-change-transform transition-transform duration-300 ease-out backdrop-blur-md border-b border-border/30"
    >
      {/* <AnnouncementBar /> */}
      <TopBar />
      {/* ── Main navbar ── */}
      <Container as="nav" className="py-3! space-y-0!">
        <div className="flex justify-between gap-4 items-center px-2">
          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-1.5 shrink-0">
            <Image
              src={"/logos/text-logo.png"}
              alt="CloudNode RDP logo"
              width={200}
              height={200}
              className="h-5 sm:h-6 md:h-7 w-auto"
            />
          </Link>

          {/* ── Desktop / Tablet Nav ── */}
          <div className="flex items-center gap-4 flex-1 justify-center">
            {/* Desktop */}
            <div className="hidden xl:flex justify-center">
              <NavMenu
                isMobile={isMobile}
                pathname={pathName}
                navLinks={mainNavLinks}
              />
            </div>
            {/* Tablet */}
            <div className="hidden lg:flex xl:hidden justify-center">
              <NavMenu
                isMobile={isMobile}
                pathname={pathName}
                navLinks={mainNavLinksTab}
              />
            </div>
          </div>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Order Now CTA */}
            <Button size="sm" asChild>
              <Link href="/checkout">
                Order Now <ArrowRight className="size-3.5" />
              </Link>
            </Button>

            {/* Mobile hamburger */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  size="icon"
                  variant="outline"
                  className="lg:hidden border-border/50"
                >
                  <HiMenuAlt3 className="size-5" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full sm:w-96 p-0 flex flex-col"
              >
                {/* Mobile header */}
                <SheetHeader className="px-5 py-4 border-b border-border/40">
                  <SheetTitle asChild>
                    <Link
                      href="/"
                      className="flex items-center gap-1.5 shrink-0"
                    >
                      <Image
                        src={"/logos/text-logo.png"}
                        alt="CloudNode RDP logo"
                        width={200}
                        height={200}
                        className="h-5 sm:h-6 md:h-7 w-auto"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                {/* Mobile nav links */}
                <MobileNav onClose={() => setOpen(false)} />

                {/* Mobile footer — social icons */}
                <SheetFooter className="px-5 py-4 border-t border-border/40 flex justify-center">
                  <div className="flex flex-wrap justify-center gap-1 w-full">
                    {socialMedia.map((item) => (
                      <a
                        key={item.id}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className="hover:bg-primary/15 duration-300 text-primary p-2 rounded-lg"
                      >
                        {getSMI(item.label)}
                      </a>
                    ))}
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </div>
  );
}

/* ─────────────────────────── Mobile nav ─────────────────────────── */
function MobileNav({ onClose }: { onClose: () => void }) {
  const path = usePathname();

  return (
    <div className="flex flex-col flex-1 overflow-y-auto p-4 gap-1">
      {mainNavLinks.map((item) => {
        const isExternal = item.href?.startsWith("http");
        const isActive = isExternal
          ? false
          : item.href === "/"
            ? path === "/"
            : path && item.href && path.startsWith(item.href);

        if (isExternal) {
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium hover:bg-accent transition-colors"
            >
              {item.label}
              <ArrowRight className="size-4 text-muted-foreground" />
            </a>
          );
        }

        return (
          !item.subLinks && (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className={cn(
                "flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium hover:bg-accent transition-colors",
                isActive && "bg-primary/10 text-primary",
              )}
            >
              {item.label}
              {isActive && (
                <span className="size-2 rounded-full bg-primary block" />
              )}
            </Link>
          )
        );
      })}

      {/* CTA block */}
      <div className="mt-4 space-y-2 pt-4 border-t border-border/40">
        <Button asChild size="lg" className="w-full gap-2">
          <Link href={"/checkout"}>
            Order Now <ArrowRight className="size-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-full border-border/50"
        >
          <Link href={"/login"}>Login</Link>
        </Button>
      </div>
    </div>
  );
}

/* ─────────────────────────── Desktop nav menu ─────────────────────── */
type TNavProps = {
  isMobile: boolean;
  pathname: string;
  navLinks: TNavMenu[];
};

function NavMenu({ isMobile, pathname, navLinks }: TNavProps) {
  return (
    <NavigationMenu viewport={isMobile} className="p-1">
      <NavigationMenuList>
        {navLinks.map((item) => {
          const isExternal = item.href?.startsWith("http");
          const isActive = isExternal
            ? false
            : item.href === "/"
              ? pathname === "/"
              : pathname && item.href && pathname.startsWith(item.href);

          return (
            <NavigationMenuItem key={item.id} className="text-sm">
              {item.subLinks ? (
                <>
                  <NavigationMenuTrigger
                    className={cn(
                      "bg-transparent hover:bg-background/60 duration-300 text-foreground! rounded-md!",
                      isActive && "bg-background/75",
                    )}
                  >
                    {item.label}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="border-none">
                    <ul className="grid gap-2 w-50">
                      {item.subLinks.map((sub) => (
                        <li key={sub.id}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={sub.href}
                              className={cn(
                                "block p-3 transition-colors rounded-md",
                                pathname.startsWith(sub.href) &&
                                  "bg-background/75",
                              )}
                            >
                              {sub.label}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : isExternal ? (
                <NavigationMenuLink asChild>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent hover:bg-background/60 duration-300 text-foreground!",
                    )}
                  >
                    {item.label}
                  </a>
                </NavigationMenuLink>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={cn(
                    "bg-transparent hover:bg-background/60 duration-300 text-foreground!",
                    isActive && "bg-background/75",
                  )}
                >
                  <Link
                    href={item.href}
                    className={cn(navigationMenuTriggerStyle())}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
