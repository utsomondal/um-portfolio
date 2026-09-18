import { getAllProjects } from "@/lib/projects";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import FeaturedProjects from "@/components/FeaturedProjects";
import Capabilities from "@/components/Capabilities";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  const projects = getAllProjects();

  return (
    <main>
      <Hero />
      <TechStack />
      <FeaturedProjects projects={projects} />
      <Capabilities />
      <ContactCTA />
    </main>
  );
}