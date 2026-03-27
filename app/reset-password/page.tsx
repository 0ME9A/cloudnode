import { Container } from "@/components/ui/container";
import { Suspense } from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your CloudNode RDP account.",
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
              src="https://plus.unsplash.com/premium_photo-1672346462394-1073fbae6aa0?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="CloudNode RDP Reset Password Cover Image"
              width={2000}
              height={2000}
              className="size-full object-cover rounded-lg opacity-75 grayscale-20"
            />
          </div>
          {/* Wrap the form in Suspense since it uses useSearchParams */}
          <Suspense
            fallback={
              <div className="flex items-center justify-center p-24 animate-pulse">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            }
          >
            <ResetPasswordForm />
          </Suspense>
        </div>
      </Container>
    </main>
  );
}
