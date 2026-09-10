import { ArrowUpRight } from 'lucide-react';
import { projectHighlights } from '../Data/projectHighlights';
export interface TechTagProps { name: string; color: string; }
interface Props { name: string; image_path: string; description: string; technologies: TechTagProps[]; githubLink: string; onClick: () => void; }
export default function ProjectItem({ name, image_path, technologies, githubLink, onClick, description }: Props) {
  const detail = projectHighlights[name];
  return <article className="project-case">
    <button className="project-image-button" onClick={onClick} aria-label={`Ver detalles de ${detail?.title ?? name}`}><img src={image_path} alt={`Vista de ${detail?.title ?? name}`} loading="lazy" width="1000" height="625" /><span>Ver proyecto <ArrowUpRight size={16} /></span></button>
    <div className="project-copy"><p className="eyebrow">{detail?.category ?? 'DESARROLLO WEB'}</p><h3><button onClick={onClick}>{detail?.title ?? name}</button></h3><p>{detail?.contribution ?? description}</p>
      {detail && <p className="project-role"><span>Mi aportación</span>{detail.role}</p>}
      <ul className="project-tags" aria-label="Tecnologías">{technologies.map((tech, index) => <li key={index}>{tech.name}</li>)}</ul>
      <div className="project-links"><button className="text-link" onClick={onClick}>Detalles del proyecto <ArrowUpRight size={15} /></button>{githubLink !== '#' && <a className="text-link secondary-link" href={githubLink} target="_blank" rel="noopener noreferrer">Código fuente <ArrowUpRight size={15} /></a>}</div>
    </div>
  </article>;
}
