import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import pic from "../assets/me.jpg";

export default function Hero() {
  const handleClick = () => {};
  return (
    <div className="hero">
      <img className="selfie" src={pic} />
      <div className="nameAndTitle">
        <h1 className="h1">Nick Melms</h1>
        <h2 className="text-effect">Front End Developer</h2>
      </div>

      <Link
        onClick={handleClick}
        offset={-40}
        activeClass="active"
        smooth
        spy
        to="about"
      >
        <FontAwesomeIcon
          onClick={handleClick}
          className="anglesDown"
          icon={faAnglesDown}
          size="2x"
        />
      </Link>
    </div>
  );
}
