import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "CloudNode RDP",
    short_name: "CloudNode",
    description:
      "Next-generation Windows RDP server provider. High-performance remote desktop servers with full admin access, 99.9% uptime, and 24x7 support.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00BFA6", // Using primary color approximate
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logos/logo_144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logos/logo_192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logos/logo_512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    screenshots: [
      {
        src: "/screenshot/desktop.png",
        sizes: "1920x1080",
        type: "image/png",
        form_factor: "wide",
      },
      {
        src: "/screenshot/mobile.png",
        sizes: "1170x2532",
        type: "image/png",
      },
    ],
  };
}
