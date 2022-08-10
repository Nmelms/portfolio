import React from "react";
import Card from "./Card";
import me from "../assets/me.jpg";

export default function Project() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">Projects</h1>
      <Card
        liveLink="http://www.google.com"
        text="this is a bunch of text im probably going to change at some point"
        img={me}
      />
    </div>
  );
}
