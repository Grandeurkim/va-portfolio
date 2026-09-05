"use client";

import { useState, useMemo } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { toolProjects } from "@/data/toolProjects";

const BATCH_SIZE = 9;

export default function Projects() {
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [selectedTool, setSelectedTool] = useState("All");
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const allProjects = useMemo(
    () =>
      toolProjects.flatMap(({ tool, projects }) =>
        projects.map((project) => ({ ...project, tool }))
      ),
    []
  );

  const featuredProjects = useMemo(
    () => allProjects.filter((p) => p.featured),
    [allProjects]
  );

  const toolNames = useMemo(
    () => ["All", ...toolProjects.map(({ tool }) => tool)],
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedTool === "All"
        ? allProjects
        : allProjects.filter((p) => p.tool === selectedTool),
    [allProjects, selectedTool]
  );

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  function handleSelectTool(tool) {
    setSelectedTool(tool);
    setVisibleCount(BATCH_SIZE);
  }

  return (
    <section id="projects" className="bg-paper py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="My Work in Action"
          eyebrowClassName="text-2xl font-bold text-accent"
          title="Real projects, by tool"
          description="A look at actual tickets and workflows I've handled, organized by the tool used."
        />

        {!showAll ? (
          <>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  tool={project.tool}
                  onClick={() => setActive({ project, tool: project.tool })}
                />
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="rounded-full border border-accent px-6 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
              >
                View all projects
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-10 flex gap-3 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
              {toolNames.map((tool) => (
                <button
                  key={tool}
                  onClick={() => handleSelectTool(tool)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    selectedTool === tool
                      ? "border-accent bg-accent text-white"
                      : "border-gray-200 bg-white text-gray-700 hover:border-accent"
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  tool={project.tool}
                  onClick={() => setActive({ project, tool: project.tool })}
                />
              ))}
            </div>

            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisibleCount((c) => c + BATCH_SIZE)}
                  className="rounded-full border border-accent px-6 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
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