import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Projects — Utso",
  description: "Full-stack web applications built by Utso, end to end.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="max-w-content mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
      <div className="mb-10">
        <p className="text-sm text-muted mb-2">Portfolio</p>
        <h1 className="font-display font-semibold text-3xl sm:text-5xl text-text tracking-tight">
          Projects
        </h1>
        <p className="mt-3 text-muted max-w-xl">
          What I&apos;ve built, and how — what the problem was, the approach
          I took, and what I ran into along the way.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
