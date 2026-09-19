import { getAllProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Capabilities from "@/components/Capabilities";
import Contact from "@/components/Contact";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main>
      <Hero />
      <TechStack />
      <FeaturedProjects projects={projects} />
      <Capabilities />
      <Contact />
    </main>
  );
}