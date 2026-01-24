import Shell from "@/components/Shell";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { site, projects, experience, skills } from "@/lib/data";

function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm md:text-base font-medium transition-transform duration-200 hover:-translate-y-0.5";
  const primary =
    "bg-[hsl(var(--fg))] text-[hsl(var(--bg))] border border-[hsl(var(--fg))]";
  const ghost =
    "bg-transparent text-[hsl(var(--fg))] border border-[hsl(var(--border))]";

  return (
    <a href={href} className={`${base} ${variant === "primary" ? primary : ghost}`}>
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <Shell>
      {/* Sticky top nav */}
      <header className="sticky top-0 z-20 border-b border-[hsl(var(--border))] bg-[hsl(var(--bg)/0.85)] backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 md:px-8 py-6">
          <a href="#top" className="relative hover:text-lg md:text-xl font-semibold tracking-tight transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full">
            {site.name}
          </a>

          <nav className="hidden md:flex items-center gap-8 text-base text-[hsl(var(--muted-fg))]">            
            <a className="relative hover:text-[hsl(var(--fg))] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
 href="#projects">Projects</a>
            <a className="relative hover:text-[hsl(var(--fg))] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
 href="#experience">Experience</a>
            <a className="relative hover:text-[hsl(var(--fg))] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
 href="#skills">Skills</a>
            <a className="relative hover:text-[hsl(var(--fg))] transition after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full"
 href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6 md:px-8">
        {/* HERO */}
        <section className="pt-12 pb-10 md:pt-16 md:pb-12">
          <div className="space-y-8 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] px-4 py-2 text-xs md:text-sm text-[hsl(var(--muted-fg))]">
              <span className="font-mono">{site.location}</span>
              <span className="opacity-60">•</span>
              <span>{site.role}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              {site.name}
              <span className="block text-[hsl(var(--muted-fg))] mt-3 text-2xl md:text-3xl font-medium">
                {site.headline}
              </span>
            </h1>

            <p className="max-w-2xl text-base md:text-lg leading-relaxed text-[hsl(var(--muted-fg))] text-center">
              {site.subheadline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button href={site.ctas[0].href} variant="primary">{site.ctas[0].label}</Button>
              <Button href={site.ctas[1].href} variant="ghost">{site.ctas[1].label}</Button>
              <Button href={site.linkedin} variant="ghost">LinkedIn</Button>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 w-full max-w-4xl">
              <div className="rounded-2xl border border-[hsl(var(--border))] p-5 text-center">
                <p className="text-xs text-[hsl(var(--muted-fg))]">Focus</p>
                <p className="mt-2 font-medium">AI · ML · Multimodal</p>
              </div>
              <div className="rounded-2xl border border-[hsl(var(--border))] p-5 text-center">
                <p className="text-xs text-[hsl(var(--muted-fg))]">Current</p>
                <p className="mt-2 font-medium">Thesis track (Spring 2026)</p>
              </div>
              <div className="rounded-2xl border border-[hsl(var(--border))] p-5 text-center">
                <p className="text-xs text-[hsl(var(--muted-fg))]">Build style</p>
                <p className="mt-2 font-medium">End-to-end, shipped systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <Section title="Projects">
          <div id="projects" className="scroll-mt-28" />
          <div className="grid grid-cols-1 gap-5 md:gap-5">
            {projects.map((p) => (
              <ProjectCard key={p.title} p={p} />
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <div id="experience" className="scroll-mt-28" />
        <Section title="Experience">
          <div className="space-y-4">
            {experience.map((e) => (
              <div
                key={e.role}
                className="rounded-2xl border border-[hsl(var(--border))] p-6 md:p-7"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold tracking-tight">
                      {e.role}
                    </h3>
                    <p className="text-sm md:text-base text-[hsl(var(--muted-fg))]">
                      {e.org}
                    </p>
                  </div>
                  <span className="text-xs md:text-sm text-[hsl(var(--muted-fg))]">
                    {e.timeframe}
                  </span>
                </div>

                <ul className="mt-4 space-y-2 text-sm md:text-[15px] leading-relaxed text-[hsl(var(--muted-fg))]">
                  {e.bullets.map((b, i) => (
                    <li key={i}>• {b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(800px circle at 15% 10%, rgba(120,120,255,0.12), transparent 40%), " +
              "radial-gradient(800px circle at 85% 20%, rgba(0,0,0,0.04), transparent 45%)",
          }}
        />

        {/* SKILLS */}
        <div id="skills" className="scroll-mt-28" />
        <Section title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {skills.map((s) => (
              <div
                key={s.group}
                className="rounded-2xl border border-[hsl(var(--border))] p-6 md:p-7"
              >
                <h3 className="font-semibold tracking-tight">{s.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full border border-[hsl(var(--border))]
                             px-3 py-1 text-xs font-medium text-[hsl(var(--muted-fg))]"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <div id="contact" className="scroll-mt-28" />
        <Section title="Contact">
          <div className="rounded-2xl border border-[hsl(var(--border))] p-6 md:p-7 space-y-3 text-[hsl(var(--muted-fg))]">
            <p>
              Email:{" "}
              <a className="underline hover:opacity-80" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p className="text-[hsl(var(--muted-fg))]">
              Currently open to internships, research collaborations, and full-time AI/ML roles starting 2026.
            </p>

            <p className="text-sm text-[hsl(var(--muted-fg))]">
              I typically respond within 24–48 hours.
            </p>
          </div>
        </Section>

        <footer className="py-12 text-sm text-[hsl(var(--muted-fg))]">
          © {new Date().getFullYear()} {site.name}
        </footer>
      </main>
    </Shell>
  );
}
