import { Link, useRoute } from "wouter";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <CustomLink to="/">home</CustomLink>
        <CustomLink to="/cv">cv</CustomLink>
        <CustomLink to="/projects">projects</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const [isActive] = useRoute(to);

  return (
    <li className={isActive ? "active" : ""}>
      <Link href={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
