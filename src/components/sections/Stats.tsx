"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SectionHeading } from "../common/SectionHeading";
import { stats } from "@/data/siteContent";

export function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(".stat-item");
    gsap.fromTo(
      elements,
      { opacity: 0.85, y: 8 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  return (
    <section className="section-band" id="stats">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          description="Your growth is our goal. We combine data-driven strategy with creative design to deliver measurable business outcomes."
        >
          Building <span className="gradient-text">success</span> stories online — one
          website, one brand, one bold move at a time.
        </SectionHeading>

        <div ref={containerRef} className="grid gap-6 md:grid-cols-3">
          {stats.map(([number, title, copy]) => (
            <article className="stat-item content-card p-8 text-left" key={title}>
              <div className="mb-2 flex items-center text-5xl font-extrabold text-bright">
                {number}
                <span className="text-glow">+</span>
              </div>
              <h3 className="mb-2 text-base font-bold text-copy">{title}</h3>
              <p className="text-xs leading-relaxed text-copy-muted">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
