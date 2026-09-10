import SkillItem from './SkillItem';
import { skillsData } from '../Data/skillsData';

export default function SkillsSwiper() {
  return <div className="skills-grid">{skillsData.map(skill => <SkillItem key={skill.name} {...skill} />)}</div>;
}
