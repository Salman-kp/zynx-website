import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Get in Touch — Contact Us | zynx.dev",
  description:
    "Have a project in mind? Let's discuss how we can bring your vision to life. We're here to engineer high-velocity solutions tailored to your scale.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
