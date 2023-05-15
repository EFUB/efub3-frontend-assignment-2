import { useState, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineClock } from "react-icons/hi";

//Clock : 시계 기능하는 clock함수
//new Date()를 처음 state로 지정함
//useEffect에서 setInterval을 호출하면서 생성된 clockid를 id
//변수에 할당한뒤 뒷정리 함수로 clearInterval에 clockId를 인자로 넣어줌
//시계함수가 중복으로 실행되는 것을 막는 역할
const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const clockId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    //뒷정리 함수
    return () => clearInterval(clockId);
  }, []);
  return (
    <div>
      <Wrapper>
        <HiOutlineClock style={{ color: "white" }} />
        <div>{time.toLocaleTimeString()}</div>
      </Wrapper>
    </div>
  );
};
export default Clock;

const Wrapper = styled.div`
  background-color: #7bd2e8;
  position: absolute;
  right: 0;
  font-size: 20px;
  width: 80px;
  top: 400px;
  padding: 20px;
  border-radius: 10px 0px 0px 10px;
  font-weight: 600;
  div {
    color: white;
  }
`;
