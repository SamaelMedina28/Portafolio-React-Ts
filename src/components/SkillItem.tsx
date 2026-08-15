type Props = {
  name: string;
  icon: string | React.ReactNode;
  description: string;
}

export default function SkillItem({ name, icon, description }: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-500 transition-colors duration-300 h-full flex flex-col items-center justify-center group">
      <div className="w-20 h-20 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 shadow-sm">
        <div className="text-zinc-300 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold text-zinc-100 mb-3">{name}</h3>
      <p className="text-zinc-500 text-sm text-center leading-relaxed font-light">
        {description}
      </p>
    </div>
  )
}