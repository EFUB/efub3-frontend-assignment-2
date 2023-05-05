import React from "react";
import styled from "styled-components";

const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const DAY_OF_THE_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

function WeatherForecast({ daily, getIcons }) {
  return (
    <SlideContainer>
      {daily.map((day, key) => {
        const date = new window.Date(day.dt - KR_TIME_DIFF);
        const dayOfTheWeek = DAY_OF_THE_WEEK[date.getDay()];
        return (
          <Day key={key}>
            <Date>{dayOfTheWeek}</Date>
            <Icon>{getIcons(day.weather[0].id, 50)}</Icon>
            <Temp>{(day.temp.day - 273.15).toFixed(0)}°</Temp>
          </Day>
        );
      })}
    </SlideContainer>
  );
}

const SlideContainer = styled.div`
  display: flex;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 130px;
  background: beige;
`;

const Date = styled.div`
  font-size: 20px;
`;

const Icon = styled.div`
  margin: -7px -3px;
`;

const Temp = styled.div`
  font-size: 20px;
`;

export default WeatherForecast;
