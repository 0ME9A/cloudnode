import { Container } from "@/components/ui/container";
import ForgotPasswordForm from "./ForgotPasswordForm";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Recover access to your CloudNode RDP account securely.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function page() {
  return (
    <main>
      <Container className="mt-16 md:mt-8">
        <div className="grid lg:grid-cols-2 gap-4 border p-4 rounded-2xl bg-primary/10 lg:min-h-[1000px]">
          <div className="size-full hidden lg:block relative">
            <Image
              src="https://plus.unsplash.com/premium_photo-1701945913315-e9c1c4e9f3a0?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CloudNode RDP Forgot Password Cover Image"
              width={2000}
              height={2000}
              className="size-full object-cover rounded-lg opacity-75"
            />
          </div>
          <ForgotPasswordForm />
        </div>
      </Container>
    </main>
  );
}
