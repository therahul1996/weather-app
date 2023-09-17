import React from 'react'
import loader from "../../images/weather.svg";
import "./loader.css"
const Loader = () => {
  return (
    <div className='weather-container'>
    <img
      src={loader}
      className='weather-loader'
      alt="loader"
    />
  </div>
  )
}

export default Loader