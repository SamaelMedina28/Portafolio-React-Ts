import { useState } from "react"
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
    <section id="contacto" className="contact-section"><div className="page-width contact-layout">
      <div><Titles title="Hablemos de lo que sigue." subtitle="05 / CONTACTO" />
        <p className="contact-description">Si buscas un desarrollador para tu equipo o tienes un proyecto en mente, cuéntame qué necesitas.</p>
        <a className="contact-email" href="mailto:samaelortiz2218@gmail.com">samaelortiz2218@gmail.com ↗</a>
        <div className="contact-networks"><a href="https://www.linkedin.com/in/samael-medina-011880355/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://wa.me/526648371372" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></div>
        <p className="contact-location">Tijuana, Baja California, México</p>
      </div>
      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row"><div><label htmlFor="name">Tu nombre</label><input autoComplete="name" id="name" name="name" required placeholder="Nombre completo" value={data.name} onChange={e => setData({...data, name: e.target.value})} /></div><div><label htmlFor="email">Correo electrónico</label><input autoComplete="email" type="email" id="email" name="email" required placeholder="tu@correo.com" value={data.email} onChange={e => setData({...data, email: e.target.value})} /></div></div>
        <div><label htmlFor="subject">Asunto</label><input id="subject" name="subject" required placeholder="Proyecto, oportunidad laboral..." value={data.subject} onChange={e => setData({...data, subject: e.target.value})} /></div>
        <div><label htmlFor="message">¿En qué puedo ayudarte?</label><textarea id="message" name="message" rows={4} required placeholder="Cuéntame un poco sobre lo que tienes en mente." value={data.message} onChange={e => setData({...data, message: e.target.value})} /></div>
        <button type="submit" className="button-primary" disabled={isSubmitting}>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'} <span aria-hidden="true">↗</span></button>
        <div role="status" aria-live="polite" className={status.isError ? 'form-error' : 'form-success'}>{status.message}</div>
      </form>
    </div></section>
  );
}
