import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../images/logo.svg";

function Head() {
  return (
    <Header>
      <Logo />
      <H1>Todo List</H1>
    </Header>
  );
}

const Header = styled.nav`
  width: 100vw;
  height: 45px;
  background-color: green;
  display: flex;
  align-items: center;
`;

const Logo = styled(LogoIcon)`
  width: 35px;
  height: 35px;
  margin-left: 20px;
`;

const H1 = styled.h1`
  color: white;
  font-size: 20px;
`;

export default Head;
