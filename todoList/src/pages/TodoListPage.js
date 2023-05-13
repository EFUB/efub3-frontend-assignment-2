import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "../components/TodoTemplate";
import TodoHead from "../components/TodoHead";
import TodoList from "../components/TodoList";
import TodoCreate from "../components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body{
    background:#bbe6e4;
  }
`;

const ShowTodoList = () => {
  const [todoList, setTodoList] = useState(() => {
    const localTodoList = localStorage.getItem("localTodoList");
    return localTodoList ? JSON.parse(localTodoList) : [];
  });

  //localStorage에 todo 목록을 저장해서 페이지를 새로고침해도 todo 목록이 사라지지 않도록
  useEffect(() => {
    localStorage.setItem("localTodoList", JSON.stringify(todoList));
  }, [todoList]);

  //리렌더링 되는 컴포넌트들을 확인하기 위한 버튼
  const [num, setNum] = useState(0);
  const changeNum = () => {
    setNum(num + 1);
  };

  const TestButton = styled.button`
    background-color: #bbe6e4;
    height: 2em;
    border: none;
    color: #6c757d;
  `;

  //NavBar를 제외한 컴포넌트들만 리턴
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TestButton onClick={changeNum}>Test Button</TestButton>
        <TodoHead todoLength={todoList.length} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
        <TodoCreate todoList={todoList} setTodoList={setTodoList} />
      </TodoTemplate>
    </>
  );
};

export default React.memo(ShowTodoList);
