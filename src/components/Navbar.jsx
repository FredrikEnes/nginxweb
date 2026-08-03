import { Link, useRoute } from "wouter";

const links = [
  { to: "/", label: "Home" },
  { to: "/cv", label: "CV" },
  { to: "/projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__inner">
        <Link href="/" className="nav__brand">
          Fredrik Enes
        </Link>
        <ul className="nav__links">
          {links.map((link) => (
            <NavItem key={link.to} to={link.to}>
              {link.label}
            </NavItem>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function NavItem({ to, children }) {
  const [isActive] = useRoute(to);

  return (
    <li className={`nav__item${isActive ? " active" : ""}`}>
      <Link href={to} className="nav__link">
        {children}
      </Link>
    </li>
  );
}
