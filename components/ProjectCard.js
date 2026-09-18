import Link from "next/link";
import ProjectMockup from "@/components/ProjectMockup";

export default function ProjectCard({ project, index = 0, className = "" }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group flex flex-col rounded-card border border-border hover:border-accent hover:shadow-[0_12px_28px_-16px_rgba(20,22,26,0.25)] hover:-translate-y-1 transition-all duration-200 overflow-hidden bg-card ${className}`}
    >
      <div className="p-3 bg-surface border-b border-border">
        <ProjectMockup variant={index} />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display font-semibold text-lg text-text group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          {project.status && (
            <span className="text-xs text-muted whitespace-nowrap mt-1">
              {project.status}
            </span>
          )}
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-auto pt-2 border-t border-border">
          {project.tech?.slice(0, 4).map((t) => (
            <span key={t} className="text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
