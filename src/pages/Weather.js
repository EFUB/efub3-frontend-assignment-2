import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  WiThunderstorm,
  WiRainMix,
  WiRain,
  WiSnowflakeCold,
  WiFog,
  WiDaySunny,
  WiCloudy,
} from "react-icons/wi";

const API_KEY = "9865a2f1d2bcb4dd8c68487c70fd2943";
const ICON_SIZE = "200";

function Weather() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getWeather, error);
    }
  };

  const getWeather = async (event) => {
    const latitude = event.coords.latitude;
    const longitude = event.coords.longitude;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=7&appid=${API_KEY}`
    );
    const json = await response.json();
    setWeather(json);
  };

  const error = () => {
    alert("fail to get the location");
  };

  const getIcons = () => {
    const id = parseInt(weather.current.weather[0].id);
    const group = id === 800 ? 0 : Math.floor(id / 100);
    switch (group) {
      case 2:
        return <WiThunderstorm size={ICON_SIZE} />;
      case 3:
        return <WiRainMix size={ICON_SIZE} />;
      case 5:
        return <WiRain size={ICON_SIZE} />;
      case 6:
        return <WiSnowflakeCold size={ICON_SIZE} />;
      case 7:
        return <WiFog size={ICON_SIZE} />;
      case 0:
        return <WiDaySunny size={ICON_SIZE} />;
      case 8:
        return <WiCloudy size={ICON_SIZE} />;
    }
  };

  console.log(weather);

  return (
    <div>
      <h1>Weather Page</h1>
      {weather ? (
        <WeatherContainer>
          <City>{weather.timezone.split("/")[1]}</City>
          <div style={{ display: "flex" }}>
            <Icon>{getIcons()}</Icon>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Temp>{(weather.current.temp - 273.15).toFixed(0)}°</Temp>
              <Condition>{weather.current.weather[0].main}</Condition>
            </div>
          </div>
        </WeatherContainer>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const City = styled.div`
  font-size: 20px;
`;

const Icon = styled.div`
  margin: -20px 0px -20px -20px;
`;

const Temp = styled.div`
  font-size: 70px;
`;

const Condition = styled.div``;

export default Weather;
