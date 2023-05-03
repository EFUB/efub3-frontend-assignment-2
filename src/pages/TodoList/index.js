import TodoList from "./Components/TodoList";
import React, { useState, useEffect } from "react";
import TodoInsert from "./Components/TodoInsert";
import TodoTemplate from "./Components/TodoTemplate";
import styled from "styled-components";
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
      <p className="title">Todo Lists</p>
      <TodoInsert todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoTemplate>
  );
};
export default TodoPage;

const Header = styled.div`
  color: "violet";
`;
