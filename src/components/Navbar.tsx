import Logo from "./ui/Logo";
import { useState } from "react";
import NavItem from "./ui/NavItem";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSection, setCurrentSection] = useState("inicio");
    const toggleMenu = () => setIsOpen(!isOpen);
    const handleSectionChange = (section: string) => {
        setCurrentSection(section);
        setIsOpen(false);
    };
    return (
        <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3" aria-label="Logo">
                    <Logo />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">DevCode</span>
                </a>
                <div className="flex md:order-2 space-x-4 items-center">
                    <a href="#contacto"
                        className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                        <i className="fas fa-paper-plane mr-2"></i>
                        Contacto
                    </a>
                    {/* <!-- Botón del menú móvil --> */}
                    <button id="mobile-menu-button" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300"
                        aria-expanded="false"
                        onClick={toggleMenu}>
                        <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>

                {/* Menú móvil */}
                <div id="mobile-menu" className="hidden w-full md:hidden" style={{ display: isOpen ? "block" : "none" }}>
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg shadow-lg mt-2 border border-gray-700">
                        <a href="#"
                            onClick={() => handleSectionChange("inicio")}
                            className={`flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200 ${currentSection === "inicio" ? "bg-gray-900" : ""}`}>
                            <i className="fas fa-home w-5 h-5 mr-3 text-blue-400"></i>
                            Inicio
                        </a>
                        <a href="#sobre-mi"
                            onClick={() => handleSectionChange("sobre-mi")}
                            className={`flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200 ${currentSection === "sobre-mi" ? "bg-gray-900" : ""}`}>
                            <i className="fas fa-user w-5 h-5 mr-3 text-blue-400"></i>
                            Sobre mí
                        </a>
                        <a href="#skills"
                            onClick={() => handleSectionChange("skills")}
                            className={`flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200 ${currentSection === "skills" ? "bg-gray-900" : ""}`}>
                            <i className="fas fa-code w-5 h-5 mr-3 text-blue-400"></i>
                            Skills
                        </a>
                        <a href="#proyectos"
                            onClick={() => handleSectionChange("proyectos")}
                            className={`flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200 ${currentSection === "proyectos" ? "bg-gray-900" : ""}`}>
                            <i className="fas fa-folder-open w-5 h-5 mr-3 text-blue-400"></i>
                            Proyectos
                        </a>
                        <div className="pt-2 px-4">
                            <a href="#contacto"
                                onClick={() => handleSectionChange("contacto")}
                                className={`flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 ${currentSection === "contacto" ? "bg-gray-900" : ""}`}>
                                <i className="fas fa-paper-plane mr-2"></i>
                                Contactar
                            </a>
                        </div>
                    </div>
                </div>

                {/* Menú de escritorio */}
                <div className="hidden md:flex items-center justify-between w-auto" id="desktop-menu">
                    <ul
                        className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
                        <NavItem section="Inicio" currentSection={currentSection} handleSectionChange={handleSectionChange} />
                        <NavItem section="Sobre mí" currentSection={currentSection} handleSectionChange={handleSectionChange} />
                        <NavItem section="Skills" currentSection={currentSection} handleSectionChange={handleSectionChange} />
                        <NavItem section="Proyectos" currentSection={currentSection} handleSectionChange={handleSectionChange} />
                    </ul>
                </div>
            </div>
        </nav>
    )
}
