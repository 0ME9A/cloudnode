"use client";

import * as z from "zod";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { forgotPasswordSchema } from "@/schema/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { useState, useRef, useCallback, useMemo } from "react";
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

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
      captcha: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = useCallback(
    async (values: ForgotPasswordValues) => {
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
        // TEMP: simulate API call sending a recovery email
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.1) {
              resolve("ok");
            } else {
              reject();
            }
          }, 1500);
        });

        setStatus("success");
        setServerMessage(
          "If an account is associated with that email, a password reset link has been sent. Please check your inbox (and spam folder).",
        );
        form.reset();
        recaptchaRef.current?.reset();
      } catch {
        setStatus("error");
        setServerMessage(
          "An unexpected error occurred. Please try again later.",
        );
      }
    },
    [form],
  );

  const onFormSubmit = useMemo(
    () => handleSubmit(onSubmit),
    [handleSubmit, onSubmit],
  );

  return (
    <div className="pt-32 pb-24 flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        {/* Header Section */}
        <div className="border-b mb-8 pb-8">
          <Badge className="inline-block rounded-full border border-primary/30 bg-foreground dark:bg-primary/10 px-4 py-1.5 text-sm font-medium mb-4">
            <ShinyText text="Password Recovery" />
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            Forgot Your Password?
          </h1>
          <p className="text-muted-foreground">
            Enter the email address associated with your account and we&apos;ll
            send you a link to reset your password.
          </p>
        </div>

        <div>
          <Form {...form}>
            <form onSubmit={onFormSubmit} className="space-y-6">
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
                disabled={isSubmitting || status === "success"}
                className="w-full p-6 group"
              >
                {isSubmitting ? (
                  "Sending Link..."
                ) : status === "success" ? (
                  "Email Sent"
                ) : (
                  <span className="flex items-center gap-2">
                    Send Reset Link
                    <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                )}
              </Button>
            </form>
          </Form>

          {/* Status Messages */}
          {status === "success" && (
            <div
              role="status"
              className="flex items-start gap-3 rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400 mt-6 border border-green-200 dark:border-green-800"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="font-medium leading-relaxed">{serverMessage}</p>
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
            Remembered your password?{" "}
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
