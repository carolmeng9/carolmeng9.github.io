import { experiences } from '../data/experiences';

export default function ExperienceList() {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <ul className="experience-list">
        {experiences.map((exp) => (
          <li key={exp.id} className="experience-item">
            <div className="experience-header">
              <h3>{exp.role}</h3>
              <span className="experience-date">{exp.date}</span>
            </div>
            <p className="experience-org">{exp.organization}</p>
            <ul className="experience-bullets">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
