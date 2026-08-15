type Props = {
    section: string;
    currentSection: string;
    handleSectionChange: (section: string) => void;
}

export default function NavItem({ section, currentSection, handleSectionChange }: Props) {
  let hash = section.toLowerCase();
  if(section === "Inicio") {
    hash = "";
  }else if(section === "Sobre mí") {
    hash = "sobre-mi";
  }
  
  const isActive = currentSection === section.toLowerCase();
  
  return (
    <li>
      <a href={`#${hash}`}
        className={`block py-2 px-3 rounded md:p-0 transition-colors duration-200 group relative text-sm font-medium
                    ${isActive ? "text-white bg-zinc-800 md:bg-transparent" : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 md:hover:bg-transparent"}`}
        aria-current={isActive ? "page" : undefined}
        onClick={() => handleSectionChange(section.toLowerCase())}>
        {section}
        {/* Línea de subrayado que aparece en hover o activo (solo visible en desktop) */}
        <span
          className={`hidden md:block absolute -bottom-1 left-0 h-0.5 transition-all duration-300 bg-white
                     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
      </a>
    </li>
  )
}