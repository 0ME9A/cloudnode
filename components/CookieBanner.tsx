"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Cookie, X } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("cookie_consent");
    // Show banner after a slight delay for better UX if no consent exists
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setShow(false);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-100 p-4 sm:p-6 pb-6 pointer-events-none flex justify-center transition-all duration-700 ease-in-out transform",
        show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0",
      )}
    >
      <div className="pointer-events-auto w-full max-w-4xl bg-background/90 border border-border shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_0_40px_-10px_rgba(0,0,0,0.7)] rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 relative overflow-hidden backdrop-blur-xl">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />

        <div className="hidden sm:flex shrink-0 p-3 bg-primary/10 text-primary rounded-full mt-1">
          <Cookie className="h-6 w-6" />
        </div>

        <div className="flex-1 space-y-2.5 text-center sm:text-left pt-1">
          <h3 className="text-lg font-bold tracking-tight text-foreground flex items-center justify-center sm:justify-start gap-2">
            <Cookie className="h-5 w-5 sm:hidden text-primary" />
            We Value Your Privacy
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed md:pr-4">
            We use cookies to enhance your browsing experience, serve
            personalized content, and analyze our traffic. By clicking
            &quot;Accept All&quot;, you consent to our use of cookies. Read our{" "}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline font-medium"
            >
              Privacy Policy
            </Link>{" "}
            to learn more.
          </p>
        </div>

        <div className="flex flex-row sm:flex-col gap-3 w-full sm:w-auto shrink-0 mt-2 sm:mt-0">
          <Button
            onClick={accept}
            className="w-full sm:w-36 font-semibold shadow-lg"
          >
            Accept All
          </Button>
          <Button
            onClick={decline}
            variant="outline"
            className="w-full sm:w-36"
          >
            Decline
          </Button>
        </div>

        {/* Mobile close button overlay */}
        <button
          onClick={decline}
          className="absolute top-3 right-3 p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground rounded-full transition-colors sm:hidden"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
