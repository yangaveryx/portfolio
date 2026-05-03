import Image from 'next/image';

export default function About() {
  return (
    <section id="about">
      <div className="s-inner">
        <div className="about-grid reveal">
          <div className="about-left">
            <p className="about-label">Who I Am</p>
            <p className="about-name">Avery Yang</p>
            <Image
              src="/headshot.jpg"
              alt="Headshot"
              width={440}
              height={480}
              className="about-headshot"
            />
          </div>
          <div className="about-right">
            <div className="about-bio">
              <p>
                Hi, I&apos;m Avery Yang. I&apos;m a full-stack developer who enjoys building thoughtful, well-designed software. I work across the stack and focus on tackling problems that have real-world impact.
              </p>
              <p>
                I&apos;m especially interested in how technology intersects with psychology, particularly how software can support learning and cognition. Outside of coding, I spend my time dancing, reading, and playing with my cat.
              </p>
            </div>
            <div className="about-facts">
              <div className="fact">
                <p className="fact-label">Based In</p>
                <p className="fact-value">Washington, D.C.</p>
              </div>
              <div className="fact">
                <p className="fact-label">Available For</p>
                <p className="fact-value">Internships & full-time opportunities</p>
              </div>
              <div className="fact">
                <p className="fact-label">Education</p>
                <p className="fact-value">B.A. in Computer Science & Cognitive Science at Cornell University</p>
              </div>
              <div className="fact">
                <p className="fact-label">Interests</p>
                <p className="fact-value">Human-Computer Interaction, Artificial Intelligence, Learning and Cognition, Computational Modeling</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
