import React from "react";
import Card from "./Card";
import invoiceScreenshot from "../assets/invoiceScreenshot.png";
import planetScreenshot from "../assets/planetScreenshot.png";

export default function Project() {
  return (
    <div className="projects">
      <h1 className="projectsTitle">Projects</h1>

      <Card
        title="Invoice App"
        liveLink="https://nmelmsinvoice.netlify.app/"
        text="This CRUD app was built using React and firebase as a backend"
        githubLink="https://github.com/Nmelms/Invoice-App"
        img={invoiceScreenshot}
      />
      <Card
        title="Planet Facts"
        liveLink="https://nmelmsplanetfacts.netlify.app/"
        githubLink="https://github.com/Nmelms/planets"
        text="Planet facts site was built using React"
        img={planetScreenshot}
      />

      <p style={{ paddingTop: "1rem" }}>
        React was also used to build this portfolio site
      </p>
    </div>
  );
}
