import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import ThemeToggle from './ui/ThemeToggle';

const links = [['proyectos', 'Proyectos'], ['sobre-mi', 'Sobre mí'], ['experiencia', 'Experiencia'], ['skills', 'Habilidades'], ['contacto', 'Contacto']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return <header className="site-header"><nav className="page-width nav-layout" aria-label="Navegación principal">
    <a href="#inicio" className="brand" onClick={() => setOpen(false)} aria-label="DevCode, inicio"><Logo /><span>DevCode<span className="brand-caption">SAMAEL MEDINA</span></span></a>
    <div className="desktop-links">{links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}</div>
    <div className="nav-actions">
    <a className="nav-cv" href="/CV_Aziel_Samael_Medina_Galvan.pdf" download>Descargar CV <ArrowUpRight size={15} /></a>
    <ThemeToggle />
    <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <div id="mobile-navigation" className="mobile-links" hidden={!open}>{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a href="/CV_Aziel_Samael_Medina_Galvan.pdf" download>Descargar CV</a></div>
  </nav></header>;
}
