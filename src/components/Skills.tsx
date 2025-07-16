import SkillsSwiper from "./SkillsSwiper";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Efecto de fondo sutil */}
      <div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-30">
      </div>
      <div
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-20">
      </div>

      <div className="relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-4 text-blue-400 font-mono text-sm tracking-widest">HABILIDADES
            TÉCNICAS</span>
          <h2
            className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 animate-text-glow">
            Mis Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Tecnologías y herramientas con las que trabajo para
            crear experiencias digitales excepcionales.</p>
          <SkillsSwiper />

        </div>
      </div>
    </section>
  )
}