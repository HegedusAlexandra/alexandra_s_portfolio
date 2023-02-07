import React from "react";
import Menu from "./Menu";
import Scroll from "./Scroll";

export default function Contact() {
  return (
    <div className="contact">
      <Menu title={"Contact"} />
      <Scroll />
      <div id="menuContainer">
        <p>telephone</p>
        <h2>06 20 237 17 98</h2>
        <p>e-mail</p>
        <h2>he.xandra.code@gmail.com</h2>
        <p>github</p>
        <a href="https://github.com/HegedusAlexandra">
          https://github.com/HegedusAlexandra
        </a>
      </div>
    </div>
  );
}
