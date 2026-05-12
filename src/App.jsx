import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Publications from "./components/Publications"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles/global.css"

function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("visible")
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll(".fade-up").forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [ring, setRing] = useState({ x: 0, y: 0 })
  useFadeUp()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const moveCursor = (e) => {
      setCursor({ x: e.clientX - 4, y: e.clientY - 4 })
      setTimeout(() => setRing({ x: e.clientX - 16, y: e.clientY - 16 }), 80)
    }
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [])

  return (
    <>
      <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      <div className="cursor-ring" style={{ left: ring.x, top: ring.y }} />

      <Navbar scrolled={scrolled} />
      <Hero />
      <hr className="full-divider" />
      <About />
      <hr className="full-divider" />
      <Publications />
      <hr className="full-divider" />
      <Projects />
      <hr className="full-divider" />
      <Skills />
      <hr className="full-divider" />
      <Experience />
      <hr className="full-divider" />
      <Contact />
      <Footer />
    </>
  )
}