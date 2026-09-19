"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-border mt-20 sm:mt-28">
      <div className="max-w-content mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          Built with Next.js by{" "}
          <span className="text-text font-medium">Utso Mondal</span> ©{" "}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-2 rounded-full border border-border text-muted hover:text-text hover:border-accent transition-colors"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}