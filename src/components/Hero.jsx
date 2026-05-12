import "../styles/global.css"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="hero-tag">ML Engineer & Deep Learning Researcher</div>
        <h1 className="hero-name">
          Garry
          <br />
          <em>Nelson</em>
        </h1>
        <p className="hero-title">
          IEEE Access (Q1) · Summa Cum Laude · Telkom University
        </p>
        <p className="hero-desc">
          Building <strong>real-world AI systems</strong> backed by published
          research. Specialized in deep learning for radar-based sensing, from
          model design to production deployment.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a href="/CV_GarryNelson.pdf" className="btn-secondary" download>
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-scroll">Scroll</div>
    </div>
  );
}
