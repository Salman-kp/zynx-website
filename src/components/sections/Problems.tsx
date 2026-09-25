import { SectionHeading } from "../common/SectionHeading";
import { problems } from "../../data/siteContent";

export function Problems() {
  return (
    <section className="section-band">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="The Problem"
          description="As businesses grow, the same operational problems show up. We start every engagement by understanding which of these you actually have."
        >
          The problems we get called about
        </SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((item) => (
            <article className="content-card p-7" key={item.title}>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    item.tone === "indigo" ? "bg-indigo" : "bg-glow"
                  }`}
                />
                <h3
                  className={`text-xs font-bold uppercase tracking-wider ${
                    item.tone === "indigo" ? "text-indigo" : "text-violet"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-3.5 text-sm text-copy">
                {item.items.map((text) => (
                  <li className="flex items-start" key={text}>
                    <span className="mr-2.5 text-violet">•</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
