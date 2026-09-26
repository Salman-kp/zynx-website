"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Zap,
  RefreshCw,
  Terminal,
  Brain,
  Workflow,
  Globe,
  Smartphone,
  Palette,
  Store,
  Activity,
  TrendingUp,
  RotateCcw,
  Cpu,
  ArrowRight,
} from "lucide-react";

interface ServiceCardData {
  telemetry: string;
  title: string;
  description: string;
  tags: string;
  gradientVia: string;
  iconBg: string;
  iconColor: string;
  tagHoverColor: string;
  icon: React.ComponentType<{ className?: string }>;
}

const serviceCards: ServiceCardData[] = [
  {
    telemetry: "01 // ENG",
    title: "Software Engineering",
    description:
      "Custom software designed around each business's unique processes, not around a template.",
    tags: "Business management systems · ERP · CRM · Internal platforms · SaaS applications · Custom dashboards · API development",
    gradientVia: "via-[#ddb7ff]/30 group-hover:via-[#ddb7ff]",
    iconBg: "bg-[#ddb7ff]/10 group-hover:bg-[#ddb7ff]/20",
    iconColor: "text-[#ddb7ff]",
    tagHoverColor: "group-hover:text-[#ddb7ff]",
    icon: Terminal,
  },
  {
    telemetry: "02 // AI",
    title: "AI Solutions",
    description:
      "Helping organisations use AI where it improves productivity, decisions and engagement — and saying so when it wouldn't.",
    tags: "AI assistants & chatbots · Document processing · Business intelligence · LLM integration · AI-powered internal tools",
    gradientVia: "via-[#8b5cf6]/30 group-hover:via-[#8b5cf6]",
    iconBg: "bg-[#8b5cf6]/10 group-hover:bg-[#8b5cf6]/20",
    iconColor: "text-[#8b5cf6]",
    tagHoverColor: "group-hover:text-[#8b5cf6]",
    icon: Brain,
  },
  {
    telemetry: "03 // AUTO",
    title: "Business Automation",
    description:
      "Automating repetitive work so your team can spend its time on the things that actually need a person.",
    tags: "Workflow automation · CRM & HR automation · Finance process automation · Approval workflows · Notification systems",
    gradientVia: "via-[#4cd7f6]/30 group-hover:via-[#4cd7f6]",
    iconBg: "bg-[#4cd7f6]/10 group-hover:bg-[#4cd7f6]/20",
    iconColor: "text-[#4cd7f6]",
    tagHoverColor: "group-hover:text-[#4cd7f6]",
    icon: Workflow,
  },
  {
    telemetry: "04 // WEB",
    title: "Web Development",
    description:
      "Modern web platforms combining performance, usability and scalability.",
    tags: "Corporate websites · Customer portals · Web applications · CMS solutions · Progressive web apps",
    gradientVia: "via-[#c0c1ff]/30 group-hover:via-[#c0c1ff]",
    iconBg: "bg-[#3131c0]/20 group-hover:bg-[#3131c0]/40",
    iconColor: "text-[#c0c1ff]",
    tagHoverColor: "group-hover:text-[#c0c1ff]",
    icon: Globe,
  },
  {
    telemetry: "05 // APP",
    title: "Mobile Applications",
    description:
      "Applications built for performance, usability and long-term maintainability.",
    tags: "Android · iOS · Cross-platform · Customer apps · Internal business apps",
    gradientVia: "via-[#b76dff]/30 group-hover:via-[#b76dff]",
    iconBg: "bg-[#b76dff]/10 group-hover:bg-[#b76dff]/20",
    iconColor: "text-[#ddb7ff]",
    tagHoverColor: "group-hover:text-[#ddb7ff]",
    icon: Smartphone,
  },
  {
    telemetry: "06 // DSGN",
    title: "UI/UX Design",
    description:
      "Digital experiences that are intuitive, accessible and aligned with business goals.",
    tags: "User research · UX strategy · Interface design · Wireframing · Interactive prototypes · Design systems",
    gradientVia: "via-[#ddb7ff]/30 group-hover:via-[#ddb7ff]",
    iconBg: "bg-[#ddb7ff]/10 group-hover:bg-[#ddb7ff]/20",
    iconColor: "text-[#ddb7ff]",
    tagHoverColor: "group-hover:text-[#ddb7ff]",
    icon: Palette,
  },
  {
    telemetry: "07 // COMM",
    title: "E-Commerce Solutions",
    description:
      "Commerce platforms built to improve the buying experience and grow online sales.",
    tags: "Custom e-commerce · Shopify & WooCommerce · Inventory & payment integration · Order management · Marketplaces",
    gradientVia: "via-[#4cd7f6]/30 group-hover:via-[#4cd7f6]",
    iconBg: "bg-[#4cd7f6]/10 group-hover:bg-[#4cd7f6]/20",
    iconColor: "text-[#4cd7f6]",
    tagHoverColor: "group-hover:text-[#4cd7f6]",
    icon: Store,
  },
  {
    telemetry: "08 // OPS",
    title: "Support & Continuous Improvement",
    description:
      "Keeping systems reliable and evolving after launch — the part most vendors treat as an afterthought.",
    tags: "Performance monitoring · Bug resolution · Security updates · Infrastructure maintenance · Feature enhancements",
    gradientVia: "via-[#9333ea]/30 group-hover:via-[#9333ea]",
    iconBg: "bg-[#9333ea]/10 group-hover:bg-[#9333ea]/20",
    iconColor: "text-[#ddb7ff]",
    tagHoverColor: "group-hover:text-[#ddb7ff]",
    icon: Activity,
  },
  {
    telemetry: "09 // MKTG",
    title: "Digital Marketing",
    description:
      "Measurable strategies that support growth, usually alongside a platform we've already built for you.",
    tags: "SEO · Social media marketing · Google & Meta ads · Content strategy · Conversion optimisation",
    gradientVia: "via-[#c0c1ff]/30 group-hover:via-[#c0c1ff]",
    iconBg: "bg-[#c0c1ff]/10 group-hover:bg-[#c0c1ff]/20",
    iconColor: "text-[#c0c1ff]",
    tagHoverColor: "group-hover:text-[#c0c1ff]",
    icon: TrendingUp,
  },
];

const stages = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Requirements, stakeholders, and how the business actually works — before any technology is recommended.",
  },
  {
    step: "02",
    title: "Solution Strategy",
    description:
      "Architecture, technology selection and a sequenced roadmap, chosen deliberately rather than by default.",
  },
  {
    step: "03",
    title: "UI / UX Design",
    description:
      "Journey mapping, interactive prototypes and interface design — agreed before engineering starts.",
  },
  {
    step: "04",
    title: "Engineering",
    description:
      "Sprint-based development, integrations and review. Work is planned and tracked in sprints, so progress stays visible throughout.",
  },
  {
    step: "05",
    title: "Quality Assurance",
    description:
      "Testing and security review throughout the build, not only in the week before launch.",
  },
  {
    step: "06",
    title: "Deployment",
    description:
      "Production launch, configuration and performance validation, with handover of all source, credentials and documentation.",
  },
  {
    step: "07",
    title: "Continuous Improvement",
    description:
      "Monitoring, enhancements and support after launch. We measure success by long-term growth, not by project completion.",
  },
];

const techStack = [
  {
    name: "Next.js",
    url: "https://nextjs.org",
    icon: (
      <svg
        className="h-8 w-8 text-white transition-transform group-hover:scale-110"
        fill="none"
        viewBox="0 0 180 180"
      >
        <mask
          height="180"
          id="mask0_next"
          maskUnits="userSpaceOnUse"
          width="180"
          x="0"
          y="0"
        >
          <circle cx="90" cy="90" fill="black" r="90" />
        </mask>
        <g mask="url(#mask0_next)">
          <circle cx="90" cy="90" fill="currentColor" fillOpacity="0.2" r="90" />
          <path
            d="M149.508 157.438L69.147 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z"
            fill="currentColor"
          />
          <rect fill="currentColor" height="72" width="12" x="115" y="54" />
        </g>
      </svg>
    ),
  },
  {
    name: "React",
    url: "https://react.dev",
    icon: (
      <svg
        className="h-8 w-8 text-cyan-400 transition-transform group-hover:scale-110"
        fill="currentColor"
        viewBox="0 0 115.3 100"
      >
        <ellipse
          cx="57.65"
          cy="50"
          fill="none"
          rx="16.7"
          ry="39.6"
          stroke="currentColor"
          strokeWidth="4.5"
          transform="matrix(0.866 -0.5 0.5 0.866 -17.27 36.42)"
        />
        <ellipse
          cx="57.65"
          cy="50"
          fill="none"
          rx="16.7"
          ry="39.6"
          stroke="currentColor"
          strokeWidth="4.5"
          transform="matrix(0.866 0.5 -0.5 0.866 32.73 -21.42)"
        />
        <ellipse
          cx="57.65"
          cy="50"
          fill="none"
          rx="39.6"
          ry="16.7"
          stroke="currentColor"
          strokeWidth="4.5"
        />
        <circle cx="57.65" cy="50" fill="currentColor" r="9" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    url: "https://www.typescriptlang.org",
    icon: (
      <div className="font-mono text-xl font-bold text-blue-400 transition-transform group-hover:scale-110">
        TS
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    url: "https://tailwindcss.com",
    icon: (
      <svg
        className="h-8 w-8 text-cyan-400 transition-transform group-hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "Framer Motion",
    url: "https://motion.dev",
    icon: (
      <svg
        className="h-8 w-8 text-violet-400 transition-transform group-hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    ),
  },
  {
    name: "GSAP",
    url: "https://gsap.com",
    icon: (
      <div className="font-mono text-lg font-bold tracking-tight text-emerald-400 transition-transform group-hover:scale-110">
        GSAP
      </div>
    ),
  },
  {
    name: "Lucide React",
    url: "https://lucide.dev",
    icon: (
      <svg
        className="h-8 w-8 text-amber-400 transition-transform group-hover:scale-110"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "React Hook Form",
    url: "https://react-hook-form.com",
    icon: (
      <svg
        className="h-8 w-8 text-pink-400 transition-transform group-hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19.452 4.093c-1.428-1.428-3.4-2.325-5.59-2.325-4.364 0-7.917 3.553-7.917 7.917 0 2.19.897 4.162 2.325 5.59l8.03-8.03-2.828-2.828-5.202 5.202A5.63 5.63 0 0 1 7.18 7.685c0-3.14 2.545-5.685 5.685-5.685 1.57 0 2.99.636 4.02 1.666l2.567-2.567zm-1.424 4.255-8.03 8.03 2.828 2.828 5.202-5.202c.67.67 1.08 1.6 1.08 2.628 0 2.05-1.66 3.71-3.71 3.71-1.028 0-1.958-.41-2.628-1.08l-2.567 2.567c1.332 1.332 3.17 2.163 5.195 2.163 4.06 0 7.36-3.3 7.36-7.36 0-2.025-.83-3.863-2.163-5.195l-2.567 2.567z" />
      </svg>
    ),
  },
  {
    name: "Zod",
    url: "https://zod.dev",
    icon: (
      <div className="font-mono text-xl font-bold text-blue-400 transition-transform group-hover:scale-110">
        Zod
      </div>
    ),
  },
];

const metrics = [
  {
    value: "26+",
    title: "Projects Delivered",
    description:
      "Shipped by our founders across web, mobile, AI and cloud — before and since founding Zynx Dev.",
  },
  {
    value: "9+",
    title: "Years Combined Experience",
    description:
      "Engineering depth across modern web, mobile, AI and cloud technologies.",
  },
  {
    value: "50+",
    title: "Technologies",
    description:
      "We select the right tools for each project instead of forcing one stack on every problem.",
  },
];

export function ServicePageClient() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden pb-20 md:pb-8">
      {/* Subtle Ambient Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#9333ea]/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-[35%] -left-48 h-[500px] w-[500px] rounded-full bg-[#3131c0]/20 blur-[150px]" />
      <div className="pointer-events-none absolute top-[70%] -right-48 h-[550px] w-[550px] rounded-full bg-[#8b5cf6]/15 blur-[160px]" />

      {/* SECTION 1: Page Hero */}
      <section className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-4 pb-16 text-center sm:px-12 sm:pt-6 sm:pb-20 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#2a2a2c]/60 px-3.5 py-1 shadow-sm backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#8b5cf6] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#8b5cf6]" />
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-[#ddb7ff]">
            ZYNX — YOUR TECH PARTNER
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl text-4xl font-semibold tracking-tight text-[#f8fafc] sm:text-5xl lg:text-[64px] lg:leading-[72px]"
        >
          Our{" "}
          <span className="brand-x-gradient drop-shadow-[0_0_24px_rgba(168,85,247,0.45)]">
            Services
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 max-w-2xl text-base leading-relaxed text-[#cfc2d6] sm:text-lg"
        >
          Nine service lines, built around how your business operates rather than around a template. We start with the business, not the software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-[13px] text-[#cfc2d6] sm:gap-4"
        >
          <span className="flex items-center gap-1.5">
            <BadgeCheck className="h-4 w-4 text-[#ddb7ff]" />
            Bespoke Engineering
          </span>
          <span className="text-[#988d9f]/40">/</span>
          <span className="flex items-center gap-1.5">
            <Zap className="h-4 w-4 text-[#4cd7f6]" />
            Zero Vendor Lock-in
          </span>
          <span className="text-[#988d9f]/40">/</span>
          <span className="flex items-center gap-1.5">
            <RefreshCw className="h-4 w-4 text-[#b76dff]" />
            Continuous Delivery
          </span>
        </motion.div>
      </section>

      {/* SECTION 2: Nine Services Matrix */}
      <section
        className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 lg:px-20"
        id="services-grid"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceCards.map((service, idx) => (
            <motion.div
              key={service.telemetry}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="group relative flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0d0c13]/90 p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(168,85,247,0.4)] hover:shadow-[0_12px_32px_-8px_rgba(168,85,247,0.35)] sm:p-10"
            >
              <div
                className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${service.gradientVia} to-transparent transition-opacity`}
              />
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg transition-all group-hover:scale-105 ${service.iconBg}`}
                  >
                    <service.icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <span
                    className={`font-mono text-[13px] text-[#988d9f]/60 transition-colors ${service.tagHoverColor}`}
                  >
                    {service.telemetry}
                  </span>
                </div>
                <h2
                  className={`mb-2 text-2xl font-medium tracking-tight text-[#f8fafc] transition-colors ${service.tagHoverColor}`}
                >
                  {service.title}
                </h2>
                <p className="mb-4 text-[15px] leading-relaxed text-[#cfc2d6]">
                  {service.description}
                </p>
              </div>
              <div className="border-t border-white/5 pt-4 font-mono text-[13px] leading-relaxed text-[#9ca3af]">
                {service.tags}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: 'How We Work' Process Section */}
      <section className="relative z-10 w-full border-y border-white/[0.08] bg-[#0e0e10]/80 py-24 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
          {/* Section Header */}
          <div className="mb-16 flex max-w-3xl flex-col items-start">
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ddb7ff]/20 bg-[#ddb7ff]/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff]">
              <RotateCcw className="h-3.5 w-3.5" />
              HOW WE WORK
            </div>
            <h2 className="mb-2 text-3xl font-semibold tracking-tight text-[#f8fafc] sm:text-4xl">
              Seven stages, from first conversation to long-term support
            </h2>
            <p className="text-base text-[#cfc2d6] sm:text-lg">
              A structured, transparent process designed to reduce risk and deliver predictable results — each stage agreed before the next one begins.
            </p>
          </div>

          {/* 7 Steps Grid */}
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
            {stages.map((stage, idx) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0d0c13]/60 p-4 transition-colors hover:border-[#ddb7ff]/40"
              >
                <div>
                  <div className="mb-2 flex items-center justify-between font-mono text-[13px] font-bold text-[#ddb7ff] transition-colors group-hover:text-[#8b5cf6]">
                    <span>{stage.step}</span>
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ddb7ff]" />
                  </div>
                  <h3 className="mb-1 text-lg font-medium text-[#f8fafc]">
                    {stage.title}
                  </h3>
                  <p className="text-[13px] leading-5 text-[#cfc2d6]">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Tech Stack Section */}
      <section className="relative z-10 mx-auto w-full max-w-7xl overflow-hidden px-6 py-24 sm:px-12 lg:px-20">
        <div className="mx-auto mb-16 flex max-w-3xl flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#ddb7ff]/20 bg-[#ddb7ff]/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff]">
            <Cpu className="h-3.5 w-3.5" />
            ENGINEERING
          </div>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-[#f8fafc] sm:text-4xl">
            We pick the stack to fit the problem
          </h2>
          <p className="text-[15px] text-[#cfc2d6]">
            Next.js, React, TypeScript, Tailwind CSS, Framer Motion, GSAP, Lucide React, React Hook Form, and Zod are our defaults — chosen for performance, reliability, and maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-9">
          {techStack.map((tech, idx) => (
            <motion.a
              key={tech.name}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group flex flex-col items-center justify-center rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-4 transition-all duration-300 hover:border-[rgba(168,85,247,0.4)] hover:bg-[#0d0c13]"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center">
                {tech.icon}
              </div>
              <span className="font-mono text-[13px] text-[#f8fafc] transition-colors group-hover:text-[#ddb7ff]">
                {tech.name}
              </span>
            </motion.a>
          ))}
        </div>
      </section>

      {/* SECTION 5: 'Why Choose Us' Metrics Section */}
      <section className="relative z-10 w-full border-t border-white/[0.08] py-24">
        <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Left descriptor */}
            <div className="space-y-4 lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-[#ddb7ff]/20 bg-[#ddb7ff]/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff]">
                WHY CHOOSE US
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#f8fafc] sm:text-4xl">
                Building success stories online — one website, one brand, one bold move at a time.
              </h2>
              <p className="text-[15px] leading-relaxed text-[#cfc2d6]">
                Your growth is our goal. We combine data-driven strategy with creative design to deliver measurable business outcomes.
              </p>
            </div>

            {/* Right stats grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-7">
              {metrics.map((metric, idx) => (
                <motion.div
                  key={metric.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#0d0c13]/90 p-6 sm:p-8"
                >
                  <div>
                    <div className="brand-x-gradient mb-1 text-4xl font-bold sm:text-5xl">
                      {metric.value}
                    </div>
                    <h3 className="mb-1 text-lg font-medium text-[#f8fafc]">
                      {metric.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#cfc2d6]">
                    {metric.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA Section */}
      <section className="relative z-10 w-full py-24" id="cta">
        <div className="mx-auto max-w-5xl px-6 sm:px-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-[rgba(168,85,247,0.4)]/60 bg-gradient-to-b from-[#0d0c13] to-[#2a2a2c]/40 p-10 text-center sm:p-16"
          >
            {/* Center atmospheric pulse */}
            <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#9333ea]/20 blur-3xl" />
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#f8fafc] sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 max-w-xl text-base leading-relaxed text-[#cfc2d6] sm:text-lg">
              Let&apos;s discuss how we can help transform your digital presence and achieve your business goals.
            </p>
            <Link
              href="/contact"
              className="purple-glow-shadow relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 via-[#9333ea] to-indigo-600 px-10 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#f8fafc] transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-indigo-500 active:scale-95"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
