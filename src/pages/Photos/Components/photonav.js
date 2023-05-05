import styled from "styled-components";
import { NavLink } from "react-router-dom";

//photo의 하단 nav바
//해당 주제를 누르면 keyword=주제명 이라는 쿼리스트링을 포함한 url로 이동함
const PhotoNav = () => {
  return (
    <Wrapper>
      <NavLink to={"?keyword=sky"}>sky</NavLink>
      <NavLink to={"?keyword=nature"}>nature</NavLink>
      <NavLink to={"?keyword=flower"}>flowers</NavLink>
      <NavLink to={"?keyword=cat"}>cat</NavLink>
      <NavLink to={"?keyword=dog"}>dog</NavLink>
      <NavLink to={"?keyword=home"}>home</NavLink>
    </Wrapper>
  );
};
export default PhotoNav;

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
