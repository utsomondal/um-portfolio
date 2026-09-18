"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const tilt = [-3, 2, -2];
const lift = [0, 14, 28];

export default function ProjectStack({ projects = [] }) {
  if (!projects || projects.length === 0) return null;

  return (
    <div className="w-full bg-surface border border-border rounded-card p-4 sm:p-6">
      {/* Desktop / tablet: staggered row — no overlap, every card fully visible & clickable */}
      <div className="hidden sm:grid sm:grid-cols-3 gap-5">
        {projects.slice(0, 3).map((p, i) => (
          <motion.div
            key={p.slug}
            initial={false}
            animate={{ rotate: tilt[i % 3], y: lift[i % 3] }}
            whileHover={{ rotate: 0, y: lift[i % 3] - 8, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <ProjectCard project={p} index={i} className="h-full" />
          </motion.div>
        ))}
      </div>

      {/* Mobile: plain vertical stack, no rotation needed */}
      <div className="sm:hidden flex flex-col gap-4">
        {projects.slice(0, 3).map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </div>
  );
}
