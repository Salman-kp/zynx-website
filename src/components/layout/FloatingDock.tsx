import Link from "next/link";
import { Brand } from "../common/Brand";

const dockLinks: { label: string; href: string }[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function FloatingDock() {
  return (
    <div className="fixed bottom-6 left-1/2 z-40 w-[92%] max-w-2xl -translate-x-1/2">
      <div className="flex items-center justify-between rounded-full border border-glow/25 bg-panel/90 px-4 py-2.5 shadow-dock backdrop-blur-xl">
        <Link href="/" aria-label="Go to home">
          <Brand compact />
        </Link>
        <div className="hidden items-center gap-4 text-xs font-medium text-copy sm:flex">
          <Link className="rounded-full bg-line px-2.5 py-1 text-bright" href="/">
            Home
          </Link>
          {dockLinks.map(({ label, href }) => (
            <Link className="hover:text-violet" href={href} key={label}>
              {label}
            </Link>
          ))}
        </div>
        <Link
          className="rounded-full bg-brand px-3.5 py-1.5 text-xs font-semibold text-bright hover:bg-glow"
          href="/contact"
        >
          Book a call
        </Link>
      </div>
    </div>
  );
}
