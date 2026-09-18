import Link from "next/link";
import ProjectStack from "@/components/ProjectStack";

export default function FeaturedProjects({ projects }) {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-border">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
        <div className="md:col-span-6 flex flex-col items-start">
          <span className="text-sm text-muted mb-2">Selected work</span>

          <h2 className="font-display font-semibold text-2xl sm:text-4xl text-text tracking-tight leading-tight">
            Projects
          </h2>

          <p className="mt-3 text-sm text-muted leading-relaxed max-w-md">
            Full-stack web applications, built end to end. Hover a card in
            the stack to bring it forward, or open one to see how it was
            built.
          </p>

          <div className="mt-6">
            <Link
              href="/projects"
              className="inline-flex items-center px-5 py-2.5 bg-text text-bg text-sm font-medium rounded-full hover:bg-accent transition-colors duration-200 active:scale-95"
            >
              View all projects
            </Link>
          </div>
        </div>

        <div className="md:col-span-6 w-full flex justify-center md:justify-end">
          <ProjectStack projects={projects} />
        </div>
      </div>
    </section>
  );
}
