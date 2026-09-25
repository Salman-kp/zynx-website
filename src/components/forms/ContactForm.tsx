"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactFormData } from "@/schemas/contactSchema";
import { CheckCircle2, Send } from "lucide-react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: async (data) => {
      const result = contactSchema.safeParse(data);
      if (result.success) {
        return { values: result.data, errors: {} };
      }
      const fieldErrors: Record<string, { type: string; message: string }> = {};
      for (const issue of result.error.issues) {
        const fieldName = issue.path[0] as string;
        if (fieldName && !fieldErrors[fieldName]) {
          fieldErrors[fieldName] = {
            type: issue.code,
            message: issue.message,
          };
        }
      }
      return { values: {}, errors: fieldErrors };
    },
  });

  const onSubmit = async (_data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmitted(true);
    reset();
  };

  return (
    <div className="mx-auto mt-8 max-w-xl text-left">
      {submitted ? (
        <div className="flex items-center gap-3 rounded-xl border border-glow/30 bg-deep/60 p-4 text-bright">
          <CheckCircle2 className="h-5 w-5 text-success" />
          <p className="text-sm font-medium">Thank you! Your message has been sent.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-copy">Name</label>
            <input
              {...register("name")}
              placeholder="Your name"
              className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-bright placeholder:text-copy-faint focus:border-violet focus:outline-none"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-copy">Email</label>
            <input
              {...register("email")}
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-bright placeholder:text-copy-faint focus:border-violet focus:outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-xs font-medium text-copy">Message</label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full rounded-xl border border-line bg-panel px-4 py-2.5 text-sm text-bright placeholder:text-copy-faint focus:border-violet focus:outline-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="pill-button primary-button w-full px-6 py-3 text-xs sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}{" "}
            <Send className="ml-2 h-3.5 w-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
