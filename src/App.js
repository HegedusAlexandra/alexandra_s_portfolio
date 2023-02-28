import "./App.css";
import { React } from "react";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <div className="menu">
        <div id="menuContainer">
          <h1>Portfolio</h1>
          <h2>Alexandra Hegedüs</h2>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
