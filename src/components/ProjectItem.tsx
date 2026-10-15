import { ArrowUpRight, FolderCode, Github } from 'lucide-react';
import { projectHighlights } from '../Data/projectHighlights';

export interface TechTagProps { name: string; color: string; }
interface Props {
  name: string;
  image_path: string;
  description: string;
  technologies: TechTagProps[];
  githubLink: string;
  onClick: () => void;
  index?: number;
}

export default function ProjectItem({ name, image_path, technologies, githubLink, onClick, description, index = 1 }: Props) {
  const detail = projectHighlights[name];
  const title = detail?.title ?? name;
  const filename = image_path.split('/').pop()?.replace(/\.[^.]+$/, '') ?? name.toLowerCase().replace(/\s+/g, '-');

  return (
    <article className="project-case">
      <div className="window-titlebar project-titlebar">
        <span><FolderCode size={14} aria-hidden="true" /> {filename}.app</span>
        <span className="project-number" aria-label={`Proyecto ${index}`}>{index.toString().padStart(2, '0')}</span>
      </div>

      <button type="button" className="project-image-button" onClick={onClick} aria-label={`Ver detalles de ${title}`}>
        <img src={image_path} alt={`Vista de ${title}`} loading="lazy" width="1000" height="625" />
        <span>Explorar proyecto <ArrowUpRight size={16} aria-hidden="true" /></span>
      </button>

      <div className="project-copy">
        <p className="eyebrow">{detail?.category ?? 'DESARROLLO WEB'}</p>
        <h3><button type="button" onClick={onClick}>{title}</button></h3>
        <p>{detail?.contribution ?? description}</p>
        {detail && <p className="project-role"><span>Mi aportación</span>{detail.role}</p>}
        <ul className="project-tags" aria-label="Tecnologías">
          {technologies.map(tech => <li key={tech.name}>{tech.name}</li>)}
        </ul>
        <div className="project-links">
          <button type="button" className="text-link" onClick={onClick}>Ver proyecto <ArrowUpRight size={15} aria-hidden="true" /></button>
          {githubLink !== '#' && (
            <a className="text-link secondary-link" href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={14} aria-hidden="true" /> Código fuente
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
