"use client";

import { AlertCircle, CheckCircle2, X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";
import { ticketFormSchema } from "@/schema/ticket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReCAPTCHA from "react-google-recaptcha";

export type TicketFormValues = z.infer<typeof ticketFormSchema>;

export default function SubmitTicketForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<TicketFormValues>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      department: "General Enquiries",
      priority: "Medium",
      message: "",
      captcha: "",
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = form;

  async function onSubmit(values: TicketFormValues) {
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
          Math.random() > 0.1 ? resolve("ok") : reject();
        }, 1500);
      });
      console.log(values);
      setStatus("success");
      setServerMessage(
        "Ticket submitted successfully. We will typically reply within 24 hours.",
      );
      reset();
      recaptchaRef.current?.reset();
    } catch {
      setStatus("error");
      setServerMessage("Something went wrong. Please try again later.");
    }
  }

  return (
    <div className="p-8 rounded-xl space-y-8 bg-primary/5 border border-primary/10">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-foreground">
                    Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      className="p-5 bg-background shadow-sm border-border/60"
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
                    Email Address
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={isSubmitting}
                      className="p-5 bg-background shadow-sm border-border/60"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-foreground">
                  Subject
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isSubmitting}
                    className="p-5 bg-background shadow-sm border-border/60"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-foreground">
                    Department
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="p-5 bg-background shadow-sm border-border/60">
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="General Enquiries">
                        General Enquiries
                      </SelectItem>
                      <SelectItem value="Technical Support">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="Billing">Billing</SelectItem>
                      <SelectItem value="Sales">Sales</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-foreground">
                    Priority
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="p-5 bg-background shadow-sm border-border/60">
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Medium">Medium</SelectItem>
                      <SelectItem value="Low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold text-foreground">
                  Message
                </FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="Please describe your issue here..."
                    className="min-h-[250px] p-5 bg-background shadow-sm border-border/60 resize-y"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="attachments"
            render={({ field }) => {
              const files = (field.value as File[]) || [];
              const isAtMaxFiles = files.length >= 5;
              const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
              const currentTotalSize = files.reduce(
                (acc, file) => acc + file.size,
                0,
              );
              const isAtMaxSize = currentTotalSize >= MAX_FILE_SIZE;
              const disableAddFiles = isAtMaxFiles || isAtMaxSize;

              return (
                <FormItem className="space-y-4">
                  <FormLabel className="font-semibold text-foreground">
                    Attachments
                  </FormLabel>
                  <div
                    className={
                      "flex flex-col sm:flex-row gap-4 items-start sm:items-center " +
                      (disableAddFiles ? "opacity-70" : "")
                    }
                  >
                    <div
                      className={
                        "flex-1 w-full flex items-center gap-0 border border-border/60 rounded-md shadow-sm overflow-hidden h-11 " +
                        (disableAddFiles
                          ? "bg-muted/50"
                          : "bg-background focus-within:ring-1 focus-within:ring-ring")
                      }
                    >
                      <Input
                        id="file-upload"
                        type="file"
                        multiple
                        className="hidden"
                        disabled={disableAddFiles}
                        onChange={(e) => {
                          const newFiles = Array.from(e.target.files || []);
                          if (newFiles.length > 0) {
                            const combinedFiles = [...files, ...newFiles];

                            if (combinedFiles.length > 5) {
                              alert(
                                "You can only attach a maximum of 5 files.",
                              );
                              e.target.value = "";
                              return;
                            }

                            const totalSize = combinedFiles.reduce(
                              (acc, file) => acc + file.size,
                              0,
                            );
                            if (totalSize > MAX_FILE_SIZE) {
                              alert("Total file size must not exceed 5MB.");
                              e.target.value = "";
                              return;
                            }

                            field.onChange(combinedFiles);
                          }
                          // Reset input so the same file selection isn't blocked next time
                          e.target.value = "";
                        }}
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        disabled={disableAddFiles}
                        className="h-full rounded-none px-4 shrink-0 font-medium text-xs hover:bg-muted"
                        onClick={() =>
                          document.getElementById("file-upload")?.click()
                        }
                      >
                        Choose file
                      </Button>
                      <div className="px-3 text-muted-foreground text-sm truncate flex-1 flex items-center h-full">
                        {files.length > 0
                          ? `${files.length} file(s) selected`
                          : "No file chosen"}
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="default"
                      disabled={disableAddFiles}
                      className="shadow-none bg-primary hover:bg-primary/90 shrink-0"
                      onClick={() =>
                        document.getElementById("file-upload")?.click()
                      }
                    >
                      Add More
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground opacity-80">
                    Allowed File Extensions: .jpg, .jpeg, .png, .txt, .pdf (Max
                    5 files, 5MB total)
                  </p>

                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={`${file.name}-${index}`}
                          className="flex items-center justify-between p-2 text-sm border border-border/50 rounded-md bg-background/50"
                        >
                          <div className="flex items-center space-x-2 overflow-hidden">
                            <span className="truncate max-w-[200px] sm:max-w-[400px] font-medium">
                              {file.name}
                            </span>
                            <span className="text-xs text-muted-foreground shrink-0">
                              ({(file.size / 1024 / 1024).toFixed(2)} MB)
                            </span>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-7 w-7 text-destructive hover:text-destructive hover:bg-destructive/10 shrink-0 rounded-full"
                            onClick={() => {
                              const newFiles = [...files];
                              newFiles.splice(index, 1);
                              field.onChange(
                                newFiles.length > 0 ? newFiles : undefined,
                              );
                            }}
                          >
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}

                  <FormMessage />
                </FormItem>
              );
            }}
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
            {isSubmitting ? "Creating..." : "Create Ticket"}
          </Button>
        </form>
      </Form>

      {status === "success" && (
        <div
          role="status"
          tabIndex={-1}
          className="flex items-center justify-center gap-2 rounded-md bg-green-50 p-4 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400 mt-8 max-w-2xl mx-auto border border-green-200 dark:border-green-800 text-center"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0" />
          <p className="font-medium">{serverMessage}</p>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center justify-center gap-2 rounded-md bg-destructive/15 p-4 text-sm text-destructive mt-8 max-w-2xl mx-auto border border-destructive/20 text-center">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <p className="font-medium">{serverMessage}</p>
        </div>
      )}
    </div>
  );
}
