import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Logos() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/h594754"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="social-icon" icon={faGithub} size="4x" />
      </a>
      <a
        href="https://www.linkedin.com/in/fredrikenes/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon className="social-icon" icon={faLinkedin} size="4x" />
      </a>
      <a href="mailto:fredrik.enes@gmail.com">
        <FontAwesomeIcon className="social-icon" icon={faEnvelope} size="4x" />
      </a>
    </div>
  );
}
