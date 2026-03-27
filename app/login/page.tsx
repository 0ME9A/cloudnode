import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import LoginForm from "./LoginForm";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Login",
  description:
    "Securely sign in to your CloudNode RDP client dashboard to manage your servers, billing, and support tickets.",
};

export default function page() {
  return (
    <main>
      <Container className="mt-16 md:mt-8">
        <div className="grid lg:grid-cols-2 gap-4 border p-4 rounded-2xl bg-primary/10 lg:min-h-[1000px]">
          <div className="size-full hidden lg:block">
            <Image
              src={
                "https://plus.unsplash.com/premium_photo-1764705683048-4f416de4fb67?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="CloudNode RDP Login Cover Image"
              width={2000}
              height={2000}
              className="size-full object-cover rounded-lg opacity-75"
            />
          </div>
          <LoginForm />
        </div>
      </Container>
    </main>
  );
}
