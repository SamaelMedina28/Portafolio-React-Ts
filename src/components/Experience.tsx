import Titles from './ui/Titles';

const experience = [
  {
    company: 'Instituto Metropolitano de Planeación de Tijuana',
    role: 'Desarrollador de Software Full-Stack',
    start: '2026-07', startLabel: 'Jul 2026', end: null, endLabel: 'Presente',
    description: 'Desarrollo y mantenimiento de sistemas institucionales para procesos internos y servicios digitales.',
    highlights: [
      'Implementación de módulos para digitalizar trámites y procesos administrativos gestionados en físico.',
      'Desarrollo del módulo Archivo Digital, integrando consulta inteligente de documentos para obtener información.',
      'Creación de scripts para cargar, procesar mediante OCR y vincular miles de documentos con sus registros.', 'Desarrollo y mantenimiento de aplicaciones con Next.js, PHP, PostgreSQL y servicios de Google Cloud.'
    ],
    tools: ['Next.js', 'PHP', 'PostgreSQL', 'Google Cloud', 'OCR'],
  },
  {
    company: 'UABC · Facultad de Ciencias Químicas e Ingeniería',
    role: 'Soporte Técnico FCQI',
    start: '2026-01', startLabel: 'Ene 2026', end: '2026-07', endLabel: 'Jul 2026',
    description: 'Miembro del equipo de soporte técnico de la facultad, atendiendo a personal docente y administrativo.',
    highlights: [
      'Instalación de servicios de red y telecomunicaciones y resolución de problemas de hardware y software.', 'Resolución de problemas de soporte técnico de hardware y software', 
      'Instalación y manejo de sistemas Linux para gestionar políticas de usuario y controlar software.',
    ],
    tools: ['Linux', 'Redes', 'Hardware y software'],
  },
  {
    company: 'DevCode',
    role: 'Desarrollador Web Freelance',
    start: '2025-01', startLabel: 'Ene 2025', end: '2025-12', endLabel: 'Dic 2025',
    description: 'Desarrollo independiente de sistemas web enfocados en funcionalidad y buenas prácticas.',
    highlights: [
      'POS Karamelos: API REST con Laravel y Next.js para ventas, inventarios y cierres de caja de un negocio local.',
      'Korbo: librería MVC en PHP con enrutamiento y manejo de bases de datos para equipos universitarios.',
      'Horarios UABC: SPA con Laravel, Inertia y React para organizar la carga académica. Cimafood: plataforma de venta de comida para vendedores ambulantes de la UABC.',
    ],
    tools: ['PHP', 'Laravel', 'Next.js', 'React', 'Inertia'],
  },
  {
    company: 'Eservices México',
    role: 'Coordinador de Sistemas',
    start: '2021-09', startLabel: 'Sep 2021', end: '2023-05', endLabel: 'May 2023',
    description: 'Coordinación y gestión de proyectos de redes, desarrollo web y soporte técnico.',
    highlights: [
      'Supervisión del departamento de sistemas y gestión simultánea de proyectos de programación y soporte técnico.',
      'Colaboración en proyectos de desarrollo web, aportando soluciones técnicas para la mejora de plataformas internas',
      'Administración de cuentas de dominio, Office 365 y mantenimiento de redes físicas.',
    ],
    tools: ['Office 365', 'Redes', 'Gestión de proyectos'],
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="page-width content-section experience-layout" aria-label="Experiencia profesional">
      <Titles
        title="Mi recorrido profesional"
        subtitle="03 / EXPERIENCIA"
        description="Del soporte y la infraestructura al desarrollo de sistemas web para negocios e instituciones."
      />
      <ol className="experience-list">
        {experience.map(job => (
          <li key={`${job.company}-${job.start}`} className="experience-entry">
            <article>
              <div className="experience-meta">
                <p><time dateTime={job.start}>{job.startLabel}</time> — {job.end ? <time dateTime={job.end}>{job.endLabel}</time> : job.endLabel}</p>
                {!job.end && <span className="experience-current">Actual</span>}
              </div>
              <h3>{job.role}</h3>
              <p className="experience-company">{job.company}</p>
              <p className="experience-description">{job.description}</p>
              <ul className="experience-highlights">
                {job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}
              </ul>
              <ul className="project-tags" aria-label="Tecnologías y áreas de trabajo">
                {job.tools.map(tool => <li key={tool}>{tool}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
