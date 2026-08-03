import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  {
    href: "https://github.com/h594754",
    label: "GitHub",
    icon: faGithub,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/fredrikenes/",
    label: "LinkedIn",
    icon: faLinkedin,
    external: true,
  },
  {
    href: "mailto:fredrik.enes@gmail.com",
    label: "Email",
    icon: faEnvelope,
    external: false,
  },
];

export default function Logos({ center = false }) {
  return (
    <div className={`social${center ? " social--center" : ""}`}>
      {socials.map(({ href, label, icon, external }) => (
        <a
          key={label}
          className="social__link"
          href={href}
          aria-label={label}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <FontAwesomeIcon icon={icon} />
        </a>
      ))}
    </div>
  );
}
