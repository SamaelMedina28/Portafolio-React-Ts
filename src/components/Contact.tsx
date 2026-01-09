import { useState } from "react"
import ContactInformation from "./ContactInformation";
import ContactSocialMedia from "./ContactSocialMedia";
import Titles from "./ui/Titles";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ message: string, isError: boolean }>({
    message: '',
    isError: false
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ message: '', isError: false });

    try {
      const formData = new FormData(e.currentTarget);
      const url = "https://formspree.io/f/movwqwbd";

      const response = await fetch(url, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json' // Esto es importante para evitar la redirección
        },
        redirect: 'manual' // Evita que fetch siga la redirección automáticamente
      });

      // Verificar si la respuesta es OK (status 200-299)
      if (response.ok || response.status === 302) {
        setData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setStatus({
          message: '¡Mensaje enviado con éxito!',
          isError: false
        });
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        message: 'Error al enviar el mensaje. Por favor inténtalo de nuevo.',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contacto" className="py-20 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Efecto de fondo sutil */}
      <div
        className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-30">
      </div>
      <div
        className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-radial from-blue-500/5 to-transparent rounded-full opacity-20">
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <Titles title="Hablemos" subtitle="CONTACTO" description="¿Tienes un proyecto en mente? Envíame un mensaje y trabajemos juntos para hacerlo realidad." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Formulario de contacto */}
          <div
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300">
            <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nombre</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition duration-200"
                  placeholder="Tu nombre"
                  value={data.name}
                  onChange={(e) => setData({...data, name: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Correo
                  electrónico</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition duration-200"
                  placeholder="tu@correo.com"
                  value={data.email}
                  onChange={(e) => setData({...data, email: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Asunto</label>
                <input type="text" id="subject" name="subject" required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition duration-200"
                  placeholder="¿Sobre qué quieres hablar?"
                  value={data.subject}
                  onChange={(e) => setData({...data, subject: e.target.value})}/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                <textarea id="message" name="message" rows={5} required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition duration-200 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                  value={data.message}
                  onChange={(e) => setData({...data, message: e.target.value})}/>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 text-base font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>

              {status.message && (
                <div className={`text-center text-sm mt-4 ${status.isError ? 'text-red-400' : 'text-green-400'}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>

          {/* Información de contacto */}
          <div className="space-y-8">
            <ContactInformation/>
            <ContactSocialMedia/>
          </div>
        </div>
      </div>
    </section>
  )
}