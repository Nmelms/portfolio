import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGit,
  faGithub,
  faLinkedin,
} from "@fortawesome/fontawesome-free-brands";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footerName">
        <h5>This site was created by</h5>
        <h4>Nick Melms</h4>
      </div>

      <div className="contactIcons">
        <a className="icon" href="mailto: nmelms92@gmail.com">
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        </a>
        <a className="icon" href="https://github.com/Nmelms">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a className="icon" href="www.linkdin.com">
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
      </div>
    </div>
  );
}
