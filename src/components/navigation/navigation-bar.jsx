import React from "react";
import "./style.scss";
import RandomizeColor from "../../animations/color-randomizer";

export default function NavBar() {
  return (
    <div className="navbar-container">
      <ul>
        <li>
          <a href={"/"}>HOME <span style={{ fontSize: "26px", color: "white" }}>✦</span></a>
        </li>
        <li>
          <a href={""}>RESUME</a>
        </li>
        <li>
          <a href={"/projects"}>PROJECTS</a>
        </li>
        <li>
          <a href={""}>CONTACT</a>
        </li>
        <li>
          <a href={'/artwork-viewer'}><RandomizeColor text={"ART"}/></a>
        </li>
      </ul>
    </div>
  );
}
