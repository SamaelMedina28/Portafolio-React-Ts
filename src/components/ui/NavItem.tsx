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
  return (
    <li>
      <a href={`#${hash}`}
        className={`block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-400 md:p-0 transition-colors duration-200 group relative 
                                    ${currentSection === section.toLowerCase() ? "text-white bg-blue-700 md:bg-transparent md:text-blue-400" : ""}`}
        aria-current="page"
        onClick={() => handleSectionChange(section.toLowerCase())}>
        {section}
        <span
          className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </a>
    </li>
  )
}