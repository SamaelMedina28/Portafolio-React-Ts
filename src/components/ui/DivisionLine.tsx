

export default function DivisionLine() {
  return (
    <div className="border-t border-gray-800 mt-12 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; 2025 DevCode. Todos los derechos reservados.
        </p>
        <div className="flex space-x-6">
          <a href="#"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm">Términos de
            servicio</a>
          <a href="#"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm">Política de
            privacidad</a>
          <a href="#"
            className="text-gray-500 hover:text-blue-400 transition-colors duration-300 text-sm">Cookies</a>
        </div>
      </div>
    </div>
  )
}