type Props = { title: string; subtitle: string; description?: string; };
export default function Titles({ title, subtitle, description }: Props) {
  return <div className="section-heading"><p className="eyebrow">{subtitle}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>;
}
