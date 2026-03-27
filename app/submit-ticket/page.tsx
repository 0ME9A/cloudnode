import { Container } from "@/components/ui/container";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import SubmitTicketForm from "./SubmitTicketForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Support Ticket",
  description:
    "Submit a support, sales, or billing inquiry directly to the CloudNode RDP helpdesk.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function page() {
  return (
    <main className="bg-muted/10 min-h-screen pb-20">
      <div className="pt-16 md:pt-8">
        <Container as={"section"} className="pb-6!">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Open Ticket
          </h1>

          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Submit Ticket</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Container>

        <Container className="pt-0!">
          <SubmitTicketForm />
        </Container>
      </div>
    </main>
  );
}
