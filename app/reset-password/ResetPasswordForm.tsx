"use client";

import * as z from "zod";
import { AlertCircle, CheckCircle2, KeyRound, Eye, EyeOff } from "lucide-react";
import { resetPasswordSchema } from "@/schema/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ShinyText from "@/components/animate/shiny-text";
import Link from "next/link";

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  // Manage token validation states natively
  const [isTokenValid, setIsTokenValid] = useState<boolean | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  useEffect(() => {
    // ----------------------------------------------------
    // SIMULATED JWT JWT VALIDATION LOGIC
    // We parse the ?token=XYZ param. If missing or "expired", we reject.
    // ----------------------------------------------------
    if (!token) {
      setIsTokenValid(false);
      setServerMessage(
        "Missing security token. Please request a new password reset link.",
      );
      return;
    }

    if (token === "expired" || token === "invalid") {
      setIsTokenValid(false);
      setServerMessage(
        "This password reset link has expired or is invalid. Please request a new one.",
      );
      return;
    }

    // Otherwise, simulate checking token from backend
    setIsTokenValid(true);
  }, [token]);

  async function onSubmit(values: ResetPasswordValues) {
    setStatus("loading");
    setServerMessage(null);

    try {
      // TEMP: simulate API call changing the password
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.05 ? resolve("ok") : reject();
        }, 1500);
      });

      setStatus("success");
      setServerMessage(
        "Your password has been successfully reset! You can now log in.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setServerMessage(
        "Failed to reset password. The server encountered an error.",
      );
    }
  }

  // --- INVALID TOKEN RENDER BLOCK ---
  if (isTokenValid === false) {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center px-4">
        <div className="w-full max-w-xl text-center space-y-6">
          <div className="inline-flex size-16 items-center justify-center rounded-full bg-destructive/10 mb-2">
            <AlertCircle className="size-8 text-destructive" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Invalid Link</h1>
          <p className="text-muted-foreground leading-relaxed">
            {serverMessage ||
              "The security token accompanying this request is missing or malformed."}
          </p>
          <div className="pt-6">
            <Button asChild size="lg" className="px-8">
              <Link href="/forgot-password">Request New Link</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // --- VALID TOKEN FORMS ---
  return (
    <div className="pt-32 pb-24 flex items-center justify-center px-4 transition-opacity duration-500 ease-in-out">
      <div className="w-full max-w-xl">
        {/* Header Section */}
        <div className="border-b mb-8 pb-8">
          <Badge className="inline-block rounded-full border border-primary/30 bg-foreground dark:bg-primary/10 px-4 py-1.5 text-sm font-medium mb-4">
            <ShinyText text="Secure Gateway" />
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Reset Password
          </h1>
          <p className="text-muted-foreground">
            Please enter and confirm your newly desired password below.
          </p>
        </div>

        {/* Card Container */}
        <div>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">
                      New Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          disabled={isSubmitting || status === "success"}
                          className="p-6 pr-12 bg-background shadow-sm border-border/60"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          disabled={isSubmitting || status === "success"}
                          onClick={() => setShowPassword(!showPassword)}
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle password visibility
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">
                      Confirm New Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          {...field}
                          type={showPassword ? "text" : "password"}
                          placeholder="••••••••"
                          disabled={isSubmitting || status === "success"}
                          className="p-6 pr-12 bg-background shadow-sm border-border/60"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          disabled={isSubmitting || status === "success"}
                          onClick={() => setShowPassword(!showPassword)}
                          tabIndex={-1}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                          <span className="sr-only">
                            Toggle password visibility
                          </span>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={
                  isSubmitting || status === "success" || isTokenValid === null
                }
                className="w-full p-6 group"
              >
                {isSubmitting ? (
                  "Updating Securely..."
                ) : status === "success" ? (
                  "Password Changed"
                ) : (
                  <span className="flex items-center gap-2">
                    Set New Password
                    <KeyRound className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </Form>

          {/* Status Messages for Valid State */}
          {status === "success" && (
            <div
              role="status"
              className="flex items-center gap-2 rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400 mt-6 border border-green-200 dark:border-green-800"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <p className="font-medium">{serverMessage}</p>
            </div>
          )}

          {status === "error" && (
            <div
              role="alert"
              className="flex items-center gap-2 rounded-md bg-destructive/15 p-4 text-sm text-destructive mt-6 border border-destructive/20"
            >
              <AlertCircle className="h-5 w-5 shrink-0" />
              <p className="font-medium">{serverMessage}</p>
            </div>
          )}

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <Separator className="mb-6 opacity-50" />
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
