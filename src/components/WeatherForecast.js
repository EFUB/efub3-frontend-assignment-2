import React from "react";
import styled from "styled-components";

function WeatherForecast({ daily, getIcons }) {
  return (
    <Container>
      {daily.map((day, key) => {
        const minTemp = (day.temp.min - 273.15).toFixed(0);
        const maxTemp = (day.temp.max - 273.15).toFixed(0);
        return (
          <Day key={key}>
            <Icon>{getIcons(day.weather[0].id, 55)}</Icon>
            <Condition>{day.weather[0].main}</Condition>
            <Temp>
              <MinTemp>{minTemp}°</MinTemp>
              <Slash>/</Slash>
              <MaxTemp>{maxTemp}°</MaxTemp>
            </Temp>
          </Day>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const Day = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 110px;
`;

const Icon = styled.div`
  margin: -7px -3px;
  flex: 3;
`;

const Condition = styled.div`
  font-size: 17px;
  flex: 1;
`;

const Temp = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  flex: 1;
`;

const MinTemp = styled.div`
  color: dodgerblue;
  font-size: 15px;
  margin-top: 3px;
`;

const Slash = styled.div`
  color: grey;
  font-size: 16px;
`;

const MaxTemp = styled.div`
  color: crimson;
  font-size: 17px;
`;

export default WeatherForecast;
