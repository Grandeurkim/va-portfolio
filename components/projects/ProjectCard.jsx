import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, tool, onClick }) {
  const { title, problem, screenshots } = project;
  const thumbnail = screenshots?.[0];

  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-lg border border-mist bg-white text-left transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      {thumbnail && (
        <div className="relative h-44 w-full bg-mist">
          <Image
            src={thumbnail.src}
            alt={thumbnail.caption}
            fill
            className="object-cover object-top"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium text-accent">{tool}</span>
        <h3 className="mt-1 font-serif text-base font-semibold text-navy">
          {title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate">
          {problem}
        </p>

        <span className="mt-4 flex items-center gap-1 text-sm font-medium text-accent">
          View case study
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </button>
  );
}