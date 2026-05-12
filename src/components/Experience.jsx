import { experiences } from "../data/index.js"
import "../styles/global.css"

export default function Experience() {
  return (
    <section id="experience">
      <div className="fade-up">
        <div className="section-label">Background</div>
        <h2 className="section-title">Experience</h2>
      </div>
      <div className="exp-list">
        {experiences.map((exp, i) => (
          <div className="exp-item fade-up" key={i}>
            <div className="exp-date">{exp.date}</div>
            <div className="exp-role">{exp.role}</div>
            <div className="exp-company">{exp.company}</div>
            <div className="exp-desc">{exp.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
