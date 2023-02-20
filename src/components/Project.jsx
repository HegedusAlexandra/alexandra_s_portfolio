import React from "react";
import Menu from "./Menu";
import Scroll from "./Scroll";

import "./components.css";

import OMAS from "./pictures/OMAS.gif";
import CV from "./pictures/CV.gif";
import GAMES from "./pictures/GAMES.gif";
import { useHorizontalScroll } from "./HorizontalScroll";

export default function Projects() {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="project" ref={scrollRef}>
      <Menu img={"Projects"} />
      <Scroll />
      <div className="imgContainer" style={{ whiteSpace: "nowrap" }}>
        <div className="imgBox">
          <img src={GAMES} alt="oops :( somthing went wrong" />
          <a href="https://hegedusalexandra.github.io/small_projects/">
            Check it out!
          </a>
          <h2 className="description">kk</h2>
        </div>
        <div className="imgBox">
          <img src={CV} alt="oops :( somthing went wrong" />
          <a href="https://hegedusalexandra.github.io/CurriculumVITAE/">
            Check it out!
          </a>
          <h2 className="description">hhh</h2>
        </div>
        <div className="imgBox">
          <img src={OMAS} alt="oops :( somthing went wrong" />
          <a href="https://hegedusalexandra.github.io/OMASKLEIDERSCHRANK/">
            Check it out!
          </a>
          <h2 className="description">kk</h2>
        </div>
        <div className="imgBox">
          <img src={CV} alt="oops :( somthing went wrong" />
          <a href="https://hegedusalexandra.github.io/CurriculumVITAE/">
            Check it out!
          </a>
          <h2 className="description">hhh</h2>
        </div>
      </div>
    </div>
  );
}
