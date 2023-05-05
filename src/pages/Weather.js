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

// const iconsWi = {
//   Thunderstorm: "WiThunderstorm",
//   Drizzle: "WiRainMix",
//   Rain: "WiRain",
//   Snow: "WiSnowflakeCold",
//   Atmosphere: "WiFog",
//   Clear: "WiDaySunny",
//   Clouds: "WiCloudy",
// };

// const iconsFi = {
//   Thunderstorm: "TiWeatherStormy",
//   Drizzle: "TiWeatherShower",
//   Rain: "TiWeatherDownpour",
//   Snow: "TiWeatherSnow",
//   Atmosphere: "TiWeatherWindyCloudy",
//   Clear: "TiWeatherSunny",
//   Clouds: "TiWeatherCloudy",
// };

function Weather() {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [weather, setWeather] = useState();
  const [id, setId] = useState();

  const success = (event) => {
    setLatitude(event.coords.latitude); // 위도
    setLongitude(event.coords.longitude); // 경도
  };

  const error = () => {
    alert("fail to get the location");
  };

  const getWeather = async () => {
    // geolocation 지원할 경우 현재 위치 get
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&cnt=7&appid=${API_KEY}`
    );
    const json = await response.json();
    setWeather(json);
    setId(parseInt(json.current.weather[0].id));
  };

  useEffect(() => {
    getWeather();
  }, []);

  const getIcons = () => {
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

  console.log("____________________________");
  console.log(latitude, longitude);
  console.log(weather);
  console.log(getIcons());

  return (
    <div>
      <h1>Weather Page</h1>
      {weather ? (
        <WeatherContainer>
          {/* <City>{weather.city.name}</City> */}
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
