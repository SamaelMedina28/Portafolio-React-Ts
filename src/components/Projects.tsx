import ProjectItem from "./ProjectItem";
import { projectsData } from "../Data/projectsData";
import Titles from "./ui/Titles";
import { useState } from "react";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const initialProjectsCount = 9;

    // Determina qué proyectos mostrar
    const displayedProjects = showAll
      ? projectsData
      : projectsData.slice(0, initialProjectsCount);
  return (
    <>
      <section id="proyectos" className="py-20 pb-5 lg:pb-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
        {/* Efecto de fondo sutil */}
        <div
          className="absolute -bottom-1/4 -right-1/4 w-full h-1/2 bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-30">
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <Titles title="Trabajos Recientes" subtitle="MIS PROYECTOS" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ignate Branding Company */}
            {displayedProjects.map((project, index) => (
              <ProjectItem key={index} name={project.name} image_path={project.image_path} description={project.description} technologies={project.technologies} githubLink={project.githubLink} />
            ))}
          </div>
        </div>
      </section>
      <div className="col-span-1 text-center">
        <button id="verMasBtn"
          className="text-lg font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 animate-text-glow border-blue-400 border-b px-1 "
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      </div>
    </>
  )
}
