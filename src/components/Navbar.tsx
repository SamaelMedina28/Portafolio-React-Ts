import Logo from "./ui/Logo";
import { useState, useEffect, useRef } from 'react';
import NavItem from "./ui/NavItem";
import { X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("inicio");
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSectionChange = (section: string) => {
    setCurrentSection(section);
    setIsOpen(false);
  };
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className="fixed w-full z-50 top-0 start-0 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md"
      ref={menuRef}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 group" aria-label="Logo">
          <Logo />
          <span className="self-center text-xl font-bold whitespace-nowrap text-zinc-100 tracking-tight group-hover:text-white transition-colors">
            DevCode
          </span>
        </a>
        
        <div className="flex md:order-2 space-x-4 items-center">
          <a
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-zinc-950 bg-white hover:bg-zinc-200 rounded-lg transition-colors duration-200"
          >
            <i className="fas fa-paper-plane mr-2"></i>
            Contacto
          </a>
          {/* <!-- Botón del menú móvil --> */}
          <button
            id="mobile-menu-button"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-zinc-400 rounded-lg md:hidden hover:bg-zinc-800 hover:text-white focus:outline-none transition-colors"
            aria-expanded="false"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <div
          id="mobile-menu"
          className={`w-full md:hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-[400px]" : "opacity-0 max-h-0 overflow-hidden"}`}
        >
          <div className="px-4 py-4 space-y-3 bg-zinc-900 border border-zinc-800 rounded-xl mt-3 shadow-2xl">
            {[
              { id: "", icon: "fa-home", label: "Inicio" },
              { id: "sobre-mi", icon: "fa-user", label: "Sobre mí" },
              { id: "skills", icon: "fa-code", label: "Skills" },
              { id: "proyectos", icon: "fa-folder", label: "Proyectos" },
            ].map(({ id, icon, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleSectionChange(id)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${currentSection === id
                  ? "text-white bg-zinc-800"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                  }`}
              >
                <i className={`fas ${icon} w-4 h-4 mr-3 ${currentSection === id ? "text-white" : "text-zinc-500"}`}></i>
                {label}
              </a>
            ))}

            <div className="pt-2 mt-2 border-t border-zinc-800">
              <a
                href="#contacto"
                onClick={() => handleSectionChange("contacto")}
                className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 transition-colors"
              >
                Contactar
              </a>
            </div>
          </div>
        </div>

        {/* Menú de escritorio */}
        <div className="hidden md:flex items-center justify-between w-auto" id="desktop-menu">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            <NavItem section="Inicio" currentSection={currentSection} handleSectionChange={handleSectionChange} />
            <NavItem section="Sobre mí" currentSection={currentSection} handleSectionChange={handleSectionChange} />
            <NavItem section="Skills" currentSection={currentSection} handleSectionChange={handleSectionChange} />
            <NavItem section="Proyectos" currentSection={currentSection} handleSectionChange={handleSectionChange} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
