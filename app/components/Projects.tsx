type Project = {
  idx: string;
  year: string;
  status: string;
  title: string;
  desc: string;
  tags: string[];
  live?: string;
  github?: string;
};

const projects: Project[] = [
  {
    idx: "i",
    year: "2026",
    status: "Deployed · September",
    title: "Readability Lab",
    desc: "A full-stack tool that rewrites text toward a selected reading level and visualizes changes in readability and syntactic complexity. Built a LangChain verify-and-revise pipeline that evaluates each rewrite and returns the closest result within three iterations. Representative tests shifted reading grade levels from 15.7 to 4.5 and from 0.6 to 9.6.",
    tags: ["React", "Python", "FastAPI", "LangChain", "spaCy", "Gemini", "Vercel", "Render"],
    github: "https://github.com/yangaveryx/readability-lab",
  },
  {
    idx: "ii",
    year: "2026",
    status: "Deployed · Jan–May",
    title: "Film Diary",
    desc: "Independently built and deployed a movie discovery and logging app with live TMDB search, movie metadata, posters, and popularity feeds. Built review and watchlist CRUD features with Firebase authentication and per-user persistence, then containerized the app with Docker and hosted it on Vercel.",
    tags: ["TypeScript", "Node.js", "Express.js",  "React", "Firebase", "Docker", "Vercel"],
    github: "https://github.com/yangaveryx/film-diary",
  },
  {
    idx: "iii",
    year: "2026",
    status: "Completed · Jan–May",
    title: "Fried! — Donut Shop Simulation",
    desc: "A single-player cooking game built in a 2,400+ line OCaml MVC codebase. Implemented functional game-state transitions, player interactions, collision detection, and station-specific timers, with unit tests for timing and gameplay logic and a replay feature for debugging.",
    tags: ["OCaml"],
    github: "https://github.coecis.cornell.edu/ajz48/cooked",
  }

];

export default function Projects() {
  return (
    <section id="projects">
      <div className="s-inner">
        <div className="section-header reveal">
          <h2>Projects</h2>
        </div>
        <div className="projects-list">
          {projects.map((p) => (
            <div className="p-row" key={p.idx}>
              <span className="p-idx">{p.idx}. {p.year}.<span className="p-status">{p.status}</span></span>
              <div className="p-body">
                <h3 className="p-title">{p.title}</h3>
                <p className="p-desc">{p.desc}</p>
                <div className="p-tags">
                  {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
              <div className="p-links">
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="pl">↗ Live</a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" className="pl dim">GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
