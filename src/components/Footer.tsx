import DivisionLine from "./ui/DivisionLine";
import { skillsData } from "../Data/skillsData";
export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative overflow-hidden">
      {/* Efecto de fondo sutil */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgwLDAsMCwwLjAyKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]">
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Columna 1: Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                DevCode
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Transformando ideas en experiencias digitales excepcionales. Especializado en desarrollo web
              moderno y soluciones tecnológicas innovadoras.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com/SamaelMedina28" target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
              <a href="https://wa.me/526648371372" target="_blank"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
                aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"><i
                  className="fas fa-chevron-right text-blue-500 text-xs mr-2"></i> Inicio</a></li>
              <li><a href="#sobre-mi"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"><i
                  className="fas fa-chevron-right text-blue-500 text-xs mr-2"></i> Sobre Mí</a></li>
              <li><a href="#habilidades"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"><i
                  className="fas fa-chevron-right text-blue-500 text-xs mr-2"></i> Habilidades</a></li>
              <li><a href="#proyectos"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"><i
                  className="fas fa-chevron-right text-blue-500 text-xs mr-2"></i> Proyectos</a></li>
              <li><a href="#contacto"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm flex items-center"><i
                  className="fas fa-chevron-right text-blue-500 text-xs mr-2"></i> Contacto</a></li>
            </ul>
          </div>

          {/* Columna 3: Habilidades destacadas */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skillsData.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-envelope text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-400 text-sm">samaelortiz2218@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-400 text-sm">Tijuana, Baja California, México</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-400 text-sm">+52 664 837 1372</span>
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