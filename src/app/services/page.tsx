import type { Metadata } from "next";
import { ServicePageClient } from "./ServicePageClient";

export const metadata: Metadata = {
  title: "Our Services — Custom Software & Business Automation",
  description:
    "Nine service lines, built around how your business operates rather than around a template. We start with the business, not the software.",
};

export default function ServicesPage() {
  return <ServicePageClient />;
}
