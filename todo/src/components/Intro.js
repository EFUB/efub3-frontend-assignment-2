import styled from "styled-components";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <Div>
      <h2>오늘의 일정을 자유롭게 작성해보세요.</h2>
      <P>Tip : priority를 설정하면 우선순위를 한눈에 확인할 수 있어요!</P>
      <Link to="/todolist">
        <Btn>바로 시작하기</Btn>
      </Link>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26vh;
  margin-left: 20vw;
`;

const P = styled.p`
  font-size: 15px;
`;

const Btn = styled.button`
  font-size: 17px;
  width: 10rem;
  height: 3rem;
  border-radius: 10px;
  font-weight: bold;
  border: 2px solid black;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #daeed9;
    border: 2px solid #4ca82f;
    color: #4ca82f;
  }
  transition: 0.125s all ease-in;
`;

export default Intro;
