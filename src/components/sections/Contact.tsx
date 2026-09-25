import { CalendarDays, MessageCircle } from "lucide-react";
import { companyInfo } from "@/config/company";
import { ContactForm } from "@/components/forms/ContactForm";

export function Contact({ showForm = false }: { showForm?: boolean }) {
  return (
    <section className="section-band" id="contact">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="contact-card">
          <div className="contact-aura" />
          <h2 className="relative z-10 mb-4 text-3xl font-extrabold tracking-tight text-bright sm:text-4xl">
            The first step is a conversation.
          </h2>
          <p className="relative z-10 mx-auto mb-8 max-w-xl text-sm leading-relaxed text-copy sm:text-base">
            Whether the requirement is a defined project, a long-term product, or a
            technology decision that needs a second opinion, we assess it properly before
            anything is committed.
          </p>
          <div className="relative z-10 mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              className="pill-button primary-button w-full px-7 py-3 text-xs sm:w-auto"
              href={`mailto:${companyInfo.email}`}
            >
              Book a 30-minute call <CalendarDays className="ml-2 h-3.5 w-3.5" />
            </a>
            <a
              className="pill-button secondary-button w-full px-7 py-3 text-xs sm:w-auto"
              href={companyInfo.whatsappUrl}
              rel="noreferrer"
              target="_blank"
            >
              Message us on WhatsApp{" "}
              <MessageCircle className="ml-2 h-3.5 w-3.5 text-success" />
            </a>
          </div>

          {showForm && (
            <div className="relative z-10 mt-8 border-t border-line pt-8">
              <ContactForm />
            </div>
          )}

          <div className="relative z-10 mt-6 space-y-1.5 text-xs text-copy-muted">
            <p className="font-medium text-copy">We reply within one business day.</p>
            <p>
              Not ready to commit to a full build?{" "}
              <a className="text-glow underline underline-offset-4" href={`mailto:${companyInfo.email}`}>
                Start with a two-week Discovery Sprint.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
