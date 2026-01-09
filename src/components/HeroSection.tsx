import { Vortex } from "./ui/Vortex";

export default function HeroSection() {
  return (
    <Vortex
      backgroundColor="#00000000"
      baseHue={190}
      rangeHue={60}
      particleCount={400}
      rangeY={600}
      baseSpeed={0.05}
      rangeSpeed={1.5}
      baseRadius={1}
      rangeRadius={3}>
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 animate-fade-in">
          {/* Left Content */}
          <div className="lg:w-1/2 space-y-4">
            <div className="inline-block px-4 py-1 rounded-full bg-black/20 text-sm font-medium animate-pulse">
              <span className="text-blue-400 font-semibold">✅ Disponible para trabajar</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-50 via-blue-500 to-blue-600 animate-text-glow">
              Full Stack Developer
            </h1>
            <span className="text-blue-400 font-semibold px-1 text-lg block">Samael Medina</span>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Desarrollador Web con casi 3 años de experiencia, especializado en el ecosistema PHP (Laravel, Livewire, Alpine.js) y React con Inertia. Me defino por una mentalidad resolutiva: más allá de dominar herramientas, tengo la capacidad de investigar y encontrar soluciones efectivas para cualquier desafío técnico.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/SamaelMedina28" target="_blank"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg hover:scale-105 transition duration-300 ease-in-out space-x-2">
                {/* Icono de GitHub */}
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a href="./CV_Aziel_Samael_Medina_Galvan.pdf" download
                className="px-8 py-4 rounded-full border border-slate-600 text-white hover:border-white transition duration-300 flex items-center space-x-2">
                <i className="fa-solid fa-file-pdf"></i>
                <span>Descargar CV</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 relative group">
            <img src="./img/SamaelMedina.jpeg" className="w-full max-w-lg rounded-xl shadow-2xl floating-object" />
            <div
              className="absolute -top-16 -left-16 w-40 h-40 rounded-full bg-blue-500/30 blur-3xl animate-pulse-slow">
            </div>
            <div
              className="absolute -bottom-12 -right-3 w-36 h-36 rounded-full bg-blue-500/30 blur-3xl animate-pulse-slow">
            </div>
          </div>
        </div>
      </section>
    </Vortex>
  )
}