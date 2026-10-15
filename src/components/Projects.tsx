import { useState } from 'react';
import { FolderOpen } from 'lucide-react';
import { projectsData } from '../Data/projectsData';
import { projectHighlights } from '../Data/projectHighlights';
import ProjectItem from './ProjectItem';
import ProjectModal from './ProjectModal';
import Titles from './ui/Titles';

const featured = Object.keys(projectHighlights).flatMap(name =>
  projectsData.filter(project => project.name === name),
);

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const visibleProjects = showAll ? projectsData : featured;

  return (
    <section id="proyectos" className="page-width content-section">
      <div className="section-intro">
        <Titles title="Código que resuelve." subtitle="01 / PROYECTOS" />
        <p>Aplicaciones con reglas de negocio, herramientas propias y decisiones técnicas que puedes explorar en el código.</p>
      </div>

      <div className="project-toolbar">
        <div className="project-filters" role="group" aria-label="Filtrar proyectos">
          <button type="button" className={!showAll ? 'is-active' : undefined} aria-pressed={!showAll} aria-controls="project-grid" onClick={() => setShowAll(false)}>
            Seleccionados <span>{featured.length.toString().padStart(2, '0')}</span>
          </button>
          <button type="button" className={showAll ? 'is-active' : undefined} aria-pressed={showAll} aria-controls="project-grid" onClick={() => setShowAll(true)}>
            Todos los proyectos <span>{projectsData.length}</span>
          </button>
        </div>
        <span className="project-directory"><FolderOpen size={14} aria-hidden="true" /> ~/projects</span>
      </div>

      <div id="project-grid" className="project-list">
        {visibleProjects.map((project, index) => (
          <ProjectItem key={project.name} {...project} index={index + 1} onClick={() => setSelectedProject(project)} />
        ))}
      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
