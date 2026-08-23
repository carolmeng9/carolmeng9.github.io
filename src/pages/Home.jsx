import Hero from '../components/Hero';
import Education from '../components/Education';
import Skills from '../components/Skills';
import ExperienceList from '../components/ExperienceList';
import ProjectList from '../components/ProjectList';

export default function Home() {
  return (
    <div className="wrap">
      <Hero />
      <Education />
      <Skills />
      <ExperienceList />
      <ProjectList />
    </div>
  );
}
