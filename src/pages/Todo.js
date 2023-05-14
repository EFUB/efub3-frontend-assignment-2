import TodoTitle from "../components/TodoTitle";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Todo() {
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });
  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <RootContainer className="Todo">
      <Container>
        <TodoTitle />
        <TodoCreate todoList={todoList} setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </Container>
    </RootContainer>
  );
}

const RootContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  padding: 50px;
  margin-top: 70px;
  border: 1px grey solid;
  border-radius: 30px;
`;

export default Todo;
