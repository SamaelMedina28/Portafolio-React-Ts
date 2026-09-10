import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { projectsData } from '../Data/projectsData';
import { projectHighlights } from '../Data/projectHighlights';
import ProjectItem from './ProjectItem';
import ProjectModal from './ProjectModal';
import Titles from './ui/Titles';
const featured = Object.keys(projectHighlights).flatMap(name => projectsData.filter(project => project.name === name));
const archive = projectsData.filter(project => !projectHighlights[project.name]);
export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  return <section id="proyectos" className="page-width content-section">
    <div className="section-intro"><Titles title="Una selección de mi trabajo" subtitle="01 / PROYECTOS" /><p>Aplicaciones con reglas de negocio, herramientas propias y decisiones técnicas que puedes explorar en el código.</p></div>
    <div className="project-list">{featured.map(project => <ProjectItem key={project.name} {...project} onClick={() => setSelectedProject(project)} />)}</div>
    <button className="archive-toggle" aria-expanded={showAll} aria-controls="project-archive" onClick={() => setShowAll(!showAll)}><span>{showAll ? 'Ocultar otros proyectos' : 'Explorar otros proyectos'} <span className="archive-count">({archive.length})</span></span>{showAll ? <Minus size={19} /> : <Plus size={19} />}</button>
    <div id="project-archive" hidden={!showAll} className="project-archive">{archive.map(project => <button key={project.name} onClick={() => setSelectedProject(project)}><span><strong>{project.name}</strong><span>{project.technologies.map(tech => tech.name).join(' / ')}</span></span><ArrowIcon /></button>)}</div>
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
  </section>;
}
function ArrowIcon() { return <span aria-hidden="true">↗</span>; }
