import styled from "styled-components";
import { NavLink } from "react-router-dom";
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
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 50px;
  font-size: 25px;
  font-weight: 500;
`;
