import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
    var Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;

    scroll.scrollMore(1);
  };

  return (
    <div className="navBar">
      <div className="hamburgerMenu">
        <FontAwesomeIcon
          size="2x"
          onClick={handleClick}
          title="hamburgerMenu"
          icon={faBars}
        />
      </div>
      {show && (
        <nav className="dropDownContent">
          <ul>
            <Link
              onClick={handleClick}
              activeClass="active"
              smooth
              spy
              to="home"
            >
              <li className="navLink">home</li>
            </Link>
            <Link
              onClick={handleClick}
              activeClass="active"
              smooth
              spy
              to="about"
            >
              <li className="navLink">about</li>
            </Link>
            <Link
              onClick={handleClick}
              activeClass="active"
              smooth
              spy
              to="projects"
            >
              <li className="navLink">projects</li>
            </Link>
          </ul>
        </nav>
      )}
    </div>
  );
}
