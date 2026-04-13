function ProjectsSection({ projects }) {
  return (
    <section id="projetos" className="section section-alt">
      <div className="container">
        <h2>Meus projetos</h2>
        <div className="projects-grid" aria-live="polite">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <a className="project-link" href={project.link}>
                Ver detalhes
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
