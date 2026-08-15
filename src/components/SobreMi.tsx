import Titles from "./ui/Titles";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="py-24 px-6 md:px-12 max-w-4xl mx-auto">
      <div className="text-center">
        <Titles title="Sobre Mí" subtitle="MI HISTORIA"/>

        <div className="mt-12 bg-zinc-900/80 border border-zinc-800 p-8 md:p-12 rounded-2xl text-left">
          <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light">
            <p>
              Soy un apasionado desarrollador Full Stack con una gran curiosidad por la tecnología y el
              aprendizaje continuo. Aunque mi experiencia profesional está comenzando, he dedicado incontables horas a perfeccionar mis
              habilidades a través de proyectos desafiantes y formación autodidacta constante.
            </p>
            <p>
              Mi enfoque se centra en crear soluciones digitales limpias, eficientes y verdaderamente centradas en el usuario.
              Disfruto enfrentándome a nuevos retos y encontrando formas innovadoras de resolver problemas
              a través del código, priorizando siempre la calidad y el rendimiento.
            </p>
          </div>

          <div className="mt-10 bg-zinc-950/50 p-6 rounded-xl border border-zinc-800/50">
            <h3 className="text-sm font-semibold mb-3 text-zinc-300 uppercase tracking-widest">Mi filosofía</h3>
            <p className="text-zinc-500 italic">
              "No soy un experto en todo, pero tengo la determinación y la capacidad analítica para aprender y dominar cualquier
              tecnología que el proyecto requiera."
            </p>
          </div>

          <div className="mt-10 flex justify-center md:justify-start">
            <a href="#contacto"
              className="inline-flex items-center px-8 py-3 bg-white text-zinc-950 font-semibold rounded-lg hover:bg-zinc-200 transition-colors">
              Hablemos de tu proyecto
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}