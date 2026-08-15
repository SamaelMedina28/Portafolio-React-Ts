import { useEffect } from 'react';
import type { TechTagProps } from './ProjectItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface Project {
  name: string;
  image_path: string;
  description: string;
  technologies: TechTagProps[];
  githubLink: string;
  largeDescription: string;
  learnings: string;
  imgsSlider: string[];
}

interface Props {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    // Hace que no se pueda scrollear cuando el modal está abierto
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Imágenes de prueba para el carrusel (usando la imagen del proyecto y algunas de placeholder)
  const carouselImages = [project.image_path, ...project.imgsSlider];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Fondo oscuro para cerrar el modal */}
      <div
        className="absolute inset-0 bg-zinc-950/90 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Contenedor del modal */}
      <div className="relative w-full max-w-3xl bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden transform transition-all animate-modal-in flex flex-col max-h-[90vh]">

        {/* Botón de cierre */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-zinc-400 hover:text-white bg-zinc-900/80 border border-zinc-800 hover:bg-zinc-800 rounded-full transition-all backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenedor de informacion - Desplazable */}
        <div className="overflow-y-auto custom-scrollbar">
          {/* Encabezado de imagen (Carrusel) */}
          <div className="relative h-72 sm:h-96 w-full border-b border-zinc-800">
            <Swiper
              spaceBetween={0}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // Que no se pueda deslizar por el usuario
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full h-full"
            >
              {carouselImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={img}
                    alt={`${project.name} - Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Gradiente para el texto */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none"></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Informacion del proyecto */}
          <div className="p-6 sm:p-10 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-zinc-100 mb-4">{project.name}</h2>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 text-xs font-medium rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Descripcion del proyecto */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-3">Descripción</h3>
                <p className="text-zinc-400 text-base leading-relaxed font-light">
                  {project.largeDescription}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-3">Aprendizajes</h3>
                <p className="text-zinc-400 text-base leading-relaxed font-light">
                  {project.learnings}
                </p>
              </div>
            </div>

            {/* Boton de GitHub */}
            <div className="pt-8 mt-4 border-t border-zinc-800/50">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-zinc-950 hover:bg-zinc-200 font-semibold rounded-lg transition-colors"
              >
                <i className="fab fa-github mr-2 text-lg"></i>
                Ver código fuente
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
