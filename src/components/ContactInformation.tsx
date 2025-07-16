

export default function ContactInformation() {
  return (
    <>
      <div
        className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
        <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
        <p className="text-gray-300 mb-6">¿Prefieres contactarme directamente? Aquí tienes mis datos de
          contacto:</p>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
              <i className="fas fa-envelope text-blue-400"></i>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400">Correo electrónico</h4>
              <a href="mailto:samaelortiz2218@gmail.com"
                className="text-blue-400 hover:text-blue-300 transition-colors">samaelortiz2218@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}