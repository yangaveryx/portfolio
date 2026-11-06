type Skill = { name: string };

const frontend: Skill[] = [
  { name: "React" }, { name: "JavaScript / TypeScript" }, { name: "HTML / CSS" },
];
const backend: Skill[] = [
  { name: "Node.js / Express.js" }, { name: "FastAPI" }, { name: "PostgreSQL / SQL" },
  { name: "Prisma / Firebase" },
];
const languages: Skill[] = [
  { name: "Python / Java" }, { name: "C / C++ / OCaml" }, { name: "Linux / Bash" },
];
const machineLearning: Skill[] = [
  { name: "PyTorch / scikit-learn" }, { name: "LangChain / spaCy" }, { name: "pandas / NumPy" },
];
const tools: Skill[] = [
  { name: "Git / GitHub" }, { name: "Docker" }, { name: "Vercel / Render" },
  { name: "Postman / Figma" },
];

function SkillRow({ skill }: { skill: Skill }) {
  return (
    <div className="sk">
      {skill.name}

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
          <SkillGroup label="Machine Learning & NLP" skills={machineLearning} />
          <SkillGroup label="Tools"    skills={tools} />
        </div>
      </div>
    </section>
  );
}