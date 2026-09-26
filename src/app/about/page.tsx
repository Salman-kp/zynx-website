import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us — Building Tomorrow's Digital Experiences | zynx.dev",
  description:
    "A team of passionate designers and developers dedicated to crafting exceptional digital experiences that inspire and innovate.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
