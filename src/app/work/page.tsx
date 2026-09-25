import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Our Work — Portfolio & Case Studies",
  description:
    "Explore platforms and systems we've built, including event operations platforms, ERPs, and custom enterprise tools.",
};

export default function WorkPage() {
  return (
    <>
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
}
