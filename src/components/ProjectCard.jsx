export default function ProjectCard({ project }) {
  const title = project.href ? (
    <a href={project.href} target="_blank" rel="noopener noreferrer">
      {project.title}
    </a>
  ) : (
    project.title
  );

  return (
    <li className="project-card">
      <div className="project-thumb">
        <img src={project.image} alt="" />
      </div>
      <div className="project-card-body">
        <h3>{title}</h3>
        <p>{project.description}</p>
        <p className="project-card-footer">{project.date}</p>
      </div>
    </li>
  );
}
