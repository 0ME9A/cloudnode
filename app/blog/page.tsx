import { PageHeaderV2 } from "@/components/ui/header";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/ui/container";
import BlogList from "./BlogList";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Blog",
  description:
    "Read the latest news, tutorials, and insights on Windows Server hosting, cybersecurity, and Remote Desktop technologies.",
  keywords: [
    "CloudNode RDP Blog",
    "Windows Server Tutorials",
    "RDP Hosting News",
    "Server Security Guides",
    "VPS Setup Insights",
  ],
};

export default function page() {
  return (
    <main className="min-h-screen bg-background">
      <PageHeaderV2
        label="Our Blog"
        title="Insights & News"
        desc="Stay up to date with the latest tutorials, technology trends, and updates from the CloudNode RDP engineering team."
      />
      <Separator className="container mx-auto" />
      <Container>
        <BlogList />
      </Container>
    </main>
  );
}
