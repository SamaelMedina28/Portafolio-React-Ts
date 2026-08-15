import SkillsSwiper from "./SkillsSwiper";
import Titles from "./ui/Titles";

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Titles title="Mis Skills" subtitle="HABILIDADES TÉCNICAS" description="Tecnologías y herramientas con las que trabajo para crear experiencias digitales excepcionales." />
      </div>
      <SkillsSwiper />
    </section>
  )
}