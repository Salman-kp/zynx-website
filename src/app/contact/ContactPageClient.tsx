"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowUpRight,
  Send,
  Zap,
  Code2,
  Network,
  Camera,
} from "lucide-react";

const budgetOptions = [
  "Not sure yet",
  "Under ₹5 lakh",
  "₹5–15 lakh",
  "₹15–50 lakh",
  "Over ₹50 lakh",
];

const timelineOptions = [
  "Not sure yet",
  "As soon as possible",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const scopingSlots = [
  "Tomorrow • 02:00 PM",
  "Tomorrow • 04:30 PM",
  "Thursday • 11:00 AM",
  "Friday • 03:00 PM",
];

export function ContactPageClient() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [slotConfirmed, setSlotConfirmed] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [companyTrap, setCompanyTrap] = useState("");

  const handleSelectSlot = (slot: string) => {
    setSelectedSlot(slot);
    setSlotConfirmed(true);
    setTimeout(() => {
      window.open(
        `https://wa.me/910000000000?text=${encodeURIComponent(
          `Hi Zynx Dev team, I would like to lock the scoping call slot: ${slot}`
        )}`,
        "_blank"
      );
    }, 1100);
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyTrap) {
      // Spam honeypot triggered
      return;
    }

    const formatted =
      `Hello Zynx Dev! New Project Enquiry:\n\n` +
      `*Name:* ${name.trim()}\n` +
      `*Email:* ${email.trim()}\n` +
      `*Approx. Budget:* ${budget || "Not specified"}\n` +
      `*Timeline:* ${timeline || "Not specified"}\n\n` +
      `*Project Overview:*\n${message.trim()}\n\n` +
      `Sent via zynx.dev contact portal`;

    const encoded = encodeURIComponent(formatted);
    window.open(`https://wa.me/910000000000?text=${encoded}`, "_blank");
  };

  const triggerDirectEmailDraft = () => {
    const senderName = name.trim() || "Partner";
    const senderEmail = email.trim() || "Not specified";
    const selectedBudget = budget || "Not specified";
    const selectedTimeline = timeline || "Not specified";
    const projectScope = message.trim() || "Project scoping discussion";

    const subject = encodeURIComponent(`Project Enquiry: ${senderName} [via zynx.dev]`);
    const body = encodeURIComponent(
      `Hello Zynx Dev team,\n\nName: ${senderName}\nEmail: ${senderEmail}\nEstimated Budget: ${selectedBudget}\nTimeline: ${selectedTimeline}\n\nProject Scope:\n${projectScope}\n\nBest regards,\n${senderName}`
    );

    window.location.href = `mailto:example@company.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="relative flex w-full flex-col overflow-hidden pb-20 md:pb-8">
      {/* Subtle ambient purple backdrops */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-b from-[#9333ea]/20 via-[#8b5cf6]/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-[40rem] -right-32 h-[500px] w-[500px] rounded-full bg-[#ddb7ff]/10 blur-[120px] opacity-40" />
      <div className="pointer-events-none absolute top-[70rem] -left-32 h-[520px] w-[520px] rounded-full bg-[#3131c0]/15 blur-[140px] opacity-30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-6 sm:px-12 sm:py-8 lg:px-20">
        {/* SECTION 1: Header & Hero */}
        <section className="mx-auto mb-16 max-w-3xl space-y-4 text-center sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 rounded-full border border-[rgba(168,85,247,0.4)] bg-[#ddb7ff]/10 px-3.5 py-1.5 shadow-sm backdrop-blur-md"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#ddb7ff] shadow-[0_0_8px_#ddb7ff]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#ddb7ff]">
              ZYNX — YOUR TECH PARTNER
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-semibold tracking-tight text-[#f8fafc] sm:text-5xl lg:text-[64px] lg:leading-[72px]"
          >
            Get in{" "}
            <span className="brand-x-gradient drop-shadow-[0_0_24px_rgba(168,85,247,0.45)]">
              Touch
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base leading-relaxed text-[#cfc2d6] sm:text-lg"
          >
            Have a project in mind? Let&apos;s discuss how we can bring your vision to life. We&apos;re here to engineer high-velocity solutions tailored to your scale.
          </motion.p>

          {/* Availability telemetry indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#2a2a2c]/60 px-4 py-2 backdrop-blur-lg"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4cd7f6] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4cd7f6]" />
            </span>
            <span className="font-mono text-xs text-[#e5e1e4] sm:text-[13px]">
              Available for Q2/Q3 2026 builds • Typical reply &lt; 24h
            </span>
          </motion.div>
        </section>

        {/* SECTION 2: 4 Direct Contact Channels */}
        <section className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {/* Email */}
          <motion.a
            href="mailto:example@company.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:bg-[#2a2a2c]/70"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#ddb7ff]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ddb7ff]/10 text-[#ddb7ff] transition-colors group-hover:bg-[#ddb7ff]/20">
                <Mail className="h-6 w-6" />
              </div>
              <div className="mb-1 text-xs uppercase tracking-wider text-[#9ca3af]">
                Direct Inquiries
              </div>
              <div className="text-lg font-medium text-[#f8fafc] transition-colors group-hover:text-[#ddb7ff]">
                example@company.com
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs font-medium text-[#ddb7ff] sm:text-[13px]">
              <span>Compose email</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>

          {/* Phone */}
          <motion.a
            href="tel:+910000000000"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:bg-[#2a2a2c]/70"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#ddb7ff]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#c0c1ff]/10 text-[#c0c1ff] transition-colors group-hover:bg-[#c0c1ff]/20">
                <Phone className="h-6 w-6" />
              </div>
              <div className="mb-1 text-xs uppercase tracking-wider text-[#9ca3af]">
                Voice &amp; Support
              </div>
              <div className="text-lg font-medium text-[#f8fafc] transition-colors group-hover:text-[#c0c1ff]">
                +91 XXXXX XXXXX
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs font-medium text-[#c0c1ff] sm:text-[13px]">
              <span>Call directly</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:bg-[#2a2a2c]/70"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#4cd7f6]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#4cd7f6]/10 text-[#4cd7f6] transition-colors group-hover:bg-[#4cd7f6]/20">
                <MessageCircle className="h-6 w-6" />
              </div>
              <div className="mb-1 text-xs uppercase tracking-wider text-[#9ca3af]">
                Instant WhatsApp
              </div>
              <div className="text-lg font-medium text-[#f8fafc] transition-colors group-hover:text-[#4cd7f6]">
                WhatsApp Channel
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs font-medium text-[#4cd7f6] sm:text-[13px]">
              <span>Chat now</span>
              <ArrowRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>

          {/* Location */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(168,85,247,0.4)] hover:bg-[#2a2a2c]/70"
          >
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#ddb7ff]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#ddb7ff]/10 text-[#ddb7ff] transition-colors group-hover:bg-[#ddb7ff]/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="mb-1 text-xs uppercase tracking-wider text-[#9ca3af]">
                Engineering HQ
              </div>
              <div className="line-clamp-1 text-lg font-medium text-[#f8fafc] transition-colors group-hover:text-[#ddb7ff]">
                Technology Center
              </div>
            </div>
            <div className="mt-4 flex items-center text-xs font-medium text-[#ddb7ff] sm:text-[13px]">
              <span>Corporate Campus • Map</span>
              <ArrowUpRight className="ml-1 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.a>
        </section>

        {/* SECTION 3: Book a Scoping Call Spotlight Card */}
        <section className="mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(168,85,247,0.4)]/40 bg-gradient-to-br from-[#0d0c13] via-[#2a2a2c]/60 to-[#0d0c13] p-6 shadow-xl backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#ddb7ff]/10 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
              <div className="space-y-3 lg:col-span-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#c0c1ff]">
                  <Calendar className="h-4 w-4" />
                  Direct Founder Access
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-3xl lg:text-4xl">
                  Book a scoping call
                </h2>
                <p className="max-w-2xl text-[15px] leading-relaxed text-[#cfc2d6]">
                  30 minutes with a founder. Pick a time that works — no forms, no back-and-forth email loops. Prefer to write first? The project enquiry form is located directly below.
                </p>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-1 font-mono text-xs text-[#9ca3af]">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-[#ddb7ff]" /> Architectural Review
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-[#ddb7ff]" /> Tech Stack Feasibility
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-[#ddb7ff]" /> MVP Estimation
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center gap-2 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
                <button
                  type="button"
                  onClick={() => setShowCalendar(!showCalendar)}
                  className="purple-glow-shadow inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-[#8b5cf6] to-indigo-600 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#f8fafc] shadow-xl transition-all duration-300 hover:scale-[1.02] hover:from-purple-500 hover:to-indigo-500 sm:w-auto"
                >
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule 30-min Call
                </button>
                <span className="w-full text-center text-xs text-[#9ca3af] lg:text-right">
                  Google Meet • Instant Confirmation
                </span>
              </div>
            </div>

            {/* Collapsible/Interactive Time slot drawer */}
            {showCalendar && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 border-t border-white/[0.08] pt-6"
              >
                <div className="rounded-xl border border-white/[0.04] bg-[#0e0e10]/80 p-4 backdrop-blur-md sm:p-6">
                  <div className="mb-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
                    <span className="text-base font-medium text-[#f8fafc] sm:text-lg">
                      Next Available Scoping Slots (IST / GMT+5:30)
                    </span>
                    <span className="font-mono text-xs text-[#4cd7f6]">
                      Real-time sync
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-4">
                    {scopingSlots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleSelectSlot(slot)}
                          className={`rounded-lg p-3 font-mono text-xs transition-all ${
                            isSelected
                              ? "bg-[#ddb7ff] font-bold text-[#030014]"
                              : "bg-[#2a2a2c] text-[#cfc2d6] hover:bg-[#ddb7ff]/20 hover:text-[#ddb7ff]"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>

                  {slotConfirmed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 rounded-lg bg-[#ddb7ff]/10 p-3 text-center text-xs font-medium text-[#ddb7ff] sm:text-[13px]"
                    >
                      Slot locked: {selectedSlot} — Redirecting to Founder calendar gateway...
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* SECTION 4 & 5: Split Grid (Enquiry Form & Operational Meta) */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Interactive Enquiry Form Column (7 cols) */}
          <section className="relative rounded-2xl border border-white/[0.08] bg-[#0d0c13]/90 p-6 shadow-xl backdrop-blur-2xl sm:p-10 lg:col-span-7">
            <div className="mb-6 space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight text-[#f8fafc] sm:text-3xl">
                Send us a Message
              </h2>
              <p className="text-[15px] text-[#cfc2d6]">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleEnquirySubmit} className="space-y-6">
              {/* Honey-pot anti-spam (Company: leave blank) */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor="company_trap">Company (leave blank)</label>
                <input
                  autoComplete="off"
                  id="company_trap"
                  name="company_trap"
                  tabIndex={-1}
                  type="text"
                  value={companyTrap}
                  onChange={(e) => setCompanyTrap(e.target.value)}
                />
              </div>

              {/* Name & Work Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-medium uppercase tracking-wider text-[#f8fafc]"
                    htmlFor="contact_name"
                  >
                    Your name <span className="text-[#ddb7ff]">*</span>
                  </label>
                  <input
                    className="w-full rounded-lg bg-[#0e0e10] px-4 py-3 text-[15px] text-[#f8fafc] shadow-inner placeholder:text-[#9ca3af]/60 focus:bg-[#1c1b1d] focus:outline-none focus:ring-2 focus:ring-[#ddb7ff]"
                    id="contact_name"
                    name="name"
                    placeholder="e.g. Alex Morgan"
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    className="block text-xs font-medium uppercase tracking-wider text-[#f8fafc]"
                    htmlFor="contact_email"
                  >
                    Work email <span className="text-[#ddb7ff]">*</span>
                  </label>
                  <input
                    className="w-full rounded-lg bg-[#0e0e10] px-4 py-3 text-[15px] text-[#f8fafc] shadow-inner placeholder:text-[#9ca3af]/60 focus:bg-[#1c1b1d] focus:outline-none focus:ring-2 focus:ring-[#ddb7ff]"
                    id="contact_email"
                    name="email"
                    placeholder="alex@company.com"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Approximate Budget Pills */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f8fafc]">
                    Approximate budget{" "}
                    <span className="text-[#9ca3af] normal-case">(optional)</span>
                  </label>
                  <span className="font-mono text-xs text-[#ddb7ff]">
                    {budget || "Not selected"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {budgetOptions.map((opt) => {
                    const isSelected = budget === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setBudget(opt)}
                        className={`rounded-lg px-3.5 py-2 text-xs transition-all sm:text-[13px] ${
                          isSelected
                            ? "border border-[#ddb7ff]/40 bg-[#ddb7ff]/20 font-medium text-[#ddb7ff]"
                            : "bg-[#2a2a2c] text-[#cfc2d6] hover:bg-[#39393b] hover:text-[#f8fafc]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Pills */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#f8fafc]">
                    Timeline{" "}
                    <span className="text-[#9ca3af] normal-case">(optional)</span>
                  </label>
                  <span className="font-mono text-xs text-[#c0c1ff]">
                    {timeline || "Not selected"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {timelineOptions.map((opt) => {
                    const isSelected = timeline === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTimeline(opt)}
                        className={`rounded-lg px-3.5 py-2 text-xs transition-all sm:text-[13px] ${
                          isSelected
                            ? "border border-[#c0c1ff]/40 bg-[#3131c0]/20 font-medium text-[#c0c1ff]"
                            : "bg-[#2a2a2c] text-[#cfc2d6] hover:bg-[#39393b] hover:text-[#f8fafc]"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Details Textarea */}
              <div className="space-y-1.5">
                <label
                  className="block text-xs font-medium uppercase tracking-wider text-[#f8fafc]"
                  htmlFor="contact_message"
                >
                  What are you trying to build or fix? <span className="text-[#ddb7ff]">*</span>
                </label>
                <textarea
                  className="w-full resize-y rounded-lg bg-[#0e0e10] px-4 py-3 text-[15px] text-[#f8fafc] shadow-inner placeholder:text-[#9ca3af]/60 focus:bg-[#1c1b1d] focus:outline-none focus:ring-2 focus:ring-[#ddb7ff]"
                  id="contact_message"
                  name="message"
                  placeholder="Give us a short overview of your requirements, current pain points, or target milestone..."
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Submit triggers */}
              <div className="space-y-3 pt-2">
                <button
                  type="submit"
                  className="purple-glow-shadow flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#9333ea] via-[#b76dff] to-[#8b5cf6] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#f8fafc] shadow-xl transition-all duration-300 hover:scale-[1.01] hover:opacity-95 active:scale-95"
                >
                  <Send className="h-4 w-4" />
                  <span>Send enquiry via WhatsApp</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#9ca3af]">
                  <span>Opens WhatsApp with formatted brief.</span>
                  <button
                    type="button"
                    onClick={triggerDirectEmailDraft}
                    className="cursor-pointer text-[#ddb7ff] underline transition-colors hover:text-[#f0dbff]"
                  >
                    Prefer email instead?
                  </button>
                </div>

                <p className="pt-1 text-[12px] leading-relaxed text-[#9ca3af]/80">
                  We only use your details to reply — see our{" "}
                  <Link href="#" className="underline hover:text-[#ddb7ff]">
                    Privacy Policy
                  </Link>
                  . Zero cold sales spam guaranteed.
                </p>
              </div>
            </form>
          </section>

          {/* Operational Meta & HQ Info (5 cols) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Office Hours & Response Time Module */}
            <div className="space-y-6 rounded-2xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-lg backdrop-blur-xl sm:p-8">
              <div>
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#ddb7ff]">
                  <Clock className="h-4 w-4" />
                  Operational Hours
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#f8fafc]">Office Hours</h3>
                <div className="space-y-2 text-xs sm:text-[13px] text-[#cfc2d6]">
                  <div className="flex justify-between rounded-lg bg-[#2a2a2c]/40 px-3 py-2">
                    <span className="font-medium text-[#f8fafc]">Monday – Friday</span>
                    <span className="font-mono text-[#ddb7ff]">9:00 AM – 6:00 PM IST</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-[#2a2a2c]/40 px-3 py-2">
                    <span className="font-medium text-[#f8fafc]">Saturday</span>
                    <span className="font-mono text-[#c0c1ff]">10:00 AM – 4:00 PM IST</span>
                  </div>
                  <div className="flex justify-between rounded-lg bg-[#2a2a2c]/40 px-3 py-2">
                    <span className="text-[#9ca3af]">Sunday</span>
                    <span className="font-mono text-[#9ca3af]">Closed</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/[0.08] pt-4">
                <div className="mb-1 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4cd7f6]">
                  <Zap className="h-4 w-4" />
                  Guaranteed SLA
                </div>
                <h3 className="mb-1 text-xl font-semibold text-[#f8fafc]">Response Time</h3>
                <p className="text-xs leading-relaxed text-[#cfc2d6] sm:text-[13px]">
                  We typically respond to inquiries within{" "}
                  <span className="font-semibold text-[#f8fafc]">24 hours</span>. For urgent technical matters or active enterprise outages, please call us directly or use our priority channel.
                </p>
              </div>
            </div>

            {/* Social Connect Channels */}
            <div className="space-y-4 rounded-2xl border border-white/[0.08] bg-[#0d0c13]/80 p-6 shadow-lg backdrop-blur-xl sm:p-8">
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#c0c1ff]">
                  Ecosystem
                </div>
                <h3 className="text-xl font-semibold text-[#f8fafc]">Connect With Us</h3>
                <p className="mt-1 text-xs text-[#cfc2d6] sm:text-[13px]">
                  Follow us on social media to stay updated with our latest projects, AI research, and architecture breakdowns.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* GitHub */}
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-xl bg-[#2a2a2c]/60 p-3 text-[#cfc2d6] transition-all hover:bg-[#2a2a2c] hover:text-[#f8fafc]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e0e10] text-[#ddb7ff] transition-transform group-hover:scale-110">
                    <Code2 className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-[#f8fafc]">GitHub</div>
                    <div className="truncate font-mono text-[11px] text-[#9ca3af]">@company</div>
                  </div>
                </a>

                {/* WhatsApp Community */}
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-xl bg-[#2a2a2c]/60 p-3 text-[#cfc2d6] transition-all hover:bg-[#2a2a2c] hover:text-[#f8fafc]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e0e10] text-[#4cd7f6] transition-transform group-hover:scale-110">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-[#f8fafc]">WhatsApp</div>
                    <div className="truncate font-mono text-[11px] text-[#9ca3af]">Instant sync</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-xl bg-[#2a2a2c]/60 p-3 text-[#cfc2d6] transition-all hover:bg-[#2a2a2c] hover:text-[#f8fafc]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e0e10] text-[#c0c1ff] transition-transform group-hover:scale-110">
                    <Network className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-[#f8fafc]">LinkedIn</div>
                    <div className="truncate font-mono text-[11px] text-[#9ca3af]">Company news</div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  className="group flex items-center gap-3 rounded-xl bg-[#2a2a2c]/60 p-3 text-[#cfc2d6] transition-all hover:bg-[#2a2a2c] hover:text-[#f8fafc]"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0e0e10] text-[#ddb7ff] transition-transform group-hover:scale-110">
                    <Camera className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="truncate text-xs font-medium text-[#f8fafc]">Instagram</div>
                    <div className="truncate font-mono text-[11px] text-[#9ca3af]">Updates &amp; Insights</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Physical Location Mini-Visual View */}
            <div className="space-y-3 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0d0c13]/60 p-6 shadow-lg backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#9ca3af]">
                  Global Engineering Hub
                </span>
                <span className="font-mono text-xs text-[#ddb7ff]">COORDINATES // 00.0000° N, 00.0000° E</span>
              </div>
              <div
                className="group relative flex h-44 w-full cursor-pointer items-end overflow-hidden rounded-xl border border-white/[0.06] bg-gradient-to-br from-[#1c1b1d] via-[#131315] to-[#201f21] p-4 shadow-md"
              >
                <div className="absolute inset-0 bg-[radial-gradient(#ddb7ff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-[#030014]/40 to-transparent" />
                <div className="relative z-10">
                  <div className="text-base font-semibold text-[#f8fafc]">
                    Technology Center
                  </div>
                  <div className="text-xs text-[#cfc2d6]">Corporate Campus &amp; Research Lab</div>
                </div>
                <div className="absolute top-3 right-3 rounded-full bg-[#030014]/80 p-2 text-[#ddb7ff] backdrop-blur-md">
                  <MapPin className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
