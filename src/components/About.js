import React from "react";
import pic from "../assets/me.jpg";
import jsSVG from "../assets/js.svg";
import reactSVG from "../assets/react.svg";
import htmlSVG from "../assets/html.svg";
import cssSVG from "../assets/css.svg";
import firebaseSVG from "../assets/firebase.svg";

export default function About() {
  return (
    <div className="aboutMe">
      <h1 className="aboutMeTitle">A little about me..</h1>
      <img className="selfie" src={pic} />
      <div className="aboutMeText">
        <p>
          Im Nick, a front-end webdeveloper. I enjoy making responsive websites
          that look good and are easy to use. i enjoy keeping up with the latest
          technologies but use React to build the majority of my sites. When im
          not coding after work i enjoy the outdoors and flying FPV drones.
        </p>
      </div>
      <div className="tech">
        <h2>Technologies</h2>
        <div className="logos">
          <img className="techLogo" src={reactSVG} />
          <img className="techLogo" src={jsSVG} />
          <img className="techLogo" src={firebaseSVG} />
          <img className="techLogo" src={htmlSVG} />
          <img className="techLogo" src={cssSVG} />
        </div>
      </div>
    </div>
  );
}
