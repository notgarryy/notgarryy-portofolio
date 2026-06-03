import "../styles/global.css"

const interests = [
  "Machine Learning",
  "Deep Learning",
  "MLOps",
  "IoT Systems",
  "LLMs & RAG",
  "Data Science",
  "Radar Sensing",
]

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">

        <h1 className="hero-name">
          Garry
          <br />
          <em>Nelson</em>
        </h1>

        <p className="hero-desc">
          Building <strong>real-world AI systems</strong> backed by published
          research. Passionate about the full stack of intelligent systems —
          from deep learning model design and radar-based sensing to{" "}
          <strong>MLOps pipelines</strong>, <strong>IoT integration</strong>,{" "}
          <strong>LLM & RAG applications</strong>, and{" "}
          <strong>mobile development</strong>.
        </p>

        <div className="hero-interest-row">
          <span className="hero-interest-label">Curious about</span>
          <div className="hero-interest-pills">
            {interests.map((interest) => (
              <span className="hero-interest-pill" key={interest}>
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-stats">
          {[
            { value: "Q1", label: "IEEE Access" },
            { value: "3.98", label: "GPA / 4.00" },
            { value: "2", label: "Publications" },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="/CV_GarryNelson_ML.pdf" className="btn-secondary" download>
            Download CV
          </a>
        </div>

      </div>
      <div className="hero-scroll">Scroll</div>
    </div>
  )
}