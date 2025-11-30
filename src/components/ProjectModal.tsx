import { useEffect } from 'react';
import type { TechTagProps } from './ProjectItem';

interface Project {
  name: string;
  image_path: string;
  description: string;
  technologies: TechTagProps[];
  githubLink: string;
}

interface Props {
  project: Project;
  onClose: () => void;
}
const getColor = (color: string) => {
  switch (color) {
    case "orange": return "bg-orange-500/20 text-orange-300";
    case "blue": return "bg-blue-500/20 text-blue-300";
    case "yellow": return "bg-yellow-500/20 text-yellow-300";
    case "green": return "bg-green-500/20 text-green-300";
    case "purple": return "bg-purple-500/20 text-purple-300";
    case "cyan": return "bg-cyan-500/20 text-cyan-300";
    case "sky": return "bg-sky-500/20 text-sky-300";
    case "red": return "bg-red-500/20 text-red-300";
    default: return "bg-black-500/20 text-black-300";
  }
};
export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    // Hace que no se pueda scrollear cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Fondo oscuro para cerrar el modal */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Contenedor del modal */}
      <div className="relative w-full max-w-3xl bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden transform transition-all animate-modal-in flex flex-col max-h-[90vh]">

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenedor de informacion - Desplazable */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Encabezado de imagen */}
          <div className="relative h-64 sm:h-80 w-full">
            <img
              src={project.image_path}
              alt={project.name}
              className="w-full h-full object-cover"
            />
            {/* Gradiente para el texto */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
          </div>

          {/* Informacion del proyecto */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium ${getColor(tech.color)}`}>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Descripcion del proyecto */}
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Boton de GitHub */}
            <div className="pt-6 border-t border-gray-800">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg hover:shadow-blue-500/30"
              >
                <i className="fab fa-github mr-2 text-xl"></i>
                Ver Código en GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
