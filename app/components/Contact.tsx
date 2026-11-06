"use client";
import { useState } from "react";

export default function Contact() {
  const [opened, setOpened] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("msg")}\n\nFrom: ${data.get("name")} <${data.get("email")}>`);
    window.location.href = `mailto:asy28@cornell.edu?subject=${subject}&body=${body}`;
    setOpened(true);
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
            <a href="mailto:asy28@cornell.edu" className="clink">
              <span className="ci">@</span> asy28@cornell.edu
            </a>
            <a href="https://github.com/yangaveryx" target="_blank" rel="noreferrer" className="clink">
              <span className="ci">GH</span> github.com/yangaveryx
            </a>
            <a href="https://www.linkedin.com/in/avery-s-yang" target="_blank" rel="noreferrer" className="clink">
              <span className="ci">in</span> linkedin.com/in/avery-s-yang
            </a>
            <a href="/Avery_Yang_Resume.pdf" target="_blank" rel="noreferrer" className="clink">
              <span className="ci">PDF</span> View my resume
            </a>
          </div>
        </div>
        <div className="contact-light reveal">
          <p className="contact-note">This form opens your email app with a draft. Send it there to get in touch.</p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" required />
            </div>
            <div className="field">
              <label htmlFor="msg">Message</label>
              <textarea id="msg" name="msg" placeholder="Send me a message!" required />
            </div>
            <button type="submit" className="btn btn-primary btn-full">
              {opened ? "Open Email Again" : "Compose Email"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}