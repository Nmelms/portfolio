import React from "react";

import { Link } from "react-scroll";

export default function DropDown({ name, setName }) {
  const handleClick = () => {
    setTimeout(() => {
      setName("closed");
    }, 500);
  };
  return (
    <nav className={name}>
      <ul>
        <Link onClick={handleClick} activeClass="active" smooth spy to="home">
          <li className="navLink">home</li>
        </Link>
        <Link onClick={handleClick} activeClass="active" smooth spy to="about">
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
  );
}
