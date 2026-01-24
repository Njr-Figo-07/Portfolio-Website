"use client";

type Project = {
  title: string;
  timeframe: string;
  tags: string[];
  bullets: string[];
  link?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
  const Wrapper = p.link ? "a" : "div";

  return (
    <Wrapper
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-[hsl(var(--border))] bg-white p-6 md:p-7
                 transition-all duration-200
                 hover:-translate-y-1 hover:shadow-[0_16px_60px_-30px_rgba(0,0,0,0.25)]
                 hover:border-black/20 cursor-pointer"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg md:text-xl font-semibold tracking-tight group-hover:underline">
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

      {p.link && (
        <p className="mt-5 text-sm font-medium text-black opacity-70 group-hover:opacity-100">
          Visit project →
        </p>
      )}
    </Wrapper>
  );
}
