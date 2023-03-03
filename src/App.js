import "./App.css";
import { React } from "react";
import Menu from "./components/Menu";
import color from "./components/pictures/Én.jpg";

function App() {
  return (
    <div>
      <div className="menu">
        <div id="menuContainer">
          <h1>Portfolio</h1>
          <h2>Alexandra Hegedüs</h2>
          <img id="colorMe" title="me" alt="me" src={color}></img>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
