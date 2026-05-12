import "../styles/global.css"

export default function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Garry Nelson</p>
      <p>Built with React · Deployed on Vercel</p>
    </footer>
  );
}
