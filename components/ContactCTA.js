import { Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border">
      <div className="relative p-8 sm:p-12 rounded-card border border-border text-center flex flex-col items-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-16 left-1/2 -translate-x-1/2 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none"
        />

        <span className="relative text-sm text-accent font-medium mb-3">
          Open for opportunities
        </span>

        <h2 className="relative font-display font-semibold text-2xl sm:text-4xl text-text tracking-tight max-w-lg mb-3">
          Looking for a full-stack developer?
        </h2>

        <p className="relative text-sm text-muted max-w-md leading-relaxed mb-8">
          I&apos;m actively looking for entry-level or junior software
          engineering roles, remote or based in Dhaka. Happy to talk about
          how I can help.
        </p>

        <a
          href="mailto:hello@example.com"
          className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent transition-colors duration-200 active:scale-95"
        >
          <Mail className="w-4 h-4" />
          <span>Get in touch via email</span>
        </a>
      </div>
    </section>
  );
}
