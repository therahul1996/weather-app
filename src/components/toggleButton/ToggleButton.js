import React from "react";
import "./toggle-button.css";
import sun from '../../images/sun.svg'
import moon from '../../images/moon.svg'
const ToggleButton = ({onClick}) => {
  return (
    <div className="switch-container">
         <input type="checkbox" id="switch" className="toggle-input" />
         <label htmlFor="switch" onClick={onClick} className="toggle-label">
            <img src={sun} alt="sun" className="fa-sun" />
            <img src={moon} alt="moon" className="fa-moon" />
            <span className="ball"></span>
         </label>
      </div>
  );
};

export default ToggleButton;
