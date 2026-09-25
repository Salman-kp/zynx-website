import { SectionHeading } from "../common/SectionHeading";
import { services } from "../../data/siteContent";

export function Services() {
  return (
    <section className="section-band bg-band" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Services"
          description="A full spectrum of digital services to help your business thrive in the digital age"
        >
          What We <span className="gradient-text">Offer</span>
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, detail, icon: Icon }) => (
            <article className="service-card group" key={title}>
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-glow/30 bg-deep/60 text-violet transition-transform group-hover:scale-105">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-bright transition-colors group-hover:text-violet">
                {title}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-copy-muted">
                {description}
              </p>
              <div className="border-t border-line pt-3 text-xs text-copy-faint">
                {detail}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
