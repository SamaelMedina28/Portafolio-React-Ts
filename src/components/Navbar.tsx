
export default function Navbar() {
  return (
    <nav className="bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" className="flex items-center space-x-3"  aria-label="Logo">
                <svg width="42" height="42" viewBox="0 0 491 323" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <!-- Definición del gradiente lineal --> */}
                    <defs>
                        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
                            <stop offset="8%" stopColor="#818CF8" stopOpacity="1" />
                            <stop offset="30%" stopColor="#60A5FA" stopOpacity="1" />
                            <stop offset="90%" stopColor="#3B82F6" stopOpacity="1" />
                            <stop offset="100%" stopColor="#101828" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <rect y="32" width="55" height="313" rx="5" fill="url(#blueGradient)" />
                    <path
                        d="M225.699 185.046C227.546 186.978 227.546 190.022 225.699 191.954L81.6149 342.731C78.4994 345.991 73 343.786 73 339.276L73 37.7236C73 33.2142 78.4994 31.009 81.6148 34.2692L225.699 185.046Z"
                        fill="url(#blueGradient)" />
                    <path
                        d="M159.828 185.593C161.615 187.513 161.615 190.487 159.828 192.407L74.9096 283.621C71.8152 286.945 66.25 284.756 66.25 280.214L66.25 97.7855C66.25 93.2443 71.8152 91.0548 74.9096 94.3785L159.828 185.593Z"
                        fill="#101828" />
                    <path
                        d="M331.968 338.892C330.048 342.522 324.86 342.522 323.066 338.892L175.016 39.4241C173.371 36.0976 175.856 32.148 179.593 32.148L486.041 32.148C489.778 32.148 492.126 36.0976 490.366 39.4241L331.968 338.892Z"
                        fill="url(#blueGradient)" />
                    <path
                        d="M333.104 225.369C331.207 229.091 325.901 229.091 324.132 225.369L231.218 29.8272C229.639 26.5051 232.124 22.6197 235.828 22.6197L428.403 22.6197C432.106 22.6197 434.457 26.5051 432.764 29.8272L333.104 225.369Z"
                        fill="#101828" />
                </svg>
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
                    aria-expanded="false">
                    <span className="sr-only">Abrir menú principal</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* Menú móvil */}
            <div id="mobile-menu" className="hidden w-full md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-800 rounded-lg shadow-lg mt-2 border border-gray-700">
                    <a href="#"
                        className="flex items-center px-4 py-3 text-base font-medium text-white bg-gray-900 rounded-md group"
                        aria-current="page">
                        <i className="fas fa-home w-5 h-5 mr-3 text-blue-400"></i>
                        Inicio
                    </a>
                    <a href="#sobre-mi"
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200">
                        <i className="fas fa-user w-5 h-5 mr-3 text-blue-400"></i>
                        Sobre mí
                    </a>
                    <a href="#skills"
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200">
                        <i className="fas fa-code w-5 h-5 mr-3 text-blue-400"></i>
                        Skills
                    </a>
                    <a href="#proyectos"
                        className="flex items-center px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 rounded-md group transition-colors duration-200">
                        <i className="fas fa-folder-open w-5 h-5 mr-3 text-blue-400"></i>
                        Proyectos
                    </a>
                    <div className="pt-2 px-4">
                        <a href="#contacto"
                            className="flex items-center justify-center w-full px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
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
                    <li>
                        <a href="#"
                            className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-400 md:p-0 group relative"
                            aria-current="page">
                            Inicio
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#sobre-mi"
                            className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 transition-colors duration-200 group relative">
                            Sobre mí
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#skills"
                            className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 transition-colors duration-200 group relative">
                            Skills
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#proyectos"
                            className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 transition-colors duration-200 group relative">
                            Proyectos
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
