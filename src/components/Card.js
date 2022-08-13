import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function card({ img, text, liveLink, title, githubLink }) {
  return (
    <div className="card">
      <h2 className="cardTitle">{title}</h2>
      <img alt="Project thumbnail" className="cardImg" src={img} />

      {text}
      <div className="icons">
        <a className="linkIcon" href={liveLink}>
          <FontAwesomeIcon
            className="faLinkIcon"
            size="2x"
            icon={faArrowUpRightFromSquare}
          />
        </a>
        <a className="linkIcon" href={githubLink}>
          <FontAwesomeIcon className="faLinkIcon" size="2x" icon={faGithub} />
        </a>
      </div>
    </div>
  );
}
