import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Problems } from "@/components/sections/Problems";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Services — Custom Software & AI Solutions",
  description:
    "A full spectrum of digital services from custom software engineering to AI solutions, automation, and web development.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
      <Problems />
      <Contact />
    </>
  );
}
