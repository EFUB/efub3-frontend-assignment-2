import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Timer from "../components/Timer";

const Time = () => {
    // 현재 시간을 가져오는 state
    const [date, setDate] = useState(() => new Date());

    useEffect(() => {
        // 1초마다 tick() 호출하는 id 변수
        const id = setInterval(() => tick(), 1000)

        return () => {
            clearInterval(id);
        }
    });

    // 현재 시간을 가져와 date에 넣는 함수
    const tick = () => {
        setDate(new Date())
    };

    return (
        <>
            <TimeBox>
                <DateText>{date.toLocaleDateString()}</DateText>
                <TimeText>{date.toLocaleTimeString()}</TimeText>
            </TimeBox>
            <Timer />
        </>
    );
};

const TimeBox = styled.div`
    padding: 10px;
    border: 1px solid darkgray;
`;
const DateText = styled.h1`
    text-align: center;
    margin-bottom: 10px;
`;
const TimeText = styled.h1`
    text-align: center;
    margin-top: 10px;
`;

export default Time;