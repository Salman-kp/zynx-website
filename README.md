# ZYNX — Company Website

Production corporate website for **ZYNX** (`zynx.dev`), presenting custom software engineering, AI solutions, business automation, and digital services.

## Technology Stack

- **Framework**: Next.js 15 (App Router, SSR & SSG)
- **UI Library**: React 19
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 + tw-animate-css
- **Animations**: Framer Motion & GSAP
- **Icons**: Lucide React
- **Forms & Validation**: React Hook Form & Zod

## Architecture & Code Structure

```text
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Header, Footer, FloatingDock, Metadata)
│   ├── page.tsx          # Home page
│   ├── services/         # Services page
│   ├── work/             # Work & Portfolio page
│   ├── about/            # About page
│   ├── contact/          # Contact page with interactive form
│   └── globals.css       # Tailwind CSS v4 design tokens and utilities
├── components/
│   ├── common/           # Reusable UI (Brand, SectionHeading)
│   ├── forms/            # Form components (ContactForm with RHF + Zod)
│   ├── layout/           # Global layout (Header, Footer, FloatingDock)
│   └── sections/         # Approved sections (Hero, Problems, Services, Portfolio, etc.)
├── config/
│   ├── site.ts           # Site SEO metadata
│   └── company.ts        # Centralized company contact information
├── data/
│   └── siteContent.ts    # Content configurations & navigation
├── lib/
│   ├── animations.ts     # Framer Motion animation utilities
│   ├── gsap.ts           # GSAP animation helpers
│   ├── error-reporting.ts# Runtime error reporting
│   └── utils.ts          # Class merging utility (clsx + twMerge)
└── schemas/
    └── contactSchema.ts  # Zod validation schema for contact submissions
```

## Pages

- **Home**: `/`
- **Services**: `/services`
- **Work**: `/work`
- **About**: `/about`
- **Contact**: `/contact`

## Getting Started

### Prerequisites

Node.js 20+ and npm.

### Installation

```bash
npm install
```

### Running Locally

```bash
npm run dev
```

The application will be running at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```
