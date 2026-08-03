import ProjectCard from "../components/ProjectCard.jsx";
import Section from "../components/Section.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <div className="page">
      <Section title="Projects">
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
