// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import ToggleButton from "./components/toggleButton/ToggleButton";
import Weather from "./components/weather/Weather";

function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  function handleChangeTheme() {
    setIsThemeDark(!isThemeDark);
  }
  const themeColor = isThemeDark ? "dark-theme" : "light-theme";
  return (
    <div className={`weather-app ${themeColor}`}>
      <ToggleButton onClick={handleChangeTheme} />
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}

export default App;
