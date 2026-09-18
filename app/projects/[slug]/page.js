import { notFound } from "next/navigation";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export function generateStaticParams() {
  return getAllProjects().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  return { title: project ? `${project.title} — Utso` : "Project — Utso" };
}

export default function ProjectPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();
  return <CaseStudyLayout project={project} />;
}
