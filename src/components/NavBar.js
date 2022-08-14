import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import DropDown from "./DropDown.js";

export default function NavBar() {
  const dropDownRef = useRef();
  const [name, setName] = useState("closed");

  // useEffect(() => {
  //   dropDownRef.current.style.display = "closed";
  // }, []);

  const handleClick = () => {
    {
      name === "closed" ? setName("open") : setName("closed");
    }
    console.log(name);
    dropDownRef.current.style.display = "flex";
  };

  return (
    <>
      <DropDown dropDownRef={dropDownRef} name={name} setName={setName} />

      <div className="navBar">
        <div className="desktopLinks">
          <nav>
            <ul>
              <Link title="home link" activeClass="active" smooth spy to="home">
                <li className="navLink">home</li>
              </Link>
              <Link
                // offset={2}
                activeClass="active"
                smooth
                spy
                to="about"
                title="about link"
              >
                <li className="navLink">about</li>
              </Link>
              <Link
                activeClass="active"
                smooth
                spy
                to="projects"
                // offset={2}
                title="projects link"
              >
                <li className="navLink">projects</li>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="hamburgerMenu">
          <FontAwesomeIcon
            size="2x"
            onClick={handleClick}
            title="hamburgerMenu"
            icon={faBars}
          />
        </div>
      </div>
    </>
  );
}
