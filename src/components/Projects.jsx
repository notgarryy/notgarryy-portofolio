import { projects } from "../data/index.js"
import "../styles/global.css"

export default function Projects() {
  return (
    <section id="projects">
      <div className="fade-up">
        <div className="section-label">Work</div>
        <h2 className="section-title">
          Selected <em>Projects</em>
        </h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div className="project-card fade-up" key={i}>
            <div className="project-header">
              <div className="project-icon">{project.icon}</div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
            <div className="project-name">{project.name}</div>
            <div className="project-desc">{project.desc}</div>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span className="project-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="project-metric">↗ {project.metric}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
