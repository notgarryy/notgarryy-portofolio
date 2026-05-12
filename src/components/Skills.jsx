import { skills } from "../data/index.js"
import "../styles/global.css"

export default function Skills() {
  return (
    <section id="skills">
      <div className="fade-up">
        <div className="section-label">Capabilities</div>
        <h2 className="section-title">
          Technical <em>Skills</em>
        </h2>
      </div>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <div className="skill-group fade-up" key={i}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.tags.map((tag) => (
                <span className="skill-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
