"use client";

import { ArrowUp } from "lucide-react";

const links = [
  { href: "https://github.com/utsomondal", label: "GitHub" },
  { href: "https://linkedin.com/in/utsodev", label: "LinkedIn" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border mt-20 sm:mt-28">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Built by <span className="text-text font-medium">Utso</span> ©{" "}
          {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-4 text-sm">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-text transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="h-3 w-px bg-border" />

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-full border border-border text-muted hover:text-text hover:border-accent transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
