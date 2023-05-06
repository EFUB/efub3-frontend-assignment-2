import styled from "styled-components";
import { ReactComponent as Red } from "../images/red.svg";
import { ReactComponent as Yellow } from "../images/yellow.svg";
import { ReactComponent as Green } from "../images/green.svg";
import { ReactComponent as MenuIcon } from "../images/menu.svg";
import { ReactComponent as ListIcon } from "../images/toc.svg";
import { ReactComponent as Search } from "../images/search.svg";
import { ReactComponent as BoardIcon } from "../images/board.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar({ todoList }) {
  const LinkStyle = {
    textDecoration: "none",
    height: "45px",
    marginBottom: "10px",
    color: "#565656",
  };

  return (
    <SideBarBlock>
      <Div>
        <H1>Menu</H1>
        <MenuIcon />
      </Div>
      <SearchBar>
        <Search />
        <Input placeholder="Search"></Input>
      </SearchBar>
      <H2>TASKS</H2>
      <Link to="/todolist" style={LinkStyle}>
        <DivWithHover isActive={1}>
          <Container>
            <ListIcon />
            <Todo>Todo List</Todo>
          </Container>
          <Span> {todoList.length}</Span>
        </DivWithHover>
      </Link>
      <Link to="/todoboard" style={LinkStyle}>
        <DivWithHover isActive={1}>
          <Container>
            <BoardIcon />
            <Todo>Todo Board</Todo>
          </Container>
          <Span> {todoList.length}</Span>
        </DivWithHover>
      </Link>
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
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const DivWithHover = styled(Div)`
  height: 45px;
  padding-right: 7px;
  padding-left: 7px;
  &:hover {
    background-color: #e8e8e8;
  }
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
  border-radius: 5px;
  background-color: white;
  font-weight: bold;
`;

const Line = styled.span`
  width: 100%;
  height: 1.5px;
  margin-top: 15px;
  background-color: #e9e9e9;
`;

const Todo = styled.span`
  margin-left: 8px;
  cursor: pointer;
  font-weight: bold;
  color: #565656;
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

export default NavBar;
