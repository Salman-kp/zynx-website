import { SectionHeading } from "../common/SectionHeading";
import { stages } from "../../data/siteContent";

export function Process() {
  return (
    <section className="section-band bg-band" id="process">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How We Work"
          description="Seven stages from first conversation to long-term support. Each one is agreed before the next begins, so there is never a question about where a project stands."
        >
          What actually happens after you get in touch
        </SectionHeading>

        <div className="mb-12 grid gap-3 md:grid-cols-7">
          {stages.map((stage, index) =>
            index === 0 ? (
              <article className="active-stage md:col-span-2" key={stage}>
                <div>
                  <div className="mb-4 font-mono text-4xl font-extrabold text-glow">
                    01
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-bright">Discovery</h3>
                  <p className="text-xs leading-relaxed text-copy-muted">
                    Requirements, stakeholders, and how the business actually works —
                    before any technology is recommended.
                  </p>
                </div>
                <div className="mt-6 flex items-center text-xs font-medium text-violet">
                  <span className="mr-2 h-1.5 w-1.5 rounded-full bg-violet" />
                  Initial Scoping
                </div>
              </article>
            ) : (
              <article className="stage-card" key={stage}>
                <div className="mb-3 font-mono text-2xl font-bold text-copy-faint">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-copy">
                  {stage}
                </h4>
              </article>
            )
          )}
        </div>

        <div className="text-center">
          <a className="pill-button secondary-button px-6 py-2.5 text-xs" href="#contact">
            See the full process <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
