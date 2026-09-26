"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Brand } from "../common/Brand";
import { navLinks } from "@/data/siteContent";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          className="group flex min-w-0 items-center gap-2"
          href="/"
          onClick={() => setMenuOpen(false)}
        >
          <Brand />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-copy md:flex">
          {navLinks.map(({ label, href }) => (
            <Link
              className="transition-colors hover:text-violet"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link className="pill-button subtle-button hidden sm:inline-flex" href="/contact">
            Book a call
          </Link>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-bright md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-line bg-canvas/95 px-4 pb-5 pt-2 backdrop-blur-xl md:hidden">
          {navLinks.map(({ label, href }) => (
            <Link
              className="block rounded-lg px-3 py-3 text-sm font-medium text-copy hover:bg-deep hover:text-violet"
              href={href}
              key={label}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
