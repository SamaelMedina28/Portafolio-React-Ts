type Props = { name: string; icon: string | React.ReactNode; description: string; };

export default function SkillItem({ name, icon, description }: Props) {
  return <div className="skill-item"><div className="skill-icon">{icon}</div><div><h3>{name}</h3><p>{description}</p></div></div>;
}
