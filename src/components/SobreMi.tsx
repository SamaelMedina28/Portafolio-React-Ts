export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-12 max-w-4xl mx-auto relative overflow-hidden">
      {/* Efecto de fondo sutil */}
      <div
        className="absolute -top-1/4 -right-1/4 w-full h-full bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-30">
      </div>
      <div
        className="absolute -bottom-1/4 -left-1/4 w-full h-full bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-20">
      </div>

      <div className="relative z-10 text-center">
        <span className="inline-block mb-4 text-blue-400 font-mono text-sm tracking-widest">MI HISTORIA</span>
        <h2
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 animate-text-glow">
          Sobre Mí</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>

        <div
          className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            Soy un apasionado desarrollador Full Stack con una gran curiosidad por la tecnología y el
            aprendizaje continuo.
            Aunque mi experiencia profesional es limitada, he dedicado incontables horas a perfeccionar mis
            habilidades
            a través de proyectos personales y formación autodidacta.
          </p>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Mi enfoque se centra en crear soluciones digitales limpias, eficientes y centradas en el usuario.
            Disfruto enfrentándome a nuevos desafíos y encontrando formas innovadoras de resolver problemas
            a través del código.
          </p>

          <div className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/30">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Mi filosofía</h3>
            <p className="text-slate-300 italic">
              "No soy un experto en todo, pero tengo la determinación y la capacidad de aprender cualquier
              tecnología que se requiera."
            </p>
          </div>

          <div className="mt-8">
            <a href="#contacto"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1">
              <i className="fas fa-paper-plane mr-2"></i>
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}