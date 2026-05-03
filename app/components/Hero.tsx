export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-left">
        <p className="hero-kicker">Full-Stack Developer</p>
        <h1>AVERY<br />YANG</h1>
        <div className="hero-line" />
        <p className="hero-tagline">developer</p>
        <p className="hero-desc">
          building thoughtful, real-world software
        </p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">View Work</a>
          <a href="#contact" className="btn btn-ghost">Get In Touch</a>
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