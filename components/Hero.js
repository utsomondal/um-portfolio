"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Copy, Check, MapPin } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 pt-28 sm:pt-40 pb-14 sm:pb-20">
      <div className="flex flex-col md:grid md:grid-cols-[1fr_280px] gap-10 md:gap-12 items-center">
        
        {/* Left Column: Bio & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-surface border border-border mb-5 text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse" />
            Available for full-time &amp; remote roles
          </div>

          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-text tracking-tight leading-[1.15]">
            Full-stack developer building
            <br className="hidden sm:block" /> products that ship.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-muted leading-relaxed max-w-xl">
            I&apos;m Utso Mondal, a final-year CSE student in Bangladesh. I
            build React and Node applications end to end — from data model to
            deployment.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-2.5 bg-text text-bg text-sm font-medium rounded-full hover:bg-accent hover:text-white transition-colors duration-200 active:scale-95 shadow-xs"
            >
              View projects
            </Link>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm font-medium text-text hover:border-accent hover:text-accent transition-colors duration-200 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Email copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 shrink-0" />
                  <span>Copy email</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Right Column: Balanced Pop-Out Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-full flex justify-center md:justify-end"
        >
          {/* Main Avatar Wrapper */}
          <div className="group relative w-60 sm:w-68 h-60 sm:h-68 flex items-end justify-center">
            
            {/* Ambient Background Glow */}
            <div 
              aria-hidden="true"
              className="absolute bottom-0 w-60 sm:w-68 h-60 sm:h-68 rounded-full bg-accent/20 blur-xl transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Circular Base Border & Background Frame */}
            <div className="absolute bottom-0 w-60 sm:w-68 h-60 sm:h-68 rounded-full bg-card border-2 border-border shadow-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-transparent" />
            </div>

            {/* Pop-Out Image Frame: Height 118% allows top head pop-out, rounded-b-full clips bottom */}
            <div className="relative w-60 sm:w-68 h-[118%] z-10 overflow-hidden rounded-b-full">
              <Image
                src="/images/utso-headshot-bg.png"
                alt="Portrait of Utso Mondal"
                fill
                quality={95}
                sizes="(max-width: 640px) 240px, 272px"
                className="object-cover object-top scale-105 transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </div>

            {/* Location Badge */}
            <div className="absolute bottom-2 -right-1 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-card/95 backdrop-blur-md border border-border shadow-sm text-text">
              <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
              <span>Dhaka, BD</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}