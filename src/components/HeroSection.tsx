import { ArrowDown, ArrowUpRight } from 'lucide-react';
export default function HeroSection() {
  return <section id="inicio" className="page-width intro-section">
    <div className="intro-copy"><p className="eyebrow">DESARROLLADOR FULL STACK · TIJUANA, MÉXICO</p>
      <h1>Samael<br /><em>Medina.</em></h1>
      <p className="intro-lead">Desarrollo aplicaciones web para resolver el trabajo de todos los días.</p>
      <p className="intro-description">Sistemas de venta, gestión de negocios y herramientas para desarrolladores. Trabajo con Laravel, React y TypeScript, desde los datos hasta la interfaz.</p>
      <div className="intro-actions"><a className="button-primary" href="#proyectos">Ver proyectos seleccionados <ArrowDown size={16} /></a><a className="text-link" href="https://github.com/SamaelMedina28" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a></div>
    </div>
    <figure className="portrait"><img src="/img/SamaelMedina2.jpeg" alt="Samael Medina" fetchPriority="high" width="960" height="1280" /><figcaption><span>Detrás del código.</span><span>BC, México</span></figcaption></figure>
    <div className="intro-footnote"><span className="availability"><span /> Disponible para nuevos proyectos</span><a href="mailto:samaelortiz2218@gmail.com">samaelortiz2218@gmail.com <ArrowUpRight size={14} /></a></div>
  </section>;
}
