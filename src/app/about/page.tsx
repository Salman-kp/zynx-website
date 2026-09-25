import type { Metadata } from "next";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "About Us — Engineering & Innovation",
  description:
    "Learn about our engineering philosophy, founders' experience, and our 7-stage software development process.",
};

export default function AboutPage() {
  return (
    <>
      <Stats />
      <Process />
      <Faq />
      <Contact />
    </>
  );
}
