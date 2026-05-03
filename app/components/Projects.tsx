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
    status: "In progress",
    title: "Fried!",     
    desc: "A single-player cooking game inspired by Overcooked, where players complete timed donut orders by navigating a map, assembling ingredients, and managing order accuracy under pressure.",
    tags: ["OCaml"],
    github: "https://github.coecis.cornell.edu/ajz48/cooked",
  },
  {
    idx: "ii",
    year: "2026",
    status: "Completed",
    title: "Film Diary (working title)",
    desc: "A Letterboxd-inspired movie logging platform that allows users to discover films, track what they’ve watched, write reviews, and maintain a personal watchlist. Movie data is fetched from the TMDB API to provide real posters and metadata.",
    tags: ["TypeScript", "Node.js", "Express.js",  "React", "Firebase"],
    github: "#",
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="s-inner">
        <div className="section-header reveal">
          <h2>Projects</h2>
        </div>
        <div className="projects-list reveal">
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
                {p.live && <a href={p.live} className="pl">↗ Live</a>}
                {p.github && <a href={p.github} className="pl dim">GitHub</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}