"use client";

import * as z from "zod";
import { AlertCircle, CheckCircle2, UserPlus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schema/auth";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ShinyText from "@/components/animate/shiny-text";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      captcha: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: RegisterFormValues) {
    setStatus("loading");
    setServerMessage(null);

    if (!values.captcha) {
      form.setError("captcha", {
        type: "manual",
        message: "Please complete the reCAPTCHA.",
      });
      setStatus("idle");
      return;
    }

    try {
      // TEMP: simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.2 ? resolve("ok") : reject();
        }, 1500);
      });

      setStatus("success");
      setServerMessage("Account created successfully! You can now log in.");
      //   console.log("Registration Payload:", values);
      form.reset();
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
      setServerMessage("Failed to create account. Please try again later.");
    }
  }

  return (
    <div className="py-8 md:pt-32 md:pb-24 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Header Section */}
        <div className="border-b mb-8 pb-8">
          <Badge className="inline-block rounded-full border border-primary/30 bg-foreground dark:bg-primary/10 px-4 py-1.5 text-sm font-medium mb-4">
            <ShinyText text="Join Us" />
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Create an Account
          </h1>
          <p className="text-muted-foreground">
            Sign up to get started with CloudNode RDP premium services.
          </p>
        </div>

        {/* Card Container */}
        <div>
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        disabled={isSubmitting || status === "success"}
                        className="p-6 bg-background shadow-sm border-border/60"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-semibold text-foreground">
                      Email address
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="name@example.com"
                        disabled={isSubmitting || status === "success"}
                        className="p-6 bg-background shadow-sm border-border/60"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-semibold text-foreground">
                        Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          disabled={isSubmitting || status === "success"}
                          className="p-6 bg-background shadow-sm border-border/60"
                        />
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
                        Confirm Password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          placeholder="••••••••"
                          disabled={isSubmitting || status === "success"}
                          className="p-6 bg-background shadow-sm border-border/60"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-left bg-background/50 rounded-md border p-4">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        disabled={isSubmitting || status === "success"}
                        className="mt-1"
                      />
                    </FormControl>

                    <div className="space-y-1.5 leading-none">
                      <FormLabel className="font-normal text-muted-foreground leading-relaxed cursor-pointer inline-block">
                        I confirm that I have read and agree to the{" "}
                        <Link
                          href="/terms-conditions"
                          className="hover:underline font-medium"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy-policy"
                          className="hover:underline font-medium"
                        >
                          Privacy Policy
                        </Link>
                        .
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="captcha"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormControl>
                      <ReCAPTCHA
                        sitekey={
                          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""
                        }
                        ref={recaptchaRef}
                        onChange={(token) => field.onChange(token || "")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full p-6"
              >
                {isSubmitting ? (
                  "Creating Account..."
                ) : (
                  <span className="flex items-center gap-2">
                    Create Account
                    <UserPlus className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </Form>

          {/* Status Messages */}
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
            Already registered?{" "}
            <Link
              href="/login"
              className="font-semibold text-primary hover:text-primary/80 transition-colors uppercase tracking-wider"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
