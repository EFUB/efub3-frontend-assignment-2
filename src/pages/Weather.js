import React, { useState, useEffect } from "react";
import styled from "styled-components";
import WeatherForecast from "../components/WeatherForecast";
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
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${API_KEY}`
    );
    const json = await response.json();
    setWeather(json);
  };

  const error = () => {
    alert("fail to get the location");
  };

  const getIcons = (id, size) => {
    const parsedID = parseInt(id);
    const group = id === 800 ? 0 : Math.floor(id / 100);
    switch (group) {
      case 2:
        return <WiThunderstorm size={size} />;
      case 3:
        return <WiRainMix size={size} />;
      case 5:
        return <WiRain size={size} />;
      case 6:
        return <WiSnowflakeCold size={size} />;
      case 7:
        return <WiFog size={size} />;
      case 0:
        return <WiDaySunny size={size} />;
      case 8:
        return <WiCloudy size={size} />;
    }
  };

  console.log(weather);

  return (
    <div>
      {weather ? (
        <WeatherContainer>
          <City>{weather.timezone.split("/")[1]}</City>
          <Current>
            <Icon>{getIcons(weather.current.weather[0].id, 200)}</Icon>
            <Info>
              <Temp>{(weather.current.temp - 273.15).toFixed(1)}°</Temp>
              <Condition>{weather.current.weather[0].main}</Condition>
            </Info>
          </Current>
          <Forecast>
            <WeatherForecast daily={weather.daily} getIcons={getIcons} />
          </Forecast>
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
  height: 90vh;
`;

const City = styled.div`
  flex: 1;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Current = styled.div`
  display: flex;
  flex: 3;
`;

const Icon = styled.div`
  margin: -15px 0px -20px -20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Temp = styled.div`
  font-size: 70px;
`;

const Condition = styled.div`
  font-size: 20px;
  margin-left: 10px;
`;

const Forecast = styled.div`
  flex: 2;
`;

export default Weather;
