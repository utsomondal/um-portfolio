"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const offsets = [
  { rotate: -3, x: -12, y: 0 },
  { rotate: 2, x: 8, y: 12 },
  { rotate: -1, x: -2, y: 24 },
];

export default function ProjectStack({ projects = [] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full max-w-lg mx-auto py-6">
      {/* Desktop / Tablet: Interactive Fanned Card Stack */}
      <div className="hidden sm:block relative h-[380px] w-full">
        {projects.slice(0, 3).map((p, i) => {
          const o = offsets[i % offsets.length];
          return (
            <motion.div
              key={p.slug}
              className="absolute inset-0 w-full"
              initial={false}
              animate={{ rotate: o.rotate, x: o.x, y: o.y, zIndex: i }}
              whileHover={{
                rotate: 0,
                y: o.y - 18,
                scale: 1.02,
                zIndex: 30,
              }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <ProjectCard project={p} index={i} className="h-full" />
            </motion.div>
          );
        })}
      </div>

      {/* Mobile: Clean Scrollable Vertical Stack */}
      <div className="sm:hidden flex flex-col gap-4">
        {projects.slice(0, 3).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}