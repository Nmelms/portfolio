import React from "react";
import live from "../assets/link.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/fontawesome-free-brands";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function card({ img, text, liveLink }) {
  return (
    <div className="card">
      <img className="cardImg" src={img} />

      {text}
      <a className="linkIcon" href={liveLink}>
        <FontAwesomeIcon
          className="faLinkIcon"
          size="2x"
          icon={faArrowUpRightFromSquare}
        />
      </a>
      <FontAwesomeIcon className="faLinkIcon" size="2x" icon={faGithub} />
    </div>
  );
}
