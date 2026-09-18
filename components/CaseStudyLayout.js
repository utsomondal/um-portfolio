import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export default function CaseStudyLayout({ project }) {
  if (!project) return null;

  const sections = [
    { label: "The problem", body: project.problem },
    { label: "Approach", body: project.approach },
    { label: "Challenges", body: project.challenges },
    { label: "Result", body: project.result },
  ];

  return (
    <article className="max-w-content mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-muted hover:text-text transition-colors mb-8"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to projects
      </Link>

      <div className="mb-10">
        {project.status && (
          <span className="text-sm text-accent font-medium">
            {project.status}
          </span>
        )}
        <h1 className="mt-2 font-display font-semibold text-3xl sm:text-5xl text-text tracking-tight">
          {project.title}
        </h1>
        <p className="mt-4 text-muted text-lg leading-relaxed max-w-2xl">
          {project.tagline}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 justify-between sm:items-center pb-8 mb-10 border-b border-border">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          {project.tech?.map((t) => (
            <span key={t} className="text-sm text-muted">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-text text-bg text-sm font-medium hover:bg-accent transition-colors"
            >
              <span>Live site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-text hover:border-accent transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>

      <div className="space-y-10">
        {sections
          .filter((s) => s.body)
          .map((s) => (
            <section key={s.label} className="pt-8 border-t border-border first:pt-0 first:border-t-0">
              <h2 className="text-sm text-muted mb-3">{s.label}</h2>
              <p className="text-text leading-relaxed whitespace-pre-line max-w-prose">
                {s.body}
              </p>
            </section>
          ))}
      </div>
    </article>
  );
}
