"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="grid-backdrop relative overflow-hidden pb-28 pt-16">
      <div className="hero-aura" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-bright sm:text-6xl md:text-7xl">
          Custom software that runs your{" "}
          <span className="gradient-text  decoration-glow/40 underline-offset-8">
            operations
          </span>
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-copy-muted sm:text-xl">
          Built around how your business actually works — not around a template.
        </p>

        <div className="mb-20 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            className="pill-button primary-button w-full px-8 py-3.5 sm:w-auto"
            href="/contact"
          >
            Book a scoping call <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Link
            className="pill-button secondary-button w-full px-8 py-3.5 sm:w-auto"
            href="/work"
          >
            See our work
          </Link>
        </div>

        <div className="beam" />
      </div>
    </section>
  );
}
