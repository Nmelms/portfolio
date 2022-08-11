import React from "react";
import Card from "./Card";
import invoiceScreenshot from "../assets/invoiceScreenshot.png";

export default function Project() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">Projects</h1>
      <Card
        liveLink="https://glittery-shortbread-a5497a.netlify.app/"
        text="this is a bunch of text im probably going to change at some point"
        img={invoiceScreenshot}
      />
    </div>
  );
}
