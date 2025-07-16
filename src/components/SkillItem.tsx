
type Props = {
  name: string;
  icon: string | React.ReactNode;
  description: string;
}
export default function SkillItem({ name, icon, description }: Props) {
  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col items-center justify-center group">
      <div
        className="w-24 h-24 bg-gray-700/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-slate-300 text-center">{description}
      </p>
    </div>
  )
}