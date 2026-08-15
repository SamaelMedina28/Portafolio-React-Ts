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
          'Accept': 'application/json' 
        },
        redirect: 'manual' 
      });

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
    <section id="contacto" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Titles title="Hablemos" subtitle="CONTACTO" description="¿Tienes un proyecto en mente? Envíame un mensaje y trabajemos juntos para hacerlo realidad." />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Formulario de contacto */}
        <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800">
          <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nombre</label>
              <input type="text" id="name" name="name" required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-zinc-100 placeholder-zinc-600 transition duration-200"
                placeholder="Tu nombre"
                value={data.name}
                onChange={(e) => setData({...data, name: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Correo electrónico</label>
              <input type="email" id="email" name="email" required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-zinc-100 placeholder-zinc-600 transition duration-200"
                placeholder="tu@correo.com"
                value={data.email}
                onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-zinc-400 mb-2">Asunto</label>
              <input type="text" id="subject" name="subject" required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-zinc-100 placeholder-zinc-600 transition duration-200"
                placeholder="¿Sobre qué quieres hablar?"
                value={data.subject}
                onChange={(e) => setData({...data, subject: e.target.value})}/>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Mensaje</label>
              <textarea id="message" name="message" rows={5} required
                className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 outline-none text-zinc-100 placeholder-zinc-600 transition duration-200 resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
                value={data.message}
                onChange={(e) => setData({...data, message: e.target.value})}/>
            </div>
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 text-base font-semibold text-zinc-950 bg-white rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </div>

            {status.message && (
              <div className={`text-center text-sm mt-4 font-medium ${status.isError ? 'text-red-400' : 'text-emerald-400'}`}>
                {status.message}
              </div>
            )}
          </form>
        </div>

        {/* Información de contacto */}
        <div className="space-y-8 lg:pl-8">
          <ContactInformation/>
          <ContactSocialMedia/>
        </div>
      </div>
    </section>
  )
}