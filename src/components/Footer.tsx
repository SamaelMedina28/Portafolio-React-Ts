import DivisionLine from "./ui/DivisionLine";
import { skillsData } from "../Data/skillsData";
export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-zinc-100 tracking-tight">
                DevCode
              </span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Transformando ideas en experiencias digitales excepcionales. Especializado en desarrollo web
              moderno y soluciones tecnológicas innovadoras.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/SamaelMedina28" target="_blank"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
                aria-label="GitHub">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://wa.me/526648371372" target="_blank"
                className="text-zinc-500 hover:text-white transition-colors duration-200"
                aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-zinc-100 font-medium text-base mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#"
                className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">Inicio</a></li>
              <li><a href="#sobre-mi"
                className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">Sobre Mí</a></li>
              <li><a href="#habilidades"
                className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">Habilidades</a></li>
              <li><a href="#proyectos"
                className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">Proyectos</a></li>
              <li><a href="#contacto"
                className="text-zinc-500 hover:text-white transition-colors duration-200 text-sm">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Habilidades destacadas */}
          <div>
            <h3 className="text-zinc-100 font-medium text-base mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-zinc-100 font-medium text-base mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-envelope text-zinc-600 mt-1 mr-3"></i>
                <span className="text-zinc-400 text-sm">samaelortiz2218@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-zinc-600 mt-1 mr-3"></i>
                <span className="text-zinc-400 text-sm">Tijuana, Baja California, México</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-zinc-600 mt-1 mr-3"></i>
                <span className="text-zinc-400 text-sm">+52 664 837 1372</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <DivisionLine />
      </div>
    </footer>
  )
}