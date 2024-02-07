// App.js
import React from "react";
import Fran from "./Fran.png";
import logo from "./logo.png";
import "./App.css"; // Import the CSS file
import "./Mobile-App.css";
function App() {
  return (
    <div className="App">
      <div className="Top-bar">
        <img className="logo" src={logo}></img>
        <div className="languages">
          <p>PT</p>
          <p>|</p>
          <p>EN</p>
        </div>
      </div>
      <h1>Hi!</h1>
      <p className="intro">
        My name is <strong>Francisco</strong>.
        <br />
        I'm a Portuguese Graphic Designer,
        <br />
        based in London, UK.
      </p>
      <div className="buttons">
        <button className="About-Us">About Us</button>
        <img src={Fran} alt="Fran" className="Profile"></img>
        <button className="Portfolio">Portfolio</button>
      </div>
    </div>
  );
}

export default App;
