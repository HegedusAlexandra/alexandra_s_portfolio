import { React, useState, useEffect } from "react";

import Menu from "./Menu";
import Scroll from "./Scroll";
import me from "./pictures/Én.jpg";
import gimiregen from "./pictures/gimiregen.jpg";
import oyster from "./pictures/oyster.png";
import matterhorn from "./pictures/matterhorn.png";
import me2 from "./pictures/Me.jpeg";

export default function About() {
  const [visib, setVisib] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 600) {
      console.log("resized");
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize());
  });

  useEffect(() => {
    const handleScroll = (event) => {
      setVisib(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <div className="about">
      <Menu title={"Biography"} />
      {visib > 300 && <Scroll />}
      <svg height="100vh" width="100%" id="circleLeft">
        <circle
          cx="10%"
          cy="50%"
          r={visib < 2000 ? visib / 2 : 2600 - visib / 1.5}
          fill="#a83b3bd8"
        />
      </svg>
      <p className="year" style={{ color: "#7b7b7b" }}>
        1990
      </p>
      <div className="expCard">
        Born on 12th May 1990,Miskolc in a beautiful saturday.
      </div>
      <img id="me" src={me} alt="me" />
      <p className="year one">1996</p>
      <div className="expCard one">
        I spent my first years in Móra Ferenc primary school.
      </div>
      <p className="year two">2002</p>
      {!isMobile && <img src={gimiregen} id="gimiregen" alt="gimiregen" />}
      <div className="expCard two">
        {" "}
        After that I attended Diősgyőri secondary grammar school where my
        specialized subject was English.
      </div>
      <p className="year three reveal">2008</p>
      <div className="expCard three reveal">
        {" "}
        In 2008 I completed my secondary education obtaining the highest
        possible certificate in English and the ECDL certificate(basic
        information sience and windows office knowledge).
      </div>
      <p className="year four reveal">2010</p>
      <div className="expCard four reveal">
        In 2010 I commenced studies in Industrial Design Engineering .However
        this was interrupted after 18 month due to family circumstances.
      </div>
      <p className="year five reveal">2012</p>
      <div className="expCard five reveal">
        I started my training and become a chef and was accepted in the famous
        traditional hungarian restaurant called Gundel.
      </div>
      <div className="expCard six reveal">
        In 2012 I graduated as a chef and opted to specialise in Patisserie.
      </div>
      <img id="oyster" className="reveal" src={oyster} alt="oyster" />
      <p className="year six reveal">2013</p>
      <div id="zugspitze" className="reveal">
        <p className="year seven reveal">2014</p>
        <div className="expCard seven reveal">
          I worked as a Commis Pastry Chef in many 4* and 5* hotel all around
          Europe.
        </div>
      </div>
      <img
        id="matterhorn"
        className="reveal"
        src={matterhorn}
        alt="matterhorn"
      />
      <div className="expCard eight reveal">
        I had been working in Sweden,Austria,Germany,France,Swiss
      </div>
      <p className="year nine reveal">2017</p>
      <div className="expCard nine reveal">
        In 2017 I accepted a position as a Commercial Manager with Auchan Retail
      </div>
      <div id="corsica" className="reveal">
        <p className="year eleven reveal">2019</p>
      </div>

      <p className="year thirteen reveal">2021</p>
      <p className="year fourteen reveal">2022</p>
      <div className="expCard fourteen reveal">
        After receiving my vaccination I headed to Austria to be able to afford
        myself to study programming.
      </div>
      <img id="me2" src={me2} alt="me" />
      <p className="year fifteen reveal">2023</p>
      <div className="expCard fifteen">
        Here we are ,I have finished in Codecool the frontend developer
        education where I studied about
        JavaScript,CSS,SCSS,HTML,React,Docker,Node.js and than headed to learn
        some PHP and SQL,that was love for the first sight. :) Since I am
        continously craving for new challenges.
      </div>
    </div>
  );
}
