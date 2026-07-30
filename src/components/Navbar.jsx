import { Link, useRoute } from "wouter";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* <Link href="/" className="site-title">
        Fredrik
  </Link> */}
      <ul>
        <li>
          <CustomLink to="/">home</CustomLink>
        </li>
        <li>
          <CustomLink to="/cv">cv</CustomLink>
        </li>
        <li>
          <CustomLink to="/projects">projects</CustomLink>
        </li>
        <li>
          <CustomLink to="/about">about</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const [isActive] = useRoute(to);

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <Link href={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
}
