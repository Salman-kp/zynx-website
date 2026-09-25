import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact Us — Book a Discovery Call",
  description:
    "Get in touch with our engineering team for software development, automation, AI, and digital transformation.",
};

export default function ContactPage() {
  return (
    <>
      <Contact showForm={true} />
      <Faq />
    </>
  );
}
