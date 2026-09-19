"use client";

import { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    handle: "@utsomondal",
    url: "https://github.com/utsomondal",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "utsodev",
    url: "https://linkedin.com/in/utsodev",
    icon: (
      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.238-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "utsomondal2025@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    /* id="contact" এবং scroll-mt-24 যোগ করা হয়েছে যাতে Fixed Navbar-এর নিচে কন্টেন্ট ঢেকে না যায় */
    <section
      id="contact"
      className="scroll-mt-24 max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-20 border-t border-border/40"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
        {/* Left Column: Status Badge, Title, Text & Action Buttons */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for opportunities</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-text tracking-tight">
            Looking for a full-stack developer?
          </h2>

          <p className="text-sm sm:text-base text-muted leading-relaxed max-w-md">
            I&apos;m actively looking for entry-level or junior software engineering roles, remote or based in Dhaka.
          </p>

          {/* Action Buttons: Direct Mail + Copy Option */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent hover:text-white transition-all active:scale-95 shadow-xs"
            >
              <Mail className="w-4 h-4" />
              <span>Get in touch</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border/80 bg-card hover:bg-muted/30 text-text text-xs sm:text-sm font-medium transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-muted" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Social Links */}
        <div className="w-full md:w-[320px] space-y-3">
          <span className="block text-[11px] font-mono uppercase tracking-widest text-muted font-semibold">
            ELSEWHERE
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between p-3.5 rounded-2xl border border-border/80 bg-card/40 hover:bg-card hover:border-accent/40 transition-all duration-200 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="text-text group-hover:text-accent transition-colors">
                    {social.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-sm text-text group-hover:text-accent transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-xs text-muted">{social.handle}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}