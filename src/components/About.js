import React from "react";
import pic from "../assets/me.jpg";
import jsSVG from "../assets/js.svg";
import reactSVG from "../assets/react.svg";
import htmlSVG from "../assets/html.svg";
import cssSVG from "../assets/css.svg";
import firebaseSVG from "../assets/firebase.svg";
import jestSVG from "../assets/jest.svg";

export default function About() {
  return (
    <div className="aboutMe">
      <h1 className="aboutMeTitle">A Little About Me...</h1>
      <img alt="me" className="selfie" src={pic} />
      <div className="aboutMeText">
        <p>
          I'm Nick, a front-end web developer. I make responsive web
          applications that look good and are easy to use. I enjoy keeping up
          with the latest technologies and use React to build the majority of my
          sites. When I'm not coding, I enjoy exploring the outdoors.
        </p>
      </div>
      <div className="tech">
        <h1 className="techTitle">Technologies</h1>
        <div className="logos">
          <img alt="react " className="techLogo" src={reactSVG} />
          <img alt="javascript " className="techLogo" src={jsSVG} />
          <img alt="jest " className="techLogo" src={jestSVG} />
          <img alt="firebase " className="techLogo" src={firebaseSVG} />
          <img alt="html " className="techLogo" src={htmlSVG} />
          <img alt="css " className="techLogo" src={cssSVG} />
        </div>
        <p className="techText">
          Im constantly learning and ready to learn new technologies as needed
        </p>
      </div>
    </div>
  );
}
