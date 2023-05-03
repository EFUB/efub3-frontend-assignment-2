import React, { useState, useEffect } from "react";

const API_KEY = "9865a2f1d2bcb4dd8c68487c70fd2943";

const Weather = () => {
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [weather, setWeather] = useState();

  useEffect(() => {
    if (window.navigator.geolocation) {
      // geolocation 지원할 경우 현재 위치 get
      window.navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  const success = (event) => {
    setLatitude(event.coords.latitude); // 위도
    setLongitude(event.coords.longitude); // 경도
  };

  const error = () => {
    console.log("fail to get the location");
  };

  const getWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    );

    const json = await response.json();
    setWeather(json);
  };

  useEffect(() => {
    getWeather();
  }, []);

  console.log(latitude, longitude);
  console.log(weather);

  return (
    <div>
      <h1>Weather Page</h1>
    </div>
  );
};

export default Weather;
