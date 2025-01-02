import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

const Projects = () => (
  <section className="py-32">
    <div className="max-w-7xl mx-auto px-4">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
