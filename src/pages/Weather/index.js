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

//WeatherPage : 날씨 정보 알려주는 페이지
//외부 날씨 라이브러리(openweathermap)을 사용해서 날씨 정보 불러옴
const WeatherPage = () => {
  const city = "Seoul";
  const url = `${api.base}weather?q=${city}&appid=${api.key}`;
  const [weather, setWeather] = useState("");
  const [loading, setLoading] = useState(true);

  //url이 바뀔때마다 정보를 불러옴

  useEffect(() => {
    const city = "Seoul";
    const url = `${api.base}weather?q=${city}&appid=${api.key}`;
    axios.get(url).then((responseData) => {
      const data = responseData.data;
      setWeather({
        id: data.weather[0].id,
        temperature: data.main.temp,
        main: data.weather[0].main,
      });
      console.log(data.id);
      setLoading(false);
    });
  }, []);

  //날씨아이콘 보여주는 함수
  const selectIcon = () => {
    let iconId =
      weather.id === 800 ? 0 : (parseInt(weather.id) / 100).toFixed(0);
    switch (iconId) {
      case "0":
        return <TiWeatherSunny size="17rem" color="white" />;
      case "2":
        return <TiWeatherStormy size="17rem" color="white" />;
      case "3":
        return <TiWeatherShower size="17rem" color="white" />;
      case "5":
        return <TiWeatherDownpour size="17rem" color="white" />;
      case "6":
        return <TiWeatherSnow size="17rem" color="white" />;
      case ("7", "8"):
        return <TiWeatherCloudy size="17rem" color="white" />;
      default:
        return <TiWeatherSunny size="17rem" color="white" />;
    }
  };
  return loading ? (
    <LoadingImg src="/image/loading.png" />
  ) : (
    <Wrapper>
      <TextContainer>
        <Text>{city}의 날씨는?</Text>
        <Weather>{weather.main}</Weather>
        <Text>현재의 온도는?</Text>
        <Temperature>{(weather.temperature - 273.15).toFixed(1)}도</Temperature>
      </TextContainer>
      <IconContainer>{selectIcon()}</IconContainer>
    </Wrapper>
  );
};
export default WeatherPage;
const Text = styled.div`
  font-size: 40px;
`;
const TextContainer = styled.div`
  padding-top: 50px;
`;
const Temperature = styled.div`
  font-weight: 500;
  color: #6c12cc;
  font-weight: 700;
  font-size: 50px;
`;
const Weather = styled.div`
  font-size: 50px;
  color: #6c12cc;

  font-weight: 700;
`;
const Wrapper = styled.div`
  width:100%:
  height:100%;
  padding-left: 20px;
  display:flex;
  margin-top:150px;
  align-items:center;
  justify-content:center;
`;
const IconContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: skyblue;
  border-radius: 50%;
  text-align: center;
  margin-left: 100px;
`;

const LoadingImg = styled.img`
  width: 100px;
`;
// export default Weather;
