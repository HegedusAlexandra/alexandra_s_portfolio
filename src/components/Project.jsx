import React from "react";
import Menu from "./Menu";
import Scroll from "./Scroll";

import "./components.css";

import OMAS from "./pictures/OMAS.gif";
import CV from "./pictures/CV.gif";
import GAMES from "./pictures/GAMES.gif";
/* import { useHorizontalScroll } from "./HorizontalScroll"; */

export default function Projects() {
  /* const scrollRef = useHorizontalScroll(); */
  return (
    <div className="project" /* ref={scrollRef} */>
      <Menu title={"Projects"} />
      <Scroll />
      <div className="imgContainer" style={{ whiteSpace: "nowrap" }}>
        <div className="imgBox">
          <img src={GAMES} alt="oops :( somthing went wrong" />
          <div className="desc-container">
            <a href="https://hegedusalexandra.github.io/small_projects/">
              Check it out!
            </a>
            <h2 className="description">Small games with JavaScript</h2>
          </div>
        </div>
        <div className="imgBox">
          <img src={CV} alt="oops :( somthing went wrong" />
          <div className="desc-container">
            <a href="https://hegedusalexandra.github.io/CurriculumVITAE/">
              Check it out!
            </a>
            <h2 className="description">My patissier CV site with React</h2>
          </div>
        </div>
        <div className="imgBox">
          <img src={OMAS} alt="oops :( somthing went wrong" />
          <div className="desc-container">
            <a href="https://hegedusalexandra.github.io/OMASKLEIDERSCHRANK/">
              Check it out!
            </a>
            <h2 className="description">React website for clothing shop</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
