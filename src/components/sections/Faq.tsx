import { SectionHeading } from "../common/SectionHeading";
import { faqs } from "../../data/siteContent";

export function Faq() {
  return (
    <section className="section-band bg-band" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Frequently Asked Questions"
          description="Pricing, ownership, timelines, and what happens if it goes wrong."
        >
          Questions buyers actually <span className="gradient-text">ask</span>
        </SectionHeading>

        <div className="space-y-3">
          {faqs.map(([question, answer]) => (
            <details className="faq group" key={question}>
              <summary className="flex cursor-pointer select-none items-center justify-between p-5 text-sm font-semibold text-copy hover:text-violet">
                <span>{question}</span>
                <span className="ml-4 text-lg font-light text-copy-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-line px-5 pb-5 pt-3 text-xs leading-relaxed text-copy-muted sm:text-sm">
                {answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
