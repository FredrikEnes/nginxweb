import Card from "./Card.jsx";

export default function ProjectCard({ title, description, link }) {
  return (
    <Card className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__desc">{description}</p>
      {link && (
        <a
          className="project-card__link link-arrow"
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label}
        </a>
      )}
    </Card>
  );
}
