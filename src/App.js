import React, { useState, useEffect } from "react";
import MainPage from "./component/MainPage";
import SwitchDark from "./component/switchDark";
import "./style/global.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.setAttribute("data-dark-mode", isDarkMode ? "true" : "false");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="app-root">
      <div className="main-page">
        <MainPage />
      </div>
      <div className="button-switch-dark">
        <SwitchDark toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  );
}

export default App;
