import { ArrowUpRight } from 'lucide-react';
import Titles from './ui/Titles';
export default function SobreMi() {
  return <section id="sobre-mi" className="about-section"><div className="page-width about-layout">
    <Titles title="Entender el problema. Después, escribir el código." subtitle="02 / SOBRE MÍ" />
    <div className="about-copy"><p className="about-lead">Soy Samael, desarrollador Full Stack en Tijuana. Me interesa construir software que tenga sentido para las personas que lo usan.</p>
      <p>He trabajado en sistemas para negocios locales, plataformas de comercio y herramientas de desarrollo. Mi enfoque principal es PHP con Laravel, junto con React y TypeScript para construir interfaces.</p>
      <p>En Ignite colaboré en un equipo con diseños en Figma y un flujo de trabajo con ramas y pull requests. También construí la base de su panel administrativo con Laravel, React e Inertia, que después continuaron otros desarrolladores.</p>
      <p>Me gusta entender cómo funcionan las herramientas. De esa curiosidad nacieron Korbo, una base MVC en PHP que utilizaron tres equipos universitarios, y Vane, una CLI para generar módulos de backend.</p>
      <a className="text-link" href="/CV_Aziel_Samael_Medina_Galvan.pdf" download>Más sobre mi perfil en el CV <ArrowUpRight size={16} /></a>
    </div>
  </div></section>;
}
