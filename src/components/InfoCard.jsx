import Card from "./Card.jsx";

export default function InfoCard({ period, title, subtitle, description, link }) {
  return (
    <Card as="li" interactive className="info-card">
      {period && <span className="info-card__period">{period}</span>}
      {title && <h3 className="info-card__title">{title}</h3>}
      {subtitle && <p className="info-card__subtitle">{subtitle}</p>}
      {description && <p className="info-card__desc">{description}</p>}
      {link && (
        <a
          className="info-card__link"
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
