export default function ContactSocialMedia() {
  return (
    <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
      <h3 className="text-xl font-bold text-zinc-100 mb-4">Redes sociales</h3>
      <p className="text-zinc-400 mb-8 font-light leading-relaxed">También puedes encontrarme en mis redes sociales:</p>

      <div className="flex flex-wrap gap-4">
        {/* WhatsApp */}
        <a href="https://wa.me/526648371372" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 group"
          title="WhatsApp">
          <i className="fab fa-whatsapp text-lg group-hover:scale-110 transition-transform"></i>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 group"
          title="LinkedIn">
          <i className="fab fa-linkedin-in text-lg group-hover:scale-110 transition-transform"></i>
        </a>

        {/* GitHub */}
        <a href="https://github.com/SamaelMedina28" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 group"
          title="GitHub">
          <i className="fab fa-github text-lg group-hover:scale-110 transition-transform"></i>
        </a>

        {/* Correo */}
        <a href="mailto:samaelortiz2218@gmail.com"
          className="w-12 h-12 rounded-full border border-zinc-700 hover:border-zinc-500 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 group"
          title="Correo electrónico">
          <i className="fas fa-envelope text-lg group-hover:scale-110 transition-transform"></i>
        </a>
      </div>
    </div>
  )
}