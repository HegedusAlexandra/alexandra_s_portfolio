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
      let elementVisible = 10;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  function downloadDOCX() {
    // using Java Script method to get PDF file
    fetch("Hegedus.A.CV.docx").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Hegedus.A.CV.docx";
        alink.click();
      });
    });
  }

  return (
    <div className="about">
      <Menu title={"CV"} />
      {visib > 300 && <Scroll />}
      <svg height="100vh" width="100%" id="circleLeft">
        <circle
          id="circle"
          cx="10%"
          cy="50%"
          r={visib < 2000 ? visib / 2 : 2600 - visib / 1.5}
          fill="#a83b3bd8"
        />
      </svg>
      <div className="year">1990</div>
      <div className="expCard">
        Born on 12th May 1990,Miskolc in a beautiful saturday.
      </div>
      <img id="me" src={me} alt="me" />
      <div className="year one">1996</div>
      <div className="expCard one">
        I spent my first years in Móra Ferenc primary school.
      </div>
      <div className="year two">2002</div>
      {!isMobile && <img src={gimiregen} id="gimiregen" alt="gimiregen" />}
      <div className="expCard two">
        {" "}
        After that I attended Diősgyőri secondary grammar school where my
        specialized subject was English.I did a high school diploma in IT in
        english at age 16.
      </div>
      <div className="year three reveal">2008</div>
      <div className="expCard three reveal">
        {" "}
        In 2008 I completed my secondary education obtaining the highest
        possible certificate in English.
      </div>
      <div className="year four reveal">2010</div>
      <div className="expCard four reveal">
        In 2010 I commenced studies in Industrial Design Engineering. However
        this was interrupted after 18 month due to family circumstances.
      </div>
      <div className="year five reveal">2012</div>
      <div className="expCard five reveal">
        I started my training and become a chef.In 2012 I graduated as a chef
        and opted to specialise in Patisserie.
      </div>
      <img id="oyster" className="reveal" src={oyster} alt="oyster" />
      <div id="zugspitze" className="reveal">
        <div className="year seven reveal">2014</div>
        <div className="expCard seven reveal">
          I worked as a Pastry Chef in many 4* and 5* hotel all around Europe.
        </div>
      </div>
      <img
        id="matterhorn"
        className="reveal"
        src={matterhorn}
        alt="matterhorn"
      />
      <div className="year eight reveal">2021</div>
      <div className="expCard eight reveal">
        I had been working in Sweden,Austria,Germany,France,Swiss
      </div>

      <div className="year fourteen reveal">2022</div>

      <img id="me2" src={me2} alt="me" />

      <div className="expCard fifteen reveal">
        I finished my studies in Codecool,where I have learnt
        JavaScript,CSS,SCSS,HTML,React,Docker,Node.js.
        <br /> Than I was learning PHP and SQL from Ruander.
        <br /> Currently I am working on developing my knowledge in these
        fields.
      </div>
      <button id="downloadCV" onClick={downloadDOCX}>
        download CV
      </button>
    </div>
  );
}
