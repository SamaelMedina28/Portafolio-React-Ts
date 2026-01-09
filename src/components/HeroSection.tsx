import { Vortex } from "./ui/Vortex";

export default function HeroSection() {
  return (
    <Vortex
      baseHue={200}
      rangeHue={40}
      particleCount={200}
      rangeY={600}
      baseSpeed={0.03}
      rangeSpeed={1.2}
      baseRadius={1}
      rangeRadius={2.5}>
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-20">
        <div className="max-w-5xl mx-auto w-full">

          {/* Main Content - Centered */}
          <div className="space-y-8 text-center">

            {/* Status Badge */}
            <div className="hidden sm:inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 backdrop-blur-sm mt-6 sm:mt-16">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-400 tracking-wide">
                Disponible para nuevos proyectos
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-5 mt-12 sm:mt-0">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="block text-white mb-2">Full Stack</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                  Developer
                </span>
              </h1>

              <div className="flex items-center gap-3 justify-center">
                <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                <h2 className="text-2xl md:text-3xl font-light text-slate-300">
                  Samael Medina
                </h2>
                <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed font-light">
                <span className="text-white font-semibold">Desarrollador Web</span> con casi 3 años creando experiencias web robustas.
                Especializado en el ecosistema <span className="text-cyan-400 font-medium">PHP</span> (Laravel, Livewire, Alpine.js) y
                <span className="text-blue-400 font-medium"> React</span> con Inertia.
              </p>

              <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                Mi enfoque va más allá de escribir código: investigo, aprendo y encuentro
                <span className="text-white font-medium"> soluciones efectivas</span> para cualquier desafío técnico.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center pt-6">
              <a
                href="https://github.com/SamaelMedina28"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 sm:py-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <i className="fa-brands fa-github text-xl relative z-10"></i>
                <span className="relative z-10">Ver GitHub</span>
              </a>

              <a
                href="./CV_Aziel_Samael_Medina_Galvan.pdf"
                download
                className="group px-8 sm:py-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border-2 border-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 flex items-center gap-3 w-full sm:w-auto justify-center"
              >
                <i className="fa-solid fa-download text-lg group-hover:animate-bounce"></i>
                <span>Descargar CV</span>
              </a>
            </div>


            {/* Scroll Indicator */}
            {/* <div className="pt-12 animate-bounce">
              <div className="inline-flex flex-col items-center gap-2 text-slate-500">
                <span className="text-xs uppercase tracking-wider font-medium">Scroll</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div> */}

          </div>

        </div>
      </section>
    </Vortex>
  )
}