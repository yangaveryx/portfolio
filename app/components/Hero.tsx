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
      <div className="hero-right" aria-hidden="true">
        <div className="hero-composition">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-core"><span>ay.</span><small>curiosity into code</small></div>
          <span className="orbit-label label-one">language</span>
          <span className="orbit-label label-two">learning</span>
          <span className="orbit-label label-three">technology</span>
          <span className="composition-caption">An intersection of interests</span>
        </div>
      </div>
      <a href="#about" className="hero-scroll">A little more about me <span>↓</span></a>
    </section>
  );
}
