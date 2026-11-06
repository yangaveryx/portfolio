import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="s-inner">
        <div className="about-grid reveal">
          <div className="about-left">
            <p className="about-label">Who I Am</p>
            <p className="about-name">Avery Yang</p>
            <Image
              src="/headshot.JPG"
              alt="Avery Yang"
              width={440}
              height={480}
              className="about-headshot"
            />
          </div>
          <div className="about-right">
            <div className="about-bio">
              <p>
                Hi! I&apos;m Avery, and I study Computer Science and Cognitive
                Science at Cornell. I&apos;m interested in how people learn and
                use language, and how AI can make both more accessible.
              </p>
              <p>
                My work spans machine learning for ASL sign recognition at
                Cornell&apos;s Computational Linguistics Lab and full-stack
                tools rooted in social impact with Hack4Impact. Outside of
                coding, I enjoy dancing, reading, and spending time with my cat.
              </p>
            </div>
            <div className="about-facts">
              <div className="fact">
                <p className="fact-label">Based In</p>
                <p className="fact-value">Washington, D.C.</p>
              </div>
              <div className="fact">
                <p className="fact-label">Available For</p>
                <p className="fact-value">
                  Internships & full-time opportunities
                </p>
              </div>
              <div className="fact">
                <p className="fact-label">Education</p>
                <p className="fact-value">
                  Cornell University · B.A. in Computer Science & Cognitive
                  Science · Expected May 2028
                </p>
              </div>
              <div className="fact">
                <p className="fact-label">Interests</p>
                <p className="fact-value">
                  Human-Computer Interaction, Artificial Intelligence, Learning
                  and Cognition, Computational Modeling
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
