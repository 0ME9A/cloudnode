import z from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "text/plain",
  "application/pdf",
];

export const ticketFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  subject: z.string().min(2, {
    message: "Subject is required",
  }),
  department: z.string().min(1, {
    message: "Please select a department",
  }),
  priority: z.string().min(1, {
    message: "Please select a priority",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters",
  }),
  attachments: z
    .any()
    .optional()
    .refine((files) => {
      if (!files || files.length === 0) return true;
      return files.length <= 5;
    }, "You can only attach a maximum of 5 files.")
    .refine((files) => {
      if (!files || files.length === 0) return true;
      let totalSize = 0;
      for (let i = 0; i < files.length; i++) {
        totalSize += files[i].size;
      }
      return totalSize <= MAX_FILE_SIZE;
    }, "Total file size must not exceed 5MB.")
    .refine((files) => {
      if (!files || files.length === 0) return true;
      for (let i = 0; i < files.length; i++) {
        if (!ACCEPTED_FILE_TYPES.includes(files[i].type)) return false;
      }
      return true;
    }, "Allowed File Extensions: .jpg, .gif, .jpeg, .png, .txt, .pdf."),
  captcha: z.string().min(1, {
    message: "Please complete the reCAPTCHA",
  }),
});
