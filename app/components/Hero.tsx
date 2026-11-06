export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-kicker">Full-Stack Developer</p>
        <h1>AVERY<br />YANG</h1>
        <div className="hero-line" />
        <p className="hero-tagline">software, language & learning</p>
        <p className="hero-desc">
          Computer Science & Cognitive Science at Cornell. Building full-stack applications and tools that support language, learning, and real-world communities.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">Explore My Work</a>
          <a href="/Avery_Yang_Resume.pdf" className="btn btn-ghost" target="_blank" rel="noreferrer">View Resume</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-composition">
          <div className="comp-block cb1" />
          <div className="comp-block cb2" />
          <div className="comp-block cb3" />
          <div className="comp-block cb4" />
          <span className="comp-num">01</span>
          <span className="comp-text">developer</span>
        </div>
      </div>
    </section>
  );
}