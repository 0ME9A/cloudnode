import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Full name is required",
  }),
  email: z.email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(2, {
    message: "Subject is required",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
  captcha: z.string().min(1, {
    message: "Please complete the reCAPTCHA",
  }),
});
