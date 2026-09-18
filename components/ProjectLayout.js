import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";

export default function ProjectLayout({ project }) {
  if (!project) return null;

  const renderFormattedText = (text) => {
    const parts = text.split("**");
    if (parts.length > 1) {
      return (
        <>
          <strong className="font-semibold text-text block mb-1 text-sm sm:text-base">
            {parts[1]}
          </strong>
          <span className="text-muted text-xs sm:text-sm leading-relaxed">
            {parts[2]}
          </span>
        </>
      );
    }
    return <span className="text-muted text-sm leading-relaxed">{text}</span>;
  };

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20">
      {/* Back Button */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs font-medium text-muted hover:text-text transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to projects
      </Link>

      {/* Header Info */}
      <div className="mb-8">
        {project.status && (
          <span className="inline-block px-2.5 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20 mb-3">
            {project.status}
          </span>
        )}
        <h1 className="font-display font-bold text-3xl sm:text-5xl text-text tracking-tight">
          {project.title}
        </h1>
        <p className="mt-3 text-muted text-base sm:text-lg leading-relaxed max-w-2xl">
          {project.tagline}
        </p>
      </div>

      {/* Quick Specs Grid */}
      {project.stats?.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-8">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="p-3 sm:p-4 rounded-xl bg-muted/20 border border-border/50 text-center"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted font-medium">
                {stat.label}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-text mt-0.5">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tech Stack & Action Links */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center pb-8 mb-10 border-b border-border/60">
        <div className="flex flex-wrap gap-1.5">
          {project.tech?.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-muted/30 text-text border border-border/40"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-text text-bg text-xs font-medium hover:bg-accent hover:text-white transition-all shadow-xs"
            >
              <span>Live demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-xs font-medium text-text hover:border-accent transition-colors bg-bg"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3.5 h-3.5"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>Source</span>
            </a>
          )}
        </div>
      </div>

      {/* Browser Mockup Header & Image */}
      {project.heroImage && (
        <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-xl mb-12 bg-muted/20">
          <div className="px-4 py-2.5 border-b border-border/50 bg-bg/80 backdrop-blur-md flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <div className="mx-auto text-[11px] text-muted font-mono truncate max-w-[200px] sm:max-w-none opacity-60">
              {project.liveUrl || "https://project-preview.internal"}
            </div>
          </div>

          <div className="relative aspect-video w-full bg-muted/30">
            <Image
              src={project.heroImage}
              alt={`${project.title} Preview`}
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      )}

      {/* Case Study Sections */}
      <div className="space-y-10">
        {project.problem && (
          <section>
            <h2 className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
              The Problem
            </h2>
            <p className="text-text leading-relaxed text-sm sm:text-base max-w-prose">
              {project.problem}
            </p>
          </section>
        )}

        {project.approach && (
          <section className="pt-8 border-t border-border/60">
            <h2 className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">
              Architecture & Approach
            </h2>

            {/* DFD Image / Architecture Diagram */}
            {project.architectureImage && (
              <div className="mb-8 w-full">
                <Image
                  src={project.architectureImage}
                  alt="System Architecture Diagram"
                  width={1200}
                  height={800}
                  className="w-full h-auto block hover:scale-125 transition duration-300 ease-in-out"
                  priority
                />
              </div>
            )}

            {Array.isArray(project.approach) ? (
              <div className="grid gap-3">
                {project.approach.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-muted/10 border border-border/50 flex items-start gap-3 hover:border-border transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <div>{renderFormattedText(item)}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text leading-relaxed text-sm sm:text-base">
                {project.approach}
              </p>
            )}
          </section>
        )}

        {project.challenges && (
          <section className="pt-8 border-t border-border/60">
            <h2 className="text-xs uppercase tracking-wider text-accent font-semibold mb-4">
              Key Engineering Challenges
            </h2>
            {Array.isArray(project.challenges) ? (
              <div className="grid gap-3">
                {project.challenges.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-muted/10 border border-border/50 flex items-start gap-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                    <div>{renderFormattedText(item)}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-text leading-relaxed text-sm sm:text-base">
                {project.challenges}
              </p>
            )}
          </section>
        )}

        {project.result && (
          <section className="pt-8 border-t border-border/60">
            <h2 className="text-xs uppercase tracking-wider text-accent font-semibold mb-3">
              Impact & Outcome
            </h2>
            <div className="p-4 sm:p-5 rounded-2xl bg-accent/5 border border-accent/20 text-text leading-relaxed text-sm sm:text-base">
              {project.result}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
