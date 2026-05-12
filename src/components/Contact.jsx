import "../styles/global.css"

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-inner">
        <div className="fade-up">
          <div className="section-label">Contact</div>
          <h2 className="section-title">
            Let's <em>connect</em>
          </h2>
          <div className="contact-text">
            <p>
              !!!
            </p>
          </div>
        </div>
        <div className="contact-links fade-up">
          {[
            {
              label: "Email",
              value: "garrynelson456@gmail.com",
              href: "mailto:garrynelson456@gmail.com",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/garry-nelson-889834277",
              href: "https://www.linkedin.com/in/garry-nelson-889834277/",
            },
            {
              label: "GitHub",
              value: "github.com/notgarryy",
              href: "https://github.com/notgarryy",
            },
          ].map((link) => (
            <a
              href={link.href}
              className="contact-link"
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <div className="contact-link-label">{link.label}</div>
                <div className="contact-link-value">{link.value}</div>
              </div>
              <span className="contact-link-arrow">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
