import { projects } from '../data/projects';
import { site } from '../data/site';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  return (
    <section className="projects-preview">
      <div className="section-head">
        <h2>Projects</h2>
        <a className="view-all" href={site.githubUrl} target="_blank" rel="noopener noreferrer">
          More on GitHub →
        </a>
      </div>
      <ul className="project-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </section>
  );
}
