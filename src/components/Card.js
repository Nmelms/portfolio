import React from "react";
import live from "../assets/link.png";

export default function card({ img, text, liveLink }) {
  return (
    <div className="card">
      <img className="cardImg" src={img} />

      {text}
      <a className="linkIcon" href={liveLink}>
        <img src={live} />
      </a>
    </div>
  );
}
