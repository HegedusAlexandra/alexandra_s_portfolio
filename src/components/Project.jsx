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
          <a
            href="https://hegedusalexandra.github.io/small_projects/"
            id="img-link"
          >
            <img src={GAMES} alt="oops :( somthing went wrong" />
          </a>
          <div className="desc-container">
            <a href="https://hegedusalexandra.github.io/small_projects/">
              Check it out!
            </a>
            <h2 className="description">JavaScript</h2>
            <h2 className="description">Interact.js</h2>
          </div>
        </div>
        <div className="imgBox">
          <a
            id="img-link"
            href="https://hegedusalexandra.github.io/CurriculumVITAE/"
          >
            <img src={CV} alt="oops :( somthing went wrong" />
          </a>
          <div className="desc-container">
            <a href="https://hegedusalexandra.github.io/CurriculumVITAE/">
              Check it out!
            </a>
            <h2 className="description">React</h2>
            <h2 className="description">React swiper</h2>
            <h2 className="description">React router</h2>
          </div>
        </div>
        <div className="imgBox">
          <a
            id="img-link"
            href="https://hegedusalexandra.github.io/OMASKLEIDERSCHRANK/"
          >
            <img src={OMAS} alt="oops :( somthing went wrong" />
          </a>
          <div className="desc-container">
            <a href="https://hegedusalexandra.github.io/OMASKLEIDERSCHRANK/">
              Check it out!
            </a>
            <h2 className="description">React</h2>
            <h2 className="description">React swiper</h2>
            <h2 className="description">Sass</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
