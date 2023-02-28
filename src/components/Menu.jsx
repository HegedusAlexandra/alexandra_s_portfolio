import "./components.css";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import wave from "./pictures/wave.mp4";

export default function Menu({ title }) {
  const [menuState, setMenuState] = useState(false);
  const [visib, setVisib] = useState(null);

  function handleMenu() {
    !menuState ? setMenuState(true) : setMenuState(false);
  }

  useEffect(() => {
    const handleScroll = (event) => {
      /* console.log('window.scrollY:', window.scrollY); */
      setVisib(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={!menuState ? "bend" : "bendOpen"}>
        {visib < 200 && (
          <div className="greenSquare">
            <p>{title}</p>
          </div>
        )}
        {visib < 200 && <div className="blueSquare"></div>}
        <div className="redSquare">
          {menuState && (
            <div className="linkBox">
              <Link to="/">Home</Link>
              <p>some humble word about my life</p>
              <Link to="/about">About</Link>
              <p>to offer into your precious attention</p>
              <Link to="/project">Project</Link>
              <p>about how you get in contact with me</p>
              <Link to="/contact">Contact</Link>
            </div>
          )}
          <button id="menuButton" onClick={handleMenu}>
            {!menuState ? "MENU" : "X"}
          </button>
        </div>
      </div>
    </div>
  );
}
