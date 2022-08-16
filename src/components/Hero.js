import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { faGithub, faLinkedin } from "@fortawesome/fontawesome-free-brands";

export default function Hero() {
  const handleClick = () => {};
  return (
    <div className="hero">
      <div className="nameAndTitle">
        <h1 className="h1">Nick Melms</h1>
        <h2 className="text-effect">Front-End Developer</h2>
      </div>
      <div className="contactIcons">
        <a className="icon" href="mailto: nmelms92@gmail.com">
          <FontAwesomeIcon size="2x" icon={faEnvelope} />
        </a>
        <a className="icon" href="https://github.com/Nmelms">
          <FontAwesomeIcon size="2x" icon={faGithub} />
        </a>
        <a
          className="icon"
          href="https://www.linkedin.com/in/nick-melms-b66300223/"
        >
          <FontAwesomeIcon size="2x" icon={faLinkedin} />
        </a>
      </div>
      <Link
        onClick={handleClick}
        offset={5}
        activeClass="active"
        smooth
        spy
        to="about"
      >
        <FontAwesomeIcon
          data-testid="anglesDown"
          onClick={handleClick}
          className="anglesDown"
          icon={faAnglesDown}
          size="2x"
        />
      </Link>
    </div>
  );
}
