import { useState, useEffect } from "react";
import styled from "styled-components";

// 타이머 남은 초 반환하는 함수
const getResult = (timer) => {
    const seconds = Number(timer % 60);
    const minutes = parseInt(timer / 60);
    if (timer > 0) {
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    return "00:00";
}

const Timer = () => {
    const [time, setTime] = useState("");
    const [timer, setTimer] = useState("");

    // TimerForm에서 time 입력받으면 timer에 저장하는 함수
    const setCount = (e) => {
        e.preventDefault();
        if (time) {
            setTimer(time);
        }
        setTime("");
    };

    // InputBox에서 onChange가 호출하는 함수 (입력받은 시간 time에 저장)
    const handleChange = (e) => {
        setTime(e.target.value);
    };

    useEffect(() => {
        // 1초마다 prev를 1씩 감소하는 interval 설정
        const id = setInterval(() => {
            // timer가 0보다 클 때만 -1씩 감소하도록 설정. if문이 없으면 계속 -1씩 감소
            if (timer > 0) {
                setTimer((prev) => prev - 1)
            }
        }, 1000);

        // timer가 0일 때 alert 호출
        if(timer === 0) {
            alert("타이머 종료");
        }

        return () => clearInterval(id);
    }, [timer]);

    return (
        <>
            <TimerBox>
                <TitleText>타이머</TitleText>
                <TimerForm onSubmit={setCount}>
                    <InputBox
                        value={time}
                        placeholder="초를 입력하세요."
                        onChange={handleChange}
                    />
                    <StartButton>시작</StartButton>
                </TimerForm>
                <TimerText>{getResult(timer)}</TimerText>
            </TimerBox>
        </>
    );
};

const TimerBox = styled.div`
    margin-top: 25px;
    margin-bottom: 0;
    padding: 10px;
    border: 1px solid darkgray;
`;
const TitleText = styled.h1`
    text-align: center;
`;
const TimerForm = styled.form`
    display: flex;
    justify-content: center;
    margin: 1rem 0;
`;
const InputBox = styled.input`
    height: 20px;
    width: 200px;
    font-size: 18px;
    outline: none;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    text-align: center;
    ::placeholder {
        text-align: center;
    }
`;
const TimerText = styled.h1`
    text-align: center;
    font-size: 100px;
    margin: 50px 60px 75px;
`;
const StartButton = styled.button`
    outline: none;
    align-items: center;
    justify-content: center;
    border: none;
    text-decoration: none;
    font-size: 18px;
    padding: 0.5rem 2rem;
    border-radius: 2rem;
    margin-left: 0.5rem;
    :hover {
        text-decoration: underline 1px;
    }
`;

export default Timer;