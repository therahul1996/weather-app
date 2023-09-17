import React from "react";
import Clock from "react-live-clock";
const dateTimeFormat = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "july",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday"
    ];
  let day = days[d.getDay()]
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();
  return `${day}, ${date} ${month} ${year}`;
  }

const DeviceLocation = (props) => {
  return (
    <div className="card1">
      <h1>{props.city}</h1>
      <h4>{props.country}</h4>
      <div className="time-and-temp">
        <div>
          <h3>
            {" "}
            <Clock format="HH:mm:ss" interval={1000} ticking={true} />
          </h3>
          <p>{dateTimeFormat(new Date())}</p>
        </div>
        <div>
          <h2>{props.temperature}°C</h2>
        </div>
      </div>
    </div>
  );
};

export default DeviceLocation;
