import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL || "https://cloudnode.com"),
  title: {
    default: "CloudNode RDP | Premium Windows RDP Servers",
    template: "%s | CloudNode RDP",
  },
  description:
    "Next-generation Windows RDP servers with full admin access, unlimited bandwidth, and 99.9% uptime. Starting at $9.99/mo. Instant deployment.",
  keywords: [
    "Windows RDP",
    "Buy RDP Online",
    "Cheap RDP Server",
    "Admin RDP",
    "Windows VPS",
    "Remote Desktop Hosting",
    "RDP with Admin Access",
    "High-performance NVMe RDP",
  ],
  authors: [{ name: "CloudNode RDP" }],
  creator: "CloudNode RDP",
  publisher: "CloudNode RDP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "CloudNode RDP | Premium Windows RDP Servers",
    description:
      "High-performance Windows RDP servers with full admin access, unlimited bandwidth, and 99.9% uptime. Starting at $9.99/mo. Instant deployment.",
    url: "/",
    siteName: "CloudNode RDP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CloudNode RDP - Premium Windows RDP Servers",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CloudNode RDP | Premium Windows RDP Servers",
    description:
      "High-performance Windows RDP servers with full admin access, unlimited bandwidth, and 99.9% uptime. Starting at $9.99/mo. Instant deployment.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark">
          <Preloader />
          <Navbar />
          {children}
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
