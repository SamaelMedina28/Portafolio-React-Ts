import { ArrowUp, ArrowUpRight } from 'lucide-react';
import Logo from './ui/Logo';

export default function Footer() {
  return <footer className="site-footer"><div className="page-width"><div className="footer-top"><a href="#inicio" className="brand" aria-label="Samael Medina, volver al inicio"><Logo /><span>samael<span className="brand-domain">.dev</span></span></a><p>Hecho con intención, desde Tijuana.</p><a className="text-link" href="#inicio">Volver al inicio <ArrowUp size={14} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Samael Medina <span className="footer-divider">/</span> Inspirado en <a href="https://omarchy.org/" target="_blank" rel="noopener noreferrer">Omarchy ↗</a></span><div><a href="https://github.com/SamaelMedina28" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="/CV_Aziel_Samael_Medina_Galvan.pdf" download>Currículum <ArrowUpRight size={13} /></a></div></div></div></footer>;
}
