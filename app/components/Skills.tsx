type Skill = { name: string };

const frontend: Skill[] = [
  { name: "React" },
  { name: "Next.js" },
  { name: "JavaScript/TypeScript" },
  { name: "HTML" },
];

const backend: Skill[] = [
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "Prisma" },
  { name: "Firebase" },
];

const languages: Skill[] = [
  { name: "Java" },
  { name: "Python" },
  { name: "C" },
  { name: "C++" },
  { name: "OCaml" },
];

const tools: Skill[] = [
  { name: "GitHub" },
  { name: "Docker" },
  { name: "Figma" },
];

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="sk">
      {skill.name}
      <div className="dots">
        {[1,2,3,4,5].map((i) => (
          <div key={i} className={`d${i <= 5 ? " on" : ""}`} />
        ))}
      </div>
    </div>
  );
}

function SkillGroup({ label, skills }: { label: string; skills: Skill[] }) {
  return (
    <div>
      <p className="sg-label">{label}</p>
      {skills.map((s) => <SkillRow key={s.name} skill={s} />)}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills">
      <div className="s-inner">
        <div className="section-header reveal">
          <h2>Skills</h2>
        </div>
        <div className="skills-layout reveal">
          <SkillGroup label="Frontend" skills={frontend} />
          <SkillGroup label="Backend"  skills={backend} />
          <SkillGroup label="Languages" skills={languages} />
          <SkillGroup label="Tools"    skills={tools} />
        </div>
      </div>
    </section>
  );
}