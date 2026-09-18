"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-14 sm:pb-20">
      <div className="flex flex-col md:grid md:grid-cols-[1fr_200px] gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border mb-5 text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
            Available for full-time &amp; remote roles
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-text tracking-tight leading-[1.15]">
            Full-stack developer building
            <br className="hidden sm:block" /> products that ship.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            I&apos;m Utso, a final-year CSE student in Bangladesh. I build
            React and Node applications end to end — from data model to
            deployment.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-2.5 bg-text text-bg text-sm font-medium rounded-full hover:bg-accent transition-colors duration-200 active:scale-95"
            >
              View projects
            </Link>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center px-4 py-2.5 rounded-full border border-border text-sm font-medium text-text hover:border-accent hover:text-accent transition-colors duration-200 active:scale-95"
            >
              {copied ? "Email copied" : "Copy email"}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full flex justify-center md:justify-end"
        >
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 bg-accent/15 rounded-[2rem] blur-xl"
            />
            <div className="relative w-[160px] sm:w-[190px] aspect-[4/5] rounded-[1.5rem] overflow-hidden border border-border p-1.5 bg-bg">
              <div className="relative w-full h-full rounded-[1.15rem] overflow-hidden">
                <Image
                  src="/images/utso-avatar.jpg"
                  alt="Portrait of Utso"
                  fill
                  sizes="(max-width: 640px) 160px, 190px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
