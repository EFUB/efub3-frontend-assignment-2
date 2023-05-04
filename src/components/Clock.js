import { useState, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineClock } from "react-icons/hi";

const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
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
  background-color: skyblue;
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
