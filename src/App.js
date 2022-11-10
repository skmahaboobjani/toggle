import "./App.css";
import Toggle from "./Components/Toggle";
import React, { useState } from "react";
function App() {
  const btext = "Dark Mode";
  const [buttonText, setButtonText] = useState(btext);
  const [style, setStyle] = useState("LightTheme");

  const changeStyle = (Toggling) => {
    setStyle(Toggling);
  };

  function toggleButton() {
    if (buttonText ==="Light Mode") {
      setButtonText("Dark Mode");
      changeStyle("LightTheme");
    } else {
      setButtonText("Light Mode");
      changeStyle("DarkTheme");
    }
  }

  return (
    <div className={style}>
      <header className="App-header">
        <h2 style={{color:"red"}}>Overreacted</h2>
        <button onClick={toggleButton}>{buttonText}</button>
      </header>

      <Toggle
        body_title="The WET Codbase"
        postDate="Sundy 4th,2020 11 min read"
        thoughts_para="Come waste your time with me"
      />
      <Toggle
        body_title="Goodby,Clean Code"
        postDate="Friday 22nd 2019, 5 min read"
        thoughts_para="Let  clean code guide  you, then let itt go"
      />
      <Toggle
        body_title="My Decade In Review"
        postDate="Saturday 11th 2018, 5 min read"
        thoughts_para="A personal reflection"
      />
      <Toggle
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th Mar  2018, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
      <Toggle
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th Mar  2018, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
      <Toggle
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th Mar  2018, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
      <Toggle
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th Mar  2018, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
      <Toggle
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th Mar  2018, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
      <Toggle
        body_title="What Are  The React Team Principles"
        postDate="Thurstday 4th Mar  2018, 5 min read"
        thoughts_para="A Life Is A Journey"
      />
    </div>
  );
}

export default App;