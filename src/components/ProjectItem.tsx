export interface TechTagProps {
  name: string;
  color: string;
}

interface Props {
  name: string;
  image_path: string;
  description: string;
  technologies: TechTagProps[];
  githubLink: string;
  onClick: () => void;
}

export default function ProjectItem({ name, image_path, technologies, githubLink, onClick, description }: Props) {
  return (
    <div className="project-item cursor-pointer" onClick={onClick}>
      <div className="project-card h-full bg-zinc-900 border border-zinc-800 hover:border-zinc-500 transition-colors duration-300">
        <img src={image_path} alt={name} className="project-image object-cover h-64 w-full"></img>
        <div className="project-overlay bg-gradient-to-t from-zinc-950 via-zinc-900/90 to-transparent p-6">
          <h3 className="text-xl font-bold text-zinc-100 mb-2">{name}</h3>
          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech, index) => (
              <span key={index} className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 border border-zinc-700 text-zinc-300">
                {tech.name}
              </span>
            ))}
          </div>
          <a href={githubLink} target="_blank"
            className="inline-flex items-center text-zinc-300 hover:text-white text-sm font-medium transition-colors group"
            onClick={(e) => e.stopPropagation()} 
          >
            Ver en GitHub <i className="fas fa-external-link-alt ml-2 transform group-hover:translate-x-1 transition-transform text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  )
}