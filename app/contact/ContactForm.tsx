"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@/components/ui/separator";
import { contactFormSchema } from "@/schema/contact";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      acceptTerms: false,
      captcha: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  const onSubmit = useCallback(
    async (values: ContactFormValues) => {
      setStatus("idle");
      setServerMessage(null);

      if (!values.captcha) {
        form.setError("captcha", {
          type: "manual",
          message: "Please complete the reCAPTCHA.",
        });
        return;
      }

      try {
        // TEMP: simulate API call
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            if (Math.random() > 0.3) {
              resolve("ok");
            } else {
              reject();
            }
          }, 1500);
        });

        setStatus("success");
        setServerMessage(
          "Thank you for reaching out. We&apos;d be Glad to Hear from You.",
        );
        reset();
        recaptchaRef.current?.reset();
      } catch {
        setStatus("error");
        setServerMessage("Something went wrong. Please try again later.");
      }
    },
    [form, reset],
  );

  const onFormSubmit = useMemo(
    () => handleSubmit(onSubmit),
    [handleSubmit, onSubmit],
  );

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle");
        setServerMessage(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="p-8 rounded-xl space-y-8 bg-primary/5 border border-primary/10">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-sm text-muted-foreground">
          We&apos;d be Glad to Hear from You.
        </p>
      </div>
      <Separator />

      {/* Existing Client Callout */}
      <div className="bg-primary/10 border border-primary/20 rounded-md p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div>
          <h4 className="font-semibold mb-1">Existing Client?</h4>
          <p className="text-sm text-muted-foreground">
            For technical support and faster resolution, please open a ticket
            from your Client Area.
          </p>
        </div>
        <Button asChild size="sm" className="shrink-0 rounded-full">
          <Link href="/submit-ticket">Open HelpDesk Ticket</Link>
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={onFormSubmit} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Full name"
                    disabled={isSubmitting}
                    className="p-6"
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
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Email address"
                    disabled={isSubmitting}
                    className="p-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Subject"
                    disabled={isSubmitting}
                    className="p-6"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Your message"
                    className="h-40 p-6"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-left rounded-md border p-4">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="flex flex-wrap">
                    I agree to the{" "}
                    <Link href="/terms-conditions" className="hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="hover:underline">
                      Privacy Policy.
                    </Link>
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
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
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
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
      {status === "success" && (
        <div
          role="status"
          tabIndex={-1}
          className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400 mt-4 md:mt-8"
        >
          <CheckCircle2 className="h-4 w-4" />
          <p>{serverMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive mt-4 md:mt-8">
          <AlertCircle className="h-4 w-4" />
          <p>{serverMessage}</p>
        </div>
      )}
    </div>
  );
}
