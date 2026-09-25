import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "../common/SectionHeading";

export function Portfolio() {
  return (
    <section className="section-band" id="portfolio">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Our Portfolio">
          Systems we've <span className="gradient-text">built</span>, and what they changed.
        </SectionHeading>

        <div className="case-card">
          <div className="mockup-stage group">
            <div className="mockup-aura" />
            <div className="phone">
              <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-phone-edge" />
              <div className="flex flex-1 flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-phone p-3">
                <div className="flex items-center justify-between font-mono text-[10px] text-copy-muted">
                  <span>Alfa OS</span>
                  <span className="h-2 w-2 rounded-full bg-success" />
                </div>
                <div className="flex h-10 items-center justify-between rounded-lg border border-glow/30 bg-deep/60 p-2 text-xs text-bright">
                  <span>Active Events</span>
                  <strong className="text-violet">12</strong>
                </div>
                <div className="space-y-2 pt-1">
                  {[1, 2, 3].map((i) => (
                    <div className="h-6 rounded border border-line bg-line" key={i} />
                  ))}
                </div>
                <div className="mt-auto flex h-8 items-center justify-center rounded-lg bg-brand-gradient text-[11px] font-semibold text-bright">
                  Schedule Staff
                </div>
              </div>
              <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-phone-edge" />
            </div>
            <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-glow/40 bg-deep/80 text-violet">
              <ExternalLink className="h-5 w-5" />
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-2 inline-block text-xs font-bold uppercase tracking-widest text-glow">
              Event Operations Platform
            </span>
            <h3 className="mb-4 text-2xl font-bold text-bright sm:text-3xl">
              Alfa Event Management System
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-copy-muted sm:text-base">
              Replaced manual coordination across concurrent events with one system for
              scheduling, staff assignment, work tracking and finance.
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-3 text-xs font-medium text-copy">
              {["100+ events managed", "200+ staff managed", "5 core modules"].map(
                (tag) => (
                  <span
                    className="rounded-full border border-glow/20 bg-deep/40 px-3.5 py-1.5"
                    key={tag}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
            <Link
              className="inline-flex items-center gap-2 border-b border-glow/50 pb-1 text-sm font-semibold text-violet hover:text-bright"
              href="/contact"
            >
              Talk to us about a similar build <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
