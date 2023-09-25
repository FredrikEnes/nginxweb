import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-brands-svg-icons";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Logos() {
  return (
    <>
      <div className="logoer">
        <a href="https://github.com/h594754" target="_blank"
        rel="noopener noreferrer">
          <FontAwesomeIcon
            className="ikoner"
            icon={faGithub}
            size="4x"
          ></FontAwesomeIcon>
        </a>
        <a href="https://twitter.com/EnesFredrik" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="ikoner"
            icon={faTwitter}
            size="4x"
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/fredrikenes/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="ikoner"
            icon={faLinkedin}
            size="4x"
          ></FontAwesomeIcon>
        </a>
      </div>
    </>
  );
}
