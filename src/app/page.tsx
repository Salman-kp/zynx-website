import { Hero } from "@/components/sections/Hero";
import { Problems } from "@/components/sections/Problems";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Stats } from "@/components/sections/Stats";
export default function HomePage() {
  return (
    <>
      <Hero />
      <Problems />
      <Services />
      <Process />
      <Stats />
    </>
  );
}
