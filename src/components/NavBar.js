import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-scroll";
import DropDown from "./DropDown.js";

export default function NavBar() {
  const [name, setName] = useState("closed");
  const handleClick = () => {
    {
      name === "closed" ? setName("open") : setName("closed");
    }
    console.log(name);
  };

  return (
    <>
      <DropDown name={name} />
      <div className="navBar">
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
