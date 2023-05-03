import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TiWeatherSunny,
  TiWeatherStormy,
  TiWeatherShower,
  TiWeatherDownpour,
  TiWeatherSnow,
  TiWeatherCloudy,
} from "react-icons/ti";

const api = {
  key: "03dd441ed789b0f8c68a11a192ebc4f9",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const city = "Seoul";
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;
  const [weather, setWeather] = useState("");
  useEffect(() => {
    const city = "Seoul";
    const url = `${api.base}weather?q=${city}&appid=${api.key}`;
    axios.get(url).then((responseData) => {
      const data = responseData.data;
      setWeather({
        id: data.weather[0].id,
        temperature: data.main.temp,
        main: data.weather[0].main,
        loading: false,
      });
      console.log(data.id);
    });
  }, [url]);

  //날씨아이콘 보여주는 함수
  const selectIcon = () => {
    let iconId =
      weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
    switch (iconId) {
      case "0":
        return <TiWeatherSunny size="4rem" color="white" />;
      case "2":
        return <TiWeatherStormy size="4rem" color="white" />;
      case "3":
        return <TiWeatherShower size="4rem" color="white" />;
      case "5":
        return <TiWeatherDownpour size="4rem" color="white" />;
      case "6":
        return <TiWeatherSnow size="4rem" color="white" />;
      case ("7", "8"):
        return <TiWeatherCloudy size="4rem" color="white" />;
      default:
        return <TiWeatherSunny size="4rem" color="white" />;
    }
  };
  return (
    <Wrapper>
      <div>
        <div>{selectIcon()}</div>
        <div>{weather.main}</div>
        <Temperature>{(weather.temperature - 273.15).toFixed(2)}</Temperature>
      </div>
    </Wrapper>
  );
};
export default Weather;
const Temperature = styled.div`
  font-size: 24px;
  margin-top: 10px;
  font-weight: 500;
`;
const Wrapper = styled.div`
  background-color: skyblue;
  width: 100px;
  height: 180px;
  position: absolute;
  right: 0;
  top: 500px;
  padding-left: 20px;
`;

// export default Weather;
