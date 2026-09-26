import type { Metadata } from "next";
import { WorkPageClient } from "./WorkPageClient";

export const metadata: Metadata = {
  title: "Our Work — Systems We've Built | zynx.dev",
  description:
    "Explore systems we've built and what they changed. High-load platforms, ERPs, and custom infrastructure engineered for mission-critical scale.",
};

export default function WorkPage() {
  return <WorkPageClient />;
}
