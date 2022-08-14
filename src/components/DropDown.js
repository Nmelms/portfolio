import React from "react";

import { Link } from "react-scroll";

export default function DropDown({ name, setName, dropDownRef }) {
  const handleClick = () => {
    setTimeout(() => {
      setName("closed");
    }, 500);
  };
  return (
    <nav ref={dropDownRef} className={`ul ${name}`}>
      <ul>
        <Link
          title="home link"
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
          offset={5}
          activeClass="active"
          smooth
          spy
          to="about"
          title="about link"
        >
          <li className="navLink">about</li>
        </Link>
        <Link
          onClick={handleClick}
          activeClass="active"
          smooth
          spy
          to="projects"
          offset={5}
          title="projects link"
        >
          <li className="navLink">projects</li>
        </Link>
      </ul>
    </nav>
  );
}
