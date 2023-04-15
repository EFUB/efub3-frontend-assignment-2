import styled from "styled-components";
import { ReactComponent as Red } from "../images/red.svg";
import { ReactComponent as Yellow } from "../images/yellow.svg";
import { ReactComponent as Green } from "../images/green.svg";
import { ReactComponent as Menu } from "../images/menu.svg";
import { ReactComponent as Toc } from "../images/toc.svg";
import { ReactComponent as Search } from "../images/search.svg";

function SideBar({ todoList }) {
  return (
    <SideBarBlock>
      <Div>
        <H1>Menu</H1>
        <Menu />
      </Div>
      <SearchBar>
        <Search />
        <Input placeholder="Search"></Input>
      </SearchBar>
      <H2>TASKS</H2>
      <Div>
        <Container>
          <Toc />
          <Today>Today</Today>
        </Container>
        <Span> {todoList.length}</Span>
      </Div>
      <Line />
      <H2>FILTERS</H2>
      <Div>
        <Container>
          <Red />
          <Btn>Priority 1</Btn>
        </Container>
        <Span>{todoList.filter((item) => item.priority === 1).length}</Span>
      </Div>
      <Div>
        <Container>
          <Yellow />
          <Btn>Priority 2</Btn>
        </Container>
        <Span>{todoList.filter((item) => item.priority === 2).length}</Span>
      </Div>
      <Div>
        <Container>
          <Green />
          <Btn>Priority 3</Btn>
        </Container>
        <Span>{todoList.filter((item) => item.priority === 3).length}</Span>
      </Div>
    </SideBarBlock>
  );
}
const Container = styled.div`
  display: flex;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  border: none;
  height: 30px;
  background-color: #f9f9f9;
  width: 100%;
  margin-left: 5px;
  font-weight: bold;
  font-size: 16px;
  outline: none;
`;

const H1 = styled.h1`
  margin: 0;
  font-size: 25px;
  color: black;
`;

const H2 = styled.h2`
  font-size: 15px;
`;

const Btn = styled.button`
  border: none;
  background-color: #f9f9f9;
  font-size: 16px;
  margin-left: 8px;
  font-weight: bold;
  color: #565656;
`;

const Span = styled.span`
  width: 35px;
  height: 25px;
  text-align: center;
  // margin-left: 43%;
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
`;

const Line = styled.span`
  width: 100%;
  height: 1.5px;
  background-color: #e9e9e9;
`;

const Today = styled(Btn)`
  margin-left: 0px;
`;

const SearchBar = styled(Div)`
  height: 30px;
  border: 1.5px solid #e9e9e9;
  border-radius: 10px;
  padding: 4px;
`;

const SideBarBlock = styled.div`
  width: 17rem;
  height: 86vh;
  background-color: #f9f9f9;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #565656;
`;

export default SideBar;
