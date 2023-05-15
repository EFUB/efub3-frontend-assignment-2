import styled from "styled-components";
import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import SelectIcon from "./SelectIcon";

//WeatherPage : 날씨 정보 알려주는 페이지
//외부 날씨 라이브러리(openweathermap)을 사용해서 날씨 정보 불러옴
//외부데이터를 axios로 불러오는 useFetch라는 커스텀 훅을 사용함.
const WeatherPage = () => {
  const [weather, setWeather] = useState([]);
  const [data, loading, error] = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=03dd441ed789b0f8c68a11a192ebc4f9`
  );
  const city = "Seoul";

  //useFetch를 사용해서 데이터가 들어오면 weather라는 state에 각각 id, temperature,
  //main정보를 객체로 추가해서 해당 정보를 꺼내 쓸 수 있도록 설정
  useEffect(() => {
    if (data) {
      console.log("weather data updated");
      //data.weather가 undefined일 때 에러가 일어나지 않도록, data.weather가 존재할때만
      //코드를 실행하도록 조건을 추가함.
      if (data.weather && data.weather.length > 0) {
        setWeather({
          id: data.weather[0].id,
          temperature: data.main.temp,
          main: data.weather[0].main,
        });
      } else {
        console.log("No weather data available.");
      }
      console.log(data);
    }
    console.log({ ...weather });
  }, [data]);

  return (
    <Wrapper>
      <TextContainer>
        <Text>{city}의 날씨는?</Text>
        <Weather>{weather.main}</Weather>
        <Text>현재의 온도는?</Text>
        <Temperature>{(weather.temperature - 273.15).toFixed(1)}도</Temperature>
      </TextContainer>
      {/*날씨 아이콘을 선택하는 컴포넌트인 selecticon 컴포넌트에 weather정보를 props로 전달함
       */}
      <IconContainer>
        <SelectIcon weather={weather} />
      </IconContainer>
      <div>{loading && <LoadingImg src="/image/loading.png" />}</div>
      <div>{error && "error"}</div>
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
`;

const LoadingImg = styled.img`
  width: 100px;
`;

// const api = {
//   key: "03dd441ed789b0f8c68a11a192ebc4f9",
//   base: "https://api.openweathermap.org/data/2.5/",
// };
