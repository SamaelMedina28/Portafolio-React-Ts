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
  const getColor = (color: string) => {
    switch (color) {
      case "orange":
        return "bg-orange-500/20 text-orange-300";
      case "blue":
        return "bg-blue-500/20 text-blue-300";
      case "yellow":
        return "bg-yellow-500/20 text-yellow-300";
      case "green":
        return "bg-green-500/20 text-green-300";
      case "purple":
        return "bg-purple-500/20 text-purple-300";
      case "cyan":
        return "bg-cyan-500/20 text-cyan-300";
      case "sky":
        return "bg-sky-500/20 text-sky-300";
      case "red":
        return "bg-red-500/20 text-red-300";
      default:
        return "bg-black-500/20 text-black-300";
    }
  };
  return (
    <div className="project-item">
      <div className="project-card h-full border border-gray-700/50 hover:border-blue-500/50">
        <img src={image_path} alt={name} className="project-image"></img>
        <div className="project-overlay">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <p className="text-gray-300 text-sm mb-4">{description}</p>
          <div className="flex flex-wrap">
            {technologies.map((tech, index) => (
              <span key={index} className={`tech-tag ${getColor(tech.color)}`}>{tech.name}</span>
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