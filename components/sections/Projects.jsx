"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { toolProjects } from "@/data/toolProjects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My Work in Action"
          eyebrowClassName="text-2xl font-bold text-accent"
          title="Real projects, by tool"
          description="A look at actual tickets and workflows I've handled, organized by the tool used."
        />

        <div className="mt-10 space-y-14">
          {toolProjects.map(({ tool, projects }) => (
            <div key={tool}>
              <h3 className="font-serif text-xl font-semibold text-navy">
                {tool}
              </h3>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    tool={tool}
                    onClick={() => setActive({ project, tool })}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {active && (
        <ProjectModal
          project={active.project}
          tool={active.tool}
          onClose={() => setActive(null)}
        />
      )}
    </section>
  );
}