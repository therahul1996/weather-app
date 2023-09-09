// import logo from './logo.svg';
import "./App.css";
import { useState } from "react";
import ToggleButton from "./components/toggleButton/ToggleButton";

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
        <div className="parent-card-group">
          <div className="card1">
            <h1>Patna</h1>
            <h4>India</h4>
            <div className="time-and-temp">
              <div>
                <h3>11:16:13</h3>
                <p>Saturday, 9 September 2023</p>
              </div>
              <div>
                <h2>31°C</h2>
              </div>
            </div>
          </div>
          <div className="card2">
            <div className="day-or-night-sec">
              <svg
                fill="#000000"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>sun</title>{" "}
                  <path d="M8.031 16.5c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5-3.357-7.5-7.5-7.5c-4.142 0-7.5 3.357-7.5 7.5zM15.531 3.75l-2.109 4.219h4.219l-2.11-4.219zM24.543 7.457l-4.475 1.491 2.982 2.983 1.493-4.474zM10.994 8.948l-4.474-1.491 1.491 4.475 2.983-2.984zM6.969 14.359l-4.219 2.11 4.219 2.109v-4.219zM24.031 18.641l4.219-2.109-4.219-2.109v4.218zM15.531 29.25l2.109-4.219h-4.219l2.11 4.219zM20.068 24.052l4.475 1.491-1.492-4.475-2.983 2.984zM6.52 25.543l4.475-1.491-2.983-2.983-1.492 4.474z"></path>{" "}
                </g>
              </svg>
              <h3>Mist</h3>
            </div>
            <div className="searchbar">
              <input
                type="text"
                placeholder="Search by city.."
                className="search-input"
              />
              <button type="button" className="search-btn">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(90)"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
            <h1 className="city-name">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.8539 14.5104C11.1243 14.8242 11.0891 15.2978 10.7753 15.5682L8.01947 17.9426H10.2857C10.5992 17.9426 10.8797 18.1376 10.9888 18.4315C11.0979 18.7254 11.0128 19.0562 10.7752 19.2608L6.48953 22.9531C6.17572 23.2235 5.70215 23.1883 5.43179 22.8744C5.16143 22.5606 5.19666 22.0871 5.51047 21.8167L8.26612 19.4426H6C5.6865 19.4426 5.40607 19.2476 5.29692 18.9537C5.18777 18.6598 5.27294 18.3291 5.51044 18.1244L9.79616 14.4318C10.11 14.1614 10.5835 14.1966 10.8539 14.5104ZM15.5303 14.9697C15.8232 15.2626 15.8232 15.7374 15.5303 16.0303L13.5303 18.0303C13.2374 18.3232 12.7626 18.3232 12.4697 18.0303C12.1768 17.7374 12.1768 17.2626 12.4697 16.9697L14.4697 14.9697C14.7626 14.6768 15.2374 14.6768 15.5303 14.9697ZM17.5303 18.4697C17.8232 18.7626 17.8232 19.2374 17.5303 19.5303L15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303C14.1768 21.2374 14.1768 20.7626 14.4697 20.4697L16.4697 18.4697C16.7626 18.1768 17.2374 18.1768 17.5303 18.4697ZM13.5303 19.4697C13.8232 19.7626 13.8232 20.2374 13.5303 20.5303L11.5303 22.5303C11.2374 22.8232 10.7626 22.8232 10.4697 22.5303C10.1768 22.2374 10.1768 21.7626 10.4697 21.4697L12.4697 19.4697C12.7626 19.1768 13.2374 19.1768 13.5303 19.4697Z"
                    fill="#1C274C"
                  ></path>{" "}
                  <path
                    d="M19.1238 18.2553C19.0157 17.9463 18.8381 17.6561 18.5911 17.409C18.1184 16.9363 17.4876 16.7179 16.8689 16.7538C17.4572 15.8791 17.3646 14.6825 16.5911 13.909C15.7124 13.0304 14.2878 13.0304 13.4091 13.909L12.5263 14.7918C12.4849 14.3418 12.3079 13.8999 11.9904 13.5314C11.1793 12.59 9.75856 12.4844 8.81715 13.2955L4.53144 16.9881C4.15224 17.3148 3.90249 17.7487 3.80116 18.2161C2.71094 17.4482 2 16.1885 2 14.7647C2 12.4256 3.91878 10.5294 6.28571 10.5294C6.56983 10.5294 6.8475 10.5567 7.11616 10.6089C6.88706 9.9978 6.7619 9.33687 6.7619 8.64706C6.7619 5.52827 9.32028 3 12.4762 3C15.4159 3 17.8371 5.19371 18.1551 8.01498C20.393 8.78024 22 10.8811 22 13.3529C22 15.4509 20.8423 17.2816 19.1238 18.2553Z"
                    fill="#1C274C"
                  ></path>{" "}
                </g>
              </svg>
              Bagodar
            </h1>
          </div>
        </div>
        <div className="child-card-group">
          <div className="card">
            <div>
              <div>
                <h4>24°c (Clouds)</h4>
              </div>
              <div>
                <svg
                  fill="#000000"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>temperature-three-quarters</title>{" "}
                    <path d="M21.25 6.008c0-6.904-10.5-6.904-10.5 0v13.048c-1.238 1.298-2.001 3.061-2.001 5.001 0 4.004 3.246 7.25 7.25 7.25s7.25-3.246 7.25-7.25c0-1.94-0.762-3.702-2.003-5.003l0.003 0.003zM16 28.75c-2.623 0-4.75-2.127-4.75-4.75 0-1.405 0.61-2.667 1.58-3.537l0.004-0.004c0.009-0.008 0.013-0.020 0.022-0.029 0.059-0.063 0.112-0.133 0.157-0.208l0.003-0.006c0.043-0.053 0.084-0.113 0.119-0.175l0.003-0.006c0.020-0.055 0.037-0.122 0.049-0.19l0.001-0.007c0.027-0.081 0.047-0.175 0.056-0.272l0-0.005 0.007-0.033v-13.52c-0.001-0.031-0.002-0.068-0.002-0.105 0-1.52 1.232-2.752 2.752-2.752s2.752 1.232 2.752 2.752c0 0.037-0.001 0.074-0.002 0.11l0-0.005v13.52c0 0.012 0.007 0.023 0.007 0.035 0.009 0.098 0.028 0.188 0.056 0.274l-0.002-0.009c0.013 0.079 0.031 0.149 0.055 0.217l-0.003-0.009c0.038 0.068 0.079 0.127 0.123 0.182l-0.002-0.002c0.048 0.081 0.101 0.151 0.16 0.215l-0.001-0.001c0.009 0.009 0.012 0.021 0.022 0.029 0.974 0.874 1.584 2.136 1.584 3.541 0 2.623-2.127 4.75-4.75 4.75v0zM17.25 21.001v-11.157c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 11.157c-1.184 0.503-2 1.656-2 3 0 1.795 1.455 3.25 3.25 3.25s3.25-1.455 3.25-3.25c0-1.344-0.816-2.497-1.979-2.992l-0.021-0.008zM26.5 1.75c-2.071 0-3.75 1.679-3.75 3.75s1.679 3.75 3.75 3.75c2.071 0 3.75-1.679 3.75-3.75v0c-0.002-2.070-1.68-3.748-3.75-3.75h-0zM26.5 6.75c-0.69 0-1.25-0.56-1.25-1.25s0.56-1.25 1.25-1.25c0.69 0 1.25 0.56 1.25 1.25v0c-0.001 0.69-0.56 1.249-1.25 1.25h-0z"></path>{" "}
                  </g>
                </svg>
                <h2>Temperature</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <h4>86%</h4>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16C10 11.6863 16 2 16 2C16 2 22 11.6863 22 16Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                    <path
                      d="M8 9C8 10.6569 6.65685 12 5 12C3.34315 12 2 10.6569 2 9C2 6.84315 5 2 5 2C5 2 8 6.84315 8 9Z"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                <h2>Humidity</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <h4>10000 mi</h4>
              </div>
              <div>
                <svg
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                    <g>
                      {" "}
                      <path d="M18.3 9.5C15 4.9 8.5 3.8 3.9 7.2c-1.2.9-2.2 2.1-3 3.4.2.4.5.8.8 1.2 3.3 4.6 9.6 5.6 14.2 2.4.9-.7 1.7-1.4 2.4-2.4.3-.4.5-.8.8-1.2-.3-.4-.5-.8-.8-1.1zm-8.2-2.3c.5-.5 1.3-.5 1.8 0s.5 1.3 0 1.8-1.3.5-1.8 0-.5-1.3 0-1.8zm-.1 7.7c-3.1 0-6-1.6-7.7-4.2C3.5 9 5.1 7.8 7 7.2c-.7.8-1 1.7-1 2.7 0 2.2 1.7 4.1 4 4.1 2.2 0 4.1-1.7 4.1-4v-.1c0-1-.4-2-1.1-2.7 1.9.6 3.5 1.8 4.7 3.5-1.7 2.6-4.6 4.2-7.7 4.2z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <h2>Visibility</h2>
              </div>
            </div>
          </div>
          <div className="card">
            <div>
              <div>
                <h4>5 Km/h</h4>
              </div>
              <div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.25 5.5C6.25 3.70508 7.70507 2.25 9.5 2.25C11.2949 2.25 12.75 3.70507 12.75 5.5C12.75 7.29493 11.2949 8.75 9.5 8.75H3C2.58579 8.75 2.25 8.41421 2.25 8C2.25 7.58579 2.58579 7.25 3 7.25H9.5C10.4665 7.25 11.25 6.4665 11.25 5.5C11.25 4.5335 10.4665 3.75 9.5 3.75C8.5335 3.75 7.75 4.5335 7.75 5.5V5.85714C7.75 6.27136 7.41421 6.60714 7 6.60714C6.58579 6.60714 6.25 6.27136 6.25 5.85714V5.5ZM14.25 7.5C14.25 5.15279 16.1528 3.25 18.5 3.25C20.8472 3.25 22.75 5.15279 22.75 7.5C22.75 9.84721 20.8472 11.75 18.5 11.75H2C1.58579 11.75 1.25 11.4142 1.25 11C1.25 10.5858 1.58579 10.25 2 10.25H18.5C20.0188 10.25 21.25 9.01878 21.25 7.5C21.25 5.98122 20.0188 4.75 18.5 4.75C16.9812 4.75 15.75 5.98122 15.75 7.5V8C15.75 8.41421 15.4142 8.75 15 8.75C14.5858 8.75 14.25 8.41421 14.25 8V7.5ZM3.25 14C3.25 13.5858 3.58579 13.25 4 13.25H18.5C20.8472 13.25 22.75 15.1528 22.75 17.5C22.75 19.8472 20.8472 21.75 18.5 21.75C16.1528 21.75 14.25 19.8472 14.25 17.5V17C14.25 16.5858 14.5858 16.25 15 16.25C15.4142 16.25 15.75 16.5858 15.75 17V17.5C15.75 19.0188 16.9812 20.25 18.5 20.25C20.0188 20.25 21.25 19.0188 21.25 17.5C21.25 15.9812 20.0188 14.75 18.5 14.75H4C3.58579 14.75 3.25 14.4142 3.25 14Z"
                      fill="#1C274C"
                    ></path>{" "}
                  </g>
                </svg>
                <h2>Wind Speed</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <button className='btn' onClick={handleChangeTheme}>Button</button> */}
    </div>
  );
}

export default App;
