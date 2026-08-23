import { education } from '../data/education';

export default function Education() {
  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-content">
        <div className="education-header">
          <h3>{education.school}</h3>
          <span className="education-period">{education.period}</span>
        </div>
        <p className="education-degree">{education.degree}</p>
        <p className="education-focuses">
          Focus: {education.focuses.join(' · ')}
        </p>
        <p className="education-gpa">GPA: {education.gpa}</p>
      </div>
    </section>
  );
}
