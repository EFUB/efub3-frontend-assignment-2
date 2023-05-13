import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "9e9a9e56610dd1b2de9c553a4992e11a";

//커스텀 훅 useWeather 추가
//위치 정보를 받아와 해당 위치의 날씨 정보를 가져오는 역할을 함
const useWeather = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);

  const getWeatherData = (latitude, longitude) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      )
      .then((res) => {
        const temp = res.data.main.temp;
        const weather = res.data.weather[0].main;
        const icon = res.data.weather[0].icon;
        setWeatherInfo({ temp, weather, icon });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // 사용자의 현재 위치 정보를 가져오기 위해 geolocation API 사용
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        getWeatherData(latitude, longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  }, [getWeatherData]);

  return weatherInfo;
};

const ShowWeather = () => {
  const weatherInfo = useWeather();

  if (!weatherInfo) {
    //날씨 정보 로딩 표시 추가
    return <Loading>Loading</Loading>;
  }

  const { temp, weather, icon } = weatherInfo;

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

const Loading = styled.div`
  font-size: 1.5em;
  color: #6c757d;
  display: flex;
  flex-direction: column;
  juetify-content: center;
  align-items: center;
`;

export default ShowWeather;
