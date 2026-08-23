import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <div className="skills-content">
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            {skills.languages.map((lang) => (
              <span key={lang.name} className="skill-tag">
                {lang.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Libraries & Tools</h3>
          <div className="skills-list">
            {skills.librariesAndTools.map((tool) => (
              <span key={tool} className="skill-tag">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Machine Learning & AI</h3>
          <div className="skills-list">
            {skills.machineLearning.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-category">
          <h3>Other Skills</h3>
          <div className="skills-list">
            {skills.other.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
