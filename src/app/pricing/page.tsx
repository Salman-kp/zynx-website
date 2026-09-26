import type { Metadata } from "next";
import { PricingPageClient } from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing & Engagement Models — Transparent Tech Partnerships | zynx.dev",
  description:
    "What it costs to work with us. Scope, deliverables, timeline, and pricing agreed in writing before any work starts. Zero surprise invoices and full IP ownership.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}
