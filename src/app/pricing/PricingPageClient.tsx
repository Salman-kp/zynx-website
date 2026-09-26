"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileText,
  Lock,
  Receipt,
  ShieldCheck,
  Unlock,
  Key,
  Zap,
  CheckSquare,
  Network,
  MousePointerClick,
  Clock,
  ArrowRight,
  Check,
  MessageCircle,
} from "lucide-react";
import { companyInfo } from "@/config/company";

const guarantees = [
  {
    step: "Guaranteed Step 01",
    title: "A written proposal first",
    description:
      "Scope, deliverables, timeline, price and payment schedule — agreed in writing before any work starts.",
    icon: FileText,
    accentColor: "#c4923a",
    footerLabel: "Contract standard",
    footerStatus: "Locked",
    footerIcon: Lock,
    glowClass: "from-[#c4923a]/15",
  },
  {
    step: "Guaranteed Step 02",
    title: "No surprise invoices",
    description:
      "Work outside the agreed scope is quoted separately and approved before it begins. If a change affects the timeline, we say so at the same time as the price.",
    icon: Receipt,
    accentColor: "#8b6914",
    footerLabel: "Cost predictability",
    footerStatus: "Exact",
    footerIcon: ShieldCheck,
    glowClass: "from-[#8b6914]/15",
  },
  {
    step: "Guaranteed Step 03",
    title: "You can stop",
    description:
      "30 days' written notice, either side. You pay for work completed; we hand over all source, credentials and documentation. No exit fee.",
    icon: Unlock,
    accentColor: "#b8860b",
    footerLabel: "Zero lock-in",
    footerStatus: "Liquid",
    footerIcon: Key,
    glowClass: "from-[#b8860b]/15",
  },
];

const sprintDeliverables = [
  {
    code: "01 / SPEC",
    title: "Requirement specification",
    description:
      "What the system has to do, written down and agreed — including the workflows we found that you didn't mention.",
    icon: CheckSquare,
    accentColor: "text-[#c4923a]",
    dotColor: "bg-[#c4923a]",
    footer: "Full technical breakdown",
  },
  {
    code: "02 / ARCH",
    title: "Solution architecture",
    description:
      "How it will be built, which technologies it uses and why, and what it will cost to run.",
    icon: Network,
    accentColor: "text-[#8b6914]",
    dotColor: "bg-[#8b6914]",
    footer: "Infrastructure & stack specs",
  },
  {
    code: "03 / PROTOTYPE",
    title: "Clickable prototype",
    description:
      "The core screens as an interactive prototype, so your team reacts to something real rather than to a document.",
    icon: MousePointerClick,
    accentColor: "text-[#b8860b]",
    dotColor: "bg-[#b8860b]",
    footer: "High-fidelity UX flows",
  },
  {
    code: "04 / ESTIMATE",
    title: "Delivery plan and estimate",
    description:
      "Sequenced milestones with a fixed price for the build, so the next decision is made with a number in front of you.",
    icon: Clock,
    accentColor: "text-[#c4923a]",
    dotColor: "bg-[#c4923a]",
    footer: "Guaranteed budget timeline",
  },
];

const sprintCheckpoints = [
  "The fee is fixed and agreed in writing before the sprint starts.",
  "You own the output outright — specification, architecture, designs and prototype.",
  "There is no obligation to continue. If you take the output to another firm, that is yours to do.",
];

const engagementModels = [
  {
    num: "01",
    badge: "Best for: Well-defined projects",
    badgeClass: "bg-[#c4923a]/10 text-[#b8860b]",
    title: "Fixed Price Project",
    description: "A defined scope, timeline and cost, agreed upfront.",
    footerMeta: "Milestone-based release",
    ctaText: "Learn more",
    span: "col-span-1",
  },
  {
    num: "02",
    badge: "Best for: Ongoing product work",
    badgeClass: "bg-[#8b6914]/10 text-[#8b6914]",
    title: "Dedicated Development Team",
    description: "A dedicated team working as a long-term extension of your business.",
    footerMeta: "Full-time committed stack",
    ctaText: "Learn more",
    span: "col-span-1",
  },
  {
    num: "03",
    badge: "Best for: Continuous support",
    badgeClass: "bg-[#b8860b]/10 text-[#b8860b]",
    title: "Monthly Technology Partner",
    description: "Continuous development and support on a flexible monthly basis.",
    footerMeta: "Flexible velocity tiers",
    ctaText: "Learn more",
    span: "col-span-1",
  },
  {
    num: "04",
    badge: "Best for: Long-term products",
    badgeClass: "bg-[#c4923a]/10 text-[#c4923a]",
    title: "Product Development Partnership",
    description:
      "We build, launch and grow a product together as partners. We embed deeply with your vision, iterate rapidly, and align technical architecture with your venture outcomes.",
    footerMeta: "Shared roadmap • Tech co-pilot",
    ctaText: "Explore partnership model",
    span: "lg:col-span-2",
  },
  {
    num: "05",
    badge: "Best for: Strategy & advisory",
    badgeClass: "bg-[#8b6914]/15 text-[#8b6914]",
    title: "Technical Consulting",
    description: "Expert guidance on architecture, technology and strategy.",
    footerMeta: "Advisory / Retainer",
    ctaText: "Learn more",
    span: "col-span-1",
  },
];

export function PricingPageClient() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden pb-20 md:pb-8">
      {/* SECTION 1: Page Hero */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-6 pb-20 sm:px-12 sm:pt-8 sm:pb-24 lg:px-20">
        {/* Atmospheric Ambient Glow Spheres */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[340px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-[#c4923a]/12 via-[#b8860b]/6 to-transparent blur-[120px]" />
        <div className="pointer-events-none absolute top-1/4 right-0 h-[300px] w-[400px] rounded-full bg-[#8b6914]/6 blur-[100px]" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">


          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl lg:text-[64px] lg:leading-[72px]"
          >
            What it costs to <br className="hidden sm:inline" />
            <span className="brand-x-gradient drop-shadow-[0_0_20px_rgba(196,146,58,0.25)]">
              work with us
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-base leading-relaxed text-[#6b7280] sm:text-lg"
          >
            We don&apos;t publish a rate card, because a number without a scope behind it is meaningless. Here&apos;s what we can tell you upfront.
          </motion.p>

          {/* Micro Metric Telemetry Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 grid w-full max-w-xl grid-cols-2 gap-4 sm:grid-cols-3"
          >
            <div className="flex flex-col items-center rounded-xl border border-black/[0.08] bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <span className="font-mono text-xs font-medium tracking-tight text-[#c4923a]">
                01 / SCOPE
              </span>
              <span className="mt-1 text-base font-semibold text-[#111111]">
                Pre-Agreed
              </span>
            </div>
            <div className="flex flex-col items-center rounded-xl border border-black/[0.08] bg-white/80 p-4 shadow-sm backdrop-blur-md">
              <span className="font-mono text-xs font-medium tracking-tight text-[#8b6914]">
                02 / BILLING
              </span>
              <span className="mt-1 text-base font-semibold text-[#111111]">
                Zero Spikes
              </span>
            </div>
            <div className="col-span-2 flex flex-col items-center rounded-xl border border-black/[0.08] bg-white/80 p-4 shadow-sm backdrop-blur-md sm:col-span-1">
              <span className="font-mono text-xs font-medium tracking-tight text-[#b8860b]">
                03 / EXIT
              </span>
              <span className="mt-1 text-base font-semibold text-[#111111]">
                30-Day Out
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Three Core Transparency Guarantees */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 sm:pb-28 lg:px-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {guarantees.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-black/[0.08] bg-white/90 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(196,146,58,0.40)] hover:shadow-md"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c4923a]/40 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
              <div
                className={`pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-gradient-to-br ${item.glowClass} to-transparent blur-2xl transition-all group-hover:scale-125`}
              />

              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5eed8] text-[#c4923a] transition-colors group-hover:bg-[#c4923a]/15">
                  <item.icon className="h-6 w-6" />
                </div>
                <span className="mb-2 block font-mono text-xs font-medium uppercase tracking-widest text-[#c4923a]/80">
                  {item.step}
                </span>
                <h2 className="mb-4 text-xl font-medium text-[#111111] transition-colors group-hover:text-[#c4923a]">
                  {item.title}
                </h2>
                <p className="text-[15px] leading-relaxed text-[#6b7280]">
                  {item.description}
                </p>
              </div>

              <div className="-mx-8 -mb-8 mt-6 flex items-center justify-between bg-[#fdf8ee] px-8 py-4 text-[#9ca3af]">
                <span className="font-mono text-xs uppercase tracking-wider">
                  {item.footerLabel}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c4923a]">
                  {item.footerStatus}
                  <item.footerIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Featured Offer: Start with a Discovery Sprint */}
      <section className="relative w-full overflow-hidden bg-[#fdf8ee] px-6 py-24 sm:px-12 lg:px-20">
        {/* Diffuse backglows */}
        <div className="pointer-events-none absolute -left-48 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#c4923a]/8 blur-[140px]" />
        <div className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#8b6914]/6 blur-[150px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 flex flex-col justify-between gap-6 rounded-2xl border border-black/[0.06] bg-gradient-to-b from-transparent to-[#f5eed8]/60 p-6 pb-8 md:flex-row md:items-end sm:p-8">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c4923a]/25 bg-[#c4923a]/8 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#8b6914]">
                <Zap className="h-3.5 w-3.5" />
                Start small
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
                Start with a{" "}
                <span className="brand-x-gradient">Discovery Sprint</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#6b7280] sm:text-lg">
                Two weeks, a fixed fee agreed in writing before it begins, and you own everything it produces — whether or not you build with us afterwards.
              </p>
            </div>
            <div className="shrink-0">
              <div className="flex flex-col rounded-2xl border border-black/[0.08] bg-white/90 p-6 shadow-sm backdrop-blur-md sm:items-end">
                <span className="font-mono text-xs uppercase text-[#9ca3af]">
                  Duration &amp; Terms
                </span>
                <span className="mt-1 text-xl font-semibold text-[#111111]">
                  10 Business Days
                </span>
                <span className="mt-0.5 text-xs font-medium text-[#c4923a]">
                  Fixed milestone flat fee
                </span>
              </div>
            </div>
          </div>

          {/* Deliverables Mosaic Grid */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {sprintDeliverables.map((item, idx) => (
              <motion.div
                key={item.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="group flex flex-col justify-between rounded-xl border border-black/[0.08] bg-white/90 p-6 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[rgba(196,146,58,0.40)] hover:bg-white"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs text-[#9ca3af]">
                      {item.code}
                    </span>
                    <item.icon className={`h-5 w-5 ${item.accentColor} transition-transform group-hover:scale-110`} />
                  </div>
                  <h3 className="mb-3 text-lg font-medium text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-[#6b7280]">
                    {item.description}
                  </p>
                </div>
                <div className="-mx-6 -mb-6 mt-6 rounded-b-xl bg-[#fdf8ee] px-6 py-3">
                  <span className="flex items-center gap-1.5 font-mono text-xs text-[#9ca3af]">
                    <span className={`h-1.5 w-1.5 rounded-full ${item.dotColor}`} />
                    {item.footer}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Discovery Value Callout & Checkpoints Split Section */}
          <div className="relative overflow-hidden rounded-2xl border border-black/[0.08] bg-white/90 p-8 shadow-sm backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#c4923a]/8 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              {/* Text Statement */}
              <div className="lg:col-span-7">
                <span className="mb-3 block font-mono text-xs font-semibold uppercase tracking-wider text-[#c4923a]">
                  // Why we insist on this
                </span>
                <p className="text-lg leading-relaxed text-[#111111] sm:text-xl">
                  &ldquo;Most projects go wrong before a line of code is written, in the gap between what was asked for and what was understood. A Discovery Sprint closes that gap first, and prices the build honestly once it&apos;s closed.&rdquo;
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="purple-glow-shadow inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#111111] to-[#333333] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-sm transition-all hover:scale-[1.02] hover:from-[#0a0a0a] hover:to-[#444444]"
                  >
                    <span>Ask about a Discovery Sprint</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <span className="font-mono text-xs text-[#9ca3af]">
                    Typical turnaround: 14 calendar days
                  </span>
                </div>
              </div>

              {/* 3 Bullet Checkpoints */}
              <div className="space-y-4 rounded-xl border border-black/[0.06] bg-[#fdf8ee] p-6 backdrop-blur-md sm:p-8 lg:col-span-5">
                {sprintCheckpoints.map((text) => (
                  <div key={text} className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#c4923a]/15 text-[#c4923a]">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </div>
                    <p className="text-sm leading-relaxed text-[#6b7280]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 'Five ways to engage' Engagement Models Grid */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-12 sm:py-28 lg:px-20">
        <div className="mb-16 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#8b6914]/30 bg-[#8b6914]/8 px-3.5 py-1.5 font-mono text-xs uppercase tracking-widest text-[#8b6914]">
            Engagement Models
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Five ways to <span className="brand-x-gradient">engage</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#6b7280] sm:text-lg">
            From a fixed-scope project to a long-term product partnership. Every engagement starts the same way: understanding the business before proposing a solution.
          </p>
        </div>

        {/* Asymmetric Bento-style 5 Model Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {engagementModels.map((model, idx) => (
            <motion.div
              key={model.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.08] bg-white/90 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(196,146,58,0.40)] hover:bg-white ${model.span}`}
            >
              <div className="pointer-events-none absolute top-0 right-0 p-6 opacity-5 transition-opacity group-hover:opacity-10">
                <span className="text-6xl font-bold text-[#111111] sm:text-7xl">
                  {model.num}
                </span>
              </div>

              <div>
                <span
                  className={`mb-6 inline-block rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${model.badgeClass}`}
                >
                  {model.badge}
                </span>
                <h3 className="mb-3 text-xl font-medium text-[#111111]">
                  {model.title}
                </h3>
                <p className="max-w-xl text-[15px] leading-relaxed text-[#6b7280]">
                  {model.description}
                </p>
              </div>

              <div className="-mx-8 -mb-8 mt-8 flex flex-wrap items-center justify-between gap-4 bg-[#fdf8ee] px-8 py-4">
                <span className="font-mono text-xs text-[#9ca3af]">
                  {model.footerMeta}
                </span>
                <Link
                  href="/contact"
                  className="flex items-center gap-1 text-xs font-semibold text-[#c4923a] transition-colors hover:text-[#111111]"
                >
                  {model.ctaText}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: Call to Action Banner */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 sm:pb-32 lg:px-20" id="contact">
        <div className="relative overflow-hidden rounded-3xl border border-[rgba(196,146,58,0.25)] bg-gradient-to-b from-[#fdf8ee] to-[#f5eed8]/60 p-8 text-center shadow-md sm:p-14 lg:p-20">
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#c4923a]/12 blur-[130px]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <span className="mb-6 inline-block rounded-full border border-[#c4923a]/25 bg-[#c4923a]/8 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-[#8b6914]">
              Ready for Clarity?
            </span>
            <h2 className="mb-6 text-2xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-5xl md:leading-tight">
              Tell us what you&apos;re trying to build and you&apos;ll get a{" "}
              <span className="brand-x-gradient">written proposal</span> with scope, timeline and cost before anything is committed.
            </h2>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="purple-glow-shadow inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] px-8 py-4 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all hover:scale-[1.03] hover:from-[#0a0a0a] hover:to-[#333333] sm:w-auto"
              >
                <span>Get a written proposal</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={companyInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/[0.10] bg-white/80 px-8 py-4 text-xs font-semibold uppercase tracking-wider text-[#374151] shadow-sm transition-all hover:bg-white hover:text-[#111111] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" />
                <span>WhatsApp us directly</span>
              </a>
            </div>

            {/* Telemetry footer meta */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-black/[0.06] pt-8 font-mono text-xs text-[#6b7280]">
              <span className="flex items-center gap-2">
                <span className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
                Avg Response: &lt; 4 Hours
              </span>
              <span className="text-[#9ca3af]">·</span>
              <span>No Obligation</span>
              <span className="text-[#9ca3af]">·</span>
              <span>Strict NDA Available</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
