export default function Footer() {
  return (
    <footer>
      <span>© 2026 Avery Yang</span>
      <span className="f-mid">Built with intention</span>
      <div style={{ display: "flex", gap: "28px" }}>
        <a href="https://github.com/yangaveryx" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/avery-s-yang" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:asy28@cornell.edu" target="_blank" rel="noopener noreferrer">Email</a>
      </div>
    </footer>
  );
}