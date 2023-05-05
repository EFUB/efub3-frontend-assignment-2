import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
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
