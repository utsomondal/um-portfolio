"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-[calc(1rem+env(safe-area-inset-top))] sm:pt-6">
      <div className="max-w-content mx-auto">
        <nav
          className={`flex items-center justify-between px-3 py-2 rounded-full border transition-shadow duration-300 ${
            scrolled
              ? "bg-bg/85 backdrop-blur-xl border-border shadow-[0_8px_24px_-12px_rgba(20,22,26,0.18)]"
              : "bg-bg/70 backdrop-blur-md border-border/70"
          }`}
        >
          <Link
            href="/"
            className="font-display font-semibold text-sm text-text pl-2 pr-3"
          >
            Utso
          </Link>

          <div className="hidden sm:flex items-center gap-1 bg-surface p-1 rounded-full border border-border/60">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium transition-colors duration-200 ${
                  isActive(link.href) ? "text-text" : "text-muted hover:text-text"
                }`}
              >
                {isActive(link.href) && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-bg rounded-full border border-border shadow-sm"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <a
            href="mailto:hello@example.com"
            className="hidden sm:inline-flex items-center px-4 py-1.5 bg-text text-bg text-xs font-medium rounded-full hover:bg-accent transition-colors duration-200"
          >
            Get in touch
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="sm:hidden relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface transition-colors"
          >
            <div className="w-4 h-3.5 relative flex flex-col justify-between">
              <span
                className={`w-full h-[1.5px] bg-text transition-transform duration-300 origin-left ${
                  open ? "rotate-45 translate-y-[1px]" : ""
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-text transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-[1.5px] bg-text transition-transform duration-300 origin-left ${
                  open ? "-rotate-45 -translate-y-[1px]" : ""
                }`}
              />
            </div>
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="sm:hidden mt-2 p-3 rounded-2xl bg-bg border border-border shadow-lg flex flex-col gap-1 text-sm"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-xl transition-colors ${
                    isActive(link.href)
                      ? "bg-surface text-text font-medium"
                      : "text-muted hover:bg-surface hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:hello@example.com"
                className="mt-1 px-3 py-2.5 rounded-xl bg-text text-bg font-medium text-center"
              >
                Get in touch
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
