import { NavLink } from "react-router-dom";
import styled from "styled-components";

//video페이지에 있는 공통적인 nav바 생성
//navLink를 사용해서 해당 topic에 맞는 url로 연결
//App.js에서 해당 url에 맞는 라우팅 설정
const VideoNav = () => {
  return (
    <Wrapper>
      <NavLink to={"/video/hot"}>Hot</NavLink>
      <NavLink to={"/video/music"}>Music</NavLink>
      <NavLink to={"/video/fun"}>Fun</NavLink>
    </Wrapper>
  );
};
export default VideoNav;

const Wrapper = styled.div`
  width: 700px;
  height: 100px;
  display: flex;
  font-weight: 800;
  justify-content: space-around;
  color: #6c12cc;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 25px;
`;
