import Titles from './ui/Titles';
const groups = [
  { name: 'Backend y datos', tools: 'PHP · Laravel · Node.js · Express · MySQL · MongoDB', detail: 'APIs REST, modelado de datos, autenticación, permisos y lógica de negocio.' },
  { name: 'Frontend', tools: 'React · TypeScript · Next.js · Livewire · Inertia · Tailwind CSS', detail: 'Interfaces responsivas, formularios, paneles administrativos e integración con el backend.' },
  { name: 'Herramientas y colaboración', tools: 'Git · GitHub · Docker · Prisma · Swagger', detail: 'Control de versiones, trabajo con pull requests, entornos locales y documentación de APIs.' },
];
export default function Skills() {
  return <section id="skills" className="page-width content-section skills-layout"><Titles title="Con qué trabajo" subtitle="03 / HABILIDADES" description="Tecnologías aplicadas en los proyectos de este portafolio." /><div className="skill-groups">{groups.map(group => <div key={group.name}><h3>{group.name}</h3><p className="skill-tools">{group.tools}</p><p>{group.detail}</p></div>)}</div></section>;
}
