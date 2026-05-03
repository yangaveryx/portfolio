type Job = {
  dates: string;
  role: string;
  org: string;
  desc: string;
  badge: string;
};

const jobs: Job[] = [
  {
    dates: "Nov 2025 — Present",
    role: "Product Developer",
    org: "Hack4Impact at Cornell",
    desc: "Developed a user-facing volunteer management system for Anabel's Grocery as part of a student engineering team. Implemented backend APIs and user authentication, and contributed to frontend development and system design. \n Tech stack: React, Next.js, Express.js, Prisma, TypeScript, Docker, Git, Figma.",
    badge: "Organization",
  },
  {
    dates: "June 2025 — Aug 2025",
    role: "AI Product Research Intern",
    org: "Cricket Media",
    desc: "Researched and designed AI-powered features for an educational platform serving international students, including chat-based tutoring, AI-assisted grading, and adaptive learning tools. Conducted competitive analysis of edtech products and created low-fidelity prototypes in Figma to explore integration of AI-driven learning experiences.",
    badge: "Internship",
  },
  {
    dates: "June 2024 — Aug 2024",
    role: "Clinical Psychology Research Scholar",
    org: "Pioneer Academics",
    desc: "Conducted independent research on inter-identity amnesia and memory transfer in individuals with dissociative identity disorder under Professor Allan Clifton (Vassar College). Designed an EEG-based word recognition experiment measuring P300 amplitudes to study memory retrieval across dissociative states.",
    badge: "Research",
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
            <p className="exp-col-title">Work</p>
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