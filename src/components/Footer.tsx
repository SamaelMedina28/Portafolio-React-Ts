import { ArrowUpRight } from 'lucide-react';
import Logo from './ui/Logo';
export default function Footer() {
  return <footer className="site-footer"><div className="page-width"><div className="footer-top"><a href="#inicio" className="brand" aria-label="DevCode, volver al inicio"><Logo /><span>DevCode<span className="brand-caption">SAMAEL MEDINA</span></span></a><p>Desarrollo web desde Tijuana, México.</p><a className="text-link" href="#inicio">Volver arriba ↑</a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Samael Medina</span><div><a href="https://github.com/SamaelMedina28" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="/CV_Aziel_Samael_Medina_Galvan.pdf" download>Currículum <ArrowUpRight size={13} /></a></div></div></div></footer>;
}
