import ProjectItem from "./ProjectItem";
import { projectsData } from "../Data/projectsData";
import Titles from "./ui/Titles";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);

  let initialProjectsCount = 12;
  if (window.innerWidth < 768) {
    initialProjectsCount = 9;
  }

  // Determina qué proyectos mostrar
  const displayedProjects = showAll
    ? projectsData
    : projectsData.slice(0, initialProjectsCount);

  return (
    <>
      <section id="proyectos" className="py-20 pb-5 lg:pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Titles title="Trabajos Recientes" subtitle="MIS PROYECTOS" />
        </div>

        {/* Contenedor de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <ProjectItem
              key={index}
              name={project.name}
              image_path={project.image_path}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </section>

      <div className="col-span-1 text-center mt-8">
        <button id="verMasBtn"
          className="text-sm font-medium text-zinc-400 hover:text-white border-b border-zinc-700 hover:border-zinc-400 transition-colors pb-1"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "VER MENOS PROYECTOS" : "VER MÁS PROYECTOS"}
        </button>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
