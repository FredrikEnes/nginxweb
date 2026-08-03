export default function Card({ as: Tag = "div", interactive = false, className = "", children, ...props }) {
  const classes = ["card", interactive && "card--interactive", className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
