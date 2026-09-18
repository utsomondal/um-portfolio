import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Code2, Sparkles, Target, Compass } from "lucide-react";

export const metadata = {
  title: "About — Utso",
  description:
    "Final-year CSE student at World University of Bangladesh, full-stack developer and AI thesis researcher.",
};

export default function AboutPage() {
  return (
    <main className="max-w-content mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
      <div className="mb-10">
        <p className="text-sm text-muted mb-2">About</p>
        <h1 className="font-display font-semibold text-3xl sm:text-5xl text-text tracking-tight leading-tight">
          Bridging computer science with modern web engineering.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
        <div className="md:col-span-4 rounded-card p-4 border border-border">
          <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-surface mb-4">
            <Image
              src="/images/utso-avatar.jpg"
              alt="Utso"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
            />
          </div>

          <div className="space-y-2 px-1">
            <h2 className="font-display font-semibold text-text">Utso</h2>
            <p className="text-sm text-muted leading-relaxed">
              Full-stack developer and CSE undergraduate based in Dhaka,
              Bangladesh.
            </p>

            <div className="pt-3 border-t border-border flex flex-col gap-2 text-sm text-muted">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                <span>World University of Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent shrink-0" />
                <span>Final-semester CSE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 space-y-6 text-base text-muted leading-relaxed">
          <p>
            I&apos;m a final-semester Computer Science and Engineering
            student at{" "}
            <strong className="text-text font-medium">
              World University of Bangladesh
            </strong>
            . I build fast, practical web applications with React, Next.js,
            and Node.js.
          </p>

          <div className="p-5 rounded-card border border-accent/30 bg-accent/5">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-display font-semibold text-sm text-text">
                  Thesis
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  Researching and building an{" "}
                  <strong className="text-text font-medium">
                    AI-based career pathway recommendation system
                  </strong>{" "}
                  for Bangladeshi university students, using academic
                  performance data across SSC, HSC, and undergraduate levels.
                </p>
              </div>
            </div>
          </div>

          <p>
            As an entry-level developer, I care about writing code that&apos;s
            clean and easy to build on, not just code that works — practical
            architecture, sensible data modelling, and a smooth end-to-end
            experience.
          </p>

          <p>
            Whether working solo or on a team, I bring a strong
            problem-solving mindset and a habit of documenting how and why I
            built something, not just what it does.
          </p>
        </div>
      </div>

      <div className="border-t border-border pt-12 mb-16">
        <h2 className="text-sm text-muted mb-6">Engineering principles</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-card border border-border">
            <Code2 className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-1">
              Clean &amp; modular
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Well-structured JavaScript with clear separation between
              routes, controllers, and components.
            </p>
          </div>

          <div className="p-5 rounded-card border border-border">
            <Target className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-1">
              User-centric
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Smooth UX, responsive layouts, and fast load times over
              unnecessary complexity.
            </p>
          </div>

          <div className="p-5 rounded-card border border-border">
            <Sparkles className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-1">
              Always learning
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Picking up new libraries and practices as projects need them.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-card border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-lg text-text">
            Looking for junior / entry-level roles
          </h3>
          <p className="text-sm text-muted max-w-lg leading-relaxed">
            Open to full-time frontend, full-stack, or software engineering
            roles — remote or based in Dhaka.
          </p>
        </div>

        <Link
          href="/projects"
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent transition-colors shrink-0"
        >
          View projects
        </Link>
      </div>
    </main>
  );
}
