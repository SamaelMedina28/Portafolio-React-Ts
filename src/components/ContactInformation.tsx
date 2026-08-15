export default function ContactInformation() {
  return (
    <>
      <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
        <h3 className="text-xl font-bold text-zinc-100 mb-4">Información de contacto</h3>
        <p className="text-zinc-400 mb-8 font-light leading-relaxed">
          ¿Prefieres contactarme directamente? Aquí tienes mis datos de contacto:
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
              <i className="fas fa-envelope text-zinc-300"></i>
            </div>
            <div>
              <h4 className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Correo electrónico</h4>
              <a href="mailto:samaelortiz2218@gmail.com"
                className="text-zinc-300 hover:text-white transition-colors font-medium">
                samaelortiz2218@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}