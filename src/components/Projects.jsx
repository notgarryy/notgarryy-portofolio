import { useState, useEffect } from "react"
import { projects } from "../data/index.js"
import "../styles/global.css"

export default function Projects() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelected(null) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [selected])

  return (
    <section id="projects">
      <div className="fade-up">
        <div className="section-label">Work</div>
        <h2 className="section-title">
          Selected <em>Projects</em>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="fade-up" key={project.name}>
            <div
              className="project-card"
              onClick={() => setSelected(project)}
              style={{ cursor: "pointer" }}
            >
              <div className="project-header">
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      className="project-link"
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
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
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                  )}
                  <span className="project-expand-btn">↗</span>
                </div>
              </div>

              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.desc}</div>

              {project.image && (
                <div className="project-cover-wrap">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-cover"
                  />
                </div>
              )}

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-metric">↗ {project.metric}</div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>

            <div className="modal-header">
              <div className="modal-title-row">
                <div>
                  <div className="modal-name">{selected.name}</div>
                  <div className="modal-metric">↗ {selected.metric}</div>
                </div>
              </div>
              <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            </div>

            <div className="modal-body">

              {selected.images && selected.images.length > 0 && (
                <div className="project-images">
                  {selected.images.map((src, idx) => (
                    <div className="project-image-wrap" key={idx}>
                      <img
                        src={src}
                        alt={`${selected.name} screenshot ${idx + 1}`}
                        className="project-image"
                      />
                    </div>
                  ))}
                </div>
              )}

              {selected.details && (
                <p className="modal-desc">{selected.details}</p>
              )}

              {selected.highlights && selected.highlights.length > 0 && (
                <ul className="project-highlights">
                  {selected.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              )}

              <div className="modal-tags">
                {selected.tags.map((tag) => (
                  <span className="project-tag" key={tag}>{tag}</span>
                ))}
              </div>

              <div className="modal-links">
                {selected.github && (
                  <a href={selected.github} className="btn-secondary" target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                )}
                {selected.demo && (
                  <a href={selected.demo} className="btn-primary" target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  )
}