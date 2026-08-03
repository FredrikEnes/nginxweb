export default function Section({ eyebrow, title, subtitle, children, className = "" }) {
  const classes = ["section", className].filter(Boolean).join(" ");

  return (
    <section className={classes}>
      {(eyebrow || title || subtitle) && (
        <div className="section__head">
          {eyebrow && <span className="section__eyebrow">{eyebrow}</span>}
          {title && <h2 className="section__title">{title}</h2>}
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
}
