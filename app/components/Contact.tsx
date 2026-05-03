"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section id="contact">
      <div className="contact-split">
        <div className="contact-dark reveal">
          <p className="s-over">Reach Out</p>
          <h2>Contact Me</h2>
          <p>
            I&apos;m currently <em>open to new opportunities</em> — internships,
            research roles, or just a good conversation about tech.
          </p>
          <div className="c-links">
            <a href="mailto:yang.averyx@gmail.com" className="clink">
              <span className="ci">@</span> yang.averyx@gmail.com
            </a>
            <a href="https://github.com/yangaveryx" target="_blank" rel="noreferrer" className="clink">
              <span className="ci">GH</span> github.com/yangaveryx
            </a>
            <a href="https://www.linkedin.com/in/avery-s-yang" target="_blank" rel="noreferrer" className="clink">
              <span className="ci">in</span> linkedin.com/in/avery-s-yang
            </a>
            <a href="Resume" target="_blank" rel="noreferrer" className="clink">
              <span className="ci">in</span> my resume
            </a>
          </div>
        </div>
        <div className="contact-light reveal">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea id="msg" placeholder="Send me a message!" required />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              {sent ? "Sent ✓" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}