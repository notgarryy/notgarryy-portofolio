import "../styles/global.css"

export default function Navbar({ scrolled }) {
  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#" className="nav-logo">Garry Nelson</a>
      <ul className="nav-links">
        {["About", "Experience", "Publications", "Projects", "Skills", "Contact"].map(item => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}