import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Logos() {
  return (
    <>
      <div className="logoer">
        <a
          href="https://github.com/h594754"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="ikoner"
            icon={faGithub}
            size="4x"
          ></FontAwesomeIcon>
        </a>
        {/* <a href="https://twitter.com/EnesFredrik" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            className="ikoner"
            icon={faTwitter}
            size="4x"
          ></FontAwesomeIcon>
        </a> */}
        <a
          href="https://www.linkedin.com/in/fredrikenes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="ikoner"
            icon={faLinkedin}
            size="4x"
          ></FontAwesomeIcon>
        </a>
        <a href="mailto:fredrik.enes@gmail.com">
          <FontAwesomeIcon
            className="ikoner"
            icon={faEnvelope}
            size="4x"
          ></FontAwesomeIcon>
        </a>
      </div>
    </>
  );
}
