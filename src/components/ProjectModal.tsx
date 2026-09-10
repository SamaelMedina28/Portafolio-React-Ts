import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { TechTagProps } from './ProjectItem';
import { projectHighlights } from '../Data/projectHighlights';
interface Project { name: string; image_path: string; description: string; technologies: TechTagProps[]; githubLink: string; largeDescription: string; learnings: string; imgsSlider: string[]; }
interface Props { project: Project; onClose: () => void; }
export default function ProjectModal({ project, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [current, setCurrent] = useState(0);
  const images = [project.image_path, ...project.imgsSlider];
  const highlight = projectHighlights[project.name];
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    const element = dialog.current;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => { element?.close(); document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return <dialog ref={dialog} className="project-dialog" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="project-dialog-title">
    <div className="dialog-inner"><div className="dialog-top"><span className="eyebrow">{highlight?.category ?? 'PROYECTO WEB'}</span><button autoFocus onClick={onClose} aria-label="Cerrar proyecto"><X size={22} /></button></div>
      <div className="dialog-gallery"><img src={images[current]} alt={`${project.name}, captura ${current + 1}`} /><div className="gallery-controls"><button aria-label="Imagen anterior" onClick={() => setCurrent((current - 1 + images.length) % images.length)}><ChevronLeft size={19} /></button><span aria-live="polite">{current + 1} / {images.length}</span><button aria-label="Imagen siguiente" onClick={() => setCurrent((current + 1) % images.length)}><ChevronRight size={19} /></button></div></div>
      <div className="dialog-copy"><h2 id="project-dialog-title">{highlight?.title ?? project.name}</h2>{highlight && <p className="dialog-role">{highlight.role}</p>}<ul className="project-tags">{project.technologies.map(tech => <li key={tech.name}>{tech.name}</li>)}</ul><h3>Sobre el proyecto</h3><p>{project.largeDescription}</p><h3>Desarrollo y aprendizajes</h3><p>{project.learnings}</p>{project.githubLink !== '#' && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button-primary">Explorar el código <ArrowUpRight size={16} /></a>}</div>
    </div>
  </dialog>;
}
