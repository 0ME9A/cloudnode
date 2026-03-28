import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

export default function NewsletterSubscribeForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: NewsletterFormValues) {
    setStatus("idle");
    setServerMessage(null);

    try {
      // Simulate API call with 50% chance of failure to test Error UI
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            resolve("ok");
          } else {
            reject(new Error("Server error"));
          }
        }, 1500);
      });

      setStatus("success");
      setServerMessage("You have successfully subscribed to our newsletter.");
      reset();
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="w-full max-w-md space-y-4">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full items-start gap-2"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email address"
                    disabled={isSubmitting}
                    className={cn(
                      "p-6 bg-background!",
                      form.formState.errors.email
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="p-6"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>
      </Form>

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-md bg-green-50 p-3 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
          <CheckCircle2 className="h-4 w-4" />
          <p>{serverMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-md bg-destructive/15 p-3 text-sm text-destructive dark:bg-destructive/10">
          <AlertCircle className="h-4 w-4" />
          <p>{serverMessage}</p>
        </div>
      )}
    </div>
  );
}
