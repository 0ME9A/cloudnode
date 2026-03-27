# CloudNode RDP — Premium Windows RDP Hosting

This repository contains the source code for the **CloudNode RDP** platform — a high-performance, responsive remote desktop hosting service designed to provide businesses and individuals with reliable, admin-access Windows server solutions.

The website serves as the primary interface for **developers, entrepreneurs, and IT professionals** seeking to deploy, manage, and scale their remote desktop infrastructure with 99.9% uptime and 24/7 technical support.

---

## Purpose

### Mission

To provide the most trusted, high-performance Windows RDP servers with disciplined infrastructure management, transparent pricing, and absolute user control.

### Website Objectives

- Clearly communicate server specifications and tiered pricing models.
- Enable seamless server configuration and instant deployment via a secure checkout wizard.
- Provide a comprehensive Knowledge Base (KB) for server management and troubleshooting.
- Facilitate structured technical and billing support through an integrated ticket system.
- Maintain transparent legal, service level (SLA), and acceptable use (AUP) disclosures.
- Establish a premium, institutional digital presence using modern web aesthetics.

---

## Tech Stack

### Frontend & Core

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **State Management:** React Hook Form (for complex wizard and ticket flows)
- **Build Tooling:** Next.js Turbo

### UI & Styling

- **Component System:** shadcn/ui (Radix Primitives)
- **Styling:** Tailwind CSS 4
- **Icons:** lucide-react
- **Animations:** GSAP (scroll-based motion & stats), Motion (micro-interactions)
- **Design System:** Custom tokens with premium glassmorphism and dynamic light-ray effects.

### Forms & Validation

- **Form Handling:** react-hook-form
- **Validation:** Zod
- **Security:** Integrated Google reCAPTCHA v2

### SEO & Metadata

- Route-level metadata configuration (`title`, `description`, `keywords`)
- Centralized sitemap generation (`sitemap.ts`)
- Robots configuration (`robots.ts`) and Web Manifest (`manifest.ts`)
- Open Graph and Twitter Card support with localized metadata (en_IN)
- Optimized semantic HTML structure

---

## Key Features

- **Fully Responsive Design:** Mobile-first architecture with liquid layouts.
- **Server Wizard:** Multi-step checkout process for plan, location, and OS configuration.
- **Impact Stats:** GSAP-animated statistics showing network performance and reach.
- **Knowledge Base:** Categorized repository of tutorials and YouTube-embedded guides.
- **Support Helpdesk:** Document-ready ticket submission system with file attachment support.
- **Automated SEO:** Dynamic XML sitemap and SEO-optimized route-level tags.
- **Premium Illustrations:** Custom-coded SVG server illustrations for error states (404/500).

---

## Local Development

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm run start
```

---

## Project Structure (High-Level)

```
app/
  (pages)/               # Route-level pages (about, pricing, checkout, etc.)
  knowledge-base/        # Dynamic KB article and category routing
  blog/                  # Dynamic blog posts
components/
  ui/                    # Atomic UI components and custom design primitives
  illustrations/         # GSAP-animated SVG components
  animate/               # Reusable animation wrappers (OGL light rays, shiny text)
data/
  kb.ts                  # Centralized Knowledge Base article data
  plans.ts               # RDP plan definitions and feature matrices
lib/
  utils.ts               # Tailwind merge and shared utilities
schema/
  ticket.ts              # Zod validation schemas for support forms
public/
  logos/                 # High-resolution brand assets
  screenshot/            # Desktop and mobile preview assets
```

---

## Legal & Compliance Framework

The platform includes a robust legal architecture to ensure regulatory alignment and user trust:

- **Privacy Policy:** Data handling and privacy disclosures.
- **Terms and Conditions:** Standard service agreement.
- **SLA (Service Level Agreement):** Uptime and performance guarantees.
- **Refund Policy:** Transparent billing and refund criteria.
- **AUP (Acceptable Use Policy):** Guidelines for prohibited server activities.

All legal pages feature:

- Page header with last-updated date.
- Section-based article content.
- Consistent architecture using the `Legal` UI component.

---

## Content & Disclosure Notes

- Server deployment times are illustrative; actual setup typically occurs within 20 minutes.
- Hardware specifications (NVMe, CPU) are subject to regional availability.
- The website does not host illegal content; all users must comply with the AUP.
- Ticket response times are typically under 24 hours but may vary based on priority.

---

## Governance & Positioning Principles

CloudNode RDP reflects a commitment to infrastructure excellence:

- **High-Performance Focus:** NVMe storage and dedicated resources.
- **Full Autonomy:** Admin/Root access as a standard, not an add-on.
- **Transparency:** No hidden fees or "burst-only" speed claims.
- **Security-First:** Integrated reCAPTCHA and secure checkout protocols.

---

## Contributions

This repository is maintained internally for the CloudNode RDP platform.

- External pull requests are managed through internal review cycles.
- All updates must adhere to:
  - Established GSAP performance benchmarks.
  - Accessibility (A11y) standards.
  - The institutional "Premium Dark" design system.

---

## License & Copyright

All source code, design assets, and written content in this repository are
© CloudNode RDP, unless otherwise stated.

Unauthorized reproduction, redistribution, or modification is not permitted without prior written approval.
