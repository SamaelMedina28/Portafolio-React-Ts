type Props = {
    title: string;
    subtitle: string;
    description?: string;
}

export default function Titles({ title, subtitle, description }: Props) {
  return (
    <>
      <span className="inline-block mb-4 text-zinc-500 font-medium text-xs tracking-[0.2em] uppercase">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-100 tracking-tight">
        {title}
      </h2>
      <div className="w-12 h-1 bg-zinc-700 mx-auto mb-8 rounded-full"></div>
      {description && (
        <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
      )}
    </>
  )
}