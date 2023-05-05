import TodoList from "./Components/TodoList";
import React, { useState, useEffect } from "react";
import TodoInsert from "./Components/TodoInsert";
import TodoTemplate from "./Components/TodoTemplate";
import styled from "styled-components";

//시계정보를 가져와서 아침/저녁에따라 배경 바꾸기
const TodoPage = () => {
  const [todos, setTodos] = useState(() => {
    const localtodos = localStorage.getItem("localtodos");
    return localtodos ? JSON.parse(localtodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("localtodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoTemplate>
      <Title>Todo Lists</Title>
      <TodoInsert todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplate>
  );
};
export default TodoPage;

const Title = styled.div`
  font-weight: 800;
  font-size: 30px;
  color: #6c12cc;
  margin: 0 auto;
  padding-left: 430px;
  margin-bottom: 30px;
`;
