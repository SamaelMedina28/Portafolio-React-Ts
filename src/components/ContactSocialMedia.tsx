export default function ContactSocialMedia() {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
      <h3 className="text-2xl font-bold text-white mb-6">Redes sociales</h3>
      <p className="text-gray-300 mb-6">También puedes encontrarme en mis redes sociales:</p>

      <div className="flex flex-wrap gap-4">
        {/* WhatsApp */}
        <a href="https://wa.me/526648371372" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center transition-colors duration-300 group"
          title="WhatsApp">
          <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-colors duration-300 group"
          title="LinkedIn">
          <i className="fab fa-linkedin-in text-xl group-hover:scale-110 transition-transform"></i>
        </a>

        {/* GitHub */}
        <a href="https://github.com/SamaelMedina28" target="_blank" rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 text-white flex items-center justify-center transition-colors duration-300 group"
          title="GitHub">
          <i className="fab fa-github text-xl group-hover:scale-110 transition-transform"></i>
        </a>

        {/* Correo */}
        <a href="mailto:samaelortiz2218@gmail.com"
          className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-300 group"
          title="Correo electrónico">
          <i className="fas fa-envelope text-xl group-hover:scale-110 transition-transform"></i>
        </a>
      </div>
    </div>
  )
}