import React from "react";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body{
    background:#bbe6e4;
  }
`;

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });

  //localStorage에 todo 목록을 저장해서 페이지를 새로고침해도 todo 목록이 사라지지 않도록
  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todoLength={todoList.length} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <TodoCreate todoList={todoList} setTodoList={setTodoList} />
      </TodoTemplate>
    </>
  );
}

export default App;
