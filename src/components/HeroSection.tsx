export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 py-20 overflow-hidden bg-zinc-950">
      {/* Patrón de fondo muy sutil (dots) en lugar de Vortex */}
      <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#3f3f46 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-md mb-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">
            Disponible para nuevos proyectos
          </span>
        </div>

        {/* Main Heading */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-white">
            Full Stack <br /> Developer
          </h1>

          <h2 className="text-xl md:text-2xl font-normal text-zinc-400 tracking-wide">
            Samael Medina
          </h2>
        </div>

        {/* Description */}
        <div className="mt-8 space-y-4 max-w-2xl mx-auto">
          <p className="text-lg md:text-xl text-zinc-400 leading-relaxed font-light">
            Desarrollador Web con casi 3 años creando experiencias robustas.
            Especializado en el ecosistema <span className="text-zinc-100 font-medium">PHP</span> (Laravel) y <span className="text-zinc-100 font-medium">React</span>.
          </p>
          <p className="text-base md:text-lg text-zinc-500 leading-relaxed">
            Investigo, aprendo y encuentro soluciones efectivas para cualquier desafío técnico.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center">
          <a
            href="https://github.com/SamaelMedina28"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 font-semibold transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <i className="fa-brands fa-github text-lg"></i>
            <span>Ver GitHub</span>
          </a>

          <a
            href="./CV_Aziel_Samael_Medina_Galvan.pdf"
            download
            className="px-8 py-3.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white font-medium transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <i className="fa-solid fa-download"></i>
            <span>Descargar CV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
