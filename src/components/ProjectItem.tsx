interface TechTagProps {
    name: string;
    color: string;
}

interface Props {
    name: string;
    image_path: string;
    description: string;
    technologies: TechTagProps[];
    githubLink: string;
}

export default function ProjectItem({ name, image_path, description, technologies, githubLink }: Props) {
  return (
    <div className="project-item">
      <div className="project-card h-full border border-gray-700/50 hover:border-blue-500/50">
        <img src={image_path} alt={name} className="project-image"></img>
        <div className="project-overlay">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <span key={index} className={`tech-tag bg-${tech.color}-500/20 text-${tech.color}-300`}>{tech.name}</span>
            ))}
          </div>
          <a href={githubLink} target="_blank"
            className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group">
            Ver en GitHub <i
              className="fas fa-external-link-alt ml-2 transform group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </div>
  )
}