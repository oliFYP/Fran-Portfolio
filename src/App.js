import React, { useState } from "react";
import Switch from "react-switch";
import Fran from "./Fran.png";
import logo from "./logo.png";
import "./App.css";
import "./Mobile-App.css";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState("EN");
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
    setCurrentLanguage((prevLanguage) => (prevLanguage === "EN" ? "PT" : "EN"));
  };

  return (
    <div className="App">
      <div className="section-1">
        <div className="Top-bar">
          <img className="logo" src={logo} alt="Logo" />
          <div className="languages">
            <p className={`pt ${currentLanguage === "PT" ? "active" : ""}`}>
              PT
            </p>
            <Switch
              className="switch-language"
              onChange={handleChange}
              checked={checked}
              uncheckedIcon={null}
              checkedIcon={null}
              onColor="#000080"
              offColor="#006847"
            />

            <p className={`en ${currentLanguage === "EN" ? "active" : ""}`}>
              EN
            </p>
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
          <img src={Fran} alt="Fran" className="Profile" />
          <button className="Portfolio">Portfolio</button>
        </div>
      </div>
      <div className="section-2"></div>
    </div>
  );
}

export default App;
