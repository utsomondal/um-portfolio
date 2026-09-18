import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";

const stack = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
];

export default function TechStack() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 py-10 border-t border-border">
      <p className="text-sm text-muted mb-5">Current stack</p>
      <div className="flex flex-wrap gap-x-6 gap-y-4">
        {stack.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center gap-2.5 text-text hover:text-accent transition-colors"
          >
            <Icon size={18} className="shrink-0" />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
