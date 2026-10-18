import Titles from './ui/Titles';
const groups = [
  { name: 'Backend y datos', tools: 'Node.js · Express · Python · FastAPI · PHP · Laravel · PostgreSQL · MySQL · MongoDB', detail: 'APIs REST, modelado de datos, autenticación OAuth y JWT, permisos por rol y lógica de negocio.' },
  { name: 'Frontend', tools: 'React · TypeScript · Next.js · TanStack Query · Tailwind CSS · Livewire · Inertia', detail: 'Interfaces responsivas, formularios validados con Zod, paneles administrativos e integración con APIs.' },
  { name: 'Herramientas y despliegue', tools: 'Git · GitHub · Docker · Prisma · Google Cloud · Swagger · Vitest', detail: 'Control de versiones, contenedores, despliegue en la nube, pruebas y documentación de APIs.' },
];
export default function Skills() {
  return <section id="skills" className="page-width content-section skills-layout"><Titles title="Con qué trabajo" subtitle="04 / HABILIDADES" description="Tecnologías aplicadas en los proyectos de este portafolio." /><div className="skill-groups">{groups.map(group => <div key={group.name}><h3>{group.name}</h3><p className="skill-tools">{group.tools}</p><p>{group.detail}</p></div>)}</div></section>;
}
