import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Code2,
  Sparkles,
  Target,
  Compass,
  Mail,
  Trophy,
  Award,
  Layers,
  Server,
  Database,
  Wrench,
} from "lucide-react";

export const metadata = {
  title: "About — Utso Mondal",
  description:
    "Final-semester CSE student at World University of Bangladesh, full-stack web developer, and AI thesis researcher.",
};

export default function AboutPage() {
  return (
    <main className="max-w-content mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20">
      {/* Page Heading */}
      <div className="mb-10">
        <p className="text-sm font-medium text-accent mb-2">About</p>
        <h1 className="font-display font-semibold text-3xl sm:text-5xl text-text tracking-tight leading-tight">
          Bridging computer science principles with modern web engineering.
        </h1>
      </div>

      {/* Main Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16">
        {/* Left Sidebar Card */}
        <div className="md:col-span-4 rounded-card p-4 border border-border bg-card shadow-xs">
          <div className="relative w-full h-64 sm:h-72 rounded-xl overflow-hidden bg-surface mb-4">
            <Image
              src="/images/utso-headshot.png"
              alt="Utso Mondal"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-3 px-1">
            <div>
              <h2 className="font-display font-semibold text-lg text-text">
                Utso Mondal
              </h2>
            </div>

            <p className="text-sm text-muted leading-relaxed">
              Full-stack developer &amp; CSE undergraduate based in Dhaka,
              Bangladesh. Focused on clean MERN stack architecture.
            </p>

            {/* Academic & Achievements Section */}
            <div className="pt-3 border-t border-border flex flex-col gap-2.5 text-xs sm:text-sm text-muted">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent shrink-0" />
                <span>World University of Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-accent shrink-0" />
                <span>Final-semester B.Sc. in CSE</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-accent shrink-0" />
                <span>Top Winner — Code-Clash 2023</span>
              </div>
            </div>

            {/* Social Links Section */}
            <div className="pt-3 border-t border-border flex flex-col gap-2.5 text-xs sm:text-sm text-muted">
              {/* GitHub SVG Link */}
              <a
                href="https://github.com/utsomondal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <svg
                  className="w-4 h-4 text-accent shrink-0 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>github.com/utsomondal</span>
              </a>

              {/* LinkedIn SVG Link */}
              <a
                href="https://www.linkedin.com/in/utsodev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <svg
                  className="w-4 h-4 text-accent shrink-0 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                <span>linkedin.com/in/utsodev</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Story & Thesis */}
        <div className="md:col-span-8 space-y-6 text-base text-muted leading-relaxed">
          <p>
            I&apos;m a final-semester Computer Science &amp; Engineering student
            at{" "}
            <strong className="text-text font-medium">
              World University of Bangladesh
            </strong>
            . I specialize in building full-stack web applications from zero to
            deployment using the React, Next.js, and Node.js ecosystem.
          </p>

          {/* Thesis Highlight Box */}
          <div className="p-5 sm:p-6 rounded-card border border-accent/30 bg-accent/5">
            <div className="flex items-start gap-3.5">
              <div className="p-2 rounded-lg bg-accent/10 text-accent mt-0.5 shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-display font-semibold text-sm sm:text-base text-text">
                  Thesis &amp; Applied AI Research
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  Developing a{" "}
                  <strong className="text-text font-medium">
                    content-based career role recommendation system
                  </strong>{" "}
                  for Bangladeshi CSE/IT students. The system maps skills
                  extracted from local job postings onto 17 technical domains
                  using Sentence-BERT, builds role-domain weights for 12 fixed
                  career roles, and ranks recommendations with a deterministic
                  RoleScore — producing transparent, explainable Top-3 career
                  alignments without supervised prediction.
                </p>
              </div>
            </div>
          </div>

          <p>
            I focus on writing code that is clean, modular, and easy to maintain
            rather than just shipping quick fixes — emphasizing solid database
            modeling, RESTful API design, and intuitive user interfaces.
          </p>

          <p>
            Whether engineering solo projects or collaborating within a team, I
            bring a disciplined problem-solving mindset along with clear
            technical documentation for every system I build.
          </p>
        </div>
      </div>

      {/* Tech Stack Matrix */}
      <div className="border-t border-border pt-12 mb-16">
        <h2 className="text-xs uppercase tracking-wider text-muted font-mono font-semibold mb-6">
          Technical Skills &amp; Stack
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-card border border-border bg-card">
            <Layers className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-2">
              Frontend
            </h3>
            <ul className="text-xs sm:text-sm text-muted space-y-1 font-mono">
              <li>React.js &amp; Next.js</li>
              <li>JavaScript (ES6+)</li>
              <li>Tailwind CSS</li>
              <li>Framer Motion</li>
            </ul>
          </div>

          <div className="p-5 rounded-card border border-border bg-card">
            <Server className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-2">
              Backend
            </h3>
            <ul className="text-xs sm:text-sm text-muted space-y-1 font-mono">
              <li>Node.js &amp; Express.js</li>
              <li>RESTful API Design</li>
              <li>JWT Authentication</li>
              <li>System Architecture</li>
            </ul>
          </div>

          <div className="p-5 rounded-card border border-border bg-card">
            <Database className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-2">
              Databases &amp; Cloud
            </h3>
            <ul className="text-xs sm:text-sm text-muted space-y-1 font-mono">
              <li>MongoDB</li>
              <li>MongoDB Atlas</li>
              <li>Deployment</li>
              <li>Data Modeling</li>
            </ul>
          </div>

          <div className="p-5 rounded-card border border-border bg-card">
            <Wrench className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-2">
              Tools &amp; Workflow
            </h3>
            <ul className="text-xs sm:text-sm text-muted space-y-1 font-mono">
              <li>Git &amp; GitHub</li>
              <li>Thunder Client API Testing</li>
              <li>VS Code</li>
              <li>Agile Workflow</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Achievements & Recognition Section */}
      <div className="border-t border-border pt-12 mb-16">
        <h2 className="text-xs uppercase tracking-wider text-muted font-mono font-semibold mb-6">
          Achievements &amp; Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-card border border-border bg-card flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <Trophy className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-sm text-text">
                Top Winner — Code-Clash 2023
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Ranked among the top winners in the intra-departmental
                programming competition at WUB, solving algorithmic and data
                structure challenges under time constraints.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-card border border-border bg-card flex items-start gap-3.5">
            <div className="p-2 rounded-lg bg-accent/10 text-accent shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-sm text-text">
                English Language Proficiency
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed">
                Certified proficiency in professional English communication
                from WUB, supporting technical documentation, collaboration,
                and global team interactions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Engineering Principles */}
      <div className="border-t border-border pt-12 mb-16">
        <h2 className="text-xs uppercase tracking-wider text-muted font-mono font-semibold mb-6">
          Engineering Principles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-card border border-border bg-card">
            <Code2 className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-1.5">
              Modular Architecture
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Clean separation between routes, business logic, controllers, and UI components for long-term scalability.
            </p>
          </div>

          <div className="p-5 rounded-card border border-border bg-card">
            <Target className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-1.5">
              User-Centric UX
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Prioritizing responsive layouts, low-latency API responses, and smooth UI feedback over unnecessary complexity.
            </p>
          </div>

          <div className="p-5 rounded-card border border-border bg-card">
            <Sparkles className="w-5 h-5 text-accent mb-3" />
            <h3 className="font-display font-semibold text-sm text-text mb-1.5">
              Continuous Growth
            </h3>
            <p className="text-xs sm:text-sm text-muted leading-relaxed">
              Rapidly adapting to modern stack developments, architectural patterns, and industry standards as projects evolve.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom CTA Card */}
      <div className="p-6 sm:p-8 rounded-card border border-accent/30 bg-accent/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-display font-semibold text-lg text-text">
            Open for full-time engineering roles
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-lg leading-relaxed">
            Actively seeking full-stack, frontend, or backend opportunities — remote or onsite in Dhaka.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full border border-border text-xs sm:text-sm font-medium text-text bg-card hover:bg-muted/30 transition-colors"
          >
            <span>View projects</span>
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-text text-bg text-xs sm:text-sm font-medium hover:bg-accent hover:text-white transition-all shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
    </main>
  );
}