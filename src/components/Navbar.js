import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* <Link to="/" className="site-title">
        Fredrik
  </Link> */}
      <ul>
        <li>
          <CustomLink to="/">home</CustomLink>
        </li>
        <li>
          <CustomLink to="/CV">cv</CustomLink>
        </li>
        <li>
          <CustomLink to="/Projects">projects</CustomLink>
        </li>
        <li>
          <CustomLink to="/About">about</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
}
