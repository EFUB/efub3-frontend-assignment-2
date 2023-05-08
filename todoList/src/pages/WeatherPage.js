import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "9e9a9e56610dd1b2de9c553a4992e11a";

//위치 정보를 받아와서 해당 위치의 날씨 정보를 가져오는 함수
const handleGeo = (position, setWeather) => {
  const latitude = position.coords.latitude; //경도
  const longitude = position.coords.longitude; //위도
  getWeather(latitude, longitude, setWeather);
};

//위치 정보를 가져오는데 실해했을 경우 호출되는 함수
const handleGeoErr = () => {
  alert("error!");
};

// OpenWeatherMap API를 통해 해당 위치의 날씨 정보를 가져오는 함수
const getWeather = (lat, lon, setWeather) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
    .then((res) => {
      const temp = res.data.main.temp;
      const weather = res.data.weather[0].main;
      const icon = res.data.weather[0].icon;
      setWeather({ temp, weather, icon });
    });
};

const ShowWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      //현재 위치 정보를 가져온다
      (position) => handleGeo(position, setWeatherInfo), //위치 정보를 가져오는데 성공한 경우
      handleGeoErr //위치 정보를 가져오는데 실패한 경우
    );
  }, []);

  const { temp, weather, icon } = weatherInfo; //현재 날씨 정보를 할당

  //섭씨기호(℃)의 16진수 값으로 온도 표현
  return (
    <WeatherBlock>
      <div>Today's Weather</div>
      <WeatherContent>{`${temp}\xB0C ${weather}`}</WeatherContent>
      <WeatherIcon src={`https://openweathermap.org/img/w/${icon}.png`} />
    </WeatherBlock>
  );
};

const WeatherBlock = styled.div`
  font-size: 1.7em;
  color: #6c757d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 1em;
`;

const WeatherContent = styled.div`
  font-size: 2em;
  color: #bbe6e4;
  font-weight: bold;
  margin-top: 1em;
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 1em;
`;

export default ShowWeather;
