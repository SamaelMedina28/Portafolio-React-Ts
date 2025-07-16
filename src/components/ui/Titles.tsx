type Props = {
    title: string;
    subtitle: string;
    description?: string;
}

export default function Titles({ title, subtitle, description }: Props) {
  return (
    <>
      <span className="inline-block mb-4 text-blue-400 font-mono text-sm tracking-widest">{subtitle}</span>
      <h2
        className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-blue-500 to-blue-600 animate-text-glow">
        {title}</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-8"></div>
      {description && <p className="text-lg text-slate-300 max-w-3xl mx-auto">
        {description}
      </p>}
    </>
  )
}