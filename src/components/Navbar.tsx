import { useEffect, useRef, useState } from 'react';
import { ArrowDownToLine, Menu, X } from 'lucide-react';
import Logo from './ui/Logo';
import ThemeToggle from './ui/ThemeToggle';

const links = [
  ['proyectos', 'Proyectos'],
  ['sobre-mi', 'Sobre mí'],
  ['experiencia', 'Experiencia'],
  ['skills', 'Stack'],
  ['contacto', 'Contacto'],
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const navRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    }
    function closeOutside(event: PointerEvent) {
      if (event.target instanceof Node && !navRef.current?.contains(event.target)) setOpen(false);
    }
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', closeOutside);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', closeOutside);
    };
  }, [open]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      }
    }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });
    for (const id of ['inicio', ...links.map(([id]) => id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  function navigateTo(id: string) {
    setActiveSection(id);
    setOpen(false);
  }

  return (
    <header className="site-header">
      <nav ref={navRef} className="page-width nav-layout" aria-label="Navegación principal">
        <a href="#inicio" className="brand" onClick={() => navigateTo('inicio')} aria-label="Samael Medina, inicio">
          <Logo /><span>samael<span className="brand-domain">.dev</span></span>
        </a>
        <div className="desktop-links">
          {links.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => navigateTo(id)} aria-current={activeSection === id ? 'location' : undefined}>
              <span className="nav-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{label}
            </a>
          ))}
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a className="nav-cv" href="/CV_Aziel_Samael_Medina_Galvan.pdf" download aria-label="Descargar currículum en PDF">CV <ArrowDownToLine size={14} aria-hidden="true" /></a>
          <button ref={menuButtonRef} className="menu-toggle" type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(previous => !previous)}>
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
        <div id="mobile-navigation" className="mobile-links" hidden={!open}>
          {links.map(([id, label], index) => (
            <a key={id} href={`#${id}`} onClick={() => navigateTo(id)} aria-current={activeSection === id ? 'location' : undefined}>
              <span className="nav-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{label}
            </a>
          ))}
          <a href="/CV_Aziel_Samael_Medina_Galvan.pdf" download onClick={() => setOpen(false)}>Descargar CV <ArrowDownToLine size={14} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
