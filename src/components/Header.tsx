"use client";

import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="site-header sticky top-0 z-50 bg-[#F4F1EA]/90 backdrop-blur-md">
      <a
        className="wordmark justify-self-start"
        href="#top"
        aria-label="Piercen Di Berardo home"
      >
        Piercen Di Berardo<span>.</span>
      </a>

      <nav
        aria-label="Primary navigation"
        className="flex flex-row gap-[2vw] justify-self-center"
      >
        <a href="#work">Work</a>
        <a href="#experience">Experience</a>
        <a href="#about">About</a>
      </nav>

      <a
        className="header-contact justify-self-end"
        href="mailto:diberardopiercen@gmail.com"
      >
        Let&apos;s talk
        <ArrowUpRight size={16} strokeWidth={1.8} />
      </a>
    </header>
  );
}
