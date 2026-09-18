import { Code2, Server, Database, Layout } from "lucide-react";

const capabilities = [
  {
    icon: Layout,
    title: "Frontend engineering",
    description:
      "Building responsive, accessible interfaces with React, Next.js, and Tailwind CSS, animated with Framer Motion where it earns its place.",
  },
  {
    icon: Server,
    title: "Backend & REST APIs",
    description:
      "Structuring Node.js and Express services in a clean MVC pattern, with JWT auth and native fetch — no unnecessary dependencies.",
  },
  {
    icon: Database,
    title: "Data modelling",
    description:
      "Designing MongoDB schemas with the native driver, focused on the queries the app actually needs rather than over-engineering early.",
  },
  {
    icon: Code2,
    title: "Clean, maintainable code",
    description:
      "Writing structured, well-organized JavaScript with clear separation between routes, controllers, and components.",
  },
];

export default function Capabilities() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-12 sm:py-16 border-t border-border">
      <p className="text-sm text-muted mb-8">What I build</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-5 rounded-card border border-border hover:border-accent transition-colors duration-200"
            >
              <Icon className="w-5 h-5 text-accent mb-3" />
              <h3 className="font-display font-semibold text-text mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
