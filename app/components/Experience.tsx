type Job = {
  dates: string;
  role: string;
  org: string;
  desc: string;
  badge: string;
};

const jobs: Job[] = [
  {
    dates: "May 2026 — Present",
    role: "Research Assistant",
    org: "Computational Linguistics Lab · Cornell University",
    desc: "Developing an ASL sign recognition system with React, PyTorch, and FastAPI to help learners identify partially remembered signs from live video. Implementing MediaPipe landmark extraction with motion-threshold filtering and farthest-point sampling, and training models on approximately 85,000 videos from ASL-LEX and SEM-LEX. Designed and deployed REST APIs on a Cornell Apache server to process video and serve recognition results.",
    badge: "Research",
  },
  {
    dates: "Nov 2025 — Present",
    role: "Software Developer",
    org: "Hack4Impact · Cornell University",
    desc: "Medic — Community Health Toolkit Impact Dashboard\nBuilding TypeScript, Express, and PostgreSQL endpoints for monitoring CHT deployments across 24 countries and 180,000+ health workers. Linking monitoring snapshots with deployment records while preserving measurement windows and data-quality indicators; implementing sharing controls and API tests for restricted deployments, stale snapshots, and failed metrics.\n\nAnabel’s Grocery — Volunteer Shift Management\nShipped 10+ REST API endpoints for shifts and swap requests, supporting 50+ volunteers. Integrated Firebase Admin SDK token verification for secure volunteer and admin authentication.",
    badge: "Community Impact",
  },
  {
    dates: "July 2025 — Aug 2025",
    role: "AI Product Research Intern",
    org: "NeuPals Holdings — Cricket Media",
    desc: "Conducted competitive market analysis and prototyped AI feature concepts in Figma for an educational technology platform serving international students.",
    badge: "Internship",
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="s-inner">
        <div className="section-header reveal">
          <h2>Experience</h2>
        </div>
        <div className="exp-layout reveal">
          <div>
            <p className="exp-col-title">Research & Development</p>
            <div className="exp-items">
              {jobs.map((job, i) => (
                <div className="exp-item" key={i}>
                  <div className="exp-date">{job.dates}</div>
                  <div className="exp-body">
                    <p className="exp-role">{job.role}</p>
                    <p className="exp-org">{job.org}</p>
                    <p className="exp-desc">{job.desc}</p>
                    {/* <span className="exp-badge">{job.badge}</span> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}