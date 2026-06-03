import { publications } from "../data/index.js";
import "../styles/global.css";

export default function Publications() {
  return (
    <section id="publications">
      <div className="fade-up">
        <div className="section-label">Research</div>
        <h2 className="section-title">Publications</h2>
      </div>
      <div className="pub-list">
        {publications.map((pub, i) => (
          <div className="pub-card fade-up" key={i}>
            <span className={`pub-rank ${pub.rankClass}`}>{pub.rank}</span>
            <div>
              <div className="pub-title">{pub.title}</div>
              <div className="pub-meta">{pub.meta}</div>
            </div>
            {pub.doi ? (
              <a
                href={pub.doi}
                className="pub-link"
                target="_blank"
                rel="noreferrer"
              >
                View Paper →
              </a>
            ) : (
              <a
                href="/LoA_GarryNelson_ASSET.pdf"
                className="pub-link"
                target="_blank"
                rel="noreferrer"
              >
                View LoA →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
