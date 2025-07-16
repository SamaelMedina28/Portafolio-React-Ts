import SkillsSwiper from "./SkillsSwiper";
import Titles from "./ui/Titles";

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
          <Titles title="Mis Skills" subtitle="HABILIDADES TÉCNICAS" description="Tecnologías y herramientas con las que trabajo para crear experiencias digitales excepcionales." />
          <SkillsSwiper />

        </div>
      </div>
    </section>
  )
}