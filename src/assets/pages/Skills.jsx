import { technologies } from '../data/technologies';
import TechStack from '../components/TechStack';

const Skills = () => (
  <section className="py-32">
    <TechStack technologies={technologies} />
  </section>
);

export default Skills;
