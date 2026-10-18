import { ArrowDown, ArrowUpRight, Code2, MapPin, Terminal } from 'lucide-react';
import PixelName from './ui/PixelName';

export default function HeroSection() {
  return <section id="inicio" className="page-width intro-section" aria-labelledby="intro-title">
    <div className="workspace-heading"><span><span className="prompt-symbol">~</span> / home / samael / portafolio</span><span className="availability"><span /> Disponible para proyectos</span></div>
    <div className="intro-copy">
      <p className="eyebrow"><span className="prompt-symbol">›</span> HOLA, SOY UN DESARROLLADOR FULL STACK</p>
      <h1 id="intro-title"><span className="sr-only">Samael Medina</span><PixelName /></h1>
      <p className="intro-lead">Ideas claras.<br />Software que funciona.</p>
      <p className="intro-description">Construyo aplicaciones web, sistemas para negocios y herramientas para otros desarrolladores. Del primer dato al último detalle.</p>
      <div className="intro-actions"><a className="button-primary" href="#proyectos">Explorar proyectos <ArrowDown size={16} /></a><a className="button-secondary" href="https://github.com/SamaelMedina28" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={16} /></a></div>
    </div>
    <div className="intro-workspace">
      <figure className="profile-window window-panel">
        <figcaption className="window-titlebar"><span><Code2 size={14} /> acerca-de-mi.md</span><span className="window-indicator" aria-hidden="true">▪</span></figcaption>
        <div className="profile-content"><div className="portrait"><img src="/img/SamaelMedina2.jpeg" alt="Samael Medina en Tijuana" fetchPriority="high" width="960" height="1280" /></div>
          <div className="profile-details"><span className="profile-comment">// detrás del código</span><strong>Samael<br />Medina<span className="accent-text">.</span></strong><p>Desarrollador<br />Full Stack</p><span className="profile-location"><MapPin size={13} /> Tijuana, MX</span><a href="#sobre-mi" className="text-link">Conóceme <ArrowUpRight size={14} /></a></div>
        </div>
      </figure>
      <div className="terminal-window window-panel"><div className="window-titlebar"><span><Terminal size={14} /> stack — terminal</span><span aria-hidden="true">― □</span></div>
        <div className="terminal-content"><p className="terminal-command"><span>samael@dev</span><span className="terminal-path">~</span>$ cat stack.json</p>
          <dl className="stack-output"><div><dt>frontend</dt><dd>React · TypeScript · Next.js</dd></div><div><dt>backend</dt><dd>Express · PostgreSQL · Python</dd></div><div><dt>workflow</dt><dd>Git · Docker · Google Cloud</dd></div></dl>
          <div className="terminal-palette" aria-label="Paleta del tema"><span /><span /><span /><span /><span /><span /><span /><span /></div>
          <p className="terminal-command terminal-last"><span>❯</span><span className="terminal-cursor" aria-hidden="true" /></p>
        </div>
      </div>
    </div>
    <div className="intro-footnote"><span><Code2 size={14} /> TypeScript, PostgreSQL y mucha curiosidad.</span><a href="#proyectos">Desliza para explorar <ArrowDown size={14} /></a></div>
  </section>;
}
