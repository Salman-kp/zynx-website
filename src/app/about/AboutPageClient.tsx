"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Rocket,
  Compass,
  ShieldCheck,
  Clock,
  Network,
  Terminal,
  Zap,
  Users,
  Code2,
  Palette,
  TrendingUp,
  Handshake,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

const founders = [
  {
    name: "Strategy & Direction",
    role: "Direction",
    roleBadgeClass: "text-[#111111]",
    title: "EXECUTIVE LEAD // STRATEGY",
    titleClass: "text-[#c4923a]",
    description:
      "Company direction, client partnerships, and long-term strategy. The team setting that direction stays involved throughout each engagement.",
    nodeId: "EXEC_NODE_01",
    icon: ShieldCheck,
    hoverIconClass: "group-hover:text-[#c4923a]",
  },
  {
    name: "Operations & Delivery",
    role: "Operations",
    roleBadgeClass: "text-[#8b6914]",
    title: "EXECUTIVE LEAD // OPERATIONS",
    titleClass: "text-[#8b6914]",
    description:
      "Requirement analysis, sprint planning, and delivery coordination. Scope is agreed realistically and progress stays visible from inception to deployment.",
    nodeId: "EXEC_NODE_02",
    icon: Clock,
    hoverIconClass: "group-hover:text-[#8b6914]",
  },
  {
    name: "System Architecture",
    role: "Architecture",
    roleBadgeClass: "text-[#b8860b]",
    title: "EXECUTIVE LEAD // ARCHITECTURE",
    titleClass: "text-[#b8860b]",
    description:
      "Architecture, technology selection, and engineering standards, set deliberately. Systems are designed for high throughput and long-term maintainability.",
    nodeId: "EXEC_NODE_03",
    icon: Network,
    hoverIconClass: "group-hover:text-[#b8860b]",
  },
  {
    name: "Engineering & Build",
    role: "Engineering",
    roleBadgeClass: "text-[#111111]",
    title: "EXECUTIVE LEAD // BUILD",
    titleClass: "text-[#c4923a]",
    description:
      "Feature delivery, build execution, and system quality. Ensuring approved plans become robust, reliable software accountable to production standards.",
    nodeId: "EXEC_NODE_04",
    icon: Terminal,
    hoverIconClass: "group-hover:text-[#c4923a]",
  },
];

const pillars = [
  {
    id: "01 // EDGE",
    title: "Innovation First",
    description:
      "Cutting-edge tech that sets you apart. We continuously integrate advancements in AI, distributed systems, and real-time computing into client architecture.",
    icon: Zap,
    iconColor: "text-[#c4923a] group-hover:bg-[#c4923a] group-hover:text-white",
    barColor: "bg-[#c4923a]/40",
  },
  {
    id: "02 // ALIGNMENT",
    title: "Client-Centric",
    description:
      "Your success drives everything we do. We align our sprint roadmaps with your revenue milestones, user metrics, and operational goals.",
    icon: Users,
    iconColor: "text-[#8b6914] group-hover:bg-[#8b6914] group-hover:text-white",
    barColor: "bg-[#8b6914]/40",
  },
  {
    id: "03 // CRAFT",
    title: "Technical Excellence",
    description:
      "Clean, scalable code built to last. Zero compromises on automated testing, container orchestration, microservice isolation, and security hygiene.",
    icon: Code2,
    iconColor: "text-[#b8860b] group-hover:bg-[#b8860b] group-hover:text-white",
    barColor: "bg-[#b8860b]/40",
  },
  {
    id: "04 // AESTHETICS",
    title: "Design-Driven",
    description:
      "Beautiful interfaces that convert. We merge high-end visual aesthetics with intuitive ergonomics to craft experiences users instinctively love.",
    icon: Palette,
    iconColor: "text-[#c4923a] group-hover:bg-[#c4923a] group-hover:text-white",
    barColor: "bg-[#c4923a]/40",
  },
  {
    id: "05 // IMPACT",
    title: "Results-Oriented",
    description:
      "Clear objectives, measurable outcomes. We track tangible KPIs — latency reductions, conversion increases, and automated human-hour savings.",
    icon: TrendingUp,
    iconColor: "text-[#8b6914] group-hover:bg-[#8b6914] group-hover:text-white",
    barColor: "bg-[#8b6914]/40",
  },
  {
    id: "06 // SYNERGY",
    title: "Collaborative Spirit",
    description:
      "Your extended team, fully invested. We embed directly in your Slack channels, issue trackers, and standup syncs without contractual friction.",
    icon: Handshake,
    iconColor: "text-[#b8860b] group-hover:bg-[#b8860b] group-hover:text-white",
    barColor: "bg-[#b8860b]/40",
  },
];

export function AboutPageClient() {
  return (
    <div className="relative flex w-full flex-col overflow-hidden pb-20 md:pb-8">
      {/* Ambient Gold Chromatic Field Elements */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#c4923a]/12 via-[#b8860b]/6 to-transparent blur-[120px]" />
      <div className="pointer-events-none absolute top-[35%] -left-48 h-[500px] w-[500px] rounded-full bg-[#8b6914]/6 blur-[140px]" />
      <div className="pointer-events-none absolute top-[68%] -right-48 h-[550px] w-[550px] rounded-full bg-[#c4923a]/8 blur-[150px]" />

      {/* SECTION 1: HERO SECTION */}
      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 pt-6 pb-16 text-center sm:px-12 sm:pt-8 sm:pb-20 lg:px-20">
        {/* Micro Badge Pill */}

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-4 max-w-4xl text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl lg:text-[64px] lg:leading-[72px]"
        >
          Building Tomorrow&apos;s <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#111111] via-[#c4923a] to-[#8b6914] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(196,146,58,0.25)]">
            Digital Experiences
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-[#6b7280] sm:text-lg"
        >
          A team of passionate designers and developers dedicated to crafting exceptional digital experiences that inspire and innovate.
        </motion.p>

        {/* Visual Telemetry & Metrics Spark Deck */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid w-full max-w-4xl grid-cols-2 gap-3 rounded-xl border border-black/[0.08] bg-white/80 p-3 shadow-sm backdrop-blur-xl sm:grid-cols-4"
        >
          <div className="rounded-lg bg-[#fdf8ee] p-4 text-left">
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-[#9ca3af]">
              Architecture
            </div>
            <div className="flex items-center gap-1 text-2xl font-medium text-[#111111]">
              <span>99.98%</span>
              <span className="text-xs text-[#8b6914]">↑</span>
            </div>
            <div className="text-xs text-[#6b7280] sm:text-[13px]">
              SLA Deployment Health
            </div>
          </div>

          <div className="rounded-lg bg-[#fdf8ee] p-4 text-left">
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-[#9ca3af]">
              Founders
            </div>
            <div className="text-2xl font-medium text-[#c4923a]">4 / 4</div>
            <div className="text-xs text-[#6b7280] sm:text-[13px]">
              Hands-on Engineering
            </div>
          </div>

          <div className="rounded-lg bg-[#fdf8ee] p-4 text-left">
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-[#9ca3af]">
              Execution
            </div>
            <div className="text-2xl font-medium text-[#8b6914]">Zero-Hand-off</div>
            <div className="text-xs text-[#6b7280] sm:text-[13px]">
              Direct Accountability
            </div>
          </div>

          <div className="rounded-lg bg-[#fdf8ee] p-4 text-left">
            <div className="mb-1 font-mono text-xs uppercase tracking-wider text-[#9ca3af]">
              Delivery
            </div>
            <div className="text-2xl font-medium text-[#b8860b]">3x Faster</div>
            <div className="text-xs text-[#6b7280] sm:text-[13px]">
              Sprint Cycle Velocity
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: MISSION & VISION DUAL GLASS CARDS */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-black/[0.08] bg-white/90 p-8 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(196,146,58,0.40)] hover:shadow-md sm:p-10"
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#c4923a] to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#c4923a]/10 text-[#c4923a]">
                  <Rocket className="h-6 w-6" />
                </span>
                <span className="font-mono text-[13px] text-[#9ca3af]">
                  CORE_01 // PURPOSE
                </span>
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                  Our Mission
                </h2>
                <p className="text-[15px] leading-relaxed text-[#6b7280] sm:text-base">
                  We help businesses solve real-world challenges through custom software, AI, automation, and digital solutions — combining business understanding with engineering excellence to deliver measurable, scalable, and long-term value.
                </p>
              </div>
            </div>

            {/* Inline Telemetry Graphic */}
            <div className="mt-8 rounded-lg border border-black/[0.05] bg-[#fdf8ee] p-4">
              <div className="mb-2 flex items-center justify-between font-mono text-xs text-[#9ca3af]">
                <span>ENGINEERING IMPACT MATRIX</span>
                <span className="font-medium text-[#c4923a]">94.8% OPTIMIZATION</span>
              </div>
              <svg
                className="h-8 w-full overflow-visible text-[#c4923a]"
                fill="none"
                viewBox="0 0 300 32"
              >
                <path
                  d="M0 24 Q45 8 90 20 T180 12 T240 6 T300 2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                />
                <circle cx="300" cy="2" fill="currentColor" r="3.5" />
              </svg>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-black/[0.08] bg-white/90 p-8 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(196,146,58,0.40)] hover:shadow-md sm:p-10"
          >
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#8b6914] to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#8b6914]/10 text-[#8b6914]">
                  <Compass className="h-6 w-6" />
                </span>
                <span className="font-mono text-[13px] text-[#9ca3af]">
                  CORE_02 // FUTURE
                </span>
              </div>
              <div>
                <h2 className="mb-2 text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                  Our Vision
                </h2>
                <p className="text-[15px] leading-relaxed text-[#6b7280] sm:text-base">
                  To become the world&apos;s most trusted technology partner, empowering businesses through intelligent software, AI, automation, and digital innovation that transforms the way organizations operate, compete, and grow.
                </p>
              </div>
            </div>

            {/* System Architecture Indicator */}
            <div className="mt-8 flex items-center justify-between rounded-lg border border-black/[0.05] bg-[#fdf8ee] p-4">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#8b6914]" />
                <span className="font-mono text-xs text-[#6b7280]">
                  GLOBAL HORIZON 2026-2030
                </span>
              </div>
              <span className="rounded bg-[#8b6914]/10 px-2 py-0.5 text-xs font-medium text-[#8b6914]">
                AUTONOMOUS
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP / FOUNDERS MOSAIC */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#f5eed8]/80 px-4 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4923a]" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#8b6914]">
              LEADERSHIP
            </span>
          </div>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Ownership at every level
          </h2>
          <p className="text-base leading-relaxed text-[#6b7280] sm:text-lg">
            Dedicated domain leads who stay close to the work. Direction, delivery, architecture and engineering each have an accountable owner — ensuring decisions sit with leaders responsible for outcomes.
          </p>
        </div>

        {/* 4 Leadership Domains Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative flex flex-col justify-between rounded-xl border border-black/[0.08] bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(196,146,58,0.40)] hover:shadow-md"
            >
              <div>
                {/* Domain Specimen Container */}
                <div className="relative mb-4 flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-black/[0.06] bg-gradient-to-br from-[#fdf8ee] via-[#f9f5ec] to-[#f5eed8] p-6 text-center transition-colors group-hover:border-[rgba(196,146,58,0.25)]">
                  <div className="relative mb-2 flex h-20 w-20 items-center justify-center rounded-2xl border border-black/[0.06] bg-white/60 shadow-inner transition-transform duration-300 group-hover:scale-110">
                    <founder.icon className={`h-10 w-10 transition-colors ${founder.hoverIconClass}`} />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-widest text-[#9ca3af]">
                    {founder.nodeId}
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#fdf8ee] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span
                      className={`rounded-full bg-[#f0e8d0]/90 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider backdrop-blur-md ${founder.roleBadgeClass}`}
                    >
                      {founder.role}
                    </span>
                  </div>
                </div>

                <h3 className="mb-1 text-lg font-medium text-[#111111]">
                  {founder.name}
                </h3>
                <div
                  className={`mb-3 font-mono text-xs uppercase tracking-wider ${founder.titleClass}`}
                >
                  {founder.title}
                </div>
                <p className="text-[13px] leading-relaxed text-[#6b7280]">
                  {founder.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between pt-2 text-[#9ca3af]">
                <span className="font-mono text-xs">{founder.nodeId}</span>
                <founder.icon
                  className={`h-4 w-4 transition-colors ${founder.hoverIconClass}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHAT SETS US APART (6 PILLARS) */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-[#f5eed8]/80 px-4 py-1 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c4923a]" />
            <span className="text-xs font-medium uppercase tracking-widest text-[#8b6914]">
              WHAT SETS US APART
            </span>
          </div>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
            Expertise, passion, and commitment
          </h2>
          <p className="text-base text-[#6b7280] sm:text-lg">
            We combine deep technical knowledge with creative thinking to deliver results that matter.
          </p>
        </div>

        {/* 6 Pillar Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-black/[0.08] bg-white/90 p-8 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(196,146,58,0.40)] hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5eed8] transition-colors ${pillar.iconColor}`}
              >
                <pillar.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-[#111111]">
                {pillar.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#6b7280]">
                {pillar.description}
              </p>
              <div className="mt-6 flex items-center gap-2">
                <span
                  className={`h-1 w-6 rounded-full transition-all duration-300 group-hover:w-12 ${pillar.barColor}`}
                />
                <span className="font-mono text-xs text-[#9ca3af]">
                  {pillar.id}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FINAL CTA BANNER */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-[rgba(196,146,58,0.30)] bg-gradient-to-b from-[#fdf8ee] to-[#f5eed8]/60 p-10 text-center shadow-md sm:p-14 md:p-16"
        >
          {/* Luminous Radial Center Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#c4923a]/12 blur-[100px]" />
          <div className="relative z-10 max-w-3xl space-y-4">
            {/* Overline Tag */}
            <span className="inline-block rounded-full border border-[#c4923a]/25 bg-[#c4923a]/8 px-4 py-1 font-mono text-xs uppercase tracking-widest text-[#8b6914]">
              START THE CONVERSATION
            </span>
            {/* Title */}
            <h2 className="text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-5xl">
              Ready to Start Your Journey?
            </h2>
            {/* Subtitle */}
            <p className="mx-auto max-w-xl text-base text-[#6b7280] sm:text-lg">
              Let&apos;s transform your vision into reality. Partner directly with founders who engineer solutions for serious scale.
            </p>
            {/* CTA Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Link
                href="/contact"
                className="purple-glow-shadow inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#111111] via-[#1a1a1a] to-[#111111] px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:scale-[1.03] hover:from-[#0a0a0a] hover:to-[#333333] active:scale-95 sm:w-auto"
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/[0.10] bg-white/80 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#6b7280] transition-colors hover:bg-white hover:text-[#111111] sm:w-auto"
              >
                <MessageCircle className="h-4 w-4 text-[#8b6914]" />
                <span>WhatsApp Immediate Sync</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
