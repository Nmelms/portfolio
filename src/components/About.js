import React from "react";
import pic from "../assets/me.jpg";

export default function About() {
  return (
    <div className="aboutMe">
      <h1 className="aboutMeTitle">A little about me..</h1>
      <img className="selfie" src={pic} />
      <p></p>
    </div>
  );
}
