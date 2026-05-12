import "../styles/global.css"

export default function About() {
  return (
    <section id="about">
      <div className="fade-up">
        <div className="section-label">About</div>
        <h2 className="section-title">
          Who I <em>am</em>
        </h2>
      </div>
      <div className="about-grid fade-up">
        <div className="about-text">
          <p>
            I'm an Electrical Engineering graduate from{" "}
            <strong>Telkom University</strong> (Summa Cum Laude, GPA 3.98/4.00),
            specializing in Machine Learning and Deep Learning for real-world
            sensing systems.
          </p>
          <p>
            My research focuses on{" "}
            <strong>FMCW radar-based human activity recognition</strong>, where
            I've published in IEEE Access (Q1) and contributed to multiple
            peer-reviewed journals. I bridge the gap between research and
            engineering — from designing novel deep learning architectures to
            deploying production ML APIs.
          </p>
        </div>
        <div className="about-stats">
          {[
            { number: "3.98", label: "GPA / 4.00" },
            { number: "4", label: "Publications" }
          ].map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
