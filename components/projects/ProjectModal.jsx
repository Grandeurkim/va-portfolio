"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function ProjectModal({ project, tool, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const { title, problem, approach, result, screenshots } = project;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-navy/60 px-4 py-8 md:py-16"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-lg bg-white p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close case study"
          className="absolute right-5 top-5 text-slate hover:text-navy"
        >
          <X size={22} />
        </button>

        <span className="text-sm font-medium text-accent">{tool}</span>
        <h3 className="mt-1 pr-8 font-serif text-2xl font-semibold text-navy md:text-3xl">
          {title}
        </h3>

        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Problem
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-slate">{problem}</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">
            Approach
          </h4>
          <ul className="mt-2 space-y-1.5">
            {approach.map((step) => (
              <li key={step} className="text-sm leading-relaxed text-slate">
                · {step}
              </li>
            ))}
          </ul>
        </div>

        {screenshots?.map((shot) => (
          <figure key={shot.src} className="mt-6">
            <div className="relative h-72 w-full overflow-hidden rounded-lg border border-mist md:h-96">
              <Image
                src={shot.src}
                alt={shot.caption}
                fill
                className="object-contain"
              />
            </div>
            <figcaption className="mt-2 text-center text-xs text-slate">
              {shot.caption}
            </figcaption>
          </figure>
        ))}

        <p className="mt-6 rounded-lg bg-paper p-4 text-sm font-medium text-navy">
          {result}
        </p>
      </div>
    </div>
  );
}