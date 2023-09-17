import React, { useEffect, useState } from "react";
import DeviceLocation from "../location/DeviceLocation";
import Loader from "../loader/Loader";
import morning from "../../images/morning.svg";
import night from "../../images/night.svg";
import search from "../../images/search.svg";
import temperature from "../../images/temeprature.svg";
import humidity from "../../images/humidity.svg";
import visibility from "../../images/visibility.svg";
import wind from "../../images/wind.svg";
const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [searchData, setSearchData] = useState({});
  const [searchedCity, setSearchedCity] = useState("New Delhi");
  const [error, setError] = useState(null);

  //get access to find location
  useEffect(() => {
    async function getWeatherDataBasedOnLocation() {
      if ("geolocation" in navigator) {
        try {
          const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          if (position || position.coords) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherData(lat, lon);
          } else {
            console.error("Geolocation position mising or uncomplete");
          }
        } catch (error) {
          console.error("Error Getting Location", error);
        }
      } else {
        console.error("Geolocation is not available in your location");
      }
    }
    getWeatherDataBasedOnLocation();
  }, []);

  //display data using api
  async function fetchWeatherData(lat, lon) {
    try {
      const apiKey = "0868314e4798ae2a5fcd370bedf841bb";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  }
  useEffect(() => {
    if (searchedCity !== "") {
      fetchByCityWeatherData(searchedCity);
    }
  }, [searchedCity]);


  const fetchByCityWeatherData = async (city) => {
    try {
      const apiKey = "0868314e4798ae2a5fcd370bedf841bb";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();
      setSearchData(data);
      console.log(data)
      // setSearchedCity("");
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSearch = () => {
    if (city.trim() !== "") {
      setSearchedCity(city);
      setCity("");
    }
  };
  if (!weatherData || !weatherData.name) {
    return <Loader />;
  }
  return (
    <>
      <div className="parent-card-group">
        <DeviceLocation
          city={weatherData.name}
          country={weatherData.sys.country}
          temperature={weatherData.main.temp}
        />
        <div className="card2">
          <div className="day-or-night-sec">
            <img src={morning} alt="morning" className="morning" />
            <img src={night} alt="night" className="night" />
            {searchData.main && !error &&<h2>{searchData.weather[0].main}</h2>}
          </div>
          <div className="searchbar">
            <input
              type="text"
              placeholder="Search by city.."
              className="search-input"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              type="button"
              className="search-btn"
              onClick={handleSearch}
            >
              <img src={search} alt="search" />
            </button>
          </div>
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          {searchData.main && !error &&<h1 className="city-name">{searchData.name}</h1>}
        </div>
      </div>

      {searchData.main && !error && (
        <div className="child-card-group">
          <div className="card">
            <div>
              <div>
                <h4>{searchData.main.temp}°c</h4>
              </div>
              <div>
                <img src={temperature} alt="Temperature" />
                <h2>Temperature</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <h4>{searchData.main.humidity}%</h4>
              </div>
              <div>
                <img src={humidity} alt="humidity" />
                <h2>Humidity</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <h4>{searchData.visibility} mi</h4>
              </div>
              <div>
                <img src={visibility} alt="visibility" />
                <h2>Visibility</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <h4>{searchData.wind.speed} Km/h</h4>
              </div>
              <div>
                <img src={wind} alt="wind" />
                <h2>Wind Speed</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;
