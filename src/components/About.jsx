import "../styles/global.css";

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
            specializing in Machine Learning, Deep Learning, and real-time AI
            systems. Published IEEE Access (Q1) author with a passion for
            building things that actually work in the real world.
          </p>
          <p>
            My work spans <strong>FMCW radar-based sensing</strong>,
            cloud-deployed inference APIs, and <strong>MLOps pipelines</strong>{" "}
            — and extends into <strong>LLM & RAG applications</strong>,{" "}
            <strong>IoT systems</strong>, and{" "}
            <strong>mobile development</strong>. I'm drawn to the full stack of
            intelligent systems, from research and model design all the way to
            production deployment.
          </p>
        </div>
        <div className="about-stats">
          {[
            { number: "3.98", label: "GPA / 4.00" },
            { number: "2", label: "Publications" },
            { number: "Q1", label: "IEEE Access" },
            { number: "1", label: "Deployed API" },
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
