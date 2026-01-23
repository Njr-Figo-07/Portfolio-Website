"use client";

type Project = {
  title: string;
  timeframe: string;
  tags: string[];
  bullets: string[];
};

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div
      className="group rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--bg))]
                 p-6 md:p-7 transition-all duration-200
                 hover:-translate-y-1 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.35)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight">
          {p.title}
        </h3>
        <span className="text-xs md:text-sm text-[hsl(var(--muted-fg))]">
          {p.timeframe}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[hsl(var(--border))]
                   px-3 py-1 text-xs font-medium text-[hsl(var(--muted-fg))]"
          >
            {t}
          </span>
        ))}
      </div>

      <ul className="mt-5 space-y-2 text-sm md:text-[15px] leading-relaxed text-[hsl(var(--muted-fg))]">
        {p.bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>

      <div className="mt-6 h-px w-full bg-[hsl(var(--border))] opacity-60" />
      <p className="mt-4 text-xs text-[hsl(var(--muted-fg))]">
        Hover for focus · Built by <span className="font-medium text-[hsl(var(--fg))]">Figo</span>
      </p>
    </div>
  );
}
