"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Wallet,
  Cpu,
  BadgeCheck,
} from "lucide-react";

export function WorkPageClient() {
  const [telemetryRefreshed, setTelemetryRefreshed] = useState(false);

  const handleRefreshTelemetry = () => {
    setTelemetryRefreshed(true);
    setTimeout(() => setTelemetryRefreshed(false), 2000);
  };

  return (
    <div className="relative flex w-full flex-col overflow-hidden pb-20 md:pb-8">
      {/* Atmospheric Neon Ambient Gradients */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#b76dff]/20 via-[#8b5cf6]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-[38rem] -right-48 h-96 w-96 rounded-full bg-[#009eb9]/15 blur-3xl" />
      <div className="pointer-events-none absolute top-[80rem] -left-48 h-96 w-96 rounded-full bg-[#ddb7ff]/10 blur-3xl" />

      {/* SECTION 1: HERO */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-6 pb-16 sm:px-12 sm:pt-8 sm:pb-20 lg:px-20">
        <div className="flex max-w-3xl flex-col items-start space-y-4">
          {/* Badge Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#2a2a2c]/70 px-3.5 py-1.5 shadow-sm backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ddb7ff] shadow-sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ddb7ff]">
              OUR PORTFOLIO
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold leading-tight tracking-tight text-[#f8fafc] sm:text-5xl lg:text-[64px] lg:leading-[72px]"
          >
            Systems we&apos;ve built, <br className="hidden sm:inline" />
            <span className="brand-x-gradient font-bold drop-shadow-[0_0_24px_rgba(168,85,247,0.45)]">
              and what they changed.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl pt-1 text-base leading-relaxed text-[#cfc2d6] sm:text-lg"
          >
            Every engagement starts with an operational problem, not a specification. Here is what that deliberate engineering has produced so far.
          </motion.p>

          {/* Live Pipeline Telemetry Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2 font-mono text-[13px] text-[#9ca3af]"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4cd7f6]" /> Production deployments: 34+
            </span>
            <span className="text-white/20">/</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ddb7ff]" /> Uptime SLA index: 99.98%
            </span>
            <span className="text-white/20">/</span>
            <span className="text-[#cfc2d6]">Architecture: Distributed Zero-Trust</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: PRIMARY FEATURED CASE STUDY (Alfa Event Management System) */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/90 shadow-xl backdrop-blur-2xl transition-all duration-500 hover:border-[rgba(168,85,247,0.4)] hover:shadow-2xl"
        >
          {/* Inner Radiant Specular Top Light */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ddb7ff]/50 to-transparent" />

          <div className="grid grid-cols-1 items-center gap-8 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
            {/* Case Study Story Column */}
            <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
              <div className="space-y-4">
                {/* Overline Category */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#4cd7f6]/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#4cd7f6]">
                    EVENT OPERATIONS PLATFORM
                  </span>
                  <span className="font-mono text-[13px] uppercase tracking-widest text-[#9ca3af]">
                    CASE ID // 01
                  </span>
                </div>

                {/* Case Title */}
                <h2 className="text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-3xl lg:text-4xl">
                  Alfa Event Management System
                </h2>

                {/* Problem / Solution Narrative */}
                <p className="text-[15px] leading-relaxed text-[#cfc2d6]">
                  Replaced chaotic manual coordination across concurrent high-stakes events with one unified reactive control plane for scheduling, rapid staff assignment, real-time work tracking, and automated client invoicing.
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="rounded-lg bg-[#201f21] px-2.5 py-1 font-mono text-[13px] text-[#cfc2d6]">
                    Next.js
                  </span>
                  <span className="rounded-lg bg-[#201f21] px-2.5 py-1 font-mono text-[13px] text-[#cfc2d6]">
                    React
                  </span>
                  <span className="rounded-lg bg-[#201f21] px-2.5 py-1 font-mono text-[13px] text-[#cfc2d6]">
                    TypeScript
                  </span>
                  <span className="rounded-lg bg-[#201f21] px-2.5 py-1 font-mono text-[13px] text-[#cfc2d6]">
                    Tailwind CSS
                  </span>
                  <span className="rounded-lg bg-[#201f21] px-2.5 py-1 font-mono text-[13px] text-[#cfc2d6]">
                    Framer Motion
                  </span>
                </div>
              </div>

              {/* Impact Metrics Grid */}
              <div className="grid grid-cols-3 gap-2.5 pt-2 sm:gap-3">
                <div className="flex flex-col rounded-lg bg-[#1c1b1d]/80 p-3 shadow-sm sm:p-4">
                  <span className="text-2xl font-bold tracking-tight text-[#ddb7ff] sm:text-3xl">
                    100+
                  </span>
                  <span className="mt-1 text-xs text-[#9ca3af] sm:text-[13px]">
                    Events managed
                  </span>
                </div>
                <div className="flex flex-col rounded-lg bg-[#1c1b1d]/80 p-3 shadow-sm sm:p-4">
                  <span className="text-2xl font-bold tracking-tight text-[#4cd7f6] sm:text-3xl">
                    200+
                  </span>
                  <span className="mt-1 text-xs text-[#9ca3af] sm:text-[13px]">
                    Staff dispatched
                  </span>
                </div>
                <div className="flex flex-col rounded-lg bg-[#1c1b1d]/80 p-3 shadow-sm sm:p-4">
                  <span className="text-2xl font-bold tracking-tight text-[#f8fafc] sm:text-3xl">
                    5
                  </span>
                  <span className="mt-1 text-xs text-[#9ca3af] sm:text-[13px]">
                    Core modules
                  </span>
                </div>
              </div>

              {/* CTA Link */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="group/link inline-flex items-center gap-2 text-[15px] font-medium text-[#ddb7ff] transition-all duration-300 hover:text-[#f8fafc]"
                >
                  <span>Read the case study</span>
                  <ArrowRight className="h-4 w-4 text-[#ddb7ff] transition-transform duration-300 group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Interactive Telemetry Dashboard / Mockup Visual Column */}
            <div className="relative lg:col-span-6">
              {/* Ambient Glow for mockup */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#9333ea]/20 via-[#ddb7ff]/10 to-transparent blur-2xl" />

              {/* Synthetic Control Panel Frame */}
              <div className="relative space-y-4 rounded-xl border border-white/[0.08] bg-[#0e0e10]/95 p-4 shadow-2xl backdrop-blur-xl sm:p-6">
                {/* Window Control Header */}
                <div className="flex items-center justify-between rounded-lg bg-[#201f21]/40 px-3 py-2">
                  <div className="flex items-center space-x-1.5">
                    <div className="h-3 w-3 rounded-full bg-[#ef4444]" />
                    <div className="h-3 w-3 rounded-full bg-[#b76dff]/60" />
                    <div className="h-3 w-3 rounded-full bg-[#4cd7f6]" />
                    <span className="ml-2 font-mono text-[13px] text-[#9ca3af]">
                      alfa-ops.zynx.internal
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[13px] text-[#4cd7f6]">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-[#4cd7f6]" />
                    <span>LIVE SYNC</span>
                  </div>
                </div>

                {/* Dispatcher Multi-Module Visualization */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
                  {/* Left Mini-Calendar Module */}
                  <div className="space-y-2 rounded-lg border border-white/[0.04] bg-[#0d0c13] p-3 sm:col-span-5">
                    <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                      <span className="uppercase tracking-wider">DECEMBER ROSTER</span>
                      <span className="font-bold text-[#ddb7ff]">ACTIVE</span>
                    </div>

                    {/* Shift Rows */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between rounded bg-[#201f21] p-2">
                        <div>
                          <div className="text-xs font-medium text-[#f8fafc]">Grand Gala Expo</div>
                          <div className="font-mono text-[11px] text-[#9ca3af]">14 Crew • Hall A</div>
                        </div>
                        <span className="font-mono text-xs text-[#4cd7f6]">98%</span>
                      </div>
                      <div className="flex items-center justify-between rounded bg-[#201f21]/60 p-2">
                        <div>
                          <div className="text-xs font-medium text-[#f8fafc]">Tech Conclave &apos;26</div>
                          <div className="font-mono text-[11px] text-[#9ca3af]">32 Crew • Arena 2</div>
                        </div>
                        <span className="font-mono text-xs text-[#ddb7ff]">100%</span>
                      </div>
                      <div className="flex items-center justify-between rounded bg-[#201f21]/40 p-2">
                        <div>
                          <div className="text-xs font-medium text-[#cfc2d6]">Summit Banquet</div>
                          <div className="font-mono text-[11px] text-[#9ca3af]">08 Crew • Stage 1</div>
                        </div>
                        <span className="font-mono text-xs text-[#9ca3af]">WAIT</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Dispatch Telemetry & Live Finance Snapshot */}
                  <div className="space-y-3 sm:col-span-7">
                    {/* SVG Sparkline for Real-Time Staff Utilization */}
                    <div className="rounded-lg border border-white/[0.04] bg-[#0d0c13] p-3">
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-[#9ca3af]">
                          Staff Deployment Velocity
                        </span>
                        <span className="font-mono text-xs text-[#4cd7f6]">+28.4% peak</span>
                      </div>
                      {/* Inline Micro SVG Visualizer */}
                      <div className="flex h-16 w-full items-end">
                        <svg
                          className="h-full w-full text-[#ddb7ff]"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 280 60"
                        >
                          <path
                            d="M0,45 Q30,10 70,35 T140,20 T210,12 T280,5"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                          />
                          <path
                            d="M0,45 Q30,10 70,35 T140,20 T210,12 T280,5 L280,60 L0,60 Z"
                            fill="currentColor"
                            fillOpacity="0.12"
                          />
                        </svg>
                      </div>
                      <div className="flex justify-between pt-1 font-mono text-[11px] text-[#9ca3af]">
                        <span>08:00 AM</span>
                        <span>13:00 PM</span>
                        <span>21:00 PM</span>
                      </div>
                    </div>

                    {/* Live Auto-Invoice Stat */}
                    <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#0d0c13] p-3">
                      <div className="flex items-center space-x-2.5">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ddb7ff]/20 text-[#ddb7ff]">
                          <Wallet className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-[11px] uppercase tracking-wider text-[#9ca3af]">
                            Automated Billing
                          </div>
                          <div className="font-mono text-xs text-[#f8fafc]">
                            $148,250 Reconciled
                          </div>
                        </div>
                      </div>
                      <span className="rounded bg-[#ddb7ff]/10 px-2 py-0.5 text-xs text-[#ddb7ff]">
                        0 errors
                      </span>
                    </div>
                  </div>
                </div>

                {/* Interactive Live System Status Bar */}
                <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#2a2a2c]/40 p-2.5 font-mono text-xs text-[#9ca3af]">
                  <span className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-[#4cd7f6]" />
                    <span>Alfa Node Cluster: Online (3.2ms Latency)</span>
                  </span>
                  <button
                    type="button"
                    onClick={handleRefreshTelemetry}
                    className="cursor-pointer text-[#ddb7ff] hover:underline"
                  >
                    {telemetryRefreshed ? "Telemetry Synced!" : "Refresh telemetry"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 3: SECONDARY CAPABILITY SHOWCASE / PORTFOLIO GRID */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 lg:px-20">
        {/* Section Header */}
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ddb7ff]">
              ENGINEERED CAPABILITIES
            </div>
            <h2 className="text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-3xl lg:text-4xl">
              High-load systems built for mission-critical scale.
            </h2>
          </div>
          <p className="max-w-md text-[15px] leading-relaxed text-[#cfc2d6]">
            From custom ERPs to regulatory-compliant settlement gateways, we engineer custom infrastructure without shelf-ware clutter.
          </p>
        </div>

        {/* 3-Column Glass Bento Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Project Card 1: Logistics ERP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:shadow-xl sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ddb7ff]/30 to-transparent" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ddb7ff]/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff]">
                  SUPPLY CHAIN &amp; ERP
                </span>
                <span className="font-mono text-[13px] text-[#9ca3af]">REV 4.2</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#f8fafc] transition-colors group-hover:text-[#ddb7ff]">
                Logistics &amp; Supply Chain Dispatch ERP
              </h3>
              <p className="text-[13px] leading-relaxed text-[#cfc2d6]">
                Multi-warehouse automated allocation engine. Programmed algorithmic route sorting, cargo weight balancing, and instant driver verification.
              </p>

              {/* Visual Bar Chart Module */}
              <div className="space-y-2 rounded-lg border border-white/[0.04] bg-[#1c1b1d] p-3">
                <div className="flex justify-between font-mono text-[13px] text-[#9ca3af]">
                  <span>Throughput</span>
                  <span className="text-[#4cd7f6]">38k units / hr</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#201f21]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#4cd7f6] to-[#ddb7ff]"
                    style={{ width: "82%" }}
                  />
                </div>
                <div className="flex justify-between pt-1 font-mono text-[13px] text-[#9ca3af]">
                  <span>9 Warehouses Synchronized</span>
                  <span className="font-medium text-[#ddb7ff]">0.4s sync</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  Next.js
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  TypeScript
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  React
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  Tailwind CSS
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <span className="font-mono text-[13px] text-[#9ca3af]">Efficiency +41%</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff] transition-colors group-hover:text-[#f8fafc]"
              >
                Scope similar <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Project Card 2: Fintech Settlement Gateway */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:shadow-xl sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4cd7f6]/40 to-transparent" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#4cd7f6]/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#4cd7f6]">
                  FINANCIAL ARCHITECTURE
                </span>
                <span className="font-mono text-[13px] text-[#9ca3af]">ISO 20022</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#f8fafc] transition-colors group-hover:text-[#4cd7f6]">
                Fintech Settlement &amp; Audit Gateway
              </h3>
              <p className="text-[13px] leading-relaxed text-[#cfc2d6]">
                Real-time financial transaction engine handling high-frequency ledger updates with instant reconciliation, tax withholding computation, and automated audits.
              </p>

              {/* Visual Circular Progress Module */}
              <div className="flex items-center justify-between rounded-lg border border-white/[0.04] bg-[#1c1b1d] p-3">
                <div className="flex items-center space-x-3">
                  <svg className="h-10 w-10 -rotate-90 text-[#4cd7f6]" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="3.5"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="94, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <div>
                    <div className="font-mono text-xs font-bold text-[#f8fafc]">
                      99.999% Fault Tol.
                    </div>
                    <div className="text-[11px] text-[#9ca3af]">Automated Reconciliation</div>
                  </div>
                </div>
                <span className="rounded bg-[#4cd7f6]/10 px-2 py-1 font-mono text-xs text-[#4cd7f6]">
                  2.4M Ops/D
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  Next.js
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  React
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  TypeScript
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  Zod
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <span className="font-mono text-[13px] text-[#9ca3af]">$0 Discrepancy</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#4cd7f6] transition-colors group-hover:text-[#f8fafc]"
              >
                Scope similar <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* Project Card 3: HealthTech Consultation Suite */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:shadow-xl sm:p-8"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#ddb7ff]/30 to-transparent" />
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#ddb7ff]/10 px-2.5 py-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff]">
                  TELEHEALTH &amp; DATA
                </span>
                <span className="font-mono text-[13px] text-[#9ca3af]">HIPAA SECURE</span>
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#f8fafc] transition-colors group-hover:text-[#ddb7ff]">
                HealthTech Consultation &amp; EMR Suite
              </h3>
              <p className="text-[13px] leading-relaxed text-[#cfc2d6]">
                Encrypted telehealth consultations with automated intake triage, speech-to-clinical note generation, and secure doctor-to-pharmacy script routing.
              </p>

              {/* Visual Telemetry Sparkline */}
              <div className="space-y-2 rounded-lg border border-white/[0.04] bg-[#1c1b1d] p-3">
                <div className="flex justify-between font-mono text-[13px] text-[#9ca3af]">
                  <span>Intake Time Saved</span>
                  <span className="text-[#ddb7ff]">-68% per patient</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#201f21]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#ddb7ff] via-purple-500 to-indigo-500"
                    style={{ width: "76%" }}
                  />
                </div>
                <div className="flex justify-between pt-1 font-mono text-[13px] text-[#9ca3af]">
                  <span>Audio Triage AI Engine</span>
                  <span className="font-medium text-[#4cd7f6]">99.2% Acc</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  React
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  Next.js
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  TypeScript
                </span>
                <span className="rounded bg-[#201f21] px-2 py-0.5 font-mono text-xs text-[#9ca3af]">
                  React Hook Form
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <span className="font-mono text-[13px] text-[#9ca3af]">15k+ Sessions/Mo</span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#ddb7ff] transition-colors group-hover:text-[#f8fafc]"
              >
                Scope similar <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: CLIENT TESTIMONIAL / REAL-WORLD IMPACT QUOTE */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1c1b1d]/70 p-8 shadow-2xl backdrop-blur-2xl sm:p-10 md:p-14"
        >
          {/* Ambient Backlight */}
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#9333ea]/20 blur-3xl" />
          {/* Big Decorative Quotation Mark in Brand Accent */}
          <div className="pointer-events-none absolute top-6 right-8 select-none font-serif text-9xl leading-none text-[#ddb7ff]/10">
            “
          </div>
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#ddb7ff]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ddb7ff]">
                CLIENT OPERATIONAL IMPACT
              </span>
            </div>
            <blockquote className="text-lg font-normal leading-relaxed text-[#f8fafc] sm:text-xl md:text-2xl">
              &ldquo;Before partnering with Zynx Dev, our team spent 40% of their day manually syncing event shifts, chasing staff availability, and reconciling spreadsheets. In 6 weeks, Zynx engineered a customized reactive platform that completely replaced that friction. Our operational capacity tripled without hiring additional coordinators.&rdquo;
            </blockquote>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#ddb7ff] to-indigo-600 text-lg font-bold text-[#490080] shadow-md">
                  SA
                </div>
                <div>
                  <div className="text-base font-medium text-[#f8fafc] sm:text-lg">
                    Sainul Abid &amp; Imthiyas Ahamed
                  </div>
                  <div className="text-xs text-[#cfc2d6] sm:text-[13px]">
                    Operations &amp; Executive Directors • Alfa Events
                  </div>
                </div>
              </div>
              {/* Verified Badge */}
              <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-[#201f21] px-3 py-1.5 font-mono text-xs text-[#4cd7f6] sm:self-auto sm:text-[13px]">
                <BadgeCheck className="h-4 w-4 text-[#4cd7f6]" />
                <span>Production Verified Case</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 5: BOTTOM SCOPING CTA BANNER */}
      <section className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-[rgba(168,85,247,0.4)]/40 bg-gradient-to-b from-[#0d0c13] to-[#0e0e10] p-8 text-center shadow-2xl sm:p-12 lg:p-16"
        >
          {/* Glow Halos */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#ddb7ff]/10 via-transparent to-transparent" />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center space-y-4">
            {/* Badge */}
            <span className="inline-block rounded-full border border-[#ddb7ff]/20 bg-[#ddb7ff]/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#ddb7ff]">
              ENGINEERED FOR VELOCITY
            </span>
            {/* Title */}
            <h2 className="text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-3xl md:text-4xl">
              Talk to us about a similar build.
            </h2>
            {/* Description */}
            <p className="text-[15px] leading-relaxed text-[#cfc2d6]">
              Tell us where your current operations bottleneck. In a single 30-minute discovery session, we will identify structural inefficiencies and outline an architecture that scales.
            </p>
            {/* CTA Buttons Row */}
            <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row">
              <Link
                href="/contact"
                className="purple-glow-shadow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#f8fafc] shadow-xl transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-indigo-500 active:scale-95"
              >
                Book a scoping call
              </Link>
              <a
                href="mailto:example@company.com"
                className="inline-flex items-center justify-center rounded-full border border-white/5 bg-[#201f21] px-6 py-3.5 text-[15px] text-[#cfc2d6] transition-colors hover:bg-[#2a2a2c] hover:text-[#f8fafc]"
              >
                example@company.com
              </a>
            </div>
            {/* Telemetry footer note */}
            <div className="pt-2 font-mono text-[13px] text-[#9ca3af]">
              Typical prototype sprint: 14 business days • Production guaranteed
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
